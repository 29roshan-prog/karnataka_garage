import {
  business,
  navLinks,
  telHref,
  hasPhone,
  hasWhatsApp,
  whatsappHref,
  directionsHref,
  googleHref,
} from "@/lib/business";
import { Placeholder } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="shell grid gap-12 py-16 md:grid-cols-3 md:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-8 w-[3px] bg-primary" aria-hidden="true" />
            <span className="display-lg text-lg">{business.name}</span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {business.category}
            <br />
            {business.locality}, {business.city}, {business.region}
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="label-micro">Navigate</p>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-3">
          <p className="label-micro">Contact</p>
          {hasPhone ? (
            <a href={telHref} className="text-sm text-muted-foreground hover:text-foreground">
              {business.phone}
            </a>
          ) : (
            <Placeholder>Phone number pending</Placeholder>
          )}
          {business.googleProfileUrl ? (
            <a href={googleHref} className="text-sm text-muted-foreground hover:text-foreground">
              Google Business Profile
            </a>
          ) : (
            <Placeholder>Google profile link pending</Placeholder>
          )}
          {business.directionsUrl ? (
            <a href={directionsHref} className="text-sm text-muted-foreground hover:text-foreground">
              Google Maps
            </a>
          ) : (
            <Placeholder>Map link pending</Placeholder>
          )}
          {hasWhatsApp && (
            <a href={whatsappHref} className="text-sm text-muted-foreground hover:text-foreground">
              WhatsApp
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 {business.name}. All rights reserved.</p>
          <p className="label-micro">
            {business.locality} · {business.city} · {business.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
