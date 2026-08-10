export const site = {
  name: "Mia Bella Madre Apartments",
  shortName: "Mia Bella Madre",
  tagline: "Luxury Serviced Apartments in Morogoro",
  address: {
    area: "Msamvu",
    city: "Morogoro",
    country: "Tanzania",
  },
  phones: [
    { display: "+255 725 478 478", tel: "+255725478478", whatsapp: "255725478478" },
    { display: "+255 797 672 678", tel: "+255797672678", whatsapp: "255797672678" },
  ],
  phoneDisplay: "+255 725 478 478",
  phone: "+255725478478",
  whatsapp: "255725478478",
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
  { to: "/apartments", label: "Apartments & Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;
