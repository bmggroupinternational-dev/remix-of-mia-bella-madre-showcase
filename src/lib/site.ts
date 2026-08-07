export const site = {
  name: "Mia Bella Madre Apartments",
  shortName: "Mia Bella Madre",
  tagline: "Luxury Serviced Apartments in Morogoro",
  address: {
    area: "Msamvu",
    city: "Morogoro",
    country: "Tanzania",
  },
  phoneDisplay: "+255 754 000 000",
  phone: "+255754000000",
  whatsapp: "255754000000",
  email: "stay@miabellamadre.co.tz",
  hours: [
    { label: "Reception", value: "Open 24 hours, 7 days a week" },
    { label: "Check-in", value: "From 14:00" },
    { label: "Check-out", value: "Until 11:00" },
    { label: "Office", value: "Mon – Sat, 08:00 – 18:00" },
  ],
  counts: {
    total: 24,
    studio: 13,
    oneBedroom: 11,
  },
  mapEmbed:
    "https://www.google.com/maps?q=Msamvu,+Morogoro,+Tanzania&output=embed",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/apartments", label: "Apartments" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
