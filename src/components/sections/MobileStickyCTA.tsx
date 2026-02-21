"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/content";

export default function MobileStickyCTA() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-background/95 px-3 py-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden"
      aria-label="Quick mobile actions"
    >
      <div className="mx-auto grid max-w-xl grid-cols-3 gap-2">
        <Link
          href={siteContent.contactActions.phoneHref}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-black/10 px-2 text-sm font-semibold text-text"
        >
          <Phone size={16} />
          Call
        </Link>
        <Link
          href={siteContent.contactActions.whatsappHref}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-2 text-sm font-semibold text-background"
        >
          <MessageCircle size={16} />
          WhatsApp
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-black/10 px-2 text-sm font-semibold text-text"
        >
          <CalendarCheck2 size={16} />
          Enquire
        </Link>
      </div>
    </aside>
  );
}
