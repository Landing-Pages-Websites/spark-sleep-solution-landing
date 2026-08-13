"use client";

import { useRef, useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import {
  CTA,
  PHONE,
  PHONE_HREF,
  IS_ADULT_OPTIONS,
  INSURANCE_TYPE_OPTIONS,
  REASON_OPTIONS,
  QUALIFYING,
} from "@/lib/content";
import { Icon } from "@/components/icons";

// Fail-closed submit error. Uses the authorized PHONE constant as plain text
// (no new phone link). No em/en dash. Keep it calm and actionable.
const SUBMIT_ERROR = `We could not send your request. Please try again, or call us at ${PHONE}.`;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    MegaTag?: {
      trackEvent?: (event: string, payload?: Record<string, unknown>) => void;
    };
  }
}

// ─── Validation: inline per-field, no native tooltips ───

// RFC-5322-lite. The lead API server-validates the rest.
const EMAIL_RE = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
// NANP: area code & exchange each start 2-9 and may not be an N11.
const NANP_RE = /^[2-9](?!11)\d{2}[2-9](?!11)\d{2}\d{4}$/;

type FieldKey =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "isAdult"
  | "insuranceType"
  | "reasonForVisit";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isAdult: string;
  insuranceType: string;
  reasonForVisit: string;
}

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  isAdult: "",
  insuranceType: "",
  reasonForVisit: "",
};

type FieldErrors = Partial<Record<FieldKey, string>>;

// One field set for both variants: hero and bottom forms ask the same seven
// questions and are scored by the same qualification logic.
const FIELDS: FieldKey[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "isAdult",
  "insuranceType",
  "reasonForVisit",
];

function validateField(key: FieldKey, value: string): string | undefined {
  switch (key) {
    case "firstName":
      return value.trim() ? undefined : "First name is required.";
    case "lastName":
      return value.trim() ? undefined : "Last name is required.";
    case "email": {
      const v = value.trim();
      if (!v) return "Email address is required.";
      if (!EMAIL_RE.test(v)) return "Please enter a valid email address.";
      return undefined;
    }
    case "phone": {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "Phone number is required.";
      if (digits.length !== 10) return "Please enter a valid 10-digit phone number.";
      if (!NANP_RE.test(digits)) return "Please enter a valid US phone number.";
      return undefined;
    }
    case "isAdult":
      return value ? undefined : "Please choose an option.";
    case "insuranceType":
      return value ? undefined : "Please select your insurance type.";
    case "reasonForVisit":
      return value ? undefined : "Please select a reason for your visit.";
  }
}

