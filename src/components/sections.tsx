import { motion } from "motion/react";
import { icons } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BookNowButton } from "@/components/BookingModal";
import { amenities, apartments, whyChooseUs, testimonials, images } from "@/lib/content";
import { site } from "@/lib/site";

export function AmenityGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {amenities.map((a, i) => {
        const Icon = icons[a.icon as keyof typeof icons];
        return (
          <Reveal key={a.name} delay={(i % 4) * 0.06}>
            <div className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {Icon ? <Icon size={20} /> : null}
              </span>
              <span className="text-sm font-medium leading-snug">{a.name}</span>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function ApartmentCards() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {apartments.map((apt, i) => (
        <Reveal key={apt.slug} delay={i * 0.1}>
          <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-lift">
            <div className="zoom-media relative aspect-[4/3]">
              <img
                src={apt.image}
                alt={`${apt.name} at ${site.shortName}`}
                loading="lazy"
                className="size-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-card/85 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
                {apt.count} available
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-2xl">{apt.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{apt.blurb}</p>
              <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {apt.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-1">
                <BookNowButton className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow" />
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {whyChooseUs.map((item, i) => {
        const Icon = icons[item.icon as keyof typeof icons];
        return (
          <Reveal key={item.title} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                {Icon ? <Icon size={22} /> : null}
              </span>
              <h3 className="mt-5 text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.1}>
          <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="flex gap-1 text-gold" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} aria-hidden="true">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-semibold">{t.name}</span>
              <span className="block text-muted-foreground">{t.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function StatStrip() {
  const stats = [
    { value: `${site.counts.total}`, label: "Serviced apartments" },
    { value: `${site.counts.studio}`, label: "Studio apartments" },
    { value: `${site.counts.oneBedroom}`, label: "One bedroom apartments" },
    { value: "24/7", label: "Security & reception" },
  ];
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="bg-card px-6 py-8 text-center"
        >
          <p className="font-display text-4xl text-primary">{s.value}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function LocationPanel() {
  const nearby = ["Town Centre", "Restaurants", "Shopping", "SGR Station", "Conference Venues", "Bus Terminal"];
  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title={`Map of ${site.name} in ${site.address.area}, ${site.address.city}`}
            src={site.mapEmbed}
            loading="lazy"
            className="h-[380px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <p className="eyebrow">Where to find us</p>
          <h3 className="mt-3 text-2xl">
            {site.address.area}, {site.address.city}
          </h3>
          <address className="mt-3 not-italic leading-relaxed text-muted-foreground">
            {site.address.area}
            <br />
            {site.address.city}
            <br />
            {site.address.country}
          </address>
          <h4 className="mt-8 text-base">Nearby</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {nearby.map((n) => (
              <li
                key={n}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground/80"
              >
                {n}
              </li>
            ))}
          </ul>
          <img
            src={images.property}
            alt="Grounds of Mia Bella Madre Apartments with the Uluguru mountains beyond"
            loading="lazy"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
          />
        </div>
      </Reveal>
    </div>
  );
}
