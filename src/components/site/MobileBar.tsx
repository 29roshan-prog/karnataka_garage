import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { telHref, hasPhone, hasWhatsApp, whatsappHref } from "@/lib/business";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] divide-x divide-border">
        {hasPhone && (
          <a
            href={telHref}
            className="flex min-h-14 flex-col items-center justify-center gap-1 py-3 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
        )}
        {hasWhatsApp && (
          <a
            href={whatsappHref}
            className="flex min-h-14 flex-col items-center justify-center gap-1 py-3 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        )}
        <a
          href="#contact"
          className="flex min-h-14 flex-col items-center justify-center gap-1 bg-primary py-3 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground"
        >
          <CalendarCheck className="h-4 w-4" />
          Book Service
        </a>
      </div>
    </div>
  );
}
