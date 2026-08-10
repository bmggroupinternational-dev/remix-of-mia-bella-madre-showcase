import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ApartmentCards, AmenityGrid, WhyChooseUs } from "@/components/sections";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/apartments")({
  head: () => ({
    meta: [
      { title: "Apartments & Amenities Morogoro | Mia Bella Madre" },
      {
        name: "description",
        content:
          "13 studio and 11 one bedroom serviced apartments in Msamvu, Morogoro — king beds, full kitchens, smart TVs, free WiFi, daily housekeeping, 24-hour security and free parking.",
      },
      { property: "og:title", content: "Apartments & Amenities | Mia Bella Madre" },
      {
        property: "og:description",
        content:
          "Fully furnished studio and one bedroom serviced apartments in Morogoro, with every amenity included.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/apartments" },
    ],
    links: [{ rel: "canonical", href: "/apartments" }],
  }),
  component: ApartmentsPage,
});

function ApartmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Accommodation & Amenities"
        title="Our Apartments"
        description={`${site.counts.total} serviced apartments in total — ${site.counts.studio} studio apartments and ${site.counts.oneBedroom} one bedroom apartments, with every comfort included.`}
        image={images.oneBed}
        imageAlt="Living room of a one bedroom serviced apartment"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <ApartmentCards />
      </section>
      <section id="amenities" className="scroll-mt-24 bg-secondary/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Amenities"
            title="Everything included, nothing to arrange"
            description="Sixteen thoughtful comforts across every apartment and the wider property."
          />
          <div className="mt-14">
            <AmenityGrid />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="Why Choose Us" title="Nine reasons guests return" />
        <div className="mt-14">
          <WhyChooseUs />
        </div>
      </section>
    </>
  );
}
