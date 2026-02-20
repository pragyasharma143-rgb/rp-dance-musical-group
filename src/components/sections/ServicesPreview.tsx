import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { siteContent } from "@/data/content";

export default function ServicesPreview() {
    return (
        <section className="py-24 md:py-32 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <SectionHeading
                        title="Performances & Artistry"
                        subtitle="Our Services"
                    />
                    <Link
                        href="/services"
                        className="text-sm font-semibold uppercase tracking-widest text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors duration-200 mb-4"
                    >
                        All Services →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteContent.services.map((service) => (
                        <div
                            key={service.id}
                            className="group p-8 border border-white/5 bg-background hover:bg-surface hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute -right-4 -top-4 text-6xl font-serif font-black text-white/[0.02] group-hover:text-primary/[0.03] transition-colors duration-300">
                                0{siteContent.services.indexOf(service) + 1}
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-text-muted leading-relaxed font-light mb-8 group-hover:text-text/80 transition-colors duration-300">
                                {service.description}
                            </p>

                            <div className="h-0.5 w-0 bg-primary group-hover:w-12 transition-all duration-500 ease-out" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
