import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesPageExperience from "@/components/ServicesPageExperience";

export const metadata: Metadata = {
  title: "Photography Services",
  description:
    "Explore wedding, portrait, event and commercial photography services from ZLB Studio in Bristol.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesPageExperience />
      <Footer />
    </>
  );
}