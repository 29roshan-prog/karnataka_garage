import { whyUs } from "@/lib/business";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading, SectionLabel } from "./ui";

export function WhyUs() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="why" ref={ref} className="section-pad">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="reveal lg:sticky lg:top-32 lg:self-start">
          <SectionLabel>Why us</SectionLabel>
          <SectionHeading>
            Why drivers
            <br />
            choose us.
          </SectionHeading>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            How we approach every vehicle that comes through the workshop in
            Jajur, Arsikere.
          </p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <div
              key={item.no}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal group relative bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10"
            >
              <span className="label-micro text-primary">{item.no}</span>
              <h3 className="mt-8 text-base font-bold uppercase tracking-tight md:text-lg">
                {item.title}
              </h3>
              <span
                className="mt-4 block h-px w-10 bg-border-strong transition-all duration-500 group-hover:w-20 group-hover:bg-primary"
                aria-hidden="true"
              />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
