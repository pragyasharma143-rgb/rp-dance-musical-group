import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { siteContent } from "@/data/content";

export default function GalleryPreview() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <SectionHeading
                        title="Moments in Motion"
                        subtitle="Our Gallery"
                    />
                    <Link
                        href="/work"
                        className="text-sm font-semibold uppercase tracking-widest text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors duration-200 mb-4"
                    >
                        View Full Gallery →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {siteContent.gallery.slice(0, 3).map((item) => (
                        <div key={item.id} className="relative aspect-[4/5] bg-surface group overflow-hidden">
                            {/* Simplified visual representation of gallery items */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 border border-white/5 bg-white/[0.02]" />

                            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">{item.category}</p>
                                <h4 className="text-xl font-serif font-bold text-text">{item.alt}</h4>
                            </div>

                            {/* Abstract placeholder visual */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full flex items-center justify-center opacity-10">
                                <div className="w-1/2 h-1/2 border border-primary rotate-45" />
                                <div className="absolute w-1/3 h-1/3 border border-primary -rotate-12" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
