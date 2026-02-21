import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/content";
import { pageMetadata } from "@/data/metadata";
import { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = pageMetadata.services;

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="pb-16 pt-24 sm:pt-28">
                <div className="section-shell">
                    <SectionHeading
                        title="The Art of Rajasthan"
                        subtitle="Our Performances"
                    />

                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12">
                        {siteContent.services.map((service) => (
                            <div key={service.id} className="mobile-card group p-5 transition-colors duration-300 hover:bg-surface sm:p-7">
                                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                    Featured Service
                                </div>
                                <h3 className="mb-3 text-2xl font-serif font-bold text-text transition-colors group-hover:text-primary">
                                    {service.title}
                                </h3>
                                <p className="text-base leading-7 text-text-muted">
                                    {service.description}
                                </p>
                                <div className="mt-5">
                                    <CTAButton label="Enquire now" href="/contact" variant="secondary" className="w-full !text-xs" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
