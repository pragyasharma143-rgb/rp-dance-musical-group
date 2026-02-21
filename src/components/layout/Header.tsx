"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-black/10 bg-background/90 backdrop-blur-md transition-colors duration-300 dark:border-white/10">
            <div className="section-shell">
                <div className="flex h-16 items-center justify-between md:h-18">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group" aria-label="RP Dance & Musical group home">
                        {siteContent.header.logoImage && (
                            <div className="relative h-10 w-10 flex-shrink-0">
                                <Image
                                    src={siteContent.header.logoImage}
                                    alt="RP Dance & Musical group logo"
                                    width={60}
                                    height={60}
                                    className="mix-blend-multiply"
                                    priority
                                />
                            </div>
                        )}
                        <span className="max-w-[220px] font-serif text-base font-bold leading-tight tracking-tight text-primary sm:text-lg md:max-w-none md:text-xl">
                            {siteContent.header.logo}
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {siteContent.header.nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200 uppercase tracking-[0.12em]"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-background"
                        >
                            Book Now
                        </Link>
                        <div className="pl-2 border-l border-black/10 transition-colors dark:border-white/10">
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Button + Toggle */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 text-text transition-colors dark:border-white/10"
                            aria-label="Toggle Menu"
                            aria-expanded={isOpen}
                            aria-controls="mobile-nav"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            {isOpen && (
                <div id="mobile-nav" className="md:hidden border-t border-black/10 bg-surface pb-5 transition-colors duration-300 dark:border-white/10">
                    <div className="section-shell pt-3 space-y-2">
                        {siteContent.header.nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-text hover:bg-background hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="mt-3 grid grid-cols-2 gap-2 pt-2">
                            <Link
                                href={siteContent.contactActions.phoneHref}
                                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-black/10 px-3 text-sm font-semibold text-text dark:border-white/10"
                            >
                                <Phone size={16} />
                                Call
                            </Link>
                            <Link
                                href={siteContent.contactActions.whatsappHref}
                                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-semibold text-background"
                            >
                                <MessageCircle size={16} />
                                WhatsApp
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
