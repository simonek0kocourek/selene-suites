import type { Metadata } from 'next';
import { LaunchWindowsPage } from '@/components/site/launch-windows-page';

export const metadata: Metadata = {
  title: 'Launch Windows',
  description:
    'Review upcoming Selene Suites mission windows, itinerary types, and the timeline from Earth departure to lunar check-in.',
};

export default function Page() {
  return <LaunchWindowsPage />;
}
