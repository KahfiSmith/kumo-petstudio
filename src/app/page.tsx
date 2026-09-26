import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PetPersonalitySection } from "@/components/PetPersonalitySection";
import { PantrySection } from "@/components/PantrySection";
import { GroomingSection } from "@/components/GroomingSection";
import { BrandMoment } from "@/components/BrandMoment";
import { HotelSection } from "@/components/HotelSection";
import { CareStandards } from "@/components/CareStandards";
import { StoriesSection } from "@/components/StoriesSection";
import { TeamSection } from "@/components/TeamSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CommunitySocialSection } from "@/components/CommunitySocialSection";
import { BookingWidget } from "@/components/BookingWidget";
import { LocationHours } from "@/components/LocationHours";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PetPersonalitySection />
        <PantrySection />
        <GroomingSection />
        <BrandMoment />
        <HotelSection />
        <CareStandards />
        <StoriesSection />
        <TeamSection />
        <ReviewsSection />
        <CommunitySocialSection />
        <BookingWidget />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}
