import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { AmenityGrid, WhyChooseUs } from "@/components/sections";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/lib/content";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Apartment Amenities in Morogoro | Mia Bella Madre" },
      {
        name: "description",
        content:
          "Free WiFi, air conditioning, fully equipped kitchens, daily housekeeping, 24-hour security, free parking and a children's playground at our Morogoro serviced apartments.",
      },
      { property: "og:title", content: "Apartment Amenities in Morogoro" },
      {
        property: "og:description",
        content: "Everything included at Mia Bella Madre Apartments, Msamvu, Morogoro.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Amenities"
        title="Considered comforts, quietly delivered"
        description="Sixteen amenities across every apartment and the wider property, so your stay needs no arranging."
        image={images.kitchen}
        imageAlt="Fully equipped modern kitchen in a serviced apartment"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <AmenityGrid />
      </section>
      <section className="bg-secondary/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="Nine reasons guests return" />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
        </div>
      </section>
    </>
  );
}
