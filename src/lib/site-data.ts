export interface NavItem {
  href: string;
  label: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface SuitePlan {
  name: string;
  slug: string;
  subtitle: string;
  price: string;
  duration: string;
  overlayDuration: string;
  image: string;
  accent: string;
  description: string;
  highlights: string[];
}

export interface LaunchWindow {
  season: string;
  window: string;
  duration: string;
  availability: string;
  missionType: string;
  notes: string;
}

export interface JourneyStep {
  phase: string;
  title: string;
  description: string;
}

export interface HighlightItem {
  title: string;
  metric: string;
  description: string;
}

export interface ContactChannel {
  title: string;
  detail: string;
  description: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export const primaryNav: NavItem[] = [
  {
    href: "/",
    label: "Home",
    description: "Overview of the lunar hospitality offering.",
  },
  {
    href: "/suites",
    label: "Suites",
    description: "Browse lunar residences and charter options.",
  },
  {
    href: "/launch-windows",
    label: "Launch Windows",
    description: "Review mission cadence and prep timelines.",
  },
  {
    href: "/concierge-inquiry",
    label: "Concierge Inquiry",
    description: "Begin the private booking process.",
  },
];

export const homeStats: StatItem[] = [
  {
    label: "Launches scheduled annually",
    value: 18,
    suffix: "",
    description: "A curated cadence designed for privacy, weather margin, and crew readiness.",
  },
  {
    label: "Private suites per mission",
    value: 6,
    suffix: "",
    description: "Limited capacity preserves the feel of a members-only orbital retreat.",
  },
  {
    label: "Hours from pad to lunar check-in",
    value: 38,
    suffix: "",
    description: "Private rocket transfer, orbital dock, and escorted arrival sequence.",
  },
  {
    label: "Concierge response time",
    value: 24,
    suffix: "h",
    description: "Every inquiry receives a tailored itinerary and readiness assessment.",
  },
];

export const suitePlans: SuitePlan[] = [
  {
    name: "Earthrise Dome",
    slug: "earthrise-dome",
    subtitle: "Panoramic suite for founders, hosts, and long-view thinkers.",
    price: "From $3.8M per stay",
    duration: "5 nights lunar surface",
    overlayDuration: "5 lunar nights",
    image: "/suite-earthrise.png",
    accent: "Earthrise salon",
    description:
      "A double-height glass observatory with a private dining crescent, telescope wall, and sunrise-facing sleeping deck above the Sea of Tranquility.",
    highlights: [
      "Hosted chef service with low-gravity tasting menu",
      "Dedicated observatory lounge and Earthrise briefing deck",
      "Private wardrobe prep and biometrics concierge",
    ],
  },
  {
    name: "Crater Edge Residence",
    slug: "crater-edge-residence",
    subtitle: "A secluded estate for private groups and discreet leadership retreats.",
    price: "From $6.4M per stay",
    duration: "7 nights lunar surface",
    overlayDuration: "7 lunar nights",
    image: "/suite-crater.png",
    accent: "Private residency",
    description:
      "An expanded residence carved into the regolith rim, balancing shielded quiet zones with a dramatic glass horizon room and mission boardroom.",
    highlights: [
      "Four-suite configuration for partners, chiefs of staff, or family",
      "Private mission strategist and research liaison included",
      "Subsurface spa circuit with thermal recovery suite",
    ],
  },
  {
    name: "Zero-G Honeymoon Capsule",
    slug: "zero-g-honeymoon-capsule",
    subtitle: "An intimate two-guest itinerary for ceremonies, proposals, and milestone trips.",
    price: "From $2.2M per stay",
    duration: "3 nights orbital plus 2 nights lunar surface",
    overlayDuration: "3 orbital + 2 lunar nights",
    image: "/suite-honeymoon.png",
    accent: "Ceremony capsule",
    description:
      "A cinematic orbital prelude pairs with a compact lunar suite finished in pale mineral tones, champagne lighting, and private vow or proposal staging.",
    highlights: [
      "Orbital ceremony rehearsal and portrait capture",
      "Private capsule transfer with sommelier-led welcome service",
      "Custom keepsake mission film delivered post-return",
    ],
  },
];

export const launchWindows: LaunchWindow[] = [
  {
    season: "Autumn 2026",
    window: "October 18 to November 9",
    duration: "5 to 7 nights",
    availability: "Priority inquiry only",
    missionType: "Earthrise and Crater Edge stays",
    notes: "Best for private group charters and clear Earth-view photography.",
  },
  {
    season: "Winter 2027",
    window: "January 14 to February 3",
    duration: "3 to 5 nights",
    availability: "Limited couples inventory",
    missionType: "Zero-G Honeymoon Capsule",
    notes: "Most requested window for proposals, ceremonies, and New Year milestone travel.",
  },
  {
    season: "Spring 2027",
    window: "April 22 to May 13",
    duration: "5 to 7 nights",
    availability: "Waitlist open",
    missionType: "Mixed-suite departures",
    notes: "Balanced conditions for first-time lunar guests and brand content teams.",
  },
];

export const journeySteps: JourneyStep[] = [
  {
    phase: "T-120 Days",
    title: "Earthside conditioning",
    description:
      "Guests begin a bespoke readiness program covering health screening, travel fittings, emergency familiarization, and hospitality preference capture.",
  },
  {
    phase: "T-72 Hours",
    title: "Launch estate arrival",
    description:
      "You check into the private coastal launch estate for culinary prep, mission wardrobe, briefings, and final weather-go decisions.",
  },
  {
    phase: "Launch Day",
    title: "Private rocket transfer",
    description:
      "A dedicated cabin configuration, guided ascent, and orbital dock sequence move guests from Earth runway to lunar transfer vehicle in one choreographed experience.",
  },
  {
    phase: "Arrival",
    title: "Lunar suite check-in",
    description:
      "A surface escort, low-gravity orientation, and suite reveal transition the journey from aerospace operation into fully serviced hospitality.",
  },
];

export const experienceHighlights: HighlightItem[] = [
  {
    title: "Quiet aerospace credibility",
    metric: "FAA-ready launch ops",
    description:
      "Every itinerary is framed with engineering clarity, not theme-park theatrics, so the experience feels credible as well as rare.",
  },
  {
    title: "Hospitality above spectacle",
    metric: "1:2 concierge ratio",
    description:
      "Private wardrobe, culinary, and scheduling support keep the journey feeling more Aman than amusement park.",
  },
  {
    title: "Mission-grade privacy",
    metric: "Full-journey discretion",
    description:
      "Ideal for founders, productions, heads of family office, and clients who need luxury without public noise.",
  },
  {
    title: "Programming worth traveling for",
    metric: "Curated lunar rituals",
    description:
      "Observation lounges, ceremony decks, astrophotography sessions, and research access give each stay a sense of purpose.",
  },
];

export const faqItems = [
  {
    question: "Is Selene Suites a public tourism service?",
    answer:
      "No. Selene Suites is positioned as a private hospitality operator for qualified clients, charter groups, and invited partners. Every mission begins with screening, planning, and a custom itinerary review.",
  },
  {
    question: "What is included in the stay price?",
    answer:
      "Pricing includes mission planning, readiness coordination, private launch estate accommodation, rocket transfer, suite staffing, dining, and on-surface concierge support. Scientific programming and charter requests are scoped separately.",
  },
  {
    question: "Can brands or productions reserve the entire property?",
    answer:
      "Yes. The Crater Edge Residence and mixed-suite departures can be structured as full buyouts for product launches, private screenings, and discreet campaign captures.",
  },
  {
    question: "How are delays or launch changes handled?",
    answer:
      "The concierge team issues alternate launch windows, estate extensions, or re-entry logistics based on weather, crew readiness, range restrictions, and lunar surface conditions.",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    title: "Private Client Desk",
    detail: "clients@selenesuites.space",
    description: "For family offices, UHNW leisure travel, and members club itineraries.",
  },
  {
    title: "Charter & Brand Missions",
    detail: "charters@selenesuites.space",
    description: "For buyouts, launches, founder retreats, and campaign productions.",
  },
  {
    title: "Press & Partnerships",
    detail: "+1 (310) 555-0116",
    description: "For media briefings, alliance requests, and hospitality partnerships.",
  },
];

export const inquiryBenefits = [
  "Private launch window recommendation tailored to party size and travel goal",
  "Suggested suite pairing and mission duration",
  "Readiness checklist for guests, legal entities, and support staff",
  "Initial pricing range and next-step briefing within one business day",
];

export const termsSections: LegalSection[] = [
  {
    heading: "Booking eligibility",
    paragraphs: [
      "Selene Suites accepts reservations only from adults or authorized legal representatives with capacity to enter binding agreements on behalf of all listed guests and sponsoring entities.",
      "All reservations remain subject to screening, mission-readiness review, export-control checks where applicable, and payment clearance before launch confirmation is issued.",
    ],
  },
  {
    heading: "Deposits and payment schedule",
    paragraphs: [
      "A non-refundable planning deposit is required to begin mission design, suite allocation, training coordination, and launch-window hold placement.",
      "Remaining balances are invoiced against milestone dates outlined in the booking agreement, including readiness sign-off, manifest lock, and pre-launch estate arrival.",
    ],
  },
  {
    heading: "Launch contingencies",
    paragraphs: [
      "Launch timing may change because of weather, range availability, hardware diagnostics, orbital traffic, regulatory directives, or lunar surface conditions.",
      "When a contingency occurs, Selene Suites may offer an alternate launch window, estate extension, adjusted itinerary, or equivalent credit subject to the booking agreement.",
    ],
  },
  {
    heading: "Guest conduct and safety",
    paragraphs: [
      "Guests must comply with all medical, operational, security, and crew instructions during training, launch preparation, transit, and lunar stay.",
      "Failure to follow safety directives, carry prohibited items, or disclose material health information may result in denied boarding or removal from mission activities without refund.",
    ],
  },
  {
    heading: "Cancellation and substitutions",
    paragraphs: [
      "Guest-requested cancellations, substitutions, or party-size reductions are governed by the timetable and fee schedule contained in the signed mission booking agreement.",
      "Substitutions may require renewed screening, training, and documentation review and are not effective until approved in writing by Selene Suites.",
    ],
  },
  {
    heading: "Liability boundaries",
    paragraphs: [
      "Selene Suites coordinates luxury hospitality and mission planning in conjunction with aerospace and logistics partners. Liability limitations, force-majeure terms, and risk acknowledgements are detailed in the executed booking documentation.",
      "To the fullest extent permitted by applicable law, Selene Suites excludes indirect, incidental, special, and consequential damages arising from launch delay, itinerary change, or third-party operational interruption.",
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    heading: "Information we collect",
    paragraphs: [
      "We collect information you provide through inquiry forms, mission planning calls, guest manifests, accessibility requests, and hospitality preference submissions.",
      "This may include contact information, company or family office details, travel preferences, payment coordination data, and readiness-related information required for screening or logistics.",
    ],
  },
  {
    heading: "How we use information",
    paragraphs: [
      "We use personal information to respond to inquiries, design itineraries, coordinate launch readiness, manage hospitality services, and send operational communications tied to a booking or request.",
      "We may also use limited data to improve website performance, understand demand patterns, and maintain security and fraud prevention controls.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "Selene Suites may use cookies, session technologies, and analytics tools to understand visits, measure page performance, and improve concierge acquisition flows.",
      "You can manage cookies through your browser settings, though some site functions may perform differently if essential technologies are disabled.",
    ],
  },
  {
    heading: "Sharing and retention",
    paragraphs: [
      "We share information only with service providers and operational partners that need it for inquiry handling, launch planning, payments, security, or legal compliance.",
      "Information is retained for as long as reasonably necessary for the purposes described here, including contractual, legal, operational, and dispute-resolution requirements.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You may request access, correction, or deletion of certain personal information by contacting the Selene Suites concierge privacy team, subject to legal and operational exceptions.",
      "Marketing communications may be opted out of at any time using the contact details provided in those communications or via direct request.",
    ],
  },
];
