import { business } from "@/lib/business";

const items = [
  { value: business.rating, label: "Customer rating" },
  { value: `${business.ratingCount}+`, label: "Ratings" },
  { value: business.locality, label: business.city },
  { value: "Car", label: "Repair & service" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="shell grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`px-1 py-8 md:px-8 md:py-12 ${i < 2 ? "border-b border-border md:border-b-0" : ""} ${i % 2 === 1 ? "border-l border-border md:border-l-0" : ""}`}
          >
            <p className="display-lg text-3xl md:text-4xl">{item.value}</p>
            <p className="label-micro mt-3">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
