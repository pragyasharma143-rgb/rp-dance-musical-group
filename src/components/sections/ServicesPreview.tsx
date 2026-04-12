import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { siteContent } from "@/data/content";
import CTAButton from "@/components/ui/CTAButton";
import { Drum, Landmark, Sparkles, Theater, Globe2, Users } from "lucide-react";

const serviceIcons = [Landmark, Theater, Globe2, Drum, Users, Sparkles];

export default function ServicesPreview() {
    return (
        <section className="bg-surface py-16 md:py-24">
            <div className="section-shell">
                <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
                    <SectionHeading
                        title="Performances & Artistry"
                        subtitle="Our Services"
                    />
                    <Link
                        href="/services"
                        className="text-sm font-semibold uppercase tracking-[0.12em] text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors duration-200"
                    >
                        All Services →
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {siteContent.services.slice(0, 6).map((service, index) => {
                        const Icon = serviceIcons[index];

                        return (
                            <div
                                key={service.id}
                                className="group mobile-card cultural-pattern relative overflow-hidden p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_rgba(210,141,21,0.12)]"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.62),rgba(255,255,255,0.16))] dark:bg-[linear-gradient(160deg,rgba(30,30,32,0.72),rgba(30,30,32,0.18))]" />
                                <div className="relative">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                                            <Icon size={22} />
                                        </div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Service 0{index + 1}</p>
                                    </div>

                                    <h3 className="mt-5 text-2xl font-serif font-bold text-text transition-colors duration-300 group-hover:text-primary">
                                        {service.title}
                                    </h3>

                                    <p className="mb-6 mt-3 text-base leading-7 text-text-muted">
                                        {service.description}
                                    </p>

                                    <CTAButton label="Book this service" href="/contact" variant="secondary" className="w-full !text-xs bg-background/80" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
