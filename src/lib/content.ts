// Site-wide content + config for Spark Sleep Solutions — sleep apnea LP.
// Single source of truth for copy, phone, form options, and tracking IDs.
// Every fact here is verbatim from the client brief / sparksleep.com — invent nothing.

// CTM tracking number (forwards to the main office line). NEVER 408-490-0182 directly.
export const PHONE = "(408) 608-0525";
export const PHONE_HREF = "tel:4086080525";

export const REQUEST_ANCHOR = "#request-appointment";

export const CTA = {
  primary: "Request Appointment",
  secondary: "Get Started Today",
  requestAnchor: REQUEST_ANCHOR,
};

export const BRAND = {
  company: "Spark Sleep Solutions",
  descriptor:
    "A dental sleep medicine practice treating obstructive sleep apnea and snoring with custom, FDA-approved oral appliances.",
  privacyUrl: "https://sparksleep.com/privacy-policy/",
};

export const CURRENT_YEAR = new Date().getFullYear();

// ─── Hero ───
export const HERO = {
  eyebrow: "Board-Certified Dental Sleep Medicine — San Jose · San Ramon · Sunnyvale",
  // Mobile splits the eyebrow into two tight lines so it never wraps to three.
  eyebrowLead: "Board-Certified Dental Sleep Medicine",
  eyebrowGeo: "San Jose · San Ramon · Sunnyvale",
  h1: "Sleep Apnea Treatment Without the Mask",
  subhead:
    "A custom, FDA-approved oral appliance worn at night — no masks, no cords, no noise — made and adjusted by doctors who treat only sleep apnea and snoring.",
  // Shorter mobile sub-headline to keep the form card above the fold at 390px.
  subheadShort:
    "A custom, FDA-approved oral appliance worn at night — no masks, no cords, no noise.",
  phoneLead: "Prefer to talk?",
  formReassurance:
    "No obligation. We accept most PPO, HMO, and Medicare plans and verify your benefits for you.",
};

// ─── Credential trust strip (#credentials) ───
export const CREDENTIALS = [
  { icon: "shield-check", value: "Board-Certified", label: "DABDSM & ASBA diplomate" },
  { icon: "users", value: "5,000+", label: "Patients treated" },
  { icon: "package", value: "100+", label: "FDA-approved devices" },
  { icon: "map-pin", value: "6", label: "Bay Area locations" },
];

// ─── What it is (#what-it-is) ───
export const WHAT_IT_IS = {
  eyebrow: "The treatment",
  heading: "A custom oral appliance you can picture wearing tonight",
  body: [
    "Oral sleep devices carefully open your airway by preventing the soft tissues and tongue from collapsing, as is common during sleep for someone with sleep apnea.",
    "Unlike CPAP masks, our oral sleep appliances don't require electricity, masks, hoses, filters, or replacement humidifier tanks. The appliance is small enough to fit in your hand, worn only at night, and carries easily when you travel.",
    "This treatment is not about handing you a dental device. Our expertise lies in knowing how to adjust your device, proper follow up to ensure it is optimally titrated, and knowing how to prevent any surprises from occurring.",
  ],
  imageAlt: "A pair of clear custom oral sleep appliances resting on a glass surface in daylight",
};

// ─── Why an appliance (#why-an-appliance) ───
export const WHY_APPLIANCE = {
  eyebrow: "Why patients choose it",
  heading: "Built around your night, not a machine",
  cards: [
    {
      icon: "plug",
      title: "Nothing to plug in or pack",
      body: "No electricity, hoses, filters, or humidifier tanks to manage — you simply wear the appliance and go to sleep.",
    },
    {
      icon: "moon",
      title: "Quiet for the whole room",
      body: "The appliance makes no sound at all, so it stays quiet for you and for whoever sleeps beside you.",
    },
    {
      icon: "feather",
      title: "Fits in your hand and pocket",
      body: "It's small and light enough to hold in one hand, so it travels with you wherever the night takes you.",
    },
    {
      icon: "sliders",
      title: "Custom-made and adjusted to you",
      body: "Your appliance is made for your mouth and fine-tuned over follow-up visits so it fits the way it should.",
    },
    {
      icon: "layers",
      title: "Chosen from 100+ options",
      body: "We select from over 100 FDA-approved devices to match the appliance to you, rather than one-size-fits-all.",
    },
    {
      icon: "badge-check",
      title: "3-year warranty on most devices",
      body: "Most devices carry a 3-year warranty — a standing quality signal behind the appliance you receive.",
    },
  ],
};

