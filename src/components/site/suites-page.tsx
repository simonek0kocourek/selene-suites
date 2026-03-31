'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedEyebrow, Reveal, SplitHeadline } from '@/components/site/react-bits-wrappers';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { suitePlans } from '@/lib/site-data';

export function SuitesPage() {
  return (
    <div className="pb-16 pt-8 sm:pb-24 sm:pt-14">
      <section className="section-shell">
        <div className="glass-panel rounded-[2.2rem] p-8 sm:p-12">
          <AnimatedEyebrow>Suites</AnimatedEyebrow>
          <SplitHeadline
            tag="h1"
            text="Lunar residences designed for hosting, retreating, or disappearing beautifully."
            className="mt-4 max-w-4xl text-left text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl"
          />
          <p className="mt-6 max-w-3xl text-base leading-8 text-brand-silver sm:text-lg">
            Every suite combines shielding, service, and spectacle differently. Some are built for
            groups and strategy. Others are calibrated for intimacy, ceremony, and the rare pleasure
            of seeing Earth from a quiet room.
          </p>
        </div>
      </section>

      <section className="section-shell mt-10 space-y-6 sm:mt-14">
        {suitePlans.map((suite, index) => (
          <Reveal key={suite.slug} delay={index * 0.08}>
            <div className="glass-panel grid gap-6 rounded-[2rem] p-5 sm:p-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-brand-line bg-[radial-gradient(circle_at_50%_18%,rgba(246,231,199,0.16),transparent_22%),linear-gradient(180deg,#0b1326_0%,#09111f_100%)] p-5 sm:p-7">
                <Badge className="rounded-full bg-brand-cyan/12 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-brand-cyan">
                  {suite.accent}
                </Badge>
                <div className="relative mt-6 flex min-h-[17rem] items-center justify-center sm:min-h-[20rem]">
                  <Image
                    src={suite.image}
                    alt={suite.name}
                    width={620}
                    height={620}
                    className="w-full max-w-[24rem] drop-shadow-[0_0_70px_rgba(144,227,255,0.18)]"
                  />
                </div>
              </div>

              <Card className="rounded-[1.7rem] border border-brand-line bg-white/5 py-0 shadow-none">
                <CardHeader className="gap-3 px-5 pt-5 sm:px-6 sm:pt-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="h-auto rounded-full border-brand-line bg-white/6 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-brand-silver"
                    >
                      {suite.duration}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="h-auto rounded-full border-brand-line bg-white/6 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-brand-silver"
                    >
                      {suite.price}
                    </Badge>
                  </div>
                  <CardTitle className="font-heading text-3xl text-foreground sm:text-4xl">
                    {suite.name}
                  </CardTitle>
                  <p className="text-base leading-8 text-brand-silver">{suite.description}</p>
                </CardHeader>
                <CardContent className="space-y-3 px-5 pb-6 pt-0 sm:px-6">
                  {suite.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 text-sm leading-7 text-brand-silver">
                      <span className="mt-2 size-1.5 rounded-full bg-brand-coral" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="section-shell mt-10 sm:mt-14">
        <Reveal>
          <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
            <AnimatedEyebrow>Charter Option</AnimatedEyebrow>
            <SplitHeadline
              text="Need the entire property? We can structure discreet buyouts for private groups, launches, and productions."
              className="mt-4 max-w-4xl text-left text-4xl font-semibold text-foreground sm:text-5xl"
            />
            <p className="mt-5 max-w-3xl text-base leading-8 text-brand-silver">
              Charter itineraries include custom manifest design, on-site media protocols, staging
              allowances, research coordination, and dedicated executive handling for every party
              involved.
            </p>
            <div className="mt-8">
              <Link
                href="/concierge-inquiry"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5"
              >
                Discuss a Full Buyout
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
