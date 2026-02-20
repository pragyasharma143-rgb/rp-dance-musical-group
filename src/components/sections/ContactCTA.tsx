import React from "react";
import CTAButton from "@/components/ui/CTAButton";

export default function ContactCTA() {
    return (
        <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full border-l border-white/20 -skew-x-12" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-background mb-8 max-w-4xl mx-auto leading-tight">
                    Bring the Soul of Rajasthan to Your Event.
                </h2>
                <p className="text-lg md:text-xl text-background/80 mb-12 max-w-2xl mx-auto font-medium">
                    Whether it&apos;s a grand festival or a private celebration, we create unforgettable experiences through music and dance.
                </p>
                <CTAButton
                    label="Get in Touch"
                    href="/contact"
                    className="bg-background text-primary hover:bg-white hover:text-primary !shadow-none ring-offset-primary focus:ring-2 focus:ring-white"
                />
            </div>
        </section>
    );
}
