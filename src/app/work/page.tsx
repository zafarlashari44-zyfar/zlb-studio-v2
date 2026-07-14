import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WorkIndex from "@/components/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected wedding, portrait, event and commercial photography by ZLB Studio.",
};

export default function WorkPage() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <WorkIndex />
      <Footer />
    </main>
  );
}




