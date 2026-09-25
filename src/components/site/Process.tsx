import { processSteps } from "@/lib/business";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading, SectionLabel } from "./ui";

export function Process() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="section-pad border-y border-border bg-surface"
    >
      <div className="shell">
        <div className="reveal max-w-xl">
          <SectionLabel>Process</SectionLabel>
          <SectionHeading>
            Four steps.
            <br />
            No guesswork.
          </SectionHeading>
        </div>

        <div className="relative mt-16 md:mt-24">
          <span
            className="absolute left-[7px] top-2 h-full w-px bg-border md:left-0 md:top-[7px] md:h-px md:w-full"
            aria-hidden="true"
          />
          <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
            {processSteps.map((step, i) => (
              <li
                key={step.no}
                style={{ transitionDelay: `${i * 110}ms` }}
                className="reveal group relative pl-10 md:pl-0 md:pt-10"
              >
                <span
                  className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-primary bg-background transition-all duration-500 group-hover:bg-primary md:top-0"
                  aria-hidden="true"
                />
                <span className="label-micro text-primary">{step.no}</span>
                <h3 className="display-lg mt-3 text-2xl">{step.title}</h3>
                <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
