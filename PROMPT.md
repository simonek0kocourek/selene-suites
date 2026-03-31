# PROMPT.md

## Project Name

Selene Suites

## Purpose & Audience

Selene Suites is a luxury moon-hotel rental business that sells private lunar stays, rocket transfers, and concierge-led orbital experiences.

- Audience: ultra-high-net-worth travelers, founders, luxury honeymoon clients, private members clubs, film productions, and research teams that want prestige plus spectacle.
- Emotional goal: awe, trust, exclusivity, and the feeling of booking a once-in-a-generation destination.
- Conversion goal: get visitors to request a launch window, browse suite types, and submit a concierge inquiry.

## Design References

1. Virgin Galactic
   URL: https://www.virgingalactic.com/
   Take: cinematic full-bleed aerospace visuals, minimal copy blocks, strong mission-led storytelling, premium dark-space palette, and confident CTA placement.

2. Axiom Space
   URL: https://www.axiomspace.com/
   Take: credible aerospace tone, modular system explanations, technical elegance, restrained typography, and dark editorial pacing for complex ideas.

3. Amanvari
   URL: https://www.aman.com/resorts/amanvari
   Take: ultra-luxury hospitality language, generous whitespace, warm premium materials, quiet confidence, and destination-first presentation.

4. Hotel des Horlogers
   URL: https://www.awwwards.com/sites/hotel-des-horlogers
   Take: immersive hospitality storytelling, section-by-section reveal rhythm, landscape-driven framing, and understated luxury composition.

5. Omega Crypto Website
   URL: https://www.awwwards.com/sites/omega-crypto-website
   Take: futuristic glow accents, orbital line motifs, glassy panels, and controlled neon highlights without turning the whole site into sci-fi noise.

## Brand Direction

- Overall tone: luxury space hospitality, not cartoon sci-fi.
- Visual language: dark obsidian sky, lunar silver, pale champagne, restrained electric cyan, and rocket-plasma coral for emphasis.
- Materials: frosted glass, brushed metal, telescope-black surfaces, subtle glow edges, and halo gradients.
- Typography mood: expressive, wide futuristic display face for headings paired with a clean editorial sans for body copy.
- Motion mood: smooth launch-like ascents, orbital drifts, staggered reveals, and selective high-impact moments.
- Content mood: elite concierge, credible aerospace operations, impossible destination made bookable.

## Site Map

- Home
- Suites
- Launch Windows
- Concierge Inquiry
- Terms of Service
- Privacy Policy

## Page-by-Page Breakdown

### Home

- Hero: large cinematic opening with moon-hotel concept, rocket transfer message, immediate CTA to request a launch.
- Sections:
  - credibility strip with launch cadence, cabin counts, and lunar stay stats
  - featured suite types
  - launch sequence / travel journey
  - onboard and lunar experiences
  - safety and operations overview
  - FAQ
  - final concierge CTA
- Footer: contact, legal links, and mission statement.

### Suites

- Hero: overview of rental categories and who each stay is designed for.
- Sections:
  - Earthrise Dome
  - Crater Edge Residence
  - Zero-G Honeymoon Capsule
  - buyout / charter option for brands and private groups
- CTA: move to concierge inquiry.

### Launch Windows

- Hero: future mission calendar framing.
- Sections:
  - next available launch periods
  - mission duration options
  - prep timeline from Earth departure to lunar check-in
  - weather and launch-readiness messaging
- CTA: reserve a mission briefing.

### Concierge Inquiry

- Hero: premium booking entry point.
- Sections:
  - inquiry form
  - mission planner details
  - what happens after submission
  - contact channels for private clients and press
- CTA behavior: form submit with clear success state.

### Terms of Service

- Real legal layout with sections for booking, deposits, launch contingencies, guest conduct, cancellation, and liability boundaries.

### Privacy Policy

- Real legal layout with sections for data collection, form handling, communications, analytics, cookies, and data retention.

## Functional Requirements

- Fully responsive landing experience.
- Sticky navigation with anchor jumps on Home and page links to all secondary pages.
- Concierge inquiry form with client-side validation and success state.
- Buttons must all resolve to either page routes, anchor targets, or form actions.
- Mobile menu must work.
- FAQ interactions must work.
- Legal pages must be real pages, not placeholders.
- Scroll behavior should feel premium and smooth.

## Responsive Targets

- Mobile-first for 375px width.
- Tablet support around 768px to 1024px.
- Large desktop polish for 1440px and above.

## SEO & Accessibility Notes

- Clear page titles and metadata for each route.
- Strong H1/H2 hierarchy.
- Descriptive CTA labels.
- Keyboard-accessible nav, form controls, and FAQ interactions.
- Respect `prefers-reduced-motion` for major animated effects.
- Maintain strong contrast against dark backgrounds.
- Use semantic landmarks and accessible form labels.

## Tech Stack

- Next.js
- TypeScript (.tsx)
- Tailwind CSS
- shadcn/ui
- Lenis

## React Bits Component Plan

- Text Animations:
  - SplitText for the hero headline.
  - CountUp for stats and launch metrics.
  - Optional accent: GradientText for premium badges or booking labels.

- Backgrounds:
  - DotGrid for a structured mission-data or launch-planning section backdrop.

- Components:
  - TiltedCard for featured lunar suite cards.

- Animations:
  - AnimatedContent for section reveals and premium motion pacing.

## Build Notes

- Keep the site feeling like a luxury hospitality brand that happens to operate rockets.
- Avoid novelty overload; the moon and rockets should feel aspirational, expensive, and believable.
- The quality bar is "Aman x Axiom Space x Virgin Galactic," not playful space tourism for kids.
