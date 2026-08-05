import { Reveal } from "@/components/Reveal";

type Band = "light" | "tint" | "dark";

const BAND_CLASS: Record<Band, string> = {
  light: "bg-white text-[var(--color-text)]",
  tint: "bg-[var(--color-surface)] text-[var(--color-text)]",
  dark: "bg-[var(--color-dark)] text-[var(--color-on-dark)]",
};

interface SectionProps {
  id: string;
  band?: Band;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  band = "light",
  className = "",
  children,
}: SectionProps): React.ReactElement {
  return (
    <section
      id={id}
      className={`${BAND_CLASS[band]} py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "start" | "center";
  onDark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "start",
  onDark = false,
}: SectionHeadingProps): React.ReactElement {
  const alignCls = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl";
  const titleColor = onDark ? "text-white" : "text-[var(--color-text)]";
  const introColor = onDark ? "text-[var(--color-on-dark)]/80" : "text-[var(--color-muted)]";
  return (
    <Reveal className={alignCls}>
      <p className={`eyebrow ${onDark ? "on-dark" : ""}`}>{eyebrow}</p>
      <h2 className={`h2 mt-3 ${titleColor}`}>{title}</h2>
      {intro && <p className={`mt-5 text-[18px] leading-relaxed ${introColor}`}>{intro}</p>}
    </Reveal>
  );
}
