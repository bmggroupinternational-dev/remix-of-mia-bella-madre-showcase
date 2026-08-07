import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ApartmentCards, AmenityGrid } from "@/components/sections";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { images } from "@/lib/content";

export const Route = createFileRoute("/apartments")({
  head: () => ({
    meta: [
      { title: "Studio & One Bedroom Apartments Morogoro | Mia Bella Madre" },
      {
        name: "description",
        content:
          "13 studio apartments and 11 one bedroom serviced apartments in Msamvu, Morogoro — king beds, full kitchens, smart TVs, air conditioning and daily housekeeping.",
      },
      { property: "og:title", content: "Studio & One Bedroom Apartments Morogoro" },
      {
        property: "og:description",
        content: "Fully furnished studio and one bedroom serviced apartments in Morogoro, Tanzania.",
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
        eyebrow="Accommodation"
        title="Our Apartments"
        description={`${site.counts.total} serviced apartments in total — ${site.counts.studio} studio apartments and ${site.counts.oneBedroom} one bedroom apartments.`}
        image={images.oneBed}
        imageAlt="Living room of a one bedroom serviced apartment"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <ApartmentCards />
      </section>
      <section className="bg-secondary/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Included in every apartment"
            title="Comforts as standard"
          />
          <div className="mt-14">
            <AmenityGrid />
          </div>
        </div>
      </section>
    </>
  );
}
