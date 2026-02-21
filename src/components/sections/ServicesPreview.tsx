import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { siteContent } from "@/data/content";
import CTAButton from "@/components/ui/CTAButton";

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
                    {siteContent.services.slice(0, 6).map((service, index) => (
                        <div
                            key={service.id}
                            className="group mobile-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                        >
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Service 0{index + 1}</p>

                            <h3 className="mt-3 text-2xl font-serif font-bold text-text transition-colors duration-300 group-hover:text-primary">
                                {service.title}
                            </h3>

                            <p className="mb-6 mt-3 text-base leading-7 text-text-muted">
                                {service.description}
                            </p>

                            <CTAButton label="Book this service" href="/contact" variant="secondary" className="w-full !text-xs" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
