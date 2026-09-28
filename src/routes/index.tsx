import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { GarageExperience } from "@/components/site/GarageExperience";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";
import { business } from "@/lib/business";

const title = "Karnataka Garage | Car Repair & Services in Jajur, Arsikere";
const description =
  "Karnataka Garage in Jajur, Arsikere — professional car repair and maintenance focused on reliable workmanship and dependable vehicle care. Rated 5.0 from 110+ ratings.";

/** LocalBusiness data — only verified fields are included. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: business.name,
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: `${business.locality}, ${business.city}`,
    addressRegion: business.region,
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.ratingCount,
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Karnataka Garage, car repair Arsikere, car service Arsikere, car garage Jajur, automotive garage Karnataka",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: business.siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <GarageExperience />
        <WhyUs />
        <Process />
        <BeforeAfter />
        <Reviews />
        <Gallery />
        <Location />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <div className="h-14 md:hidden" aria-hidden="true" />
    </div>
  );
}
