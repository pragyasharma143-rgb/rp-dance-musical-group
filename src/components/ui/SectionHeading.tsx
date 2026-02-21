import React from "react";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
    return (
        <div className={`mb-10 ${centered ? "text-center mx-auto" : "max-w-3xl"}`}>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text mb-5">
                {title}
            </h2>
            {subtitle && (
                <p className="text-sm sm:text-base text-text-muted leading-relaxed font-sans font-medium uppercase tracking-[0.16em]">
                    {subtitle}
                </p>
            )}
            <div className={`h-1 w-16 sm:w-20 bg-primary mt-6 ${centered ? "mx-auto" : ""}`} />
        </div>
    );
}
