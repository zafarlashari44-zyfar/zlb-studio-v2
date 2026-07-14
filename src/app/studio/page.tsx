import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StudioPageExperience from "@/components/StudioPageExperience";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Learn about ZLB Studio, our photography philosophy, creative process and visual approach.",
};

export default function StudioPage() {
  return (
    <>
      <Navbar />
      <StudioPageExperience />
      <Footer />
    </>
  );
}