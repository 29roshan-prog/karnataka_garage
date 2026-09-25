import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import {
  business,
  directionsHref,
  telHref,
  hasPhone,
  googleHref,
} from "@/lib/business";
import { useReveal } from "@/hooks/use-reveal";
import { Action, Placeholder, SectionHeading, SectionLabel } from "./ui";

export function Location() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="location"
      ref={ref}
      className="section-pad border-t border-border bg-surface"
    >
      <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <SectionLabel>Location</SectionLabel>
          <SectionHeading>
            Find your way
            <br />
            to us.
          </SectionHeading>

          <dl className="mt-10 space-y-8 border-t border-border pt-10">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <dt className="label-micro">Address</dt>
                <dd className="mt-2 text-base font-semibold">
                  {business.name}
                </dd>
                <dd className="text-sm text-muted-foreground">
                  {business.locality}, {business.city}
                  <br />
                  {business.region}, {business.country}
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <dt className="label-micro">Phone</dt>
                <dd className="mt-2">
                  {hasPhone ? (
                    <a href={telHref} className="text-base font-semibold hover:text-primary">
                      {business.phone}
                    </a>
                  ) : (
                    <Placeholder>Phone number to be added</Placeholder>
                  )}
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <dt className="label-micro">Opening hours</dt>
                <dd className="mt-2">
                  {business.openingHours ? (
                    <span className="text-base font-semibold">
                      {business.openingHours}
                    </span>
                  ) : (
                    <Placeholder>Hours to be confirmed</Placeholder>
                  )}
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Action href={directionsHref} size="lg">
              Get Directions
            </Action>
            {hasPhone && (
              <Action href={telHref} variant="outline" size="lg">
                Call Now
              </Action>
            )}
            <Action href={googleHref} variant="ghost" size="lg">
              View on Google
              <ExternalLink className="h-4 w-4" />
            </Action>
          </div>
        </div>

        <div className="reveal relative min-h-[22rem] overflow-hidden rounded-sm border border-border bg-background lg:min-h-full">
          {business.mapEmbedUrl ? (
            <iframe
              title={`Map showing ${business.name}`}
              src={business.mapEmbedUrl}
              loading="lazy"
              className="absolute inset-0 h-full w-full grayscale-[35%]"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-5 p-10 text-center">
              <MapPin className="h-9 w-9 text-primary" strokeWidth={1.25} />
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                The Google Maps embed appears here once the garage's exact map
                link is supplied. No coordinates have been guessed.
              </p>
              <Placeholder>Map embed pending</Placeholder>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
