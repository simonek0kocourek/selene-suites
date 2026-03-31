'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

function DetailPill({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-[1.9rem] border border-white/10 bg-[#121b36]/42 px-4 py-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl',
        className
      )}
    >
      <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-[#c9d3eb]">
        {label}
      </p>
      <p className="mt-1 text-[1.08rem] font-medium tracking-[-0.03em] text-[#f4ecdd]">
        {value}
      </p>
    </div>
  );
}

function OutlineStar({
  className,
  color,
}: {
  className?: string;
  color: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 6L60 36L92 36L66 55L76 88L50 68L24 88L34 55L8 36L40 36L50 6Z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SeaOfTranquilityCard({ className }: { className?: string }) {
  return (
    <article
      data-testid="sea-tranquility-card"
      className={cn(
        'relative w-full overflow-hidden rounded-[2.45rem] border border-white/12 bg-[radial-gradient(circle_at_50%_24%,rgba(245,236,219,0.22),rgba(20,27,49,0.6)_36%,rgba(8,12,27,0.92)_78%),linear-gradient(180deg,rgba(18,24,45,0.92)_0%,rgba(8,11,24,0.95)_100%)] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_56%_72%,rgba(144,227,255,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />

      <div className="relative z-20 flex items-start justify-between gap-4">
        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[0.74rem] font-medium uppercase tracking-[0.32em] text-[#c8d2eb] backdrop-blur-md">
          Manifest 04
        </div>
        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.07] px-5 py-2 text-[0.74rem] font-medium uppercase tracking-[0.32em] text-[#efe2bd] backdrop-blur-md">
          Window Open
        </div>
      </div>

      <div className="relative z-20 mt-5">
        <h3 className="max-w-[20rem] font-sans text-[2.2rem] font-medium leading-[0.94] tracking-[-0.05em] text-[#f8f4ea] sm:text-[2.55rem]">
          Sea of Tranquility
        </h3>
      </div>

      <div className="relative mt-8 min-h-[25rem] sm:min-h-[27.5rem]">
        <div className="absolute inset-x-3 top-5 bottom-4 rounded-[2.15rem] border border-white/10 bg-[radial-gradient(circle_at_50%_54%,rgba(144,227,255,0.1),transparent_33%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />
        <div className="absolute inset-x-11 top-11 bottom-11 rounded-[1.6rem] border border-white/8" />
        <div className="absolute left-0 top-[49%] h-px w-[42%] bg-gradient-to-r from-[#5a7295]/0 via-[#5a7295]/60 to-[#5a7295]/0" />
        <div className="absolute right-0 top-[31%] h-px w-[30%] bg-gradient-to-r from-[#ef9f8d]/0 via-[#ef9f8d]/38 to-[#ef9f8d]/0" />

        <DetailPill
          label="Inventory"
          value="6 private keys"
          className="absolute right-7 top-14 z-50 max-w-[12rem] sm:right-8 sm:top-16"
        />
        <DetailPill
          label="Orbit 1"
          value="38-hour arrival"
          className="absolute bottom-9 left-7 z-50 max-w-[12rem] sm:left-8"
        />

        <div className="absolute left-1/2 top-[52%] z-30 size-[17.5rem] -translate-x-1/2 -translate-y-1/2 sm:size-[19rem]">
          <div className="absolute inset-0 rounded-full border border-white/12 bg-[#040919] shadow-[0_32px_80px_rgba(0,0,0,0.52)]" />
          <div className="absolute inset-[0.4rem] overflow-hidden rounded-full">
            <Image
              src="/space-station.png"
              alt="Space Station in Orbit"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(4,9,25,0.4))]" />
          </div>

          <OutlineStar
            color="#ffb09a"
            className="absolute left-[-1.5rem] top-[5.5rem] z-40 size-[3.8rem] opacity-75"
          />
          <OutlineStar
            color="#9adfff"
            className="absolute right-[-1.5rem] top-[4.9rem] z-40 size-[4rem] opacity-85"
          />
        </div>
      </div>

      <div className="relative z-20 mt-6 grid gap-8 border-t border-white/10 pt-7 sm:grid-cols-2 sm:gap-10">
        <div className="space-y-4">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-[#c3cce2]">
            Signature Promise
          </p>
          <p className="text-[1.05rem] leading-9 text-[#bac4da]">
            Credible launch operations, warm hospitality language, and no theme-park noise.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-[#c3cce2]">
            Best Fit
          </p>
          <p className="text-[1.05rem] leading-9 text-[#bac4da]">
            Honeymoons, founder retreats, charter launches, and discreet prestige travel.
          </p>
        </div>
      </div>
    </article>
  );
}
