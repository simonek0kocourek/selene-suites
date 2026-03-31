'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { primaryNav } from '@/lib/site-data';

const navLinkBase =
  'rounded-full px-4 py-2 text-sm font-medium tracking-[0.02em] transition-[transform,opacity,background-color,color,border-color] duration-300';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="section-shell pt-4">
        <div className="glass-panel flex items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60"
          >
            <div className="moon-outline rounded-full border border-white/10 bg-white/5 p-2">
              <Image src="/moon-emblem.svg" alt="" width={30} height={30} />
            </div>
            <div>
              <div className="font-heading text-base font-semibold text-foreground sm:text-lg">
                Selene Suites
              </div>
              <div className="text-xs uppercase tracking-[0.24em] text-brand-silver">
                Lunar Hospitality
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {primaryNav.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    navLinkBase,
                    active
                      ? 'bg-white/10 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
                      : 'text-brand-silver hover:bg-white/6 hover:text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/concierge-inquiry"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_18px_44px_rgba(246,231,199,0.16)] hover:-translate-y-0.5 hover:bg-brand-champagne/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60"
            >
              Reserve Mission
            </Link>
          </div>

          <Sheet>
            <SheetTrigger
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground md:hidden"
              aria-label="Open navigation menu"
            >
              <MenuIcon className="size-5" />
            </SheetTrigger>
            <SheetContent className="border-brand-line bg-[#081121]/96 px-0 text-foreground backdrop-blur-2xl">
              <SheetHeader className="border-b border-brand-line px-6 pb-5">
                <SheetTitle className="text-left font-heading text-2xl font-semibold text-foreground">
                  Selene Suites
                </SheetTitle>
                <SheetDescription className="text-left text-brand-silver">
                  Private moon hotel rentals with concierge-led launch planning.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-1 flex-col gap-3 px-6 py-6">
                {primaryNav.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <SheetClose
                      key={item.href}
                      nativeButton={false}
                      render={<Link href={item.href} />}
                      className={cn(
                        'rounded-[1.5rem] border px-4 py-4 text-left',
                        active
                          ? 'border-brand-cyan/30 bg-brand-cyan/10'
                          : 'border-brand-line bg-white/4'
                      )}
                    >
                      <div className="mb-1 text-base font-semibold text-foreground">{item.label}</div>
                      <div className="text-sm leading-6 text-brand-silver">{item.description}</div>
                    </SheetClose>
                  );
                })}
              </nav>

              <div className="border-t border-brand-line px-6 py-5">
                <SheetClose
                  nativeButton={false}
                  render={<Link href="/concierge-inquiry" />}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                >
                  Start Concierge Inquiry
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
