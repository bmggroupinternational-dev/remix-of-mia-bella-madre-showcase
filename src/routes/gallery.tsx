import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryCategories, galleryImages, images } from "@/lib/content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Luxury Accommodation Morogoro | Mia Bella Madre" },
      {
        name: "description",
        content:
          "Browse photos of our studio and one bedroom apartments, bathrooms, kitchens, exterior, playground and grounds in Msamvu, Morogoro.",
      },
      { property: "og:title", content: "Gallery | Mia Bella Madre Apartments" },
      {
        property: "og:description",
        content: "Photography of our luxury serviced apartments in Morogoro, Tanzania.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<string>("All");
  const items =
    active === "All" ? galleryImages : galleryImages.filter((i) => i.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside Mia Bella Madre"
        description="Tap any photograph to view it full screen."
        image={images.bathroom}
        imageAlt="Luxury bathroom with marble finishes and a walk-in shower"
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-wrap lg:px-0">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-colors ${
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <GalleryGrid items={items} />
      </section>
    </>
  );
}
