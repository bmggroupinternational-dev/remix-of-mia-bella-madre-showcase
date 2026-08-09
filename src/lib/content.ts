import studioAsset from "@/assets/studio.jpg.asset.json";
import oneBedAsset from "@/assets/one-bedroom.jpg.asset.json";
import bathroomAsset from "@/assets/bathroom.jpg.asset.json";
import kitchenAsset from "@/assets/kitchen.jpg.asset.json";
import exteriorAsset from "@/assets/hero-exterior.jpg.asset.json";
import playgroundAsset from "@/assets/playground.jpg.asset.json";
import propertyAsset from "@/assets/property.jpg.asset.json";
import detailAsset from "@/assets/detail-1.jpg.asset.json";
import balconyAsset from "@/assets/balcony.jpg.asset.json";
import studioKitchenetteAsset from "@/assets/studio-kitchenette.jpg.asset.json";
import studioHobAsset from "@/assets/studio-hob.jpg.asset.json";
import studioBathroomAsset from "@/assets/studio-bathroom.jpg.asset.json";
import studioBathDetailAsset from "@/assets/studio-bath-detail.jpg.asset.json";

const studioImg = studioAsset.url;
const oneBedImg = oneBedAsset.url;
const bathroomImg = bathroomAsset.url;
const kitchenImg = kitchenAsset.url;
const exteriorImg = exteriorAsset.url;
const playgroundImg = playgroundAsset.url;
const propertyImg = propertyAsset.url;
const detailImg = detailAsset.url;
const balconyImg = balconyAsset.url;
const studioKitchenetteImg = studioKitchenetteAsset.url;
const studioHobImg = studioHobAsset.url;
const studioBathroomImg = studioBathroomAsset.url;
const studioBathDetailImg = studioBathDetailAsset.url;


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
  { src: studioImg, alt: "Studio apartment with king bed, wall-mounted TV and air conditioning", category: "Studio Apartments" },
  { src: detailImg, alt: "Living area detail with walnut media unit and side tables", category: "Studio Apartments" },
  { src: balconyImg, alt: "Open-plan kitchen and sofa beside a full-height window", category: "Studio Apartments" },
  { src: oneBedImg, alt: "One bedroom apartment living room with sofa, TV and glass coffee table", category: "One Bedroom Apartments" },
  { src: balconyImg, alt: "One bedroom apartment kitchen and lounge with garden view", category: "One Bedroom Apartments" },
  { src: studioImg, alt: "One bedroom apartment bedroom with king bed and reading lamp", category: "One Bedroom Apartments" },
  { src: bathroomImg, alt: "Marble bathroom with walk-in glass shower and vessel basin", category: "Bathrooms" },
  { src: bathroomImg, alt: "Bathroom vanity with marble surround and mirror", category: "Bathrooms" },
  { src: kitchenImg, alt: "Fully equipped kitchen with timber cabinetry and washing machine", category: "Kitchen" },
  { src: kitchenImg, alt: "Kitchen countertop with hob, sink and cookware", category: "Kitchen" },
  { src: exteriorImg, alt: "Mia Bella Madre Apartments illuminated at night under a full moon", category: "Exterior" },
  { src: propertyImg, alt: "Apartment facade with glass balconies and tiled courtyard at dusk", category: "Exterior" },
  { src: playgroundImg, alt: "Children's playground with slide and swings on the lawn", category: "Playground" },
  { src: playgroundImg, alt: "Green lawn and play area for families", category: "Playground" },
  { src: propertyImg, alt: "Tiled courtyard and colonnade of the property", category: "Property" },
  { src: exteriorImg, alt: "Illuminated balconies of the apartment building at night", category: "Property" },
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
