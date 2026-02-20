import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { pageMetadata } from "@/data/metadata";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata.about;

const recognitions = [
    { year: "1999", honor: "Felicitated by Prime Minister Shri Atal Bihari Vajpayee at Republic Day celebrations, Delhi, for Gangore Dance" },
    { year: "2000", honor: "Presented Rajasthan folk dances for Bill Clinton and Chelsea Clinton during their visit to Jaipur" },
    { year: "2000", honor: "Honoured by President Shri K. R. Narayanan" },
    { year: "2004–2006", honor: "Lead performer at Lokrang Festival, Khajuraho (Chari & Ghoomer)" },
    { year: "2010", honor: "Featured alongside Shri Amitabh Bachchan in a national commercial film" },
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* section: Our Journey */}
                    <section className="mb-32">
                        <SectionHeading
                            title="Our Journey"
                            subtitle="The Legacy of RP Dance & Musical group"
                        />
                        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 text-lg md:text-xl text-text-muted leading-relaxed font-light">
                                <p>
                                    Every tradition survives because someone chooses to carry it forward. The journey of RP Dance & Musical group began with that very intention — not merely to perform, but to preserve. What started as one artist’s devotion to heritage gradually became a collective of performers, musicians, and cultural ambassadors committed to presenting Rajasthan’s folk legacy with dignity and authenticity.
                                </p>
                                <p>
                                    Today, the group travels across stages, cities, and countries, presenting immersive cultural showcases that blend live folk music, original choreography, traditional costumes, authentic instruments, and storytelling through movement. Whether at global festivals, academic institutions, cultural forums, corporate platforms or ceremonial gatherings, each presentation is thoughtfully crafted to honour tradition while connecting meaningfully with contemporary audiences.
                                </p>
                            </div>
                            <div className="relative aspect-video rounded-tr-[80px] overflow-hidden border border-white/5">
                                <Image
                                    src="/images/founder.jpg"
                                    alt="RP Dance & Musical group Performance"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                            </div>
                        </div>
                        <p className="mt-12 text-text font-serif italic text-xl md:text-2xl border-l-4 border-primary pl-8 py-4 bg-surface/50">
                            “Here, performances are not designed for spotlight — they are choreographed to keep the legacy alive.”
                        </p>
                    </section>

                    {/* section: About the Founder */}
                    <section className="mb-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="order-2 lg:order-1">
                                <SectionHeading
                                    title="Rekha Parihar"
                                    subtitle="About the Founder"
                                />
                                <div className="mt-12 space-y-6 text-lg text-text-muted leading-relaxed font-light">
                                    <p>
                                        Stepping into dance at the age of fourteen, Rekha Parihar’s journey began with genuine curiosity and gradually evolved into a lifelong cultural calling. She earned her B.A. in Raga, received classical training at Rajasthan Sangeet & Kathak Kendra, and went on to master a wide spectrum of Rajasthan’s folk traditions.
                                    </p>
                                    <p>
                                        With more than 1,500 performances across India and abroad, her art has travelled from major Indian cities — including Delhi, Mumbai, Chennai, Ahmedabad, Lucknow, Surat, Varanasi, Coimbatore, Indore, Ujjain, Guwahati and Chandigarh — to international stages in the USA, London, South Africa, Algeria, France, Sri Lanka, Dubai and Hong Kong.
                                    </p>
                                    <p>
                                        Her repertoire includes celebrated folk forms such as Ghoomer, Bhawai, Chari, Kalbeliya, Terah Tali, Gher, Banjara, Kathputli, Kacchi Ghori and Teja Ji, each performed with scholarly understanding and expressive grace. Beyond performance, she actively mentors students through workshops in schools and colleges, guiding the younger generation to reconnect with cultural roots through rhythm and movement.
                                    </p>

                                    <div className="pt-10">
                                        <p className="text-2xl font-serif text-text italic">
                                            “Dance becomes devotion when the heart moves before the feet.”
                                        </p>
                                        <p className="text-primary uppercase tracking-widest text-sm mt-4 font-bold">— Rekha Parihar</p>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 relative group w-full aspect-[3/4] max-w-md mx-auto">
                                <div className="absolute inset-0 border-[1px] border-primary/20 -translate-x-6 -translate-y-6 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0" />
                                <div className="relative h-full w-full overflow-hidden border border-white/5 rounded-tr-[100px]">
                                    <Image
                                        src="/images/founder_portrait.jpg"
                                        alt="Rekha Parihar - Founder"
                                        fill
                                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                            </div>
                        </div>
                    </section>

                    {/* section: Key Recognitions */}
                    <section className="mb-32">
                        <SectionHeading
                            title="Key Recognitions & Honours"
                            subtitle="Awards & Milestones"
                        />
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            {recognitions.map((item, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="text-3xl font-serif font-black text-primary/30 group-hover:text-primary transition-colors duration-300 shrink-0">
                                        {item.year}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-0.5 w-8 bg-primary/20 group-hover:w-full transition-all duration-500" />
                                        <p className="text-lg text-text-muted leading-relaxed group-hover:text-text transition-colors duration-300">
                                            {item.honor}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Closing Section */}
                    <section className="text-center py-20 border-t border-white/5">
                        <h3 className="text-3xl md:text-4xl font-serif text-text-muted italic max-w-3xl mx-auto leading-relaxed">
                            Some journeys create success. <br />
                            A few create <span className="text-primary not-italic font-bold">legacy</span>. This is one of them.
                        </h3>
                    </section>

                </div>
            </main>
            <Footer />
        </>
    );
}
