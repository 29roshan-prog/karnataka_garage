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
  googleProfileUrl: "https://www.google.com/search?q=KARNATAKA+GARAGE+Reviews&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_56xrcDgdz3_Dl1JZhimzQaOSYtCIuPgRrDP1ERRf05rqh7F4n-Zh-Mm5Tc9luy3JivqmSQKpaWBxitJVt66gdPyLb0NK_aInx0dgRNHQa9_0-BhKg%3D%3D", // Google Business Profile link
  googleReviewsUrl: "https://www.google.com/search?q=KARNATAKA+GARAGE+Reviews&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_56xrcDgdz3_Dl1JZhimzQaOSYtCIuPgRrDP1ERRf05rqh7F4n-Zh-Mm5Tc9luy3JivqmSQKpaWBxitJVt66gdPyLb0NK_aInx0dgRNHQa9_0-BhKg%3D%3D", // Google reviews link
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

/** Real Google reviews from Karnataka Garage's GBP listing. */
export const reviews: {
  quote: string;
  author: string;
  rating: number;
  source: "Google Reviews" | "Justdial";
}[] = [
  {
    quote: "Excellent Service & Support. I had a great experience with Karnataka Garage. My car broke down early and they handled everything professionally.",
    author: "Sudheer Ryali",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "I had an outstanding customer experience at this garage. I brought my car in with a strange noise, and the team immediately diagnosed the issue, explained it in simple terms, and gave me a clear written quote with no hidden charges.",
    author: "GB Prajwal",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Very satisfied with the service experience. The team diagnosed the issue quickly, explained everything clearly, and completed the work professionally. The pricing was fair and the customer support was excellent. My car runs smoothly now. Definitely one of the best garages I've visited.",
    author: "Nishanth A S",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Excellent Work by Thyagaraj – A Hidden Gem! I am extremely satisfied with the service provided by Thyagaraj. He is truly a skilled professional.",
    author: "Prashanth S Bharadwaj",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Karnataka Garage is my go-to for vehicle repairs and services. The quick booking and hassle-free experience are a relief. Good workmanship and customer friendly, quick service with reasonable price.",
    author: "Bharath SN",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Great experience checked everything fine was good coming here better than many.",
    author: "Siddhesh BJ",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Excellent service! Staff were polite, work was done on time, and my car feels like new. Highly satisfied.",
    author: "Sanjay Kumar",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Had a smooth and professional service experience at Karnataka Garage. The staff were knowledgeable and thorough.",
    author: "Prathith Paul",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Good service best price.",
    author: "Sagar Singh",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Highly skilled and experienced technicians. Excellent and professional work.",
    author: "Abhi Madhu",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Good work and best service in Arsikere.",
    author: "Shiva",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Very good work, excellent service at reasonable price. Staffs are well experienced and value for money — they focus on customer's satisfaction.",
    author: "Alphonsa Ammu",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Good and excellent service.",
    author: "Akram Ams",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Working was good happy to service.",
    author: "B.R. Chandra Naik",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Super and good service. Fully satisfied.",
    author: "Dickson Selvan",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Outstanding service. The mechanics are highly skilled and efficient. I trust them with all my car needs.",
    author: "Pramod M",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "First time I had given vehicle service to Karnataka Garage and they explained very well about the issue and rectified it. I recommend this garage — good and professional service done here.",
    author: "Floyed Thomas",
    rating: 5,
    source: "Google Reviews",
  },
];
