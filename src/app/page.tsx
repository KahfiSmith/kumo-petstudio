import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GroomingSection } from "@/components/GroomingSection";
import { HotelSection } from "@/components/HotelSection";
import { PantrySection } from "@/components/PantrySection";
import { CareStandards } from "@/components/CareStandards";
import { StoriesSection } from "@/components/StoriesSection";
import { TeamSection } from "@/components/TeamSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { BookingWidget } from "@/components/BookingWidget";
import { LocationHours } from "@/components/LocationHours";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <GroomingSection />
        <HotelSection />
        <PantrySection />
        <CareStandards />
        <StoriesSection />
        <TeamSection />
        <ReviewsSection />
        <BookingWidget />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}
