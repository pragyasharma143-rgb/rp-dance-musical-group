import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import { siteContent } from "@/data/content";

export default function AboutPreview() {
    const { title, description, bullets, closing, cta } = siteContent.aboutPreview;

    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Content */}
                    <div className="flex-1 order-2 lg:order-1">
                        <SectionHeading title={title} subtitle="Our Legacy" />
                        <div className="space-y-6">
                            <p className="text-xl text-text-muted leading-relaxed font-light">
                                {description}
                            </p>

                            {bullets && (
                                <ul className="space-y-4 py-4">
                                    {bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-lg text-text-muted">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {closing && (
                                <p className="text-xl text-text font-serif italic mt-8 border-l-2 border-primary/30 pl-6 py-2">
                                    “{closing}”
                                </p>
                            )}
                        </div>
                        <div className="mt-12">
                            <CTAButton label={cta.label} href={cta.href} variant="secondary" />
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="flex-1 order-1 lg:order-2 relative group w-full aspect-square md:aspect-video lg:aspect-square">
                        <div className="absolute inset-0 border border-primary/20 -translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                        <div className="absolute inset-0 bg-surface flex items-center justify-center p-8 overflow-hidden">
                            {/* Placeholder for actual image - representing the vibe with abstract shapes for now */}
                            <div className="w-full h-full border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden flex flex-col items-center justify-center text-center">
                                <div className="text-8xl font-black font-decorative text-white/[0.03] select-none rotate-12">
                                    LEGACY
                                </div>
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
