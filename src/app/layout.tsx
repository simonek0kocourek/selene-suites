import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { SiteChrome } from "@/components/site/site-chrome";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selene-suites.example"),
  title: {
    default: "Selene Suites | Private Moon Hotel Rentals",
    template: "%s | Selene Suites",
  },
  description:
    "Luxury moon hotel rentals with private rocket transfers, concierge-led itineraries, and lunar suites above the Sea of Tranquility.",
  openGraph: {
    title: "Selene Suites | Private Moon Hotel Rentals",
    description:
      "Private lunar hospitality for founders, honeymooners, and charter groups seeking a credible luxury spaceflight experience.",
    siteName: "Selene Suites",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selene Suites | Private Moon Hotel Rentals",
    description:
      "Reserve a private lunar stay with rocket transfer, concierge planning, and high-design moon hotel suites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
