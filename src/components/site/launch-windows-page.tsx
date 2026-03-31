'use client';

import Link from 'next/link';
import { AnimatedEyebrow, Reveal, SplitHeadline } from '@/components/site/react-bits-wrappers';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { journeySteps, launchWindows } from '@/lib/site-data';

const missionProfiles = [
  {
    title: 'Couples Mission',
    duration: '5 nights total',
    description:
      'Designed for proposals, ceremonies, and intimate milestone travel with a short orbital prelude.',
  },
  {
    title: 'Founders Retreat',
    duration: '7 nights total',
    description:
      'Combines a longer surface stay, private boardroom sessions, and discreet support for principals and staff.',
  },
  {
    title: 'Brand or Research Charter',
    duration: 'Custom manifest',
    description:
      'Built around production, capture, or mission-specific programming with controlled access and expanded logistics.',
  },
];

export function LaunchWindowsPage() {
  return (
    <div className="pb-16 pt-8 sm:pb-24 sm:pt-14">
      <section className="section-shell">
        <div className="glass-panel rounded-[2.2rem] p-8 sm:p-12">
          <AnimatedEyebrow>Launch Windows</AnimatedEyebrow>
          <SplitHeadline
            tag="h1"
            text="A selective mission calendar built around readiness, privacy, and clear lunar viewing conditions."
            className="mt-4 max-w-4xl text-left text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl"
          />
          <p className="mt-6 max-w-3xl text-base leading-8 text-brand-silver sm:text-lg">
            Rather than running constant departures, Selene Suites opens a small number of carefully
            planned launch periods. That pacing protects guest privacy, operational confidence, and
            the hospitality finish of each arrival.
          </p>
        </div>
      </section>

      <section className="section-shell mt-10 grid gap-4 lg:grid-cols-3 sm:mt-14">
        {launchWindows.map((window, index) => (
          <Reveal key={window.season} delay={index * 0.08}>
            <Card className="glass-panel rounded-[1.75rem] border border-brand-line bg-white/6 py-0">
              <CardHeader className="gap-3 px-5 pt-5">
                <Badge className="max-w-max rounded-full bg-brand-cyan/12 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-brand-cyan">
                  {window.availability}
                </Badge>
                <CardTitle className="font-heading text-3xl text-foreground">{window.season}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-5 pb-5 pt-0 text-sm leading-7 text-brand-silver">
                <p>{window.window}</p>
                <p>
                  <span className="text-foreground">Mission type:</span> {window.missionType}
                </p>
                <p>
                  <span className="text-foreground">Duration:</span> {window.duration}
                </p>
                <p>{window.notes}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </section>

      <section className="section-shell mt-10 sm:mt-14">
        <div className="grid gap-4 lg:grid-cols-3">
          {missionProfiles.map((profile, index) => (
            <Reveal key={profile.title} delay={index * 0.06}>
              <Card className="glass-panel rounded-[1.75rem] border border-brand-line bg-white/6 py-0">
                <CardHeader className="gap-3 px-5 pt-5">
                  <Badge
                    variant="outline"
                    className="h-auto max-w-max rounded-full border-brand-line bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-brand-silver"
                  >
                    {profile.duration}
                  </Badge>
                  <CardTitle className="font-heading text-2xl text-foreground">{profile.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0 text-sm leading-7 text-brand-silver">
                  {profile.description}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-10 sm:mt-14">
        <div className="grid gap-4 lg:grid-cols-2">
          {journeySteps.map((step, index) => (
            <Reveal key={step.phase} delay={index * 0.08}>
              <Card className="glass-panel rounded-[1.75rem] border border-brand-line bg-white/6 py-0">
                <CardHeader className="gap-3 px-5 pt-5">
                  <Badge className="max-w-max rounded-full bg-brand-coral/12 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-brand-coral">
                    {step.phase}
                  </Badge>
                  <CardTitle className="font-heading text-2xl text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0 text-sm leading-7 text-brand-silver">
                  {step.description}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-10 sm:mt-14">
        <Reveal>
          <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
            <AnimatedEyebrow>Mission Briefing</AnimatedEyebrow>
            <SplitHeadline
              text="If one of these windows fits your goals, we’ll build the cleanest path from interest to manifest."
              className="mt-4 max-w-4xl text-left text-4xl font-semibold text-foreground sm:text-5xl"
            />
            <p className="mt-5 max-w-3xl text-base leading-8 text-brand-silver">
              We’ll advise on suite selection, party size, training schedule, paperwork lead times,
              and the backup scenarios that matter before you commit.
            </p>
            <div className="mt-8">
              <Link
                href="/concierge-inquiry"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5"
              >
                Reserve a Mission Briefing
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
