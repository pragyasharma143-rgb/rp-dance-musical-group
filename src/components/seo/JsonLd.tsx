import React from "react";

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "PerformingGroup",
        "name": "RP Dance & Musical group",
        "alternateName": "RP Group",
        "url": "https://rpdancegroup.com",
        "logo": "https://rpdancegroup.com/logo.png", // Placeholder
        "sameAs": [
            "https://www.facebook.com/rekhaparihar.rpdancegroup",
            "https://www.instagram.com/rpdancegroup_official",
            "https://www.youtube.com/@RPDanceGroup"
        ],
        "description": "Premier Rajasthani folk dance and musical group specializing in Ghoomar, Kalbelia, and traditional folk arts. Founded by Ms. Rekha Parihar.",
        "founder": {
            "@type": "Person",
            "name": "Rekha Parihar"
        },
        "areaServed": "Worldwide",
        "genre": ["Rajasthani Folk", "Folk Music", "Folk Dance"]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
