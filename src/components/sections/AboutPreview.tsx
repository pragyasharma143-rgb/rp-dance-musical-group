import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import Image from "next/image";
import { siteContent } from "@/data/content";

export default function AboutPreview() {
    const { title, description, bullets, closing, cta } = siteContent.aboutPreview;

    return (
        <section className="overflow-hidden border-t border-black/10 bg-background py-16 md:py-24 dark:border-white/10">
            <div className="section-shell">
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
                    {/* Content */}
                    <div className="flex-1 order-2 lg:order-1">
                        <SectionHeading title={title} subtitle="Our Legacy" />
                        <div className="space-y-5">
                            <p className="text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
                                {description}
                            </p>

                            {bullets && (
                                <ul className="space-y-3 py-2">
                                    {bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-base leading-7 text-text-muted">
                                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {closing && (
                                <p className="mt-4 border-l-2 border-primary/30 py-2 pl-4 text-lg font-serif italic text-text sm:pl-6">
                                    “{closing}”
                                </p>
                            )}
                        </div>
                        <div className="mt-8">
                            <CTAButton label={cta.label} href={cta.href} variant="secondary" />
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="relative order-1 aspect-[3/4] w-full max-w-md flex-1 group lg:order-2">
                        <div className="absolute inset-0 border border-primary/20 -translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-black/10 shadow-2xl dark:border-white/10">
                            <Image
                                src={siteContent.aboutPreview.image}
                                alt="Ms Rekha Parihar"
                                fill
                                className="object-cover object-center saturate-105 contrast-105 brightness-105 transition-transform duration-700 group-hover:scale-105"
                                quality={92}
                                sizes="(max-width: 1024px) 92vw, 45vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
