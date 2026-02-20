import React from "react";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { siteContent } from "@/data/content";

export default function Hero() {
    const { title, subtitle, primaryCTA, secondaryCTA, stats } = siteContent.hero;

    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Founder Image with Premium Frame */}
                    <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative w-full max-w-[550px] aspect-[4/5] lg:aspect-[3/4]">
                            {/* Decorative Background Frame */}
                            <div className="absolute top-0 right-0 w-[95%] h-full border-t-[12px] border-r-[12px] border-primary/90 -mr-4 -mt-4 rounded-tr-[40px] z-0 opacity-80" />

                            <div className="relative w-full h-full z-10 overflow-hidden rounded-bl-[100px] rounded-tr-[40px]">
                                <Image
                                    src="/images/founder.jpg"
                                    alt="Rekha Parihar - Founder"
                                    fill
                                    className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                                    priority
                                />
                                {/* Bottom Left Cutout Accent */}
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-background rounded-tr-[100px] z-20" />
                            </div>

                            {/* Floating Label */}
                            <div className="absolute -bottom-6 -right-6 bg-surface p-6 shadow-2xl border border-white/5 z-30 hidden md:block">
                                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-1">Founder</div>
                                <div className="text-2xl font-serif font-bold text-text">Rekha Parihar</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content (Editorial Layout) */}
                    <div className="flex flex-col items-end text-right order-1 lg:order-2">
                        <div className="mb-6 inline-flex items-center gap-4">
                            <span className="h-[1px] w-12 bg-primary/40 block" />
                            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Established Legacy</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-decorative font-bold leading-[1.2] mb-12 text-text uppercase tracking-widest max-w-xl">
                            {title.split(". ").map((sentence, i) => (
                                <span key={i} className="block">
                                    {sentence}{i === 0 ? "." : ""}
                                </span>
                            ))}
                        </h1>

                        <div className="space-y-4 max-w-lg mb-12">
                            <p className="text-lg md:text-xl text-text-muted font-light tracking-wide">
                                A few — like
                            </p>
                            <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black italic text-text drop-shadow-sm leading-none py-2 md:translate-x-4">
                                Rekha Parihar
                            </div>
                            <p className="text-lg md:text-xl text-text-muted font-light tracking-widest">
                                become the bridge <br /> between tradition and time.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 mt-8">
                            <CTAButton label={primaryCTA.label} href={primaryCTA.href} variant="primary" />
                            <CTAButton label={secondaryCTA.label} href={secondaryCTA.href} variant="secondary" />
                        </div>

                        {/* Performance Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 border-t border-primary/20 pt-12 mt-20 w-full">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-right">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-text-muted leading-tight">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Texture & Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </section>
    );
}
