import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";
import { directionsHref, telHref, hasPhone } from "@/lib/business";
import { useReveal } from "@/hooks/use-reveal";
import { Action } from "./ui";

export function CtaBand() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative overflow-hidden">
      <img
        src={ctaBg}
        alt="Empty premium workshop at night"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/78" aria-hidden="true" />
      <div className="absolute inset-0 overlay-bottom" aria-hidden="true" />

      <div className="shell relative py-28 text-center md:py-40">
        <h2 className="reveal display-xl mx-auto max-w-4xl text-[2.6rem] sm:text-6xl lg:text-[5.25rem]">
          Your car
          <br />
          deserves better.
        </h2>
        <p className="reveal mx-auto mt-7 max-w-md text-base text-muted-foreground">
          Ready to get your vehicle checked, serviced or repaired?
        </p>
        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          <Action href="#contact" size="lg">
            Book a Service
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Action>
          {hasPhone && (
            <Action href={telHref} variant="outline" size="lg">
              Call Now
            </Action>
          )}
          <Action href={directionsHref} variant="ghost" size="lg">
            Get Directions
          </Action>
        </div>
      </div>
    </section>
  );
}
