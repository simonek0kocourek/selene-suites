'use client';

import { useState } from 'react';
import { AnimatedEyebrow, Reveal, SplitHeadline } from '@/components/site/react-bits-wrappers';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactChannels, inquiryBenefits } from '@/lib/site-data';

interface FormState {
  fullName: string;
  email: string;
  partySize: string;
  targetWindow: string;
  tripGoal: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  partySize?: string;
  tripGoal?: string;
  message?: string;
}

const initialState: FormState = {
  fullName: '',
  email: '',
  partySize: '',
  targetWindow: '',
  tripGoal: '',
  message: '',
};

export function InquiryPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please share the primary contact name.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please enter an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!form.partySize.trim()) {
      nextErrors.partySize = 'Please tell us how many guests you expect.';
    }

    if (!form.tripGoal.trim()) {
      nextErrors.tripGoal = 'Please describe the type of stay you want.';
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please include a short mission brief.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 1100));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="pb-16 pt-8 sm:pb-24 sm:pt-14">
      <section className="section-shell">
        <div className="glass-panel rounded-[2.2rem] p-8 sm:p-12">
          <AnimatedEyebrow>Concierge Inquiry</AnimatedEyebrow>
          <SplitHeadline
            tag="h1"
            text="Share the shape of the mission you want, and we’ll reply with a tailored lunar itinerary."
            className="mt-4 max-w-4xl text-left text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl"
          />
          <p className="mt-6 max-w-3xl text-base leading-8 text-brand-silver sm:text-lg">
            Use this form for private client travel, honeymoon planning, founder retreats, full
            property buyouts, press requests, or research partnerships.
          </p>
        </div>
      </section>

      <section className="section-shell mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] sm:mt-14">
        <Reveal>
          <Card className="glass-panel rounded-[2rem] border border-brand-line bg-white/6 py-0">
            <CardHeader className="gap-3 px-6 pt-6">
              <CardTitle className="font-heading text-3xl text-foreground">
                Start your mission brief
              </CardTitle>
              <p className="text-sm leading-7 text-brand-silver">
                We respond within one business day with suite guidance, timeline expectations, and a
                recommended next step.
              </p>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-0">
              {submitted ? (
                <div className="rounded-[1.5rem] border border-brand-cyan/30 bg-brand-cyan/10 p-5">
                  <p className="font-heading text-2xl text-foreground">Inquiry received</p>
                  <p className="mt-3 text-sm leading-7 text-brand-silver">
                    A Selene Suites concierge will contact {form.email} with a tailored mission
                    outline, suggested launch window, and next-step checklist.
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                        Full name
                      </label>
                      <Input
                        id="fullName"
                        value={form.fullName}
                        onChange={(event) => updateField('fullName', event.target.value)}
                        aria-invalid={Boolean(errors.fullName)}
                        className="h-12 rounded-[1rem] border-brand-line bg-white/4 px-4 text-foreground"
                        placeholder="Jane Founder"
                      />
                      {errors.fullName ? (
                        <p className="text-sm text-brand-coral">{errors.fullName}</p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(event) => updateField('email', event.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        className="h-12 rounded-[1rem] border-brand-line bg-white/4 px-4 text-foreground"
                        placeholder="you@familyoffice.com"
                      />
                      {errors.email ? <p className="text-sm text-brand-coral">{errors.email}</p> : null}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="partySize" className="text-sm font-medium text-foreground">
                        Expected party size
                      </label>
                      <Input
                        id="partySize"
                        value={form.partySize}
                        onChange={(event) => updateField('partySize', event.target.value)}
                        aria-invalid={Boolean(errors.partySize)}
                        className="h-12 rounded-[1rem] border-brand-line bg-white/4 px-4 text-foreground"
                        placeholder="2 guests"
                      />
                      {errors.partySize ? (
                        <p className="text-sm text-brand-coral">{errors.partySize}</p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="targetWindow" className="text-sm font-medium text-foreground">
                        Preferred launch window
                      </label>
                      <Input
                        id="targetWindow"
                        value={form.targetWindow}
                        onChange={(event) => updateField('targetWindow', event.target.value)}
                        className="h-12 rounded-[1rem] border-brand-line bg-white/4 px-4 text-foreground"
                        placeholder="Spring 2027"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="tripGoal" className="text-sm font-medium text-foreground">
                      Trip goal
                    </label>
                    <Input
                      id="tripGoal"
                      value={form.tripGoal}
                      onChange={(event) => updateField('tripGoal', event.target.value)}
                      aria-invalid={Boolean(errors.tripGoal)}
                      className="h-12 rounded-[1rem] border-brand-line bg-white/4 px-4 text-foreground"
                      placeholder="Honeymoon, founder retreat, charter production, research stay"
                    />
                    {errors.tripGoal ? (
                      <p className="text-sm text-brand-coral">{errors.tripGoal}</p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Mission brief
                    </label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(event) => updateField('message', event.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      className="min-h-36 rounded-[1rem] border-brand-line bg-white/4 px-4 py-3 text-foreground"
                      placeholder="Tell us the tone of the trip, ideal duration, guests involved, and any privacy or production requirements."
                    />
                    {errors.message ? (
                      <p className="text-sm text-brand-coral">{errors.message}</p>
                    ) : null}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-brand-champagne/90"
                  >
                    {isSubmitting ? 'Preparing your brief...' : 'Submit inquiry'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.06}>
            <Card className="glass-panel rounded-[2rem] border border-brand-line bg-white/6 py-0">
              <CardHeader className="gap-3 px-6 pt-6">
                <CardTitle className="font-heading text-2xl text-foreground">
                  What happens next
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-6 pb-6 pt-0">
                {inquiryBenefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 text-sm leading-7 text-brand-silver">
                    <span className="mt-2 size-1.5 rounded-full bg-brand-cyan" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <Card className="glass-panel rounded-[2rem] border border-brand-line bg-white/6 py-0">
              <CardHeader className="gap-3 px-6 pt-6">
                <CardTitle className="font-heading text-2xl text-foreground">
                  Contact channels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6 pt-0">
                {contactChannels.map((channel) => (
                  <div key={channel.title} className="rounded-[1.3rem] border border-brand-line bg-white/4 p-4">
                    <Badge
                      variant="outline"
                      className="mb-3 h-auto rounded-full border-brand-line bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-brand-silver"
                    >
                      {channel.title}
                    </Badge>
                    <p className="font-medium text-foreground">{channel.detail}</p>
                    <p className="mt-2 text-sm leading-7 text-brand-silver">{channel.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
