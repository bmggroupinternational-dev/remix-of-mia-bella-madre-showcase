import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Mia Bella Madre Apartments" },
      {
        name: "description",
        content:
          "Booking, check-in, cancellation and house terms for stays at Mia Bella Madre Apartments in Msamvu, Morogoro.",
      },
      { property: "og:title", content: "Terms & Conditions | Mia Bella Madre Apartments" },
      { property: "og:description", content: "Our booking and stay terms." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-36 lg:px-8">
      <h1 className="text-4xl">Terms &amp; Conditions</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2026</p>
      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-2xl text-foreground">Bookings</h2>
          <p className="mt-3">
            All reservations are subject to availability and are confirmed only once our reservations
            team has replied in writing. Rates quoted are per apartment, per night, unless stated
            otherwise.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">Check-in and check-out</h2>
          <p className="mt-3">
            Check-in is from 14:00 and check-out is until 11:00. Early check-in and late check-out can
            often be arranged in advance, subject to availability.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">Cancellations</h2>
          <p className="mt-3">
            Cancellations made more than 48 hours before arrival are free of charge. Later
            cancellations and no-shows may be charged for the first night of the stay.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">House rules</h2>
          <p className="mt-3">
            Apartments are non-smoking. Guests are asked to respect quiet hours between 22:00 and
            07:00 and are responsible for any damage caused during their stay. Visitors must be
            registered at reception for security reasons.
          </p>
        </section>
      </div>
    </article>
  );
}
