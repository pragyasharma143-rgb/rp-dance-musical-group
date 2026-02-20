import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/content";
import { pageMetadata } from "@/data/metadata";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata.media;

export default function MediaPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Press & Features"
                        subtitle="Media Coverage"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        {siteContent.media.map((item) => (
                            <div key={item.id} className="bg-surface p-10 border border-white/5 relative group hover:border-primary/20 transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary bg-primary/10 px-3 py-1">
                                        {item.outlet}
                                    </span>
                                    <span className="text-sm text-text-muted font-mono">{item.date}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-text mb-6 leading-tight">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary group-hover:gap-4 transition-all duration-300">
                                    Read Article <span>→</span>
                                </div>
                            </div>
                        ))}

                        {/* Simulated Additional Media Items */}
                        <div className="bg-surface p-10 border border-white/5 opacity-60">
                            <div className="h-4 w-20 bg-white/5 mb-6" />
                            <div className="h-8 w-3/4 bg-white/5 mb-4" />
                            <div className="h-4 w-1/2 bg-white/5" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
