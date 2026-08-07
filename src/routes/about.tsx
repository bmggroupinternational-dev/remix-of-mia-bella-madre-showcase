import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Testimonials, StatStrip } from "@/components/sections";
import { images } from "@/lib/content";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Luxury Accommodation Tanzania | Mia Bella Madre" },
      {
        name: "description",
        content:
          "Mia Bella Madre Apartments provides luxury, privacy and professional hospitality in Msamvu, Morogoro — serviced apartments for business travellers, families and expatriates.",
      },
      { property: "og:title", content: "About Mia Bella Madre Apartments" },
      {
        property: "og:description",
        content: "Our story, our standards and our approach to hospitality in Morogoro.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
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
    body: "King beds, quality linen, silent air conditioning and reliably hot water, every single day.",
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

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A home that behaves like a hotel"
        description={`${site.counts.total} serviced apartments in ${site.address.area}, created for guests who want more space, more privacy and more care.`}
        image={images.exterior}
        imageAlt="Exterior of Mia Bella Madre Apartments at dusk"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Built for the way people actually travel"
              description="Mia Bella Madre Apartments offers fully furnished serviced apartments designed for business travellers, families, expatriates and holiday guests. We believe a longer stay should not mean a smaller life."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Guests arrive to a fully prepared apartment — beds made, kitchen stocked with the
                essentials, WiFi connected — and settle in within minutes. Housekeeping visits daily,
                security is present around the clock and our team is a phone call away, whether you
                need an airport transfer or a recommendation for dinner in town.
              </p>
              <Link
                to="/contact"
                hash="book"
                className="mt-7 inline-flex min-h-11 items-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Enquire about a stay
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="zoom-media rounded-3xl border border-border shadow-soft">
              <img
                src={images.balcony}
                alt="Private balcony with seating overlooking Morogoro"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <StatStrip />
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-24">
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

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="Testimonials" title="In our guests' words" />
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>
    </>
  );
}
