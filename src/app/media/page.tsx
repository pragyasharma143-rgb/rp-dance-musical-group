import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/content";
import { pageMetadata } from "@/data/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata.media;

export default function MediaPage() {
    return (
        <>
            <Header />
            <main className="pb-16 pt-24 sm:pt-28">
                <div className="section-shell">
                    <SectionHeading
                        title="Press & Features"
                        subtitle="Media Coverage"
                    />

                    <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2">
                        {siteContent.media.map((item) => (
                            <article key={item.id} className="group relative rounded-2xl border border-black/10 bg-surface p-6 transition-all hover:border-primary/20 dark:border-white/10 sm:p-8">
                                <div className="mb-4 flex items-start justify-between">
                                    <span className="bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                                        {item.outlet}
                                    </span>
                                    <span className="text-sm text-text-muted font-mono">{item.date}</span>
                                </div>
                                <h3 className="mb-4 text-2xl font-serif font-bold leading-tight text-text">
                                    {item.title}
                                </h3>
                                <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-primary transition-all duration-300 group-hover:gap-3">
                                    Request Media Kit <span>→</span>
                                </Link>
                            </article>
                        ))}
                        <article className="rounded-2xl border border-black/10 bg-surface p-6 dark:border-white/10 sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Press Contact</p>
                            <h3 className="mt-3 text-2xl font-serif font-bold text-text">Need interviews, bios, or event photos?</h3>
                            <p className="mt-3 text-base leading-7 text-text-muted">
                                Our team can share assets and schedules for media coverage and festival features.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-primary">
                                Reach us via Contact Page →
                            </div>
                        </article>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
