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
  city: "Arsikere",
  region: "Karnataka",
  country: "India",
  addressLine: "Jajur, Arsikere, Karnataka, India",
  rating: "5.0",
  ratingCount: 110,

  /* --- Placeholders: replace with real values --- */
  phone: "+919731770033", // e.g. "+919XXXXXXXXX" — leave empty to hide call actions
  whatsapp: "919731770033", // e.g. "919XXXXXXXXX" — leave empty to hide WhatsApp
  googleProfileUrl: "https://www.google.com/search?q=KARNATAKA+GARAGE+Reviews", // Google Business Profile link
  googleReviewsUrl: "https://www.google.com/search?q=KARNATAKA+GARAGE+Reviews", // Google reviews link
  directionsUrl: "https://maps.app.goo.gl/1kv3VmeQms1eHjrB9?g_st=ic", // Google Maps directions link
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5959697716827!2d76.23136227452!3d13.316699786751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad3a3e944e38b%3A0x2e90d33b85c0eab0!2sKarnataka%20Garage!5e0!3m2!1sen!2sin!4v1727521200000!5m2!1sen!2sin", // Google Maps embed src
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
export const googleReviewsHref = business.googleReviewsUrl || business.googleProfileUrl || "#reviews";

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
  {
    no: "07",
    title: "Accidental Repairs",
    copy: "Expert repair work after accidents — restoring your vehicle's safety and appearance.",
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
