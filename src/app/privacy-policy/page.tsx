import type { Metadata } from 'next';
import { LegalPage } from '@/components/site/legal-page';
import { privacySections } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read how Selene Suites collects, uses, and retains inquiry, booking, communications, and analytics data.',
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy practices for concierge inquiries, booking operations, and client communications."
      intro="This policy explains the information Selene Suites collects through the website and mission-planning workflow, how that information is used, and the choices available to clients and visitors."
      sections={privacySections}
    />
  );
}
