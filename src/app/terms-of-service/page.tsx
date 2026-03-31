import type { Metadata } from 'next';
import { LegalPage } from '@/components/site/legal-page';
import { termsSections } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the Selene Suites terms covering booking eligibility, launch contingencies, deposits, cancellation, and liability boundaries.',
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Terms that frame how Selene Suites handles bookings, readiness, and launch changes."
      intro="These terms summarize the operational boundaries that apply to luxury lunar hospitality inquiries and confirmed mission bookings. Final contractual details may be expanded in signed mission documentation."
      sections={termsSections}
    />
  );
}
