import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/content";
import { pageMetadata } from "@/data/metadata";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata.services;

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="The Art of Rajasthan"
                        subtitle="Our Performances"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 mt-16">
                        {siteContent.services.map((service) => (
                            <div key={service.id} className="bg-background p-12 hover:bg-surface transition-colors duration-300 group">
                                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6">
                                    Featured Service
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-text mb-6 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed text-lg font-light">
                                    {service.description}
                                </p>
                                <div className="mt-12 h-px w-12 bg-primary/30 group-hover:w-full transition-all duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
