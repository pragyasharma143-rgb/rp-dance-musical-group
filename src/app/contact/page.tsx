import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { siteContent } from "@/data/content";
import { pageMetadata } from "@/data/metadata";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        title="Get in Touch"
                        subtitle="Contact Us"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <p className="text-xl text-text-muted leading-relaxed font-light">
                                Looking to book a performance for your next event or have a general inquiry? Fill out the form or reach us through the details below.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Headquarters</h4>
                                    <p className="text-lg text-text font-serif">{siteContent.footer.contact.address}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Phone</h4>
                                    <p className="text-lg text-text font-serif">{siteContent.footer.contact.phone}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Email</h4>
                                    <p className="text-lg text-text font-serif">{siteContent.footer.contact.email}</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">Follow Our Journey</h4>
                                <div className="flex gap-8">
                                    {siteContent.footer.socials.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className="text-text-muted hover:text-primary transition-colors uppercase text-sm tracking-widest font-semibold"
                                        >
                                            {social.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-surface p-8 md:p-12 border border-white/5">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
