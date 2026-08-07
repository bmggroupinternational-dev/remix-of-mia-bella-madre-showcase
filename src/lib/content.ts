import studioImg from "@/assets/studio.jpg";
import oneBedImg from "@/assets/one-bedroom.jpg";
import bathroomImg from "@/assets/bathroom.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import exteriorImg from "@/assets/hero-exterior.jpg";
import playgroundImg from "@/assets/playground.jpg";
import propertyImg from "@/assets/property.jpg";
import detailImg from "@/assets/detail-1.jpg";
import balconyImg from "@/assets/balcony.jpg";

export const images = {
  studio: studioImg,
  oneBed: oneBedImg,
  bathroom: bathroomImg,
  kitchen: kitchenImg,
  exterior: exteriorImg,
  playground: playgroundImg,
  property: propertyImg,
  detail: detailImg,
  balcony: balconyImg,
};

export type Apartment = {
  slug: string;
  name: string;
  count: number;
  image: string;
  blurb: string;
  features: string[];
};

export const apartments: Apartment[] = [
  {
    slug: "studio",
    name: "Studio Apartment",
    count: 13,
    image: studioImg,
    blurb:
      "An intelligently composed open-plan retreat where sleeping, dining and working spaces flow into one another — ideal for solo travellers and couples.",
    features: [
      "Modern studio layout",
      "King bed",
      "Fully equipped kitchenette",
      "Smart TV",
      "High-speed WiFi",
      "Air conditioning",
      "Luxury bathroom",
      "Work desk",
      "In-room safe",
      "Daily housekeeping",
    ],
  },
  {
    slug: "one-bedroom",
    name: "One Bedroom Apartment",
    count: 11,
    image: oneBedImg,
    blurb:
      "A generous residence with a private bedroom, separate living room and full kitchen — designed for families, relocations and extended stays.",
    features: [
      "Separate bedroom",
      "Living room",
      "Full kitchen",
      "Dining area",
      "King bed",
      "Smart TV",
      "Air conditioning",
      "Luxury bathroom",
      "Balcony (if available)",
      "Ideal for long stays",
    ],
  },
];

export const amenities = [
  { name: "Free WiFi", icon: "Wifi" },
  { name: "Air Conditioning", icon: "Wind" },
  { name: "Fully Equipped Kitchen", icon: "CookingPot" },
  { name: "Housekeeping", icon: "Sparkles" },
  { name: "Smart TV", icon: "Tv" },
  { name: "Free Parking", icon: "Car" },
  { name: "24-hour Security", icon: "ShieldCheck" },
  { name: "Children's Playground", icon: "TreePalm" },
  { name: "Luxury Bathroom", icon: "ShowerHead" },
  { name: "Kitchenette", icon: "Utensils" },
  { name: "Laundry Facilities", icon: "WashingMachine" },
  { name: "Hot Water", icon: "Droplets" },
  { name: "Comfortable Bedding", icon: "BedDouble" },
  { name: "Workspace", icon: "Laptop" },
  { name: "Safe", icon: "Lock" },
  { name: "Modern Interior", icon: "Armchair" },
] as const;

export const whyChooseUs = [
  {
    title: "Prime Location",
    body: "Minutes from Msamvu bus terminal, Morogoro town centre, shops and hospitals.",
    icon: "MapPin",
  },
  {
    title: "Luxury Design",
    body: "Contemporary interiors, warm materials and considered finishes in every apartment.",
    icon: "Gem",
  },
  {
    title: "Ideal for Business Travellers",
    body: "Dedicated workspaces, reliable high-speed WiFi and quiet, private surroundings.",
    icon: "Briefcase",
  },
  {
    title: "Family Friendly",
    body: "Spacious one bedroom homes and a safe children's playground on the grounds.",
    icon: "Users",
  },
  {
    title: "Fully Serviced",
    body: "Daily housekeeping, fresh linen and an attentive team available around the clock.",
    icon: "ConciergeBell",
  },
  {
    title: "Modern Kitchens",
    body: "Cook as you would at home with full kitchens and well-appointed kitchenettes.",
    icon: "CookingPot",
  },
  {
    title: "Peaceful Environment",
    body: "A calm, green residential setting away from the noise of the main road.",
    icon: "Leaf",
  },
  {
    title: "Professional Hospitality",
    body: "A trained team delivering warm, discreet, internationally minded service.",
    icon: "HandHeart",
  },
  {
    title: "Secure Property",
    body: "Gated grounds, 24-hour security and secure private parking for every guest.",
    icon: "ShieldCheck",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export const galleryCategories = [
  "All",
  "Studio Apartments",
  "One Bedroom Apartments",
  "Bathrooms",
  "Kitchen",
  "Exterior",
  "Playground",
  "Property",
] as const;

export const galleryImages: GalleryImage[] = [
  { src: studioImg, alt: "Studio apartment with king bed and open kitchenette", category: "Studio Apartments" },
  { src: detailImg, alt: "Reading corner of a studio apartment with armchair and lamp", category: "Studio Apartments" },
  { src: studioImg, alt: "Studio apartment workspace beside a bright window", category: "Studio Apartments" },
  { src: oneBedImg, alt: "One bedroom apartment living room with sofa and dining area", category: "One Bedroom Apartments" },
  { src: balconyImg, alt: "Private balcony overlooking the Morogoro hills", category: "One Bedroom Apartments" },
  { src: oneBedImg, alt: "One bedroom apartment dining space", category: "One Bedroom Apartments" },
  { src: bathroomImg, alt: "Luxury bathroom with walk-in glass shower and marble finishes", category: "Bathrooms" },
  { src: bathroomImg, alt: "Bathroom vanity with backlit mirror and fresh towels", category: "Bathrooms" },
  { src: kitchenImg, alt: "Fully equipped modern apartment kitchen", category: "Kitchen" },
  { src: kitchenImg, alt: "Kitchen countertop with appliances and pendant lighting", category: "Kitchen" },
  { src: exteriorImg, alt: "Mia Bella Madre Apartments exterior at golden hour", category: "Exterior" },
  { src: propertyImg, alt: "Landscaped pathway on the apartment grounds", category: "Exterior" },
  { src: playgroundImg, alt: "Children's playground in the garden of the property", category: "Playground" },
  { src: playgroundImg, alt: "Green lawn and play area for families", category: "Playground" },
  { src: propertyImg, alt: "Property grounds with the Uluguru mountains beyond", category: "Property" },
  { src: exteriorImg, alt: "Illuminated balconies of the apartment building at dusk", category: "Property" },
];

export const testimonials = [
  {
    quote: "A hidden gem in Morogoro. Beautiful apartments with exceptional service.",
    name: "Amina H.",
    role: "Business traveller, Dar es Salaam",
  },
  {
    quote: "The apartment was spotless, modern and perfect for our family.",
    name: "The Mushi Family",
    role: "Holiday guests",
  },
  {
    quote: "Will definitely stay again.",
    name: "Daniel K.",
    role: "Consultant, Arusha",
  },
];
