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
    const items = siteContent.gallery;

    return (
        <>
            <Header />
            <main className="pb-16 pt-24 sm:pt-28">
                <div className="section-shell">
                    <SectionHeading
                        title="Performances"
                        subtitle="Legacy in Frames"
                    />

                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
                        {items.map((item) => (
                            <div key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 639px) 94vw, (max-width: 1023px) 48vw, 31vw"
                                    className="object-cover saturate-105 contrast-105 brightness-105 transition-transform duration-700 group-hover:scale-105"
                                    quality={90}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />
                                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/78 via-black/48 to-transparent p-5">
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">{item.category}</p>
                                    <h4 className="text-xl font-serif font-bold !text-white">{item.alt}</h4>
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
