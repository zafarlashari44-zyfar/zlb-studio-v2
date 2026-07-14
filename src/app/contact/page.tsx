import type { Metadata } from "next";
import BookingExperience from "@/components/BookingExperience";
import ContactPageExperience from "@/components/ContactPageExperience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ZLB Studio for wedding, portrait, event and commercial photography.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactPageExperience />
      <BookingExperience />
      <Footer />
    </>
  );
}