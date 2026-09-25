import tools from "@/assets/gallery-tools.jpg";
import headlight from "@/assets/gallery-headlight.jpg";
import bay from "@/assets/panel-inspect.jpg";
import engine from "@/assets/panel-diagnose.jpg";
import brake from "@/assets/panel-repair.jpg";
import finished from "@/assets/panel-drive.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { Placeholder, SectionHeading, SectionLabel } from "./ui";

/** Swap these six files in src/assets to use the garage's real photographs. */
const shots = [
  { src: bay, alt: "Vehicle on a workshop lift", span: "md:col-span-2 md:row-span-2" },
  { src: tools, alt: "Workshop hand tools laid out", span: "" },
  { src: headlight, alt: "Headlight and grille detail", span: "" },
  { src: engine, alt: "Engine bay diagnostics", span: "md:col-span-2" },
  { src: brake, alt: "Brake and wheel detail", span: "" },
  { src: finished, alt: "Finished vehicle leaving the garage", span: "" },
];

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="section-pad">
      <div className="shell">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Gallery</SectionLabel>
            <SectionHeading>
              Inside
              <br />
              Karnataka Garage.
            </SectionHeading>
          </div>
          <Placeholder>Reference imagery — replace with real photos</Placeholder>
        </div>

        <div className="mt-12 grid auto-rows-[9rem] grid-cols-2 gap-3 md:auto-rows-[11rem] md:grid-cols-4 md:gap-4">
          {shots.map((shot, i) => (
            <figure
              key={shot.alt}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`reveal group relative overflow-hidden rounded-sm border border-border ${shot.span}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
              />
              <span
                className="absolute inset-0 bg-background/35 transition-colors duration-500 group-hover:bg-background/10"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
