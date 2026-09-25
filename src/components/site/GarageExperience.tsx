import inspect from "@/assets/panel-inspect.jpg";
import diagnose from "@/assets/panel-diagnose.jpg";
import repair from "@/assets/panel-repair.jpg";
import drive from "@/assets/panel-drive.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading, SectionLabel } from "./ui";

const panels = [
  { no: "01", title: "Inspect", image: inspect, alt: "Car raised on a workshop lift for inspection" },
  { no: "02", title: "Diagnose", image: diagnose, alt: "Technician using a diagnostic tablet at an engine bay" },
  { no: "03", title: "Repair", image: repair, alt: "Brake caliper and rotor detail" },
  { no: "04", title: "Get back on the road", image: drive, alt: "Serviced black car leaving the workshop at night" },
];

export function GarageExperience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className="section-pad border-t border-border bg-surface"
    >
      <div className="shell">
        <div className="reveal max-w-3xl">
          <SectionLabel>The garage experience</SectionLabel>
          <SectionHeading>
            More than a repair.
            <br />
            <span className="text-muted-foreground">
              A better way to care for your car.
            </span>
          </SectionHeading>
        </div>
      </div>

      <div className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mt-20 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-10">
        {panels.map((panel, i) => (
          <article
            key={panel.no}
            style={{ transitionDelay: `${i * 90}ms` }}
            className="reveal group relative min-w-[78vw] snap-center overflow-hidden rounded-sm border border-border sm:min-w-[60vw] md:min-w-0"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={panel.image}
                alt={panel.alt}
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
            <div
              className="absolute inset-0 bg-background/45 transition-colors duration-500 group-hover:bg-background/25"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 overlay-bottom p-6">
              <span className="label-micro text-primary">{panel.no}</span>
              <h3 className="display-lg mt-3 text-xl md:text-2xl">
                {panel.title}
              </h3>
              <span
                className="mt-4 block h-[2px] w-8 bg-primary transition-all duration-500 group-hover:w-16"
                aria-hidden="true"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
