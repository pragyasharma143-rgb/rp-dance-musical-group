"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    if (status === "success") {
        return (
            <div className="bg-primary/10 border border-primary/20 p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Message Sent Successfully!</h3>
                <p className="text-text-muted">Thank you for reaching out. We will get back to you shortly.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm font-semibold uppercase tracking-widest text-primary border-b border-primary/40 pb-1"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-surface border border-white/10 px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-surface border border-white/10 px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-2">Subject</label>
                <select
                    id="subject"
                    className="w-full bg-surface border border-white/10 px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                    <option>Performance Booking</option>
                    <option>General Inquiry</option>
                    <option>International Tour</option>
                    <option>Media/Press</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-2">Message</label>
                <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full bg-surface border border-white/10 px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary text-background py-4 font-semibold uppercase tracking-widest hover:bg-primary-light transition-colors disabled:opacity-50"
            >
                {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
