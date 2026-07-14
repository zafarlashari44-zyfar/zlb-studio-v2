import BookingExperience from "@/components/BookingExperience";
import ClientTicker from "@/components/ClientTicker";
import Footer from "@/components/Footer";
import LensPortalHero from "@/components/LensPortalHero";
import InteractiveStories from "@/components/InteractiveStories";
import Navbar from "@/components/Navbar";
import ProcessExperience from "@/components/ProcessExperience";
import ServicesExperience from "@/components/ServicesExperience";
import ShowreelExperience from "@/components/ShowreelExperience";
import StatsExperience from "@/components/StatsExperience";
import StudioIntro from "@/components/StudioIntro";
import TestimonialsExperience from "@/components/TestimonialsExperience";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#050505]">
      <Navbar />
      <LensPortalHero />
      <ClientTicker />
      <StudioIntro />
      <InteractiveStories />
      <ShowreelExperience />
      <ServicesExperience />
      <ProcessExperience />
      <StatsExperience />
      <TestimonialsExperience />
      <BookingExperience />
      <Footer />
    </main>
  );
}




