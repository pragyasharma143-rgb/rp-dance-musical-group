import React from "react";
import CTAButton from "@/components/ui/CTAButton";
import Link from "next/link";
import { siteContent } from "@/data/content";

export default function ContactCTA() {
    return (
        <section className="relative overflow-hidden bg-primary py-16 md:py-24">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full border-l border-white/20 -skew-x-12" />
            </div>

            <div className="section-shell relative z-10 text-center">
                <h2 className="mx-auto mb-6 max-w-4xl text-3xl font-serif font-bold leading-tight text-background sm:text-4xl md:text-5xl">
                    Bring the Soul of Rajasthan to Your Event.
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-base font-medium leading-7 text-background/85 sm:text-lg">
                    Whether it&apos;s a grand festival or a private celebration, we create unforgettable experiences through music and dance.
                </p>
                <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
                    <CTAButton
                        label="Get a Booking Call"
                        href="/contact"
                        className="w-full !bg-white !text-[#161616] border border-white/80 hover:!bg-[#fff7e8] hover:!text-[#161616] !shadow-none ring-offset-primary"
                    />
                    <CTAButton
                        label="View Services"
                        href="/services"
                        variant="secondary"
                        className="w-full border-white/70 text-background hover:border-white hover:text-white"
                    />
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.13em] text-background/90">
                    <Link href={siteContent.contactActions.phoneHref} className="rounded-full border border-white/45 px-3 py-2">Call Now</Link>
                    <Link href={siteContent.contactActions.whatsappHref} className="rounded-full border border-white/45 px-3 py-2">WhatsApp</Link>
                </div>
            </div>
        </section>
    );
}
