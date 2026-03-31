import type { Metadata } from 'next';
import { SuitesPage } from '@/components/site/suites-page';

export const metadata: Metadata = {
  title: 'Suites',
  description:
    'Browse the Earthrise Dome, Crater Edge Residence, and Zero-G Honeymoon Capsule offered by Selene Suites.',
};

export default function Page() {
  return <SuitesPage />;
}
