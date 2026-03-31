'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { FloatingLinesBackdrop } from '@/components/site/react-bits-wrappers';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';

export function SiteChrome({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <FloatingLinesBackdrop variant="global" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,231,199,0.06),transparent_20%),radial-gradient(circle_at_20%_18%,rgba(144,227,255,0.08),transparent_26%),linear-gradient(180deg,rgba(5,8,22,0.28),rgba(5,8,22,0.48))]" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-20 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
