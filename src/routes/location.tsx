import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { LocationPanel } from "@/components/sections";
import { images } from "@/lib/content";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Msamvu, Morogoro | Mia Bella Madre Apartments" },
      {
        name: "description",
        content:
          "Find Mia Bella Madre Apartments in Msamvu, Morogoro, Tanzania — close to the town centre, restaurants, shopping, transport, hospitals and universities.",
      },
      { property: "og:title", content: "Location — Msamvu, Morogoro" },
      {
        property: "og:description",
        content: "How to find our luxury serviced apartments in Morogoro, Tanzania.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Location"
        title="Msamvu, Morogoro"
        description="A calm residential setting minutes from everything that matters in Morogoro."
        image={images.property}
        imageAlt="Grounds of the property with the Uluguru mountains in the distance"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <LocationPanel />
      </section>
    </>
  );
}
