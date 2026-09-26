import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryNavigation } from "@/components/CategoryNavigation";
import { PantrySection } from "@/components/PantrySection";
import { PromoBanner } from "@/components/PromoBanner";
import { PetPersonalitySection } from "@/components/PetPersonalitySection";
import { GroomingSection } from "@/components/GroomingSection";
import { HotelSection } from "@/components/HotelSection";
import { BrandMoment } from "@/components/BrandMoment";
import { CareStandards } from "@/components/CareStandards";
import { StoriesSection } from "@/components/StoriesSection";
import { TeamSection } from "@/components/TeamSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CommunitySocialSection } from "@/components/CommunitySocialSection";
import { BookingWidget } from "@/components/BookingWidget";
import { LocationHours } from "@/components/LocationHours";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CategoryNavigation />
        <PantrySection />
        <PromoBanner />
        <PetPersonalitySection />
        <GroomingSection />
        <HotelSection />
        <BrandMoment />
        <CareStandards />
        <StoriesSection />
        <TeamSection />
        <ReviewsSection />
        <CommunitySocialSection />
        <BookingWidget />
        <LocationHours />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
