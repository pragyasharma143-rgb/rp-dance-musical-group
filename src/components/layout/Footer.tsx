import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { siteContent } from "@/data/content";

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-white/5 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            {siteContent.header.logoImage && (
                                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                                    <Image
                                        src={siteContent.header.logoImage}
                                        alt="Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}
                            <h3 className="font-serif text-2xl font-bold text-primary">
                                RP Dance & Musical group
                            </h3>
                        </div>
                        <p className="text-text-muted max-w-sm leading-relaxed mb-6">
                            Promoting the rich cultural heritage of Rajasthan across the globe. Excellence in traditional folk art for over two decades.
                        </p>
                        <div className="flex space-x-6">
                            {siteContent.footer.socials.map((social) => {
                                const Icon = social.name === "Instagram" ? Instagram :
                                    social.name === "Facebook" ? Facebook : Youtube;
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="text-text-muted hover:text-primary transition-colors duration-200"
                                        aria-label={social.name}
                                    >
                                        <Icon size={20} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-semibold text-text uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {siteContent.header.nav.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-text-muted hover:text-primary text-sm transition-colors duration-200">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-semibold text-text uppercase tracking-widest mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-text-muted leading-relaxed">
                            <li>{siteContent.footer.contact.address}</li>
                            <li>{siteContent.footer.contact.phone}</li>
                            <li>{siteContent.footer.contact.email}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} RP Dance & Musical group. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Designed for Excellence</p>
                </div>
            </div>
        </footer>
    );
}
