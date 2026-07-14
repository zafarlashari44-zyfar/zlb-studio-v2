import type { Metadata } from "next";
import { Geist } from "next/font/google";
import SiteExperience from "@/components/SiteExperience";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "ZLB Studio",
    template: "%s | ZLB Studio",
  },
  description:
    "Cinematic photography and visual storytelling studio based in Bristol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        <SiteExperience>{children}</SiteExperience>
      </body>
    </html>
  );
}