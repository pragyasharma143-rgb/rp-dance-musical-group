import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteContent } from "@/data/content";

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-black/10 bg-surface py-12 dark:border-white/10">
            <div className="section-shell">
                <div className="mb-10 rounded-2xl border border-black/10 bg-background p-5 dark:border-white/10 sm:p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Ready to plan your event?</p>
                            <p className="mt-1 text-xl font-serif font-bold text-text">Get availability in under 24 hours.</p>
                        </div>
                        <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold uppercase tracking-[0.1em] text-background">
                            Start Booking
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-5 flex items-center gap-3">
                            {siteContent.header.logoImage && (
                                <Image
                                    src={siteContent.header.logoImage}
                                    alt="RP Dance & Musical group Logo"
                                    width={80}
                                    height={80}
                                    className="h-14 w-14 flex-shrink-0 mix-blend-multiply"
                                />
                            )}
                            <h3 className="font-serif text-2xl font-bold text-primary">
                                RP Dance & Musical group
                            </h3>
                        </div>
                        <p className="mb-5 max-w-md text-base leading-7 text-text-muted">
                            Promoting the rich cultural heritage of Rajasthan across the globe. Excellence in traditional folk art for over two decades.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href={siteContent.contactActions.phoneHref} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-black/10 px-4 text-sm font-semibold text-text dark:border-white/10">
                                <Phone size={16} />
                                Call
                            </Link>
                            <Link href={siteContent.contactActions.whatsappHref} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-background">
                                <MessageCircle size={16} />
                                WhatsApp
                            </Link>
                        </div>
                        <div className="mt-5 flex space-x-5">
                            {siteContent.footer.socials.map((social) => {
                                const Icon = social.name === "Instagram" ? Instagram :
                                    social.name === "Facebook" ? Facebook : Youtube;
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-text-muted transition-colors duration-200 hover:text-primary dark:border-white/10"
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
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.13em] text-text">Quick Links</h4>
                        <ul className="space-y-3">
                            {siteContent.header.nav.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm text-text-muted transition-colors duration-200 hover:text-primary">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.13em] text-text">Contact</h4>
                        <ul className="space-y-3 text-sm text-text-muted leading-relaxed">
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="mt-0.5 text-primary" />
                                <Link href={siteContent.footer.contact.mapLink} className="hover:text-primary">
                                    {siteContent.footer.contact.address}
                                </Link>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone size={16} className="mt-0.5 text-primary" />
                                <Link href={siteContent.contactActions.phoneHref} className="hover:text-primary">
                                    {siteContent.footer.contact.phone}
                                </Link>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail size={16} className="mt-0.5 text-primary" />
                                <Link href={siteContent.contactActions.emailHref} className="hover:text-primary">
                                    {siteContent.footer.contact.email}
                                </Link>
                            </li>
                            <li className="pl-6 text-xs uppercase tracking-[0.12em]">
                                {siteContent.footer.contact.hours}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between border-t border-black/10 pt-6 text-xs uppercase tracking-[0.12em] text-text-muted dark:border-white/10 md:flex-row">
                    <p>© {new Date().getFullYear()} RP Dance & Musical group. All rights reserved.</p>
                    <div className="mt-3 flex gap-4 md:mt-0">
                        <Link href="/" className="hover:text-primary">Privacy</Link>
                        <Link href="/" className="hover:text-primary">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
