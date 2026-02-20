import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-white/5 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                            RP Dance & Musical group
                        </h3>
                        <p className="text-text-muted max-w-sm leading-relaxed mb-6">
                            Promoting the rich cultural heritage of Rajasthan across the globe. Excellence in traditional folk art for over two decades.
                        </p>
                        <div className="flex space-x-4">
                            {siteContent.footer.socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="text-text-muted hover:text-primary transition-colors duration-200"
                                >
                                    {social.name}
                                </Link>
                            ))}
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
                    <p>© {new Date().getFullYear()} RP Dance and Musical Group. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Designed for Excellence</p>
                </div>
            </div>
        </footer>
    );
}
