"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        {siteContent.header.logoImage && (
                            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                                <Image
                                    src={siteContent.header.logoImage}
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        )}
                        <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-primary transition-colors">
                            {siteContent.header.logo}
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {siteContent.header.nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200 uppercase tracking-widest"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pl-4 border-l border-white/10 dark:border-white/10 border-black/10 transition-colors">
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Button + Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text p-2 focus:outline-none transition-colors"
                            aria-label="Toggle Menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            {isOpen && (
                <div className="md:hidden bg-surface border-b border-white/5 pb-6 transition-colors duration-300">
                    <div className="px-4 pt-2 space-y-4">
                        {siteContent.header.nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-lg font-medium text-text-muted hover:text-primary py-2 uppercase tracking-widest border-b border-white/5 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
