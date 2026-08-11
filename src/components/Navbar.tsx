import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BookNowButton } from "@/components/BookingModal";
import { navLinks, site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border bg-card/90 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8"
      >
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Mia Bella Madre Apartments"
            className={`h-9 w-auto shrink-0 sm:h-11 ${solid ? "" : "rounded-lg bg-card/90 px-2 py-1 backdrop-blur"}`}
          />
          <span
            className={`hidden text-[0.65rem] uppercase tracking-[0.2em] sm:block ${
              solid ? "text-muted-foreground" : "text-card/80"
            }`}
          >
            Serviced Apartments
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  solid ? "text-foreground/80" : "text-card/90 hover:text-card"
                }`}
                activeProps={{ className: solid ? "!text-primary" : "!text-card" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <BookNowButton className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`grid size-11 place-items-center rounded-full transition-colors lg:hidden ${
              solid ? "text-foreground hover:bg-muted" : "text-card hover:bg-card/20"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-card px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="block border-b border-border/60 py-3.5 text-base font-medium text-foreground"
                  activeProps={{ className: "!text-primary" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <BookNowButton className="mt-5 flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground" />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {site.address.area}, {site.address.city}
          </p>
        </div>
      ) : null}
    </header>
  );
}
