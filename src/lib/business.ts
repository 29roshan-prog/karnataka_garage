/**
 * Karnataka Garage — single source of truth for site content.
 *
 * EDIT HERE. Anything marked `placeholder: true` is NOT verified business
 * information and should be replaced once the client supplies it.
 */

export const business = {
  name: "Karnataka Garage",
  category: "Car Repair & Services",
  locality: "Jajur",
  city: "Hassan",
  region: "Karnataka",
  country: "India",
  addressLine: "Jajur, Hassan, Karnataka, India",
  rating: "5.0",
  ratingCount: 110,

  /* --- Placeholders: replace with real values --- */
  phone: "", // e.g. "+919XXXXXXXXX" — leave empty to hide call actions
  whatsapp: "", // e.g. "919XXXXXXXXX" — leave empty to hide WhatsApp
  googleProfileUrl: "", // Google Business Profile link
  googleReviewsUrl: "", // Google reviews link
  directionsUrl: "", // Google Maps directions link
  mapEmbedUrl: "", // Google Maps embed src
  openingHours: "", // e.g. "Mon–Sat, 9:00 AM – 6:00 PM"
  siteUrl: "https://karnataka-garage.lovable.app",
} as const;

export const hasPhone = business.phone.length > 0;
export const hasWhatsApp = business.whatsapp.length > 0;

export const telHref = hasPhone ? `tel:${business.phone}` : "#contact";
export const whatsappHref = hasWhatsApp
  ? `https://wa.me/${business.whatsapp}`
  : "#contact";
export const directionsHref = business.directionsUrl || "#location";
export const googleHref = business.googleProfileUrl || "#reviews";

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "About", href: "#experience" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/** Placeholder service catalogue — confirm with the garage before publishing. */
export const services = [
  {
    no: "01",
    title: "General Service",
    copy: "Periodic maintenance to keep your vehicle running the way it should.",
  },
  {
    no: "02",
    title: "Engine & Mechanical",
    copy: "Mechanical repair work carried out with care and attention to detail.",
  },
  {
    no: "03",
    title: "Brake & Suspension",
    copy: "Braking and suspension work focused on control, comfort and safety.",
  },
  {
    no: "04",
    title: "Car AC Service",
    copy: "Air-conditioning checks and servicing for comfortable driving.",
  },
  {
    no: "05",
    title: "Electrical & Diagnostics",
    copy: "Electrical work and fault-finding to trace issues properly.",
  },
  {
    no: "06",
    title: "Denting & Painting",
    copy: "Bodywork attention that restores the finish of your vehicle.",
  },
];

export const whyUs = [
  {
    no: "01",
    title: "Transparent Service",
    copy: "Clear communication around the work your vehicle needs.",
  },
  {
    no: "02",
    title: "Quality Workmanship",
    copy: "A professional approach to vehicle repair and maintenance.",
  },
  {
    no: "03",
    title: "Customer-First Experience",
    copy: "Designed around convenience, communication and trust.",
  },
  {
    no: "04",
    title: "Road-Ready Results",
    copy: "Focused on getting your vehicle back where it belongs — on the road.",
  },
];

export const processSteps = [
  {
    no: "01",
    title: "Book",
    copy: "Contact the garage and share your vehicle requirement.",
  },
  {
    no: "02",
    title: "Inspect",
    copy: "Vehicle condition and service requirements are assessed.",
  },
  {
    no: "03",
    title: "Service",
    copy: "Required repair or maintenance work is carried out.",
  },
  {
    no: "04",
    title: "Drive",
    copy: "Get back on the road with your vehicle serviced.",
  },
];

/**
 * Reviews are intentionally empty. Do not write testimonials by hand — add
 * real Google Business Profile / Justdial reviews here once available.
 */
export const reviews: {
  quote: string;
  author: string;
  rating: number;
  source: "Google Reviews" | "Justdial";
}[] = [];
