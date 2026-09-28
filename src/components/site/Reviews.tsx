import { Star, ArrowUpRight, Quote } from "lucide-react";
import { business, reviews, googleHref, googleReviewsHref } from "@/lib/business";
import { useReveal } from "@/hooks/use-reveal";
import { Action, Placeholder, SectionHeading, SectionLabel } from "./ui";

export function Reviews() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="reviews"
      ref={ref}
      className="section-pad border-t border-border bg-surface"
    >
      <div className="shell">
        <div className="reveal grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionLabel>Reviews</SectionLabel>
            <SectionHeading>
              Trusted by
              <br />
              drivers.
            </SectionHeading>
          </div>
          <div className="flex items-end gap-6">
            <div>
              <p className="display-lg text-5xl">{business.rating}</p>
              <div className="mt-2 flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-primary text-primary"
                  />
                ))}
              </div>
            </div>
            <p className="label-micro pb-1">
              {business.ratingCount}+ ratings
              <br />
              Justdial listing
            </p>
          </div>
        </div>

        {reviews.length === 0 ? (
          <div className="reveal mt-12 rounded-sm border border-dashed border-border-strong p-10 md:p-14">
            <Quote className="h-8 w-8 text-primary" strokeWidth={1.25} />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Customer reviews will appear here once the garage's Google
              Business Profile and Justdial reviews are connected. No
              testimonials have been written on the garage's behalf.
            </p>
            <div className="mt-8">
              <Placeholder>Awaiting real reviews</Placeholder>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.author}
                className="reveal bg-surface p-8 md:p-10"
              >
                <Quote className="h-7 w-7 text-primary" strokeWidth={1.25} />
                <blockquote className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-8">
                  <p className="text-sm font-bold uppercase tracking-wide">
                    {review.author}
                  </p>
                  <p className="label-micro mt-2">{review.source}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="reveal mt-10">
          <Action href={googleReviewsHref} variant="outline" size="lg" target="_blank" rel="noopener noreferrer">
            View all reviews
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Action>
        </div>
      </div>
    </section>
  );
}
