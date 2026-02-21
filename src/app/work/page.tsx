import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/content";
import { pageMetadata } from "@/data/metadata";
import { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = pageMetadata.work;

export default function WorkPage() {
    const items = [...siteContent.gallery, ...siteContent.gallery];

    return (
        <>
            <Header />
            <main className="pb-16 pt-24 sm:pt-28">
                <div className="section-shell">
                    <SectionHeading
                        title="Legacy in Frames"
                        subtitle="Our Work & Gallery"
                    />

                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
                        {items.map((item, index) => (
                            <div key={index} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 639px) 94vw, (max-width: 1023px) 48vw, 31vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />
                                <div className="absolute bottom-0 left-0 z-20 p-5 text-white">
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">{item.category}</p>
                                    <h4 className="text-xl font-serif font-bold">{item.alt}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <CTAButton label="Book Similar Performance" href="/contact" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
