import React from "react";
import Link from "next/link";

interface CTAButtonProps {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    className?: string;
}

export default function CTAButton({ label, href, variant = "primary", className = "" }: CTAButtonProps) {
    const baseStyles = "inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 active:scale-95";

    const variants = {
        primary: "bg-primary text-background hover:bg-primary-light shadow-lg shadow-primary/20",
        secondary: "bg-transparent text-text border border-black/15 hover:border-primary hover:text-primary dark:border-white/20",
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
