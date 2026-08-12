import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { BookNowButton } from "@/components/BookingModal";
import { navLinks, site } from "@/lib/site";
import logoAsset from "@/assets/mia-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="grid size-10 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground"
              aria-hidden="true"
            >
              M
            </span>
            <span className="font-display text-lg">Mia Bella Madre</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.tagline}. {site.counts.total} fully furnished apartments in{" "}
            {site.address.area}, {site.address.city}.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "X" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`${site.shortName} on ${label}`}
                className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-primary" />
              <span>
                {site.address.area}
                <br />
                {site.address.city}, {site.address.country}
              </span>
            </li>
            {site.phones.map((p) => (
              <li key={p.tel} className="flex gap-3">
                <Phone size={17} className="mt-0.5 shrink-0 text-primary" />
                <a href={`tel:${p.tel}`} className="hover:text-primary">
                  {p.display}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <Mail size={17} className="mt-0.5 shrink-0 text-primary" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-primary">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base">Stay With Us</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Studio and one bedroom apartments available for nightly, weekly and long stays.
          </p>
          <BookNowButton className="mt-5 inline-flex min-h-11 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5">
            Book Your Stay
          </BookNowButton>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl justify-center px-5 pt-10">
          <img
            src={logoAsset.url}
            alt={`${site.name} logo`}
            loading="lazy"
            className="h-16 w-auto sm:h-20"
          />
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
