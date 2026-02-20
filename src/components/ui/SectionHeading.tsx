import React from "react";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
    return (
        <div className={`mb-12 ${centered ? "text-center mx-auto" : "max-w-3xl"}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text mb-6">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-text-muted leading-relaxed font-sans font-light uppercase tracking-widest">
                    {subtitle}
                </p>
            )}
            <div className={`h-1 w-20 bg-primary mt-8 ${centered ? "mx-auto" : ""}`} />
        </div>
    );
}
