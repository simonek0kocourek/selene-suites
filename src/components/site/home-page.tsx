'use client';

import Image from 'next/image';
import Link from 'next/link';
import TiltedCard from '@/components/TiltedCard';
import {
  AnimatedEyebrow,
  DotGridBackdrop,
  MetricNumber,
  Reveal,
  SplitHeadline,
} from '@/components/site/react-bits-wrappers';
import { SeaOfTranquilityCard } from '@/components/site/sea-of-tranquility-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  experienceHighlights,
  faqItems,
  homeStats,
  journeySteps,
  launchWindows,
  suitePlans,
} from '@/lib/site-data';

export function HomePage() {
  return (
    <div className="pb-16 pt-6 sm:pb-24 sm:pt-10">
      <section className="section-shell">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-brand-line bg-[#080d1b]/58 px-6 py-7 shadow-[0_32px_120px_rgba(0,0,0,0.32)] backdrop-blur-[2px] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-lunar.png"
              alt="Cinematic Lunar Landscape"
              fill
              className="object-cover opacity-65"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080d1b]/34 via-[#080d1b]/12 to-[#080d1b]" />
          </div>
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="space-y-7">
              <AnimatedEyebrow>Private Moon Hotel Rentals</AnimatedEyebrow>
              <SplitHeadline
                tag="h1"
                text="Reserve a lunar suite with private rocket transfer and concierge-led arrival."
                className="headline-glow max-w-4xl text-left text-5xl font-semibold leading-[0.94] text-foreground sm:text-6xl lg:text-7xl"
              />
              <Reveal className="max-w-2xl" delay={0.1}>
                <p className="text-base leading-8 text-brand-silver sm:text-lg">
                  Selene Suites blends credible aerospace operations with ultra-private hospitality,
                  giving founders, couples, and charter groups a bookable path to the moon that
                  feels composed, cinematic, and fully serviced.
                </p>
              </Reveal>
              <Reveal className="flex flex-col gap-3 sm:flex-row" delay={0.16}>
                <Link
                  href="/concierge-inquiry"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_18px_44px_rgba(246,231,199,0.16)] hover:-translate-y-0.5"
                >
                  Start a Concierge Inquiry
                </Link>
                <Link
                  href="/suites"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-brand-line bg-white/5 px-6 text-sm font-semibold text-foreground hover:-translate-y-0.5 hover:bg-white/8"
                >
                  Explore the Suites
                </Link>
              </Reveal>
              <Reveal className="flex flex-wrap gap-3" delay={0.22}>
                <Badge
                  variant="outline"
                  className="h-auto rounded-full border-brand-line bg-white/6 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] text-brand-silver"
                >
                  Coastal launch estate included
                </Badge>
                <Badge
                  variant="outline"
                  className="h-auto rounded-full border-brand-line bg-white/6 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] text-brand-silver"
                >
                  FAA-ready operator network
                </Badge>
                <Badge
                  variant="outline"
                  className="h-auto rounded-full border-brand-line bg-white/6 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] text-brand-silver"
                >
                  Charter and buyout options
                </Badge>
              </Reveal>
            </div>

            <Reveal className="relative" delay={0.12} distance={60} direction="horizontal">
              <SeaOfTranquilityCard className="mx-auto max-w-[31rem]" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell mt-10 sm:mt-14">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <Card className="glass-panel rounded-[1.7rem] border border-brand-line bg-white/6 py-0">
                <CardHeader className="gap-3 px-5 pt-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-brand-silver">
                    {stat.label}
                  </p>
                  <CardTitle className="font-heading text-4xl font-semibold text-foreground sm:text-5xl">
                    <MetricNumber value={stat.value} suffix={stat.suffix} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0 text-sm leading-7 text-brand-silver">
                  {stat.description}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-18 sm:mt-24">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <AnimatedEyebrow>Featured Suites</AnimatedEyebrow>
            <SplitHeadline
              text="Three lunar residences, each calibrated for a different kind of impossible trip."
              className="mt-4 max-w-3xl text-left text-4xl font-semibold text-foreground sm:text-5xl"
            />
          </div>
          <p className="max-w-xl text-base leading-8 text-brand-silver">
            The design language stays quiet and architectural while each itinerary changes tone,
            pacing, and service depth based on the guests you bring.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {suitePlans.map((suite, index) => (
            <Reveal key={suite.slug} delay={index * 0.08}>
              <div className="space-y-5">
                <div className="glass-panel rounded-[2rem] p-4">
                  <TiltedCard
                    imageSrc={suite.image}
                    altText={suite.name}
                    captionText={suite.accent}
                    containerHeight="420px"
                    containerWidth="100%"
                    imageHeight="420px"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.04}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent
                    overlayContent={
                      <div className="flex h-[420px] w-full flex-col justify-between rounded-[1.65rem] bg-gradient-to-b from-[#050816]/10 via-transparent to-[#050816]/92 p-6">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <Badge className="rounded-full bg-brand-cyan/14 px-3 py-1 text-[0.68rem] uppercase tracking-[0.26em] text-brand-cyan">
                            {suite.accent}
                          </Badge>
                          <span className="max-w-full rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[0.62rem] leading-none uppercase tracking-[0.18em] text-brand-champagne sm:text-[0.68rem] sm:tracking-[0.22em]">
                            {suite.overlayDuration}
                          </span>
                        </div>
                        <div>
                          <p className="font-heading text-3xl font-semibold text-white">{suite.name}</p>
                          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/70">
                            {suite.price}
                          </p>
                        </div>
                      </div>
                    }
                  />
                </div>
                <Card className="glass-panel rounded-[1.7rem] border border-brand-line bg-white/6 py-0">
                  <CardHeader className="px-5 pt-5">
                    <CardTitle className="font-heading text-2xl text-foreground">
                      {suite.subtitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 px-5 pb-5 pt-0">
                    <p className="text-sm leading-7 text-brand-silver">{suite.description}</p>
                    <div className="space-y-2 text-sm text-brand-silver">
                      {suite.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3">
                          <span className="mt-2 size-1.5 rounded-full bg-brand-cyan" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-18 sm:mt-24">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <AnimatedEyebrow>Journey Sequence</AnimatedEyebrow>
            <SplitHeadline
              text="From coastal launch estate to lunar check-in, the entire trip is choreographed."
              className="mt-4 text-left text-4xl font-semibold text-foreground sm:text-5xl"
            />
            <p className="mt-5 max-w-xl text-base leading-8 text-brand-silver">
              Aerospace complexity stays behind the scenes. Guests experience a measured rhythm of
              preparation, ascent, transfer, and arrival that feels calm from the first fitting to
              the suite reveal.
            </p>
          </Reveal>

          <div className="space-y-4">
            {journeySteps.map((step, index) => (
              <Reveal key={step.phase} delay={index * 0.08}>
                <Card className="glass-panel rounded-[1.75rem] border border-brand-line bg-white/6 py-0">
                  <CardHeader className="gap-3 px-5 py-5 sm:px-6">
                    <Badge
                      variant="outline"
                      className="h-auto max-w-max rounded-full border-brand-line bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.26em] text-brand-silver"
                    >
                      {step.phase}
                    </Badge>
                    <CardTitle className="font-heading text-2xl text-foreground">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 pt-0 text-sm leading-7 text-brand-silver sm:px-6">
                    {step.description}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-18 sm:mt-24">
        <div className="mb-8 max-w-3xl">
          <AnimatedEyebrow>Why It Feels Different</AnimatedEyebrow>
          <SplitHeadline
            text="Luxury hospitality standards, translated into a believable lunar operation."
            className="mt-4 text-left text-4xl font-semibold text-foreground sm:text-5xl"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {experienceHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <Card className="glass-panel rounded-[1.75rem] border border-brand-line bg-white/6 py-0">
                <CardHeader className="gap-3 px-5 pt-5">
                  <Badge className="max-w-max rounded-full bg-brand-coral/12 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-brand-coral">
                    {item.metric}
                  </Badge>
                  <CardTitle className="font-heading text-2xl text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0 text-sm leading-7 text-brand-silver">
                  {item.description}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-18 sm:mt-24">
        <div className="glass-panel relative overflow-hidden rounded-[2.2rem] p-6 sm:p-8">
          <DotGridBackdrop />
          <div className="relative z-10">
            <div className="max-w-3xl">
              <AnimatedEyebrow>Launch Windows</AnimatedEyebrow>
              <SplitHeadline
                text="Mission cadence stays selective so every departure can feel private and calm."
                className="mt-4 text-left text-4xl font-semibold text-foreground sm:text-5xl"
              />
              <p className="mt-5 text-base leading-8 text-brand-silver">
                Availability is intentionally constrained around weather margin, crew readiness, and
                suite turnover. Each window supports a different mix of itinerary styles.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {launchWindows.map((window, index) => (
                <Reveal key={window.season} delay={index * 0.08}>
                  <Card className="rounded-[1.7rem] border border-brand-line bg-[#081121]/80 py-0 backdrop-blur-xl">
                    <CardHeader className="gap-3 px-5 pt-5">
                      <Badge className="max-w-max rounded-full bg-brand-cyan/12 px-3 py-1 text-[0.68rem] uppercase tracking-[0.26em] text-brand-cyan">
                        {window.availability}
                      </Badge>
                      <CardTitle className="font-heading text-2xl text-foreground">
                        {window.season}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 px-5 pb-5 pt-0 text-sm leading-7 text-brand-silver">
                      <p>{window.window}</p>
                      <p>
                        <span className="text-foreground">Mission:</span> {window.missionType}
                      </p>
                      <p>
                        <span className="text-foreground">Duration:</span> {window.duration}
                      </p>
                      <p>{window.notes}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/launch-windows"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5"
              >
                Review Full Mission Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-18 sm:mt-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <AnimatedEyebrow>FAQ</AnimatedEyebrow>
            <SplitHeadline
              text="Questions clients ask before they move from intrigue to inquiry."
              className="mt-4 text-left text-4xl font-semibold text-foreground sm:text-5xl"
            />
            <p className="mt-5 max-w-xl text-base leading-8 text-brand-silver">
              The experience is aspirational, but the operating model needs to feel clear. These are
              the practical questions most clients raise first.
            </p>
          </div>

          <Reveal>
            <div className="glass-panel rounded-[2rem] p-5 sm:p-6">
              <Accordion defaultValue={faqItems[0] ? [faqItems[0].question] : []} className="gap-3">
                {faqItems.map((item) => (
                  <AccordionItem key={item.question} value={item.question} className="border-none">
                    <AccordionTrigger className="rounded-[1.4rem] border border-brand-line bg-white/5 px-4 py-4 text-base font-semibold text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-2 pt-2 text-sm leading-7 text-brand-silver">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell mt-18 sm:mt-24">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[2.2rem] p-8 sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,159,141,0.13),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(144,227,255,0.16),transparent_26%)]" />
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <AnimatedEyebrow>Ready for a Mission Briefing</AnimatedEyebrow>
                <SplitHeadline
                  text="Tell us what kind of moon stay you want, and we'll map the cleanest path to launch."
                  className="mt-4 text-left text-4xl font-semibold text-foreground sm:text-5xl"
                />
                <p className="mt-5 text-base leading-8 text-brand-silver">
                  Couples, private groups, brands, film productions, and research partners all start
                  in the same place: one discreet inquiry, one tailored response, and a clear next
                  step within a business day.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/concierge-inquiry"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5"
                >
                  Start Concierge Inquiry
                </Link>
                <Link
                  href="/launch-windows"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-brand-line bg-white/5 px-6 text-sm font-semibold text-foreground hover:-translate-y-0.5"
                >
                  See Launch Windows
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

