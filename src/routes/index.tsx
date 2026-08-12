import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import {
  AmenityGrid,
  ApartmentCards,
  LocationPanel,
  StatStrip,
  Testimonials,
  WhyChooseUs,
} from "@/components/sections";
import { BookingForm } from "@/components/BookingForm";
import { BookNowButton } from "@/components/BookingModal";
import { galleryImages, images } from "@/lib/content";
import { site } from "@/lib/site";
import heroAsset from "@/assets/hero-exterior.jpg.asset.json";
const heroImg = heroAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Serviced Apartments in Morogoro | Mia Bella Madre" },
      {
        name: "description",
        content:
          "Mia Bella Madre Apartments offers 24 luxury serviced apartments in Msamvu, Morogoro — 13 studios and 11 one bedroom homes for business, family and holiday stays.",
      },
      { property: "og:title", content: "Luxury Serviced Apartments in Morogoro | Mia Bella Madre" },
      {
        property: "og:description",
        content:
          "Fully furnished studio and one bedroom serviced apartments in Msamvu, Morogoro, Tanzania.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ApartmentComplex",
          name: site.name,
          description:
            "Luxury serviced apartments in Msamvu, Morogoro, Tanzania. 13 studio and 11 one bedroom apartments.",
          numberOfAccommodationUnits: site.counts.total,
          address: {
            "@type": "PostalAddress",
            addressLocality: site.address.city,
            addressRegion: site.address.area,
            addressCountry: "TZ",
          },
          telephone: site.phoneDisplay,
          email: site.email,
        }),
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    title: "Luxury",
    body: "Considered materials, warm lighting and furniture chosen for how it feels, not only how it looks.",
  },
  {
    title: "Privacy",
    body: "Your own front door, your own kitchen, your own rhythm — with service that stays discreet.",
  },
  {
    title: "Comfort",
    body: "Queen sized beds, quality linen, silent air conditioning and reliably hot water, every single day.",
  },
  {
    title: "Modern Finishes",
    body: "Contemporary bathrooms, fitted kitchens and smart entertainment throughout the property.",
  },
  {
    title: "Excellent Location",
    body: "Msamvu places you minutes from Morogoro's centre, transport links and daily essentials.",
  },
  {
    title: "Professional Hospitality",
    body: "A trained resident team delivering internationally minded service with genuine Tanzanian warmth.",
  },
];

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-dvh items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Mia Bella Madre Apartments illuminated at night in Msamvu, Morogoro"
          width={1920}
          height={1280}
          className="size-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/45 to-foreground/80" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="mx-auto w-full max-w-7xl px-5 pb-24 pt-36 lg:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-xs uppercase tracking-[0.32em] text-card/85"
        >
          {site.address.area} · {site.address.city} · {site.address.country}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl text-4xl leading-[1.08] text-card sm:text-6xl lg:text-7xl"
        >
          Luxury Serviced Apartments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-card/90"
        >
          Experience Comfort, Style &amp; Convenience in Morogoro.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <BookNowButton className="inline-flex min-h-12 items-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
            Book Your Stay
          </BookNowButton>
          <Link
            to="/apartments"
            className="inline-flex min-h-12 items-center rounded-full border border-card/40 bg-card/10 px-8 text-sm font-semibold text-card backdrop-blur transition-colors hover:bg-card/20"
          >
            Explore Apartments
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="zoom-media rounded-3xl border border-border shadow-soft">
              <img
                src={images.detail}
                alt="Warmly lit corner of a Mia Bella Madre studio apartment"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Mia Bella Madre"
              title="A refined address in the heart of Morogoro"
              description="Mia Bella Madre Apartments offers fully furnished serviced apartments designed for business travellers, families, expatriates and holiday guests. Twenty-four residences — 13 studios and 11 one bedroom apartments — combine modern finishes with the privacy of your own home."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Every detail is considered: quiet, secure grounds, generous natural light, thoughtful
                storage and a hospitality team that anticipates rather than reacts. Whether you stay a
                night or a season, you arrive to a home that is already looking after you.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Guests arrive to a fully prepared apartment — beds made, kitchen stocked with the
                essentials, WiFi connected — and settle in within minutes. Housekeeping visits daily,
                security is present around the clock and our team is a phone call away, whether you
                need an SGR transfer or a recommendation for dinner in town.
              </p>
              <BookNowButton className="mt-7 inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
                Enquire about a stay
              </BookNowButton>
            </Reveal>
          </div>
        </div>
        <div className="mt-16">
          <StatStrip />
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="What we stand for" title="Six commitments" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Featured Apartments"
            title="Two ways to live well"
            description="Choose the layout that suits your stay. Every apartment is serviced daily and ready the moment you arrive."
          />
          <div className="mt-14">
            <ApartmentCards />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Amenities"
          title="Everything included, nothing to arrange"
          description="Sixteen thoughtful comforts across every apartment and the wider property."
        />
        <div className="mt-14">
          <AmenityGrid />
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The difference is in the service"
          />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Gallery"
          title="A closer look"
          description="Interiors, bathrooms, kitchens and grounds photographed across the property."
        />
        <div className="mt-14">
          <GalleryGrid items={galleryImages.slice(0, 6)} />
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-7 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            View full gallery
          </Link>
        </Reveal>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="Guests on staying with us" />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Location"
          title="Msamvu, Morogoro"
          description="Close to the town centre, transport and everyday essentials — yet peacefully set back from the noise."
        />
        <div className="mt-14">
          <LocationPanel />
        </div>
      </section>

      <section id="book" className="scroll-mt-24 bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-primary-foreground/80">
              Reservations
            </p>
            <h2 className="mt-4 text-3xl text-primary-foreground sm:text-5xl">
              Ready to Stay With Us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Send us your dates and we will confirm availability on WhatsApp within the hour.
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
