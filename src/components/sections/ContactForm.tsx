"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [errors, setErrors] = useState<{ phone?: string }>({});
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        const formData = new FormData(e.currentTarget);
        const phone = String(formData.get("phone") || "").trim();
        if (phone && !/^[+]?[0-9\s-]{8,20}$/.test(phone)) {
            setErrors({ phone: "Please enter a valid phone number." });
            return;
        }

        setStatus("submitting");

        setTimeout(() => {
            setStatus("success");
            e.currentTarget.reset();
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
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full min-h-11 rounded-xl border border-black/10 bg-background px-4 text-text transition-colors dark:border-white/10"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full min-h-11 rounded-xl border border-black/10 bg-background px-4 text-text transition-colors dark:border-white/10"
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">Phone / WhatsApp</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full min-h-11 rounded-xl border border-black/10 bg-background px-4 text-text transition-colors dark:border-white/10"
                    placeholder="+91 98765 43210"
                    aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone ? (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                ) : null}
            </div>

            <div>
                <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">Subject</label>
                <select
                    id="subject"
                    name="subject"
                    className="w-full min-h-11 appearance-none rounded-xl border border-black/10 bg-background px-4 text-text transition-colors dark:border-white/10"
                >
                    <option>Performance Booking</option>
                    <option>General Inquiry</option>
                    <option>International Tour</option>
                    <option>Media/Press</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-black/10 bg-background px-4 py-3 text-text transition-colors dark:border-white/10"
                    placeholder="How can we help you?"
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full min-h-11 rounded-xl bg-primary px-4 py-3 font-semibold uppercase tracking-[0.12em] text-background transition-colors hover:bg-primary-light disabled:opacity-50"
            >
                {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
