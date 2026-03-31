import type { Metadata } from 'next';
import { InquiryPage } from '@/components/site/inquiry-page';

export const metadata: Metadata = {
  title: 'Concierge Inquiry',
  description:
    'Start a private Selene Suites concierge inquiry for lunar hospitality, charter launches, or bespoke moon-stay itineraries.',
};

export default function Page() {
  return <InquiryPage />;
}