// ─── Insurance & cost (#insurance) ───
export const INSURANCE = {
  eyebrow: "Insurance & cost",
  heading: "This is billed to your medical insurance — and we handle the paperwork",
  body: [
    "We work with most major medical insurances to help maximize your benefits to cover CPAP alternatives. Oral appliance therapy is billed to your medical insurance, not your dental plan.",
    "Our staff will work with your physicians to get all your necessary documents and coordinate everything with your insurance provider, so you don't have to chase down forms.",
    "We offer no-interest payment plans for patients paying out of an HSA or FSA (Health and Flexible Spending) Account.",
  ],
  caption: "We accept most PPO, HMO, and Medicare plans and verify your benefits for you.",
  cta: "Check My Insurance Coverage",
  insurers: [
    { src: "/images/insurers/insurance-blue-shield.jpg", name: "Blue Shield" },
    { src: "/images/insurers/insurance-cigna.jpg", name: "Cigna" },
    { src: "/images/insurers/insurance-tricare.jpg", name: "Tricare" },
    { src: "/images/insurers/insurance-medicare.jpg", name: "Medicare" },
    { src: "/images/insurers/insurance-unicare.jpg", name: "UniCare" },
    { src: "/images/insurers/insurance-umr.jpg", name: "UMR" },
    { src: "/images/insurers/insurance-anthem.jpg", name: "Anthem" },
    { src: "/images/insurers/insurance-kaiser.jpg", name: "Kaiser Permanente" },
  ],
};

// ─── Meet the doctors (#doctors) ───
export const DOCTORS = {
  eyebrow: "Meet the doctors",
  heading: "Care from doctors who do nothing but sleep medicine",
  anchorLine:
    "It is not a coincidence that our doctors focus exclusively on Dental Sleep Medicine.",
  list: [
    {
      initials: "SS",
      name: "Dr. Srujal H. Shah, DDS",
      creds: "Diplomate, American Board of Dental Sleep Medicine (DABDSM) and Diplomate, American Sleep and Breathing Academy (ASBA).",
    },
    {
      initials: "SS",
      name: "Dr. Scott Stevinson, DDS",
      creds: "40+ years of clinical experience.",
    },
    {
      initials: "KP",
      name: "Dr. Kajal Patel, DDS",
      creds: "30+ years serving the San Francisco Bay Area.",
    },
  ],
};

// ─── How it works (#how-it-works) ───
export const HOW_IT_WORKS = {
  eyebrow: "What to expect",
  heading: "The whole path, from your first call to a device that fits",
  steps: [
    {
      title: "Request an appointment",
      body: "You send a few details and our team calls you back. We verify your insurance benefits before your visit so there are no surprises.",
    },
    {
      title: "Evaluation & airway analysis",
      body: "We review your goals, medical history, symptoms, and sleep study, followed by an examination of your teeth, jaw, airway and surrounding tissues. An airway analysis study using Pharyngometry and Rhinometry is then completed to assess, in real-time, airway volume to help us see if oral appliance therapy might benefit you.",
    },
    {
      title: "3D scan & custom device",
      body: "After your examination, we complete advanced digital 3D scans using our intra-oral scanners, and your custom appliance is fabricated to fit your mouth.",
    },
    {
      title: "Fitting, titration & follow-up",
      body: "We fit the appliance and adjust it over structured follow-up visits — proper titration is what makes the device actually work for you.",
    },
  ],
  bringHeading: "What to bring to your first visit",
  bring: [
    "Your Medical Insurance Card and picture ID",
    "A copy of your most recent sleep study",
    "A referral or prescription from your primary care or sleep physician (if available)",
  ],
  imageAlt: "A doctor and patient talking across a desk in a bright, calm consultation room",
};

// ─── Patient reviews (#reviews) ───
// Verbatim published reviews only, with exact attribution. No aggregate rating.
export const REVIEWS = [
  {
    quote:
      "As a Physician I did a lot of research and investigating in seeking help with my sleep problems. I found the Doctors at Spark to be exceptional. I would continue with my care at Spark Sleep Solutions and would also referral my patients with the upmost confidence.",
    name: "Terry L Franklin MD FAAFP",
    city: "San Jose, CA",
    stars: 5,
    platform: "Yelp",
  },
  {
    quote:
      "I felt Dr. Shah was quite knowledgeable and appreciated that he listened to what I was saying about what I was doing for myself to help with sleep, and about the problems I'd had with the CPAP. He carefully explained about the device he was recommending and why that particular model.",
    name: "Anonymous",
    city: "San Ramon, CA",
    stars: 5,
    platform: "Healthgrades",
  },
  {
    quote:
      "Dr. Shah is very thorough, affable and smart. He was able to explain the various options for snoring and sleep apnea. The device I received works amazing. Snoring has disappeared!",
    name: "Rob G",
    city: "San Jose, CA",
    stars: 5,
    platform: "Google",
  },
  {
    quote:
      "Was sent here by my Kaiser med plan. From day one everyone was kind, helpful and understanding to my needs. Product I need is “top-drawer” and easy to use. Thanks crew.",
    name: "Bev",
    city: "San Jose, CA",
    stars: 5,
    platform: "Facebook",
  },
  {
    quote:
      "Friendly, knowledgeable staff that efficiently and professionally fitted my wife and me for sleep aides. Clearly explained each step of the way and the options available to us.",
    name: "Gerald",
    city: "San Ramon, CA",
    stars: 4,
    platform: "BirdEye",
  },
  {
    quote:
      "Had my initial consultation yesterday. The staff and Dr. Shah were wonderful. They made me feel very comfortable and answered all my questions. I would highly recommend them to anyone. Thanks!",
    name: "Susan",
    city: "San Jose, CA",
    stars: 5,
    platform: "Demandforce",
  },
  {
    quote:
      "Very helpful and pleasant staff. Dr. Shah explains the process each step of the way and is very easy to talk to about your issues with sleep apnea. Anyone considering an oral device should check out Dr. Shah.",
    name: "William",
    city: "San Jose, CA",
    stars: 5,
    platform: "Demandforce",
  },
  {
    quote:
      "Excellent experience. Staff- Kathy Angelina and Doctor Shah were attentive, patient and professional. Kathy was very. helpful and patient with registration. Angelina was attentive and supportive. Dr. Shah was professional and thorough. All questions were answered. Great experience.",
    name: "John",
    city: "San Jose, CA",
    stars: 5,
    platform: "Demandforce",
  },
];

