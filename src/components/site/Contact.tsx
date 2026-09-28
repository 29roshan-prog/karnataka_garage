import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/business";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading, SectionLabel } from "./ui";

const WHATSAPP_NUMBER = "919731770033";

const fieldClass =
  "w-full rounded-sm border border-input bg-surface px-4 py-3.5 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-primary";

// Extra service options to show in the dropdown (in addition to the services from business.ts)
const extraServiceOptions = [
  "Engine Oil Service",
  "Engine Repair",
  "Gearbox Repair",
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const vehicle = data.get("vehicle") as string;
    const service = data.get("service") as string;
    const date = data.get("date") as string;
    const message = data.get("message") as string;

    const lines: string[] = [
      `🔧 *New Service Request — Karnataka Garage*`,
      ``,
      `👤 *Name:* ${name}`,
      `📞 *Phone:* ${phone}`,
    ];
    if (vehicle) lines.push(`🚗 *Vehicle:* ${vehicle}`);
    if (service) lines.push(`🛠️ *Service:* ${service}`);
    if (date) lines.push(`📅 *Preferred Date:* ${date}`);
    if (message) lines.push(`📝 *Message:* ${message}`);

    const text = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(waUrl, "_blank");
    setSent(true);
  }

  return (
    <section id="contact" ref={ref} className="section-pad">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal">
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading>
            Request
            <br />
            a service.
          </SectionHeading>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Share your vehicle and what it needs. We'll get back to you on
            WhatsApp to confirm your appointment.
          </p>
        </div>

        <div className="reveal rounded-sm border border-border bg-surface p-6 md:p-10">
          {sent ? (
            <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-7 w-7" />
              </span>
              <h3 className="display-lg mt-8 text-2xl">Request sent!</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Your request has been sent to us via WhatsApp. We'll confirm
                your appointment shortly.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="label-micro mt-8 underline decoration-primary underline-offset-4 hover:text-foreground"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="label-micro">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className={`${fieldClass} mt-3`}
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="label-micro">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={`${fieldClass} mt-3`}
                  placeholder="Mobile number"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="vehicle" className="label-micro">
                  Vehicle model
                </label>
                <input
                  id="vehicle"
                  name="vehicle"
                  className={`${fieldClass} mt-3`}
                  placeholder="e.g. Swift VDi"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="service" className="label-micro">
                  Service required
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className={`${fieldClass} mt-3`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.no} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  {extraServiceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                  <option value="Other">Other / not sure</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="date" className="label-micro">
                  Preferred date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className={`${fieldClass} mt-3`}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="label-micro">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`${fieldClass} mt-3 resize-none`}
                  placeholder="Describe the issue or work needed"
                />
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[var(--shadow-red)] sm:col-span-2"
              >
                Request Service via WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
