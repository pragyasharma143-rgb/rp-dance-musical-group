import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { siteContent } from "@/data/content";
import { pageMetadata } from "@/data/metadata";
import { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="bg-background pb-16 pt-24 sm:pt-28">
                <div className="section-shell">
                    <SectionHeading
                        title="Get in Touch"
                        subtitle="Bookings & Enquiries"
                    />

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <p className="text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
                                Looking to book a performance for your next event or have a general inquiry? Fill out the form or reach us through the details below.
                            </p>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <Link href={siteContent.contactActions.phoneHref} className="mobile-card flex min-h-11 items-center gap-2 px-4 py-3 text-sm font-semibold text-text">
                                    <Phone size={16} className="text-primary" />
                                    Call
                                </Link>
                                <Link href={siteContent.contactActions.whatsappHref} className="mobile-card flex min-h-11 items-center gap-2 px-4 py-3 text-sm font-semibold text-text">
                                    <MessageCircle size={16} className="text-primary" />
                                    WhatsApp
                                </Link>
                            </div>

                            <div className="space-y-5 rounded-2xl border border-black/10 bg-surface p-5 dark:border-white/10">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="mt-0.5 text-primary" />
                                    <div>
                                        <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Headquarters</h4>
                                        <Link href={siteContent.footer.contact.mapLink} className="text-base font-medium text-text hover:text-primary">
                                            {siteContent.footer.contact.address}
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone size={18} className="mt-0.5 text-primary" />
                                    <div>
                                        <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Phone</h4>
                                        <Link href={siteContent.contactActions.phoneHref} className="text-base font-medium text-text hover:text-primary">
                                            {siteContent.footer.contact.phone}
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail size={18} className="mt-0.5 text-primary" />
                                    <div>
                                        <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Email</h4>
                                        <Link href={siteContent.contactActions.emailHref} className="text-base font-medium text-text hover:text-primary">
                                            {siteContent.footer.contact.email}
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-xs uppercase tracking-[0.12em] text-text-muted">{siteContent.footer.contact.hours}</p>
                            </div>

                            <div className="border-t border-black/10 pt-5 dark:border-white/10">
                                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Follow Our Journey</h4>
                                <div className="flex flex-wrap gap-5">
                                    {siteContent.footer.socials.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className="text-sm font-semibold uppercase tracking-[0.12em] text-text-muted transition-colors hover:text-primary"
                                        >
                                            {social.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="rounded-2xl border border-black/10 bg-surface p-5 dark:border-white/10 sm:p-7 md:p-10">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
