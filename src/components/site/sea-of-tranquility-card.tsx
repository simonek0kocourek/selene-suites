'use client';

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

function RocketMark() {
  return (
    <div className="relative h-[7.8rem] w-[4.9rem]">
      <div className="absolute left-1/2 top-0 h-[2rem] w-[1.5rem] -translate-x-1/2 rounded-t-[0.9rem] rounded-b-[0.45rem] bg-[#16264d]" />
      <div className="absolute left-1/2 top-[1.7rem] h-[5.9rem] w-[4.1rem] -translate-x-1/2 rounded-[1.2rem] bg-[#09112a] shadow-[0_16px_30px_rgba(0,0,0,0.36)]" />
      <div className="absolute left-[0.1rem] top-[2.3rem] h-[3.5rem] w-[1.35rem] rounded-[0.9rem] bg-[#0f1b3d]" />
      <div className="absolute right-[0.1rem] top-[2.3rem] h-[3.5rem] w-[1.35rem] rounded-[0.9rem] bg-[#0f1b3d]" />
      <div className="absolute left-1/2 top-[2.35rem] h-[3rem] w-[2.55rem] -translate-x-1/2 rounded-[1.15rem] border border-[#31436f] bg-[linear-gradient(180deg,#162754_0%,#0d1734_100%)]" />
      <div className="absolute left-1/2 top-[3.2rem] h-[2.1rem] w-[3rem] -translate-x-1/2 rounded-[1.15rem] border border-[#41527d] bg-[linear-gradient(180deg,#42598c_0%,#1a2448_100%)]" />
      <div className="absolute left-1/2 top-[2.1rem] h-[0.22rem] w-[1.85rem] -translate-x-1/2 rounded-full bg-[#8ed4f4]" />
      <div className="absolute left-1/2 top-[2.8rem] h-[0.18rem] w-[1.95rem] -translate-x-1/2 rounded-full bg-[#95d8ff]/80" />
      <div className="absolute left-1/2 top-[3.55rem] h-[0.18rem] w-[2.4rem] -translate-x-1/2 rounded-full bg-[#9cc7ee]/75" />
      <div className="absolute left-1/2 top-[4.1rem] h-[0.18rem] w-[2.4rem] -translate-x-1/2 rounded-full bg-[#9cc7ee]/75" />
      <div className="absolute left-1/2 top-[4.65rem] h-[0.18rem] w-[2.4rem] -translate-x-1/2 rounded-full bg-[#9cc7ee]/75" />
      <div className="absolute inset-x-[1.7rem] bottom-0 h-[0.9rem] rounded-b-[0.8rem] bg-[#0f1b3d]" />
    </div>
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
        <h3 className="max-w-[15rem] font-sans text-[2.2rem] font-medium leading-[0.94] tracking-[-0.05em] text-[#f8f4ea] sm:text-[2.55rem]">
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
          className="absolute right-7 top-14 z-10 max-w-[10rem] sm:right-8 sm:top-16"
        />
        <DetailPill
          label="Orbit 1"
          value="38-hour arrival"
          className="absolute bottom-9 left-7 z-10 max-w-[10.75rem] sm:left-8"
        />

        <div className="absolute left-1/2 top-[52%] z-30 size-[17.5rem] -translate-x-1/2 -translate-y-1/2 sm:size-[19rem]">
          <div className="absolute inset-0 rounded-full bg-[#040919] shadow-[0_28px_70px_rgba(0,0,0,0.42)]" />
          <div className="absolute inset-[0.9rem] rounded-full border border-[#1a2445] bg-[radial-gradient(circle_at_50%_48%,rgba(8,16,35,0.58),rgba(5,10,24,0.98)_74%)]" />
          <div className="absolute inset-[1.55rem] rounded-full border border-dashed border-[#22325a] opacity-80" />
          <div className="absolute inset-[2.3rem] rounded-full border border-[#1a274b] opacity-90" />
          <div className="absolute inset-[3rem] overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_28%,#f7f0dc_0%,#e8d9ac_58%,#c4b48b_100%)]">
            <div className="absolute inset-y-4 right-[-10%] w-[44%] rounded-full bg-[#5d5d72]/28 blur-[1px]" />
            <div className="absolute bottom-4 left-1/2 h-12 w-36 -translate-x-1/2 rounded-full bg-black/18 blur-xl" />
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <RocketMark />
            </div>

            <svg
              aria-hidden="true"
              viewBox="0 0 260 180"
              className="absolute inset-0 h-full w-full opacity-80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52 124C73 103 86 90 104 82"
                fill="none"
                stroke="#c3bef8"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M155 131C172 115 185 108 211 114"
                fill="none"
                stroke="#f4b8b3"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </div>

          <OutlineStar
            color="#ffb09a"
            className="absolute left-[2.35rem] top-[5.5rem] z-40 size-[3.8rem] opacity-75"
          />
          <OutlineStar
            color="#9adfff"
            className="absolute right-[2.55rem] top-[4.9rem] z-40 size-[4rem] opacity-85"
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 160 120"
            className="absolute right-[0.9rem] top-[5.2rem] z-40 h-[7.4rem] w-[10rem]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 102C27 76 42 56 65 45C85 36 102 45 121 72"
              stroke="#9adfff"
              strokeDasharray="6 7"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              d="M108 78L118 64L124 78L139 82L125 90L129 104L117 95L104 103L108 88L95 79L108 78Z"
              fill="#fbefce"
            />
            <path d="M139 96L145 104L152 106L147 111L149 118L142 114L136 119L137 111L130 107L137 104L139 96Z" fill="#ffb09a" />
          </svg>
        </div>
      </div>

      <div className="relative z-20 mt-5 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2 sm:gap-8">
        <div>
          <p className="text-[0.74rem] font-medium uppercase tracking-[0.34em] text-[#c3cce2]">
            Signature Promise
          </p>
          <p className="mt-3 max-w-[18rem] text-[1.05rem] leading-9 text-[#bac4da]">
            Credible launch operations, warm hospitality language, and no theme-park noise.
          </p>
        </div>
        <div>
          <p className="text-[0.74rem] font-medium uppercase tracking-[0.34em] text-[#c3cce2]">
            Best Fit
          </p>
          <p className="mt-3 max-w-[18rem] text-[1.05rem] leading-9 text-[#bac4da]">
            Honeymoons, founder retreats, charter launches, and discreet prestige travel.
          </p>
        </div>
      </div>
    </article>
  );
}
