import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/content";
import { pageMetadata } from "@/data/metadata";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata.work;

export default function WorkPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Legacy in Frames"
                        subtitle="Our Work & Gallery"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {/* Extended gallery simulation using data + duplicates for grid feel */}
                        {[...siteContent.gallery, ...siteContent.gallery].map((item, index) => (
                            <div key={index} className="group relative aspect-[4/5] bg-surface border border-white/5 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                <div className="absolute bottom-0 left-0 p-8 z-20">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">{item.category}</p>
                                    <h4 className="text-xl font-serif font-bold text-text">{item.alt}</h4>
                                </div>

                                {/* Abstract placeholder visual */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:scale-110 transition-transform duration-700">
                                    <div className="w-2/3 h-2/3 border border-primary rotate-45" />
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
