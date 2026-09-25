import { ArrowRight, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-garage.jpg";
import { business, directionsHref, telHref, hasPhone } from "@/lib/business";
import { Action } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImage}
        alt="Black car detailed under red workshop lighting at Karnataka Garage"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
      />
      <div className="absolute inset-0 overlay-cinematic" aria-hidden="true" />
      <div className="absolute inset-0 overlay-bottom" aria-hidden="true" />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-28 pt-32 md:justify-center md:pb-32">
        <div className="max-w-3xl">
          <p className="label-micro flex flex-wrap items-center gap-x-3 gap-y-2 text-foreground/80">
            <span className="inline-block h-px w-10 bg-primary" />
            {business.name}
            <span className="text-primary">·</span>
            {business.locality} · {business.city}
          </p>

          <h1 className="display-xl mt-7 text-[3.1rem] sm:text-7xl lg:text-[6.5rem]">
            Your car.
            <br />
            <span className="text-muted-foreground">Our </span>craft.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Professional automotive repair and maintenance with a focus on
            reliable workmanship and dependable vehicle care.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Action href="#contact" size="lg">
              Book a Service
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Action>
            {hasPhone && (
              <Action href={telHref} variant="outline" size="lg">
                <Phone className="h-4 w-4" />
                Call Garage
              </Action>
            )}
            <Action href={directionsHref} variant="ghost" size="lg">
              <MapPin className="h-4 w-4" />
              Get Directions
            </Action>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="label-micro text-[0.5625rem]">Scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-border">
          <span className="absolute inset-0 animate-scroll-hint bg-primary" />
        </span>
      </div>
    </section>
  );
}
