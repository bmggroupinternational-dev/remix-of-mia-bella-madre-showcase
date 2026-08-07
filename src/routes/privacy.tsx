import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Mia Bella Madre Apartments" },
      {
        name: "description",
        content:
          "How Mia Bella Madre Apartments in Morogoro collects, uses and protects guest information.",
      },
      { property: "og:title", content: "Privacy Policy | Mia Bella Madre Apartments" },
      { property: "og:description", content: "Our guest privacy commitments." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-36 lg:px-8">
      <h1 className="text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: January 2026</p>
      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-2xl text-foreground">Information we collect</h2>
          <p className="mt-3">
            When you make a booking enquiry we collect the name, email address, phone number, stay
            dates and any special requests you choose to share. Enquiries submitted through this
            website are sent to our reservations team via WhatsApp.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">How we use it</h2>
          <p className="mt-3">
            Your details are used solely to confirm availability, manage your reservation and respond
            to your questions. We do not sell guest information, and we do not share it with third
            parties except where required to deliver a service you have requested.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">Retention and security</h2>
          <p className="mt-3">
            Reservation records are retained only as long as necessary for legal and accounting
            purposes and are stored securely with restricted access.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">Your choices</h2>
          <p className="mt-3">
            You may request a copy of the information we hold about you, or ask us to correct or
            delete it, by writing to{" "}
            <a href={`mailto:${site.email}`} className="text-primary hover:underline">
              {site.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
