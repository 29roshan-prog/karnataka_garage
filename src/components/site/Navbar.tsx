import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { business, navLinks, telHref, hasPhone } from "@/lib/business";
import { Action } from "./ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="group flex items-center gap-3">
          <span
            className="h-7 w-[3px] bg-primary transition-all duration-300 group-hover:h-9"
            aria-hidden="true"
          />
          <span className="flex flex-col leading-none">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] md:text-base">
              Karnataka
            </span>
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-muted-foreground md:text-base">
              Garage
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="label-micro relative py-2 transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {hasPhone && (
            <a
              href={telHref}
              aria-label="Call the garage"
              className="hidden h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground md:inline-flex"
            >
              <Phone className="h-4 w-4" />
            </a>
          )}
          <Action href="#contact" className="hidden md:inline-flex">
            Book a Service
          </Action>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-background transition-all duration-400 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="shell flex h-16 items-center justify-between">
          <span className="label-micro">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="shell flex flex-1 flex-col justify-center gap-2 pb-24">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="display-lg border-b border-border py-4 text-4xl transition-colors hover:text-primary"
            >
              <span className="mr-4 align-super text-xs font-semibold tracking-widest text-primary">
                0{i + 1}
              </span>
              {link.label}
            </a>
          ))}
          <p className="mt-10 text-sm text-muted-foreground">
            {business.addressLine}
          </p>
        </nav>
      </div>
    </header>
  );
}
