import { useState } from "react";
import { motion } from "motion/react";
import { site, whatsappLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-soft outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    apartment: "Studio Apartment",
    guests: "1",
    requests: "",
  });
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.trim();
    if (name.length < 2 || name.length > 100) {
      setError("Please enter your full name.");
      return;
    }
    if (phone.length < 7 || phone.length > 25) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (!form.checkIn || !form.checkOut) {
      setError("Please choose your check-in and check-out dates.");
      return;
    }
    setError(null);

    const message = [
      `Hello ${site.shortName}, I would like to make a booking.`,
      ``,
      `Name: ${name}`,
      `Email: ${form.email.trim().slice(0, 255) || "—"}`,
      `Phone: ${phone}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Apartment: ${form.apartment}`,
      `Guests: ${form.guests}`,
      `Special requests: ${form.requests.trim().slice(0, 1000) || "—"}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <div className="sm:col-span-1">
        <label htmlFor="bf-name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="bf-name"
          className={fieldClass}
          value={form.name}
          maxLength={100}
          onChange={(e) => set("name")(e.target.value)}
          placeholder="Your full name"
          required
        />
      </div>
      <div>
        <label htmlFor="bf-email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="bf-email"
          type="email"
          className={fieldClass}
          value={form.email}
          maxLength={255}
          onChange={(e) => set("email")(e.target.value)}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="bf-phone" className="mb-1.5 block text-sm font-medium">
          Phone
        </label>
        <input
          id="bf-phone"
          type="tel"
          className={fieldClass}
          value={form.phone}
          maxLength={25}
          onChange={(e) => set("phone")(e.target.value)}
          placeholder="+255 ..."
          required
        />
      </div>
      <div>
        <label htmlFor="bf-guests" className="mb-1.5 block text-sm font-medium">
          Guests
        </label>
        <select
          id="bf-guests"
          className={fieldClass}
          value={form.guests}
          onChange={(e) => set("guests")(e.target.value)}
        >
          {["1", "2", "3", "4", "5+"].map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="bf-in" className="mb-1.5 block text-sm font-medium">
          Check-in
        </label>
        <input
          id="bf-in"
          type="date"
          className={fieldClass}
          value={form.checkIn}
          onChange={(e) => set("checkIn")(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="bf-out" className="mb-1.5 block text-sm font-medium">
          Check-out
        </label>
        <input
          id="bf-out"
          type="date"
          className={fieldClass}
          value={form.checkOut}
          onChange={(e) => set("checkOut")(e.target.value)}
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="bf-type" className="mb-1.5 block text-sm font-medium">
          Apartment Type
        </label>
        <select
          id="bf-type"
          className={fieldClass}
          value={form.apartment}
          onChange={(e) => set("apartment")(e.target.value)}
        >
          <option>Studio Apartment</option>
          <option>One Bedroom Apartment</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="bf-req" className="mb-1.5 block text-sm font-medium">
          Special Requests
        </label>
        <textarea
          id="bf-req"
          rows={4}
          maxLength={1000}
          className={`${fieldClass} resize-y`}
          value={form.requests}
          onChange={(e) => set("requests")(e.target.value)}
          placeholder="Airport pickup, early check-in, cot for a child…"
        />
      </div>

      {error ? (
        <p role="alert" className="sm:col-span-2 text-sm font-medium text-accent">
          {error}
        </p>
      ) : null}

      <div className="sm:col-span-2">
        <motion.button
          type="submit"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-glow sm:w-auto"
        >
          <MessageCircle size={18} />
          Book via WhatsApp
        </motion.button>
        <p className="mt-3 text-xs text-muted-foreground">
          Your details open in WhatsApp so our reservations team can confirm availability.
        </p>
      </div>
    </form>
  );
}
