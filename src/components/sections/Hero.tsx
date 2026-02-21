import React from "react";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { siteContent } from "@/data/content";
import { CheckCircle2, PhoneCall } from "lucide-react";

export default function Hero() {
    const { title, primaryCTA, secondaryCTA, stats, bullets } = siteContent.hero;

    return (
        <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-background pb-16 pt-12 md:pb-20 md:pt-16">
            <div className="section-shell relative z-10">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
                    <div className="order-2 space-y-7 lg:order-1">
                        <p className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Rajasthan Folk Performances
                        </p>

                        <h1 className="max-w-2xl font-decorative text-4xl font-bold uppercase leading-tight tracking-[0.04em] text-text sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>

                        <p className="max-w-xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
                            A few like{" "}
                            <span className="mx-1 inline-block font-serif text-3xl font-bold leading-none text-primary sm:text-4xl">
                                Rekha Parihar
                            </span>
                            <span className="block mt-2">
                                become the bridge between tradition and time.
                            </span>
                        </p>

                        <ul className="space-y-3">
                            {bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-text sm:text-base">
                                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-primary" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <CTAButton label={primaryCTA.label} href={primaryCTA.href} variant="primary" className="w-full sm:w-auto" />
                            <CTAButton label={secondaryCTA.label} href={secondaryCTA.href} variant="secondary" className="w-full sm:w-auto" />
                        </div>

                        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-black/10 bg-surface p-3 text-xs uppercase tracking-[0.14em] text-text-muted dark:border-white/10">
                            <PhoneCall size={16} className="text-primary" />
                            <a href={siteContent.contactActions.phoneHref} className="font-semibold text-text hover:text-primary">
                                Fast bookings: {siteContent.footer.contact.phone}
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-3 border-t border-black/10 pt-6 dark:border-white/10 sm:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-xl font-serif font-bold text-primary sm:text-2xl">
                                        {stat.value}
                                    </div>
                                    <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2.2rem] border border-black/10 bg-surface dark:border-white/10">
                            <div className="absolute -right-3 -top-3 h-full w-full rounded-[2.2rem] border border-primary/30" />
                            <Image
                                src="/images/founder.jpg"
                                alt="Rekha Parihar performing traditional Rajasthani folk dance"
                                fill
                                className="object-cover object-center saturate-110 contrast-105 brightness-105 sm:object-top"
                                priority
                                quality={95}
                                sizes="(max-width: 640px) 94vw, (max-width: 1024px) 54vw, 42vw"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-primary/45 via-primary/15 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-primary-light/70 bg-primary/70 p-3 text-white sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[280px] sm:p-4">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-light">Founder</p>
                                <p className="mt-1 text-2xl font-serif font-bold leading-tight text-white sm:text-3xl">Rekha Parihar</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/85">Artistic Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 bottom-8 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        </section>
    );
}
