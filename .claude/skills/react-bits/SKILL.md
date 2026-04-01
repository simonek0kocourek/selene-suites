---
name: react-bits
description: Use when working with React Bits components in Claude projects and you need the official TS-TW install command, npm dependency line, usage snippet, extracted TSX source, or guidance on where a component fits best in a website. This skill is optimized for low token usage: open the main skill first, then open exactly one component file from text-animations, animations, components, or backgrounds.
---

# React Bits

Use this skill as a router into the smallest relevant React Bits file.

## Workflow

1. Keep context small. Do not load multiple component files unless the user is actively comparing options.
2. Pick one category folder:
   - `text-animations/`
   - `animations/`
   - `components/`
   - `backgrounds/`
3. Open the exact component file you need, such as:
   - `text-animations/text-pressure.md`
   - `text-animations/curved-loop.md`
   - `animations/animated-content.md`
   - `components/magic-bento.md`
   - `backgrounds/aurora.md`
4. Use the install command, dependency line, usage snippet, and extracted TSX source from that single file.
5. Prefer the official TS-TW variant and customize via props and usage code instead of re-implementing the component.

## What Each Component File Contains

- Official React Bits docs URL
- `npx shadcn@latest add` command
- `npx jsrepo@latest add` fallback
- `npm install` line when the component needs extra packages
- Best website-fit guidance
- Usage snippet
- Extracted official TS-TW code

## Category Guidance

- `text-animations/`: hero headings, section titles, badges, counters, editorial typography
- `animations/`: wrappers, hover effects, cursor effects, CTA accents, decorative motion
- `components/`: cards, galleries, navs, menus, lists, carousels, interactive sections
- `backgrounds/`: whole page backgrounds, hero backdrops, ambient section layers, dramatic visual canvases
