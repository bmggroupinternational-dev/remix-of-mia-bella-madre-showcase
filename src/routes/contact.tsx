import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { images } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking | Serviced Apartments Morogoro" },
      {
        name: "description",
        content:
          "Contact Mia Bella Madre Apartments in Msamvu, Morogoro — call, email or book your studio or one bedroom serviced apartment via WhatsApp.",
      },
      { property: "og:title", content: "Contact & Booking | Mia Bella Madre Apartments" },
      {
        property: "og:description",
        content: "Reach our reservations team in Morogoro, Tanzania.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const message = form.message.trim();
    if (name.length < 2 || name.length > 100) return setError("Please enter your name.");
    if (message.length < 5 || message.length > 1000)
      return setError("Please write a short message.");
    setError(null);
    window.open(
      whatsappLink(
        `Hello ${site.shortName}.\n\nName: ${name}\nEmail: ${form.email.trim().slice(0, 255) || "—"}\n\n${message}`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="cf-name"
          className={fieldClass}
          maxLength={100}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          className={fieldClass}
          maxLength={255}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={5}
          maxLength={1000}
          className={`${fieldClass} resize-y`}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
      </div>
      {error ? (
        <p role="alert" className="text-sm font-medium text-accent">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
      >
        <MessageCircle size={18} />
        Send via WhatsApp
      </button>
    </form>
  );
}

function ContactPage() {
  const details = [
    ...site.phones.map((p, i) => ({
      Icon: Phone,
      label: i === 0 ? "Phone" : "Phone (alternative)",
      value: p.display,
      href: `tel:${p.tel}`,
    })),
    {
      Icon: MessageCircle,
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: whatsappLink(`Hello ${site.shortName}, I would like to enquire about a stay.`),
    },
    { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      Icon: MapPin,
      label: "Location",
      value: `${site.address.area}, ${site.address.city}, ${site.address.country}`,
      href: undefined as string | undefined,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to our team"
        description="Reservations, long-stay rates, airport transfers or a question about the property — we are here."
        image={images.studio}
        imageAlt="Interior of a studio serviced apartment"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Get in touch" title="Contact details" />
            <ul className="mt-8 space-y-4">
              {details.map(({ Icon, label, value, href }) => (
                <Reveal key={label}>
                  <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {label}
                      </span>
                      {href ? (
                        <a href={href} className="break-words font-medium hover:text-primary">
                          {value}
                        </a>
                      ) : (
                        <span className="break-words font-medium">{value}</span>
                      )}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-lg">Business Hours</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  {site.hours.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">{h.label}</dt>
                      <dd className="text-right font-medium">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
              <h2 className="text-2xl">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We usually reply within the hour during office hours.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title={`Map of ${site.name}`}
                src={site.mapEmbed}
                loading="lazy"
                className="h-[320px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="book" className="scroll-mt-24 bg-primary py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-primary-foreground/80">
              Reservations
            </p>
            <h2 className="mt-4 text-3xl text-primary-foreground sm:text-5xl">
              Ready to Stay With Us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Complete the form and your booking details open directly in WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-10">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