function validateAll(data: FormState, fields: FieldKey[]): FieldErrors {
  const errors: FieldErrors = {};
  fields.forEach((k) => {
    const err = validateField(k, data[k]);
    if (err) errors[k] = err;
  });
  return errors;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (!digits) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// Qualification drives the ad conversion event only, NEVER the UX.
function isQualified(data: FormState): boolean {
  return (
    QUALIFYING.isAdult.includes(data.isAdult) &&
    QUALIFYING.insuranceType.includes(data.insuranceType) &&
    QUALIFYING.reasonForVisit.includes(data.reasonForVisit)
  );
}

interface FormCardProps {
  variant?: "hero" | "full";
  idPrefix?: string;
  onDark?: boolean;
  eyebrow?: string;
  heading?: string;
}

export function FormCard({
  variant = "full",
  idPrefix = "form",
  onDark = false,
  eyebrow,
  heading,
}: FormCardProps): React.ReactElement {
  const { submit } = useMegaLeadForm();

  const [data, setData] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Synchronous re-entrancy guard: blocks duplicate fires from rapid clicks
  // before React re-renders with the disabled state.
  const inFlightRef = useRef(false);
  const fieldRefs = useRef<Partial<Record<FieldKey, HTMLElement | null>>>({});

  const update = (k: FieldKey, v: string): void => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((prev) => {
      if (!prev[k]) return prev;
      const err = validateField(k, v);
      if (err) return prev;
      const next = { ...prev };
      delete next[k];
      return next;
    });
  };

  const markTouched = (k: FieldKey, currentValue: string): void => {
    setTouched((t) => ({ ...t, [k]: true }));
    const err = validateField(k, currentValue);
    setErrors((prev) => {
      const next = { ...prev };
      if (err) next[k] = err;
      else delete next[k];
      return next;
    });
  };

  // Mega optimizer event FIRST, then the GTM dataLayer signal. Both fire for
  // ALL submits; the qualified_lead signal fires ONLY when all three qualify.
  const fireTracking = (qualified: boolean): void => {
    if (typeof window === "undefined") return;
    const route = window.location.pathname;
    window.MegaTag?.trackEvent?.("form_submit", { form_route: route, qualified });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "form_submit", form_route: route, qualified });
    if (qualified) {
      window.dataLayer.push({ event: "qualified_lead", form_route: route });
    }
  };

  // Validate FIRST, then submit. Button is type="button" so the optimizer's
  // capture-phase listener never fires on empty/invalid clicks.
  const handleValidateAndSubmit = async (): Promise<void> => {
    if (inFlightRef.current || submitting || submitted) return;
    const allErrors = validateAll(data, FIELDS);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setTouched(Object.fromEntries(FIELDS.map((k) => [k, true])));
      const firstBad = FIELDS.find((k) => allErrors[k]);
      if (firstBad) fieldRefs.current[firstBad]?.focus();
      return;
    }
    inFlightRef.current = true;
    setSubmitting(true);
    setSubmitError(null);
    const qualified = isQualified(data);
    try {
      const res = await submit({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        phone: data.phone.replace(/\D/g, ""),
        isAdult: data.isAdult,
        insuranceType: data.insuranceType,
        reasonForVisit: data.reasonForVisit,
        qualified,
        formVariant: variant,
        route_slug: window.location.pathname,
      });
      // Fail closed: only a server-confirmed lead earns tracking + success.
      if (res?.ok !== true) {
        throw new Error("Submission was not confirmed by the server.");
      }
      fireTracking(qualified);
      setSubmitted(true);
    } catch (err) {
      // Fail closed: the lead was NOT delivered. Do not fire tracking, do not
      // show success. Surface a retryable error and preserve the typed values.
      const message = err instanceof Error ? err.message : "Unknown submission error";
      console.error("Form submission error:", message);
      setSubmitError(SUBMIT_ERROR);
    } finally {
      inFlightRef.current = false;
      setSubmitting(false);
    }
  };

  const cardBase = onDark
    ? "bg-white shadow-formcard"
    : "bg-white border border-[var(--color-border)] shadow-card";
  const pad = variant === "hero" ? "p-6 md:p-7" : "p-6 md:p-8";

  if (submitted) {
    return (
      <div className={`${cardBase} rounded-[20px] ${pad}`}>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
            <Icon
              name="check"
              className="h-7 w-7 text-[var(--color-primary)]"
              strokeWidth={2.4}
            />
          </div>
          <h3 className="font-display text-2xl text-[var(--color-text)]">
            Thank you. Your request is in.
          </h3>
          <p className="text-[var(--color-muted)] leading-relaxed">
            A member of the Spark Sleep Solutions team will reach out to schedule your
            appointment and verify your insurance benefits before your visit.
          </p>
          <p className="text-[15px] text-[var(--color-muted)]">
            Prefer to talk now? Call{" "}
            <a
              href={PHONE_HREF}
              className="font-semibold text-[var(--color-link)] whitespace-nowrap hover:underline"
            >
              {PHONE}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  const showErr = (k: FieldKey): boolean => Boolean(touched[k] && errors[k]);
  const errId = (k: FieldKey): string => `${idPrefix}-${k}-error`;
  const fieldCls =
    "w-full rounded-[10px] px-3.5 py-3 text-[17px] bg-white border-[1.5px] border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-muted-soft)] transition-colors hover:border-[#c3d2c8] focus:outline-none focus:border-[var(--color-primary)] focus:ring-[3px] focus:ring-[var(--color-accent)]/45";
  const inputCls = (k: FieldKey): string =>
    `${fieldCls} ${showErr(k) ? "lp-input-error" : ""}`;

  const labelCls = "block text-[15px] font-semibold text-[var(--color-text)] mb-1.5";

  const renderError = (k: FieldKey): React.ReactNode =>
    showErr(k) ? (
      <p id={errId(k)} role="alert" aria-live="polite" className="lp-field-error">
        {errors[k]}
      </p>
    ) : null;

  const selectField = (
    k: "isAdult" | "insuranceType" | "reasonForVisit",
    label: string,
    options: string[],
    placeholder: string
  ): React.ReactElement => (
    // flex column: the label area grows and the control is pinned to the bottom
    // (mt-auto) so paired selects share a baseline even when one label wraps to
    // two lines in the hero card's narrow two-up columns.
    <div className="flex h-full flex-col">
      <label htmlFor={`${idPrefix}-${k}`} className={labelCls}>
        {label}
      </label>
      <div className="relative mt-auto">
        <select
          ref={(el) => {
            fieldRefs.current[k] = el;
          }}
          id={`${idPrefix}-${k}`}
          name={k}
          required
          value={data[k]}
          onChange={(e) => {
            update(k, e.target.value);
            markTouched(k, e.target.value);
          }}
          onBlur={(e) => markTouched(k, e.target.value)}
          className={`${inputCls(k)} appearance-none pr-10 ${data[k] ? "" : "text-[var(--color-muted-soft)]"}`}
          aria-invalid={showErr(k) || undefined}
          aria-describedby={showErr(k) ? errId(k) : undefined}
          disabled={submitting}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o} className="text-[var(--color-text)]">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown />
      </div>
      {renderError(k)}
    </div>
  );

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      noValidate
      aria-label="Request an appointment with Spark Sleep Solutions"
      className={`${cardBase} rounded-[20px] ${pad} space-y-4`}
    >
      {(eyebrow || heading) && (
        <div className="mb-1 space-y-1.5">
          {eyebrow && (
            <p className="text-[15px] font-semibold uppercase tracking-[0.1em] text-[var(--color-link)]">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h3 className="font-display text-[21px] leading-tight text-[var(--color-text)]">
              {heading}
            </h3>
          )}
        </div>
      )}

      {/* First / Last */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${idPrefix}-firstName`} className={labelCls}>
            First Name
          </label>
          <input
            ref={(el) => {
              fieldRefs.current.firstName = el;
            }}
            id={`${idPrefix}-firstName`}
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={data.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            onBlur={(e) => markTouched("firstName", e.target.value)}
            className={inputCls("firstName")}
            aria-invalid={showErr("firstName") || undefined}
            aria-describedby={showErr("firstName") ? errId("firstName") : undefined}
            disabled={submitting}
          />
          {renderError("firstName")}
        </div>
        <div>
          <label htmlFor={`${idPrefix}-lastName`} className={labelCls}>
            Last Name
          </label>
          <input
            ref={(el) => {
              fieldRefs.current.lastName = el;
            }}
            id={`${idPrefix}-lastName`}
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            value={data.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            onBlur={(e) => markTouched("lastName", e.target.value)}
            className={inputCls("lastName")}
            aria-invalid={showErr("lastName") || undefined}
            aria-describedby={showErr("lastName") ? errId("lastName") : undefined}
            disabled={submitting}
          />
          {renderError("lastName")}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor={`${idPrefix}-email`} className={labelCls}>
          Email Address
        </label>
        <input
          ref={(el) => {
            fieldRefs.current.email = el;
          }}
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}"
          autoComplete="email"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          onBlur={(e) => markTouched("email", e.target.value)}
          className={inputCls("email")}
          aria-invalid={showErr("email") || undefined}
          aria-describedby={showErr("email") ? errId("email") : undefined}
          disabled={submitting}
        />
        {renderError("email")}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor={`${idPrefix}-phone`} className={labelCls}>
          Phone Number
        </label>
        <input
          ref={(el) => {
            fieldRefs.current.phone = el;
          }}
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          required
          inputMode="numeric"
          autoComplete="tel"
          placeholder="(XXX) XXX-XXXX"
          value={data.phone}
          onChange={(e) => update("phone", formatPhone(e.target.value))}
          onBlur={(e) => markTouched("phone", e.target.value)}
          className={inputCls("phone")}
          aria-invalid={showErr("phone") || undefined}
          aria-describedby={showErr("phone") ? errId("phone") : undefined}
          disabled={submitting}
        />
        {renderError("phone")}
      </div>

      {/* Qualifying questions: identical for both variants so hero and bottom
          leads are scored by the same rule. Two short selects pair up at sm+. */}
      <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2">
        {selectField(
          "isAdult",
          "Are you 18 years of age or older?",
          IS_ADULT_OPTIONS,
          "Select one"
        )}
        {selectField(
          "insuranceType",
          "What is your insurance type?",
          INSURANCE_TYPE_OPTIONS,
          "Select insurance"
        )}
      </div>
      {selectField(
        "reasonForVisit",
        "Reason for visit",
        REASON_OPTIONS,
        "Select a reason"
      )}

      {submitError && (
        <p role="alert" aria-live="polite" className="lp-field-error font-semibold">
          {submitError}
        </p>
      )}

      <button
        type="button"
        onClick={handleValidateAndSubmit}
        disabled={submitting || submitted}
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-[17px] font-semibold text-white bg-[var(--color-primary)] shadow-cta transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-cta-hover hover:-translate-y-px active:translate-y-0 active:bg-[var(--color-primary-active)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:bg-[var(--color-primary-disabled)] disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {submitting ? "Submitting…" : CTA.primary}
        {!submitting && <Icon name="arrow" className="h-4 w-4" strokeWidth={2.4} />}
      </button>

      {variant === "hero" && (
        <p className="text-center text-[15px] leading-snug text-[var(--color-muted)]">
          No obligation. We accept most PPO, HMO, and Medicare plans and verify your
          benefits for you.
        </p>
      )}
    </form>
  );
}

function ChevronDown(): React.ReactElement {
  return (
    <svg
      className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
