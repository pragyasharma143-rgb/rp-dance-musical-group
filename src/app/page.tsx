import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import { pageMetadata } from "@/data/metadata";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata.home;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <GalleryPreview />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
