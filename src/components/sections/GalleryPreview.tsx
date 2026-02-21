import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { siteContent } from "@/data/content";
import Image from "next/image";

export default function GalleryPreview() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="section-shell">
                <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
                    <SectionHeading
                        title="Moments in Motion"
                        subtitle="Our Gallery"
                    />
                    <Link
                        href="/work"
                        className="text-sm font-semibold uppercase tracking-[0.12em] text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors duration-200"
                    >
                        View Full Gallery →
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {siteContent.gallery.slice(0, 3).map((item) => (
                        <div key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 639px) 94vw, (max-width: 1023px) 48vw, 32vw"
                                className="object-cover saturate-105 contrast-105 brightness-105 transition-transform duration-500 group-hover:scale-105"
                                quality={90}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-primary/5 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-5 text-white">
                                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-light">{item.category}</p>
                                <h4 className="text-xl font-serif font-bold leading-tight">{item.alt}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
