import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingPageExperience from "@/components/PricingPageExperience";

export const metadata: Metadata = {
  title: "Photography Pricing",
  description:
    "Explore portrait, event, wedding and commercial photography packages from ZLB Studio in Bristol.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <PricingPageExperience />
      <Footer />
    </>
  );
}