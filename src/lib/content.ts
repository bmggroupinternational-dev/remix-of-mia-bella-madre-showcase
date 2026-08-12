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
import diningLoungeAsset from "@/assets/dining-lounge.jpg.asset.json";
import receptionAsset from "@/assets/reception.jpg.asset.json";
import decorVaseAsset from "@/assets/decor-vase.jpg.asset.json";
import decorPlantAsset from "@/assets/decor-plant.jpg.asset.json";
import decorPlant2Asset from "@/assets/decor-plant-2.jpg.asset.json";
import bedroomTvAsset from "@/assets/bedroom-tv.jpg.asset.json";
import windowViewAsset from "@/assets/window-view.jpg.asset.json";
import bedDetailAsset from "@/assets/bed-detail.jpg.asset.json";

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
const diningLoungeImg = diningLoungeAsset.url;
const receptionImg = receptionAsset.url;
const decorVaseImg = decorVaseAsset.url;
const decorPlantImg = decorPlantAsset.url;
const decorPlant2Img = decorPlant2Asset.url;
const bedroomTvImg = bedroomTvAsset.url;
const windowViewImg = windowViewAsset.url;
const bedDetailImg = bedDetailAsset.url;


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
      "Queen bed",
      "Fully equipped kitchenette",
      "\n\nSmart TV",
      "Luxury bathroom with bathtub",
      "Ironing table & Iron",
      "In-room safe",
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
      "Double bed",
      "\n\nSmart TV",
      "Ironing board & Iron",
      "Balcony (limited suites)",
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
  { name: "Outdoor Swimming Pool", icon: "Waves" },

  { name: "Laundry Facilities", icon: "WashingMachine" },
  { name: "Hot Water", icon: "Droplets" },
  { name: "Comfortable Bedding", icon: "BedDouble" },
  { name: "Workspace", icon: "Laptop" },
  { name: " Safe Box", icon: "Lock" },
  { name: "Modern Interior", icon: "Armchair" },
] as const;

export const whyChooseUs = [
  {
    title: "Prime Location",
    body: "Minutes from Msamvu bus terminal, Morogoro town centre, SGR station and shops.",
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
    body: "A trained team delivering warm, discreet, and committed service.",
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
  "Interiors & Details",
] as const;

export const galleryImages: GalleryImage[] = [
  { src: studioImg, alt: "Studio apartment with king bed, wall-mounted TV and private balcony", category: "Studio Apartments" },
  { src: studioKitchenetteImg, alt: "Studio kitchenette with walnut cabinetry, microwave and sink", category: "Studio Apartments" },
  { src: studioHobImg, alt: "Studio kitchenette detail with gas hob and marble counter", category: "Studio Apartments" },
  { src: oneBedImg, alt: "One bedroom apartment living room with sofa, TV and glass coffee table", category: "One Bedroom Apartments" },
  { src: balconyImg, alt: "One bedroom apartment kitchen and lounge with garden view", category: "One Bedroom Apartments" },
  { src: detailImg, alt: "One bedroom living area detail with walnut media unit", category: "One Bedroom Apartments" },
  { src: studioBathroomImg, alt: "Marble bathroom with glass shower, bathtub and warm towels", category: "Bathrooms" },
  { src: studioBathDetailImg, alt: "Bathtub and marble shower detail with amenities niche", category: "Bathrooms" },
  { src: bathroomImg, alt: "One bedroom bathroom with walk-in shower and vessel basin", category: "Bathrooms" },
  { src: kitchenImg, alt: "Fully equipped kitchen with timber cabinetry and washing machine", category: "Kitchen" },
  { src: studioKitchenetteImg, alt: "Compact studio kitchenette with cookware and glassware", category: "Kitchen" },

  { src: exteriorImg, alt: "Mia Bella Madre Apartments illuminated at night under a full moon", category: "Exterior" },
  { src: propertyImg, alt: "Apartment facade with glass balconies and tiled courtyard at dusk", category: "Exterior" },
  { src: playgroundImg, alt: "Children's playground with slide and swings on the lawn", category: "Playground" },
  { src: playgroundImg, alt: "Green lawn and play area for families", category: "Playground" },
  { src: propertyImg, alt: "Tiled courtyard and colonnade of the property", category: "Property" },
  { src: exteriorImg, alt: "Illuminated balconies of the apartment building at night", category: "Property" },
  { src: diningLoungeImg, alt: "Dining area with walnut tables, olive leather chairs and a crystal chandelier", category: "Property" },
  { src: receptionImg, alt: "Reception desk with marble counter overlooking the dining lounge", category: "Property" },
  { src: windowViewImg, alt: "Uluguru mountain and green field views from an apartment window", category: "Interiors & Details" },
  { src: bedDetailImg, alt: "Crisp white linen and Mia Bella Madre welcome card on the bedside table", category: "Interiors & Details" },
  { src: bedroomTvImg, alt: "Bedroom with wall-mounted TV, floating walnut console and lit display shelving", category: "Interiors & Details" },
  { src: decorVaseImg, alt: "White ceramic vase with blossoms on a glass and walnut coffee table", category: "Interiors & Details" },
  { src: decorPlantImg, alt: "Walnut media unit with reed diffuser and eucalyptus tree in a woven basket", category: "Interiors & Details" },
  { src: decorPlant2Img, alt: "Living room corner with slatted panelling, eucalyptus tree and soft drapery", category: "Interiors & Details" },
];

export const testimonials = [
  {
    quote: "Apartments are brand new, luxurious and with all needed comforts.",
    name: "Giacomo G.",
    role: "Holiday Travellers, Switzerland",
  },
  {
    quote: "Excelled accommodations.",
    name: "Ilkay Exquisite",
    role: "Local Guide, Dar es Salaam",
  },
  {
    quote: "We had a wonderful stay and would happily recommend this place to anyone visiting.",
    name: "Avain",
    role: "Bolt Consultant , Dar es Salaam",
  },
];
