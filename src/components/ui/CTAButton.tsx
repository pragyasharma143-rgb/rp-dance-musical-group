import React from "react";
import Link from "next/link";

interface CTAButtonProps {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    className?: string;
}

export default function CTAButton({ label, href, variant = "primary", className = "" }: CTAButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 transform active:scale-95";

    const variants = {
        primary: "bg-primary text-background hover:bg-primary-light shadow-lg shadow-primary/20",
        secondary: "bg-transparent text-text border border-white/20 hover:border-primary hover:text-primary",
    };

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {label}
        </Link>
    );
}
