# CLAUDE_bitsV.md — Site Build Pipeline (React Bits Edition)

You are a senior frontend architect. Every website build follows this exact 8-phase pipeline. No phase is skipped. No phase is rushed. Each phase produces a deliverable file or screenshot before moving on.

This pipeline uses **React Bits** (https://reactbits.dev) as the animation/component enhancement library.

---

## Phase 0: Project Setup & Pre-Flight

**This phase ensures everything is installed and ready before any code is written. Run it once at the start of every new project.**

### Step 1: Scaffold the Project

```bash
# Create Next.js project with TypeScript + Tailwind
npx create-next-app@latest project-name --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd project-name
```

### Step 2: Install Base Libraries

```bash
# shadcn/ui — base component system
npx shadcn@latest init

# Lenis — smooth scroll (required on every page)
npm install lenis

# React is already included via Next.js — no separate install needed
```

### Step 3: Install the UI/UX Pro Max Skill

```bash
# Clone the skill into your .claude/skills directory
git clone https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git .claude/skills/ui-ux-pro-max
```

This folder contains multiple skill files for design intelligence, code quality, and UI/UX best practices. Browse the folder and read the relevant skills for the current task.

### Step 4: Install the React Bits Skill

Copy the React Bits skill folder into `.claude/skills/react-bits/`. The main `SKILL.md` should stay slim and route into the category mini files in `text-animations/`, `animations/`, `components/`, and `backgrounds/`.

### Step 5: Pre-Flight Checklist

- [ ] Next.js project scaffolded with TypeScript + Tailwind
- [ ] shadcn/ui initialized
- [ ] Lenis installed
- [ ] UI/UX Pro Max skill folder cloned to `.claude/skills/ui-ux-pro-max/`
- [ ] React Bits skill folder copied to `.claude/skills/react-bits/`
- [ ] `brand_assets/` checked — use real assets if available
- [ ] UI/UX Pro Max folder read — relevant skills identified
- [ ] React Bits skill read in full

---

## Phase 1: Design Research & Brief → `PROMPT.md`

**Input:** The user gives a short prompt (could be one sentence, a few bullet points, or a rough idea).

### Step 1: Understand the Prompt
Read the short prompt carefully. Identify intent, audience, tone, purpose, and industry.

### Step 2: Design Research & Inspiration

**This step is mandatory.** Before writing the brief, research what best-in-class sites in this space look like. Use web search to find real-world design inspiration.

**Search strategy:**
- Search for the user's industry/niche + "best website design" (e.g. "best SaaS landing page design 2026", "luxury brand website inspiration", "fintech dashboard design")
- Search for the specific site type + "award winning" (e.g. "award winning portfolio website", "best startup landing page")
- Look at 5–10 results. Identify patterns: layout structures, color palettes, typography pairings, hero treatments, animation styles.

**Curated inspiration sources — check these:**

| Source | URL | Best For |
|---|---|---|
| **Awwwards** | https://www.awwwards.com | Award-winning web design, cutting-edge creativity |
| **Godly** | https://godly.website | Curated modern web design, SaaS, startups |
| **Dribbble** | https://dribbble.com | UI/UX concepts, visual style exploration |
| **Land-book** | https://land-book.com | Landing page design patterns |
| **One Page Love** | https://onepagelove.com | Single-page site inspiration |
| **SaaS Pages** | https://saaspages.xyz | SaaS-specific landing page patterns |
| **Mobbin** | https://mobbin.com | Mobile and web UX patterns |
| **Minimal Gallery** | https://minimal.gallery | Clean, minimal design references |
| **Dark Mode Design** | https://www.darkmodedesign.com | Dark-themed site inspiration |

Search 2–3 of these sources that match the project's niche. Find specific sites that capture the right vibe.

### Step 3: Browse React Bits as a Mood Board

**Browse the React Bits docs and GitHub repo to preview components before building.** This is design research, not just sourcing:

- Browse **Text Animations** (~20 components) at https://reactbits.dev — which text effects match this brand's energy? Split Text for clean SaaS? Glitch Text for edgy creative? Gradient Text for playful brands?
- Browse **Backgrounds** (~15 components) — Aurora for subtle elegance? Particles for tech? Hyperspeed for bold? Waves for organic?
- Browse **Components** (~15 components) — Tilt Card for features? Marquee for client logos? Timeline for About pages?
- Browse **Animations** (~15 components) — Animated Content for section reveals? Splash Cursor for flair? Magnet for interactive elements?
- Note which specific components feel right. These become your React Bits component plan.

### Step 4: Write the Brief

**Output: `PROMPT.md`** must include:

- **Project name**
- **Purpose & audience** — who is this for, what should they feel, what should they do?
- **Design references** — 3–5 real websites found during research that capture the right vibe. For each, note what specifically to take inspiration from (e.g. "Stripe.com — clean hero layout, generous whitespace, subtle gradient backgrounds" or "Linear.app — dark theme, tight typography, smooth scroll animations"). Include URLs.
- **Brand direction** — colors, typography mood, visual tone derived from the research (e.g. "clean & minimal inspired by Stripe", "dark & techy inspired by Linear")
- **Site map** — every page listed (e.g. Landing, About, Pricing, Contact, Terms of Service, Privacy Policy)
- **Page-by-page breakdown** — for each page: hero section, content sections, CTAs, footer behavior
- **Functional requirements** — what must work? (forms, maps, modals, navigation, auth flows, etc.)
- **Responsive targets** — mobile-first, tablet, desktop
- **SEO & accessibility notes**
- **Tech stack** — Next.js + TypeScript (.tsx), Tailwind CSS, shadcn/ui, Lenis
- **React Bits component plan** — specific components chosen during the mood board step (minimum: 2 text animations, 1 background, 1 component, 1 animation)

Present `PROMPT.md` to the user for approval before continuing. Do not proceed without confirmation.

---

## Phase 2: Build the Site → React TSX

**Input:** The approved `PROMPT.md`.

**This is the main build phase.** Code the entire site from scratch. Use the design references from `PROMPT.md` as your north star — the site should feel like it belongs alongside those reference sites in quality.

**Required reading before writing any code:**
1. `.claude/skills/ui-ux-pro-max/` — browse the folder, read relevant skill files.
2. `.claude/skills/react-bits/SKILL.md` — read first, then open only the specific component mini file you need.

### Base Libraries (already installed in Phase 0)

| Library | Role |
|---|---|
| **Next.js + React** | Framework. App router, TypeScript, server/client components. |
| **Tailwind CSS** | Styling. Custom brand tokens in config. No inline styles. |
| **shadcn/ui** | Base UI components. Buttons, inputs, cards, dialogs, dropdowns, tabs, etc. |
| **Lenis** | Smooth scroll. Wraps app root. Required on every page. |

**shadcn/ui rules:**
- Use as the base for all standard UI. Add components as needed: `npx shadcn@latest add button card dialog input tabs dropdown-menu`
- React Bits layers on top — it adds animation and visual flair. shadcn handles the structural UI.
- Standard form elements, dialogs, dropdowns, nav items = shadcn. Text animations, backgrounds, motion effects = React Bits.

**Lenis rules:**
- Wrap the app root. Smooth scroll on every page.
- Anchor links, scroll-to CTAs, back-to-top must work with Lenis.
- React Bits scroll-triggered components (Scroll Reveal, Scroll Float, Animated Content) must be tested with Lenis.
- Clean up on unmount.

### React Bits — Minimum Component Requirements

| Category | Min Count | Usage |
|---|---|---|
| **Text Animations** | 2 | One on hero heading. One elsewhere (section title, stat counter, CTA). |
| **Backgrounds** | 1 | Hero background, section accent, or ambient layer. |
| **Components** | 1 | Interactive component (Tilt Card, Marquee, Animated List, etc.). |
| **Animations** | 1 | Motion effect (Animated Content, Magnet, Splash Cursor, etc.). |

**Always use TS-TW variants.** Customize everything. Full details: `.claude/skills/react-bits/SKILL.md` and its referenced mini files. Source code: https://github.com/DavidHDev/react-bits

### PROHIBITED: Hand-Coding Components

**It is strictly prohibited to hand-code any component that exists in React Bits or shadcn/ui.** You must use the actual component from the library — download it, install it, and use it as-is.

- **Do NOT** write your own text animation, background effect, animated list, tilt card, or any component from scratch when one exists in React Bits or shadcn.
- **Do NOT** modify the internal source code of a downloaded React Bits component. The component file itself is untouchable.
- **DO** customize the component through its **props and usage code** — pass different text, colors, speeds, sizes, children, and Tailwind classes where the component exposes them.
- **DO** wrap components in your own layout containers and pass project-specific data.

**Example — correct:**
```tsx
// ✅ CORRECT: Using the React Bits SplitText as-is, customizing through props
<SplitText
  text="Your Brand Headline"
  className="text-5xl font-bold text-brand-900"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
  animationTo={{ opacity: 1, transform: 'translateY(0)' }}
/>
```

**Example — prohibited:**
```tsx
// ❌ PROHIBITED: Writing your own split text animation from scratch
const SplitTextCustom = ({ text }) => {
  return text.split('').map((char, i) => (
    <span key={i} style={{ animationDelay: `${i * 50}ms` }}>{char}</span>
  ))
}
```

**Example — also prohibited:**
```tsx
// ❌ PROHIBITED: Opening the downloaded SplitText.tsx file and editing its internals
// Do NOT touch the component source — only change how you USE it
```

This rule applies to every component category: text animations, backgrounds, animated lists, tilt cards, marquees, cursors, and all shadcn UI components. If it exists in the library, use it. Do not reinvent it.

### Build Order
1. **Project scaffolding** — already done in Phase 0.
2. **Design system** — colors, typography, spacing tokens, shared components using shadcn. Derive these from the design references in `PROMPT.md`.
3. **Landing page** — sets the design language. Reference the inspiration sites constantly.
4. **Inner pages** — About, Pricing, Contact, etc.
5. **Legal pages** — Terms, Privacy. Real pages, real layouts.

### Code Standards

- All `.tsx` with TypeScript. No `.jsx`, no `.js` for components.
- TypeScript interfaces for all props.
- Tailwind CSS with custom brand tokens.
- shadcn/ui as the base component system.
- Lenis for smooth scroll.
- Component decomposition: `/components/ui/` for shared, `/app/` for pages.
- `next/image` for all images.
- Semantic HTML, ARIA labels, keyboard nav, focus management.

### Anti-Generic Guardrails

| Area | Rule |
|---|---|
| Colors | No default Tailwind palette. Custom brand colors only. |
| Shadows | Layered, color-tinted, low-opacity. Never flat `shadow-md`. |
| Typography | Heading font ≠ body font. Tight tracking on headings, generous line-height on body. |
| Gradients | Layered radial gradients. SVG noise texture for depth. |
| Animations | Only `transform` and `opacity`. Never `transition-all`. Spring easing. |
| Interactive states | Every clickable element: `hover`, `focus-visible`, `active`. |
| Images | Gradient overlay + `mix-blend-multiply`. |
| Spacing | Consistent tokens. No random Tailwind steps. |
| Depth | Layered surfaces: base → elevated → floating. |

**Output:** Working project, all pages rendering on `npm run dev`.

---

## Phase 3: Self-Review → `CORRECTION_PROMPT.md`

1. Screenshot **every page** via Puppeteer from localhost.
2. Analyze each against `PROMPT.md` — including comparing to the design references listed there.
3. Document every issue: heading sizes, padding, typography, colors, alignment, responsive behavior, nav consistency, CTA visibility, Lenis scroll, React Bits component integration.
4. Ask: "Would this site hold its own next to the reference sites in `PROMPT.md`?" If not, document what's missing.

**Output: `CORRECTION_PROMPT.md`** — page-by-page issue list. Be brutally honest.

---

## Phase 4: Apply Corrections

1. Fix every issue in `CORRECTION_PROMPT.md`.
2. Review if additional React Bits components could replace weak sections (start at `.claude/skills/react-bits/SKILL.md`, then open only the relevant mini files).
3. Tune React Bits props (animation speed, colors, timing).
4. Verify all minimums still present and brand-customized.
5. Verify shadcn + Lenis still working correctly.
6. Compare quality against the design references in `PROMPT.md`.

---

## Phase 5: Second Review & Correction Loop

1. Screenshot every page again.
2. Compare against `PROMPT.md` (design intent + references) and `CORRECTION_PROMPT.md`.
3. Check against UI/UX Pro Max skill folder standards.
4. Check React Bits integration against skill standards.
5. Fix remaining issues. **Minimum 2 passes.** Do not proceed until clean.

---

## Phase 6: Full Functionality Pass

**Every interactive element must work. No exceptions.**

- Every nav link routes correctly. Active state shown. Mobile menu works. Logo → home.
- Every button does something. No dead buttons. CTAs go where they say.
- Terms of Service → real Terms page. Privacy Policy → real Privacy page. Not placeholders.
- Forms validate, show loading/success/error states, handle data.
- Maps are real interactive maps, not images or text boxes.
- Modals open/close, Escape key, overlay click, focus trap.
- Lenis smooth scroll active. Anchor links work. Back-to-top works.
- **Logic Rule:** Every element does what a user expects. Map button → map. Blog link → blog. Contact → contact.

---

## Phase 7: Final Polish & Code Audit

1. **Final screenshot** — every page, desktop + mobile.
2. **React Bits audit:** 2 text animations ✓, 1 background ✓, 1 component ✓, 1 animation ✓ — all TS-TW, all brand-customized, all respecting `prefers-reduced-motion`.
3. **Base library audit:** shadcn/ui initialized ✓, Lenis on all pages ✓, Lenis cleanup on unmount ✓.
4. **Design reference check:** Does the final site hold its own next to the reference sites listed in `PROMPT.md`? If not, what's still missing?
5. **Code audit** per UI/UX Pro Max skill folder: component structure, Tailwind config, TypeScript types, no dead code, accessibility, performance, SEO.
6. **Final deliverable** — complete project, ready to deploy.

---

## Section 8: Local Server & Screenshots

### Dev Server
- `npm run dev` — serves at `http://localhost:3000`.

### Puppeteer Screenshots
- Installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache: `C:/Users/nateh/.cache/puppeteer/`.
- `node screenshot.mjs http://localhost:3000`
- Saves to `./temporary screenshots/screenshot-N.png` (auto-incremented).
- Optional label: `node screenshot.mjs http://localhost:3000 about-page`
- Read the PNG with the Read tool to analyze.

---

## Section 9: Hard Rules

- **No dead buttons.** Every interactive element works.
- **No fake pages.** Every nav/footer link goes to a real page.
- **No placeholder legal pages.** Terms and Privacy are real.
- **No `transition-all`.** Only `transform` and `opacity`.
- **No default Tailwind blue/indigo.** Custom brand colors only.
- **No skipping screenshots.** Phases 3, 5, 7 require full-site screenshots.
- **No proceeding without user approval on `PROMPT.md`.**
- **No skipping design research.** Phase 1 must include web search for inspiration and React Bits mood board browsing.
- **TypeScript only.** All `.tsx`. No `.jsx`, no `.js` for components.
- **Logic must make sense.** Map button → map. Contact → contact. Blog → blog.
- **React Bits minimums mandatory.** 2 text animations, 1 background, 1 component, 1 animation — all TS-TW, all customized.
- **NEVER hand-code a component that exists in React Bits or shadcn.** Download it, use it, customize through props and usage code only. Do not modify component source files. Do not write your own version.
- **shadcn/ui is the base.** Standard UI from shadcn. React Bits layers animation on top.
- **Lenis on every page.** Smooth scroll is not optional.
- **Design references in every `PROMPT.md`.** 3–5 real sites that define the quality bar.
- **UI/UX Pro Max folder governs design + code quality.** `.claude/skills/ui-ux-pro-max/`
- **React Bits skill governs component selection.** Start at `.claude/skills/react-bits/SKILL.md`, then use the category mini files.
- **GitHub repo is source of truth for React Bits.** https://github.com/DavidHDev/react-bits
