import {
  ArrowUpRight,
  Wrench,
  Cog,
  Disc3,
  Snowflake,
  CircuitBoard,
  SprayCan,
} from "lucide-react";
import { services } from "@/lib/business";
import { useReveal } from "@/hooks/use-reveal";
import { Placeholder, SectionHeading, SectionLabel } from "./ui";

const icons = [Wrench, Cog, Disc3, Snowflake, CircuitBoard, SprayCan] as const;

export function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" ref={ref} className="section-pad">
      <div className="shell">
        <div className="reveal grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionLabel>Services</SectionLabel>
            <SectionHeading>
              Everything your
              <br />
              car needs.
            </SectionHeading>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            From routine maintenance to essential repairs, Karnataka Garage is
            positioned as a dependable destination for keeping your vehicle
            road-ready.
          </p>
        </div>

        <div className="mt-6">
          <Placeholder>Service list awaiting confirmation</Placeholder>
        </div>

        <div className="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length] ?? Wrench;
            return (
              <a
                key={service.no}
                href="#contact"
                style={{ transitionDelay: `${i * 70}ms` }}
                className="reveal group relative border-b border-border p-8 transition-colors duration-500 hover:bg-surface sm:border-r md:p-10"
              >
                <span
                  className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <span className="label-micro text-primary">{service.no}</span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <Icon
                  className="mt-12 h-7 w-7 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                  strokeWidth={1.25}
                />
                <h3 className="mt-6 text-lg font-bold uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {service.copy}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
