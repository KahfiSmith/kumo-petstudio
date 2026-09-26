export interface StudioContact {
  emergencyPhone: string;
  formattedEmergencyPhone: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  address: string;
  district: string;
  city: string;
  fullAddress: string;
  googleMapsUrl: string;
  openStreetMapUrl: string;
  instagramHandle: string;
  instagramUrl: string;
}

export interface OperatingSchedule {
  days: string;
  time: string;
}

export interface GroomingService {
  id: string;
  name: string;
  category: "signature-spa" | "gentle-grooming" | "wellness-therapy";
  tag: string;
  shortDesc: string;
  duration: string;
  priceStart: string;
  image: string;
  suitableFor: string;
  comfortFeatures: string[];
}

export interface HotelSuite {
  id: string;
  name: string;
  tier: "deluxe" | "executive" | "presidential";
  tag: string;
  description: string;
  dimensions: string;
  nightlyRate: string;
  image: string;
  features: string[];
  cameraAccess: boolean;
  outdoorPlaySessions: string;
}

export interface PantryItem {
  id: string;
  name: string;
  category: "raw-food" | "organic-treats" | "apothecary-supplements" | "lifestyle-wear";
  tag: string;
  description: string;
  price: string;
  origin: string;
  image: string;
  nutritionHighlight: string;
  isProductOfTheWeek?: boolean;
  badge?: string;
}

export interface CareStandard {
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface TransformationStory {
  id: string;
  petName: string;
  breed: string;
  service: string;
  treatmentDuration: string;
  image: string;
  ownerName: string;
  resultHighlight: string;
  story: string;
}

export interface CareTeamMember {
  id: string;
  name: string;
  title: string;
  specialization: string;
  certifications: string;
  experience: string;
  photo: string;
  bio: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  petName: string;
  petInfo: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verifiedSource: string;
}

export interface PetPersonality {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  href: string;
  targetCategory: string;
}

export interface SocialCommunityPost {
  id: string;
  image: string;
  petName: string;
  caption: string;
  tag: string;
}

export interface StorePromo {
  badge: string;
  headline: string;
  subheadline: string;
  code: string;
  ctaText: string;
  whatsappMessage: string;
}

export interface QuickCategory {
  id: string;
  name: string;
  shortDesc: string;
  bgHex: string;
  accentHex: string;
  image: string;
  href: string;
}

export interface StudioConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  operatingLicense: string;
  contact: StudioContact;
  schedule: OperatingSchedule[];
  groomingServices: GroomingService[];
  hotelSuites: HotelSuite[];
  pantryItems: PantryItem[];
  careStandards: CareStandard[];
  transformationStories: TransformationStory[];
  careTeam: CareTeamMember[];
  reviews: CustomerReview[];
  personalities: PetPersonality[];
  socialPosts: SocialCommunityPost[];
  promo: StorePromo;
  quickCategories: QuickCategory[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
    city: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
}