// ─── Locations (#locations) ───
export const LOCATIONS = {
  eyebrow: "Where we see you",
  heading: "Close to home for the follow-up visits that matter",
  hours: "Monday through Friday, 9am–5pm Pacific · By appointment only",
  list: [
    {
      city: "San Jose",
      address: "6120 Hellyer Ave Ste 125, San Jose, CA 95138",
    },
    {
      city: "San Ramon",
      address: "1081 Market Place Ste 100, San Ramon, CA 94583",
    },
    {
      city: "Sunnyvale",
      address: null,
    },
  ],
  closing: "Spark Sleep Solutions has six Bay Area locations.",
  imageAlt: "A calm Bay Area office exterior in warm morning light with a palm tree",
};

// ─── FAQ (#faq) ───
export const FAQ = [
  {
    q: "Will my insurance cover this?",
    a: "Oral appliance therapy is billed to your medical insurance, not your dental plan. We accept most PPO, HMO, and Medicare plans and verify your benefits for you before your visit. Our staff coordinates the documentation with your physicians and your insurance provider, so you know where things stand before you commit to anything.",
  },
  {
    q: "Do I need a sleep study first?",
    a: "Bring a copy of your most recent sleep study if you have one. If you don't, that's alright — the team reviews your situation, symptoms, and history at your first visit and tells you what is needed next. We'll never frame a sleep study as the offer; it's simply part of understanding your care.",
  },
  {
    q: "What does wearing the appliance feel like?",
    a: "The appliance is small and custom-fit to your mouth, worn only at night. There are no masks, hoses, or noise. Over a few follow-up visits we adjust it for comfort and fit, so it settles into something you can wear night after night without a second thought.",
  },
  {
    q: "How long does treatment take and what follow-up is involved?",
    a: "After your custom appliance is made, we fit it and then titrate it — adjusting it gradually over structured follow-up visits. That follow-up is the part that makes the device work for you, so we build it into your care rather than handing you a device and sending you on your way.",
  },
  {
    q: "What happens at my first appointment and what should I bring?",
    a: "We review your goals, history, and any prior sleep study, then examine your teeth, jaw, and airway and complete a real-time airway analysis. Please bring your medical insurance card and photo ID, a copy of your most recent sleep study, and any referral or prescription from your primary care or sleep physician if you have one.",
  },
];

// ─── Request appointment (#request-appointment) ───
export const REQUEST = {
  eyebrow: "Request your appointment",
  heading: "Request Your Appointment",
  subheading:
    "A board-certified doctor will review your situation, and the team verifies your insurance benefits before your visit — no obligation.",
  altPathLead: "Prefer to call?",
};

// ─── Footer ───
export const FOOTER = {
  summary: "Six Bay Area locations · Monday–Friday, 9am–5pm Pacific · By appointment only",
  descriptor: BRAND.descriptor,
};

// ─── Form select options (wired exactly to the LeadFormField contract) ───
export const IS_ADULT_OPTIONS = ["Yes", "No"];
export const INSURANCE_TYPE_OPTIONS = ["PPO", "HMO", "Medicare", "Self-pay or Cash"];
export const REASON_OPTIONS = [
  "Sleep apnea treatment",
  "Snoring treatment",
  "Sleep study or diagnosis",
  "TMJ treatment",
  "Other",
];

// Answers that qualify (drives the ad conversion event, never the UX).
export const QUALIFYING = {
  isAdult: ["Yes"],
  insuranceType: ["PPO", "HMO", "Medicare"],
  reasonForVisit: ["Sleep apnea treatment", "Snoring treatment"],
};

// ─── Mega tracking — real Spark IDs. Meta Pixel authorized 2026-08-11. ───
export const TRACKING = {
  siteKey: "e0l9cid0feq22q6a",
  siteId: "863c790a-8435-4bf8-a06f-09fdc965be15",
  gtmId: "GTM-T6PPJSLJ",
  pixelId: "1532928708309341",
};

// Mega submission API expects snake_case keys: customer_id, site_id, source_provider
export const FORM = {
  customerId: "4fd12f2b-4473-4d43-b021-72a3b0d6f558",
  siteId: "863c790a-8435-4bf8-a06f-09fdc965be15",
  sourceProvider: "google",
};
