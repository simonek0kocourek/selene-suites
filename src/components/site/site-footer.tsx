'use client';

import Image from 'next/image';
import Link from 'next/link';
import { primaryNav } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-brand-line">
      <div className="section-shell py-10">
        <div className="glass-panel grid gap-8 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="moon-outline rounded-full border border-white/10 bg-white/5 p-2">
                <Image src="/moon-emblem.svg" alt="" width={28} height={28} />
              </div>
              <div>
                <p className="font-heading text-xl font-semibold text-foreground">Selene Suites</p>
                <p className="text-xs uppercase tracking-[0.26em] text-brand-silver">
                  Moon Hotel Rentals
                </p>
              </div>
            </div>
            <p className="max-w-lg text-sm leading-7 text-brand-silver sm:text-base">
              Private lunar stays, chartered rocket transfers, and concierge-built itineraries for
              clients who expect aerospace credibility with true hospitality polish.
            </p>
            <Link
              href="/concierge-inquiry"
              className="inline-flex h-11 items-center justify-center rounded-full border border-brand-line bg-white/5 px-5 text-sm font-semibold text-foreground hover:-translate-y-0.5 hover:bg-white/8"
            >
              Request a Mission Briefing
            </Link>
          </div>

          <div>
            <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">Explore</h2>
            <div className="space-y-3 text-sm text-brand-silver">
              {primaryNav.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">Legal</h2>
            <div className="space-y-3 text-sm text-brand-silver">
              <div>
                <Link href="/terms-of-service" className="hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
              <div>
                <Link href="/privacy-policy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </div>
              <div>
                <a href="mailto:clients@selenesuites.space" className="hover:text-foreground">
                  clients@selenesuites.space
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
