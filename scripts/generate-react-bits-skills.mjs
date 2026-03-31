import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const rootDir = process.cwd();
const upstreamDir = path.join(rootDir, '_reactbits_upstream');
const outputDir = path.join(rootDir, '.claude', 'skills', 'react-bits');

const categoryDirMap = {
  TextAnimations: 'text-animations',
  Animations: 'animations',
  Components: 'components',
  Backgrounds: 'backgrounds'
};

const categoryLabelMap = {
  TextAnimations: 'Text Animations',
  Animations: 'Animations',
  Components: 'Components',
  Backgrounds: 'Backgrounds'
};

function normalizeKey(value) {
  return String(value).replace(/[^a-z0-9]/gi, '').toLowerCase();
}

function slugFromDocsUrl(url, fallbackName) {
  const lastSegment = url?.split('/').filter(Boolean).at(-1);
  if (lastSegment) return lastSegment;

  return fallbackName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

function prettyComponentLabel(name) {
  return name
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2');
}

function formatDependencyInstall(dependencies) {
  if (!dependencies.length) return null;
  return `npm install ${dependencies.join(' ')}`;
}

function dedentBlock(text) {
  const normalized = text.replace(/\r\n/g, '\n').trim();
  const lines = normalized.split('\n');
  const indents = lines
    .filter(line => line.trim().length > 0)
    .map(line => line.match(/^\s*/)?.[0].length ?? 0);

  const minIndent = indents.length ? Math.min(...indents) : 0;

  return lines.map(line => line.slice(minIndent)).join('\n').trim();
}

function sentenceCaseList(items) {
  return items.map(item => `- ${item}`).join('\n');
}

function getWebsiteFit(category, componentName, description) {
  const name = componentName.toLowerCase();
  const details = description.toLowerCase();

  if (category === 'TextAnimations') {
    if (name === 'countup') {
      return [
        'Use in KPI strips, stat cards, milestone blocks, or pricing proof sections.',
        'Fit best where numbers need to visibly climb into view without taking over the whole page.'
      ];
    }

    if (name === 'circulartext' || name === 'curvedloop') {
      return [
        'Use around hero badges, CTA medallions, logos, or floating decorative callouts.',
        'Fit best on editorial, fashion, studio, music, or campaign-style landing pages.'
      ];
    }

    if (['scrollfloat', 'scrollreveal', 'scrollvelocity'].includes(name)) {
      return [
        'Use on long-scroll storytelling pages, case studies, manifesto sections, or feature dividers.',
        'Fit best when the page already relies on scroll rhythm and section-to-section motion.'
      ];
    }

    if (['glitchtext', 'asciitext', 'decryptedtext', 'scrambledtext'].includes(name)) {
      return [
        'Use in hero headlines, launch banners, or feature callouts for devtools, AI, gaming, or cyber brands.',
        'Fit best on bold theme-driven pages rather than calm corporate marketing pages.'
      ];
    }

    if (['textpressure', 'variableproximity', 'textcursor', 'fuzzytext'].includes(name)) {
      return [
        'Use as the main interactive text moment in a hero, splash screen, or playful showcase section.',
        'Fit best on creative portfolios, agency sites, experimental microsites, or product launches.'
      ];
    }

    if (['shinytext', 'gradienttext'].includes(name)) {
      return [
        'Use on badges, eyebrow text, CTA copy, pricing highlights, or premium feature labels.',
        'Fit best when you need small high-contrast accents instead of a full animated headline.'
      ];
    }

    if (['texttype', 'rotatingtext', 'truefocus', 'shuffle', 'splittext', 'blurtext', 'fallingtext'].includes(name)) {
      return [
        'Use in hero headlines, section headers, testimonials, or narrative intro copy.',
        'Fit best where the text is short, important, and should animate once with intent.'
      ];
    }

    return [
      'Use in hero headlines, section headings, or short emphasized lines of copy.',
      'Fit best where typography is carrying the visual identity of the section.'
    ];
  }

  if (category === 'Animations') {
    if (['animatedcontent', 'fadecontent', 'gradualblur'].includes(name)) {
      return [
        'Use to reveal cards, media, sections, FAQs, or feature rows as they enter the viewport.',
        'Fit best on product marketing pages, case studies, and long-form landing pages.'
      ];
    }

    if (['magnet', 'glarehover', 'starborder', 'electricborder', 'stickerpeel'].includes(name)) {
      return [
        'Use on CTAs, buttons, featured cards, pricing highlights, or promo tiles.',
        'Fit best in conversion-heavy sections where hover feedback should feel special.'
      ];
    }

    if (['clickspark', 'splashcursor', 'ghostcursor', 'blobcursor', 'crosshair', 'targetcursor', 'pixeltrail', 'imagetrail', 'ribbons', 'magnetlines'].includes(name)) {
      return [
        'Use sparingly in hero zones, interactive showcases, or branded microsite moments.',
        'Fit best on creative pages and avoid using them across dense forms or documentation layouts.'
      ];
    }

    if (name === 'logoloop') {
      return [
        'Use for partner logos, client logos, press mentions, integrations, or tech-stack ribbons.',
        'Fit best in trust sections, sponsor rows, and scrolling social-proof bands.'
      ];
    }

    if (['laserflow', 'magicrings', 'metaballs', 'metallicpaint', 'noise', 'shapeblur', 'cubes', 'orbitimages', 'antigravity'].includes(name)) {
      return [
        'Use as art-direction support beside hero copy or inside a feature spotlight block.',
        'Fit best on gaming, AI, tech, fashion, or experimental brand sites where visual motion matters.'
      ];
    }

    return [
      'Use as a supporting motion layer for high-value sections rather than everywhere on the site.',
      'Fit best when it reinforces a single focal interaction or reveal.'
    ];
  }

  if (category === 'Components') {
    if (/nav|menu|dock/.test(name)) {
      return [
        'Use for primary navigation, section navigation, floating mobile menus, or portfolio category switchers.',
        'Fit best where navigation itself is part of the visual personality of the site.'
      ];
    }

    if (['carousel', 'circulargallery', 'domegallery', 'flyingposters', 'masonry', 'chromagrid', 'folder'].includes(name)) {
      return [
        'Use for portfolios, galleries, case studies, lookbooks, testimonials, or product image sections.',
        'Fit best where visual browsing matters more than dense text scanning.'
      ];
    }

    if (['animatedlist', 'magicbento', 'profilecard', 'spotlightcard', 'borderglow', 'pixelcard', 'reflectivecard', 'tiltedcard', 'stack', 'cardswap', 'decaycard', 'bouncecards'].includes(name)) {
      return [
        'Use for feature grids, team sections, pricing cards, service cards, or spotlight content blocks.',
        'Fit best when the page needs interactive cards that feel richer than static boxes.'
      ];
    }

    if (['stepper', 'counter', 'elasticslider'].includes(name)) {
      return [
        'Use in onboarding flows, process sections, pricing calculators, or progress-driven UI.',
        'Fit best where the user is comparing states, steps, or changing values.'
      ];
    }

    if (['lanyard', 'modelviewer'].includes(name)) {
      return [
        'Use in hero showcases, event pages, product reveals, or branded identity sections.',
        'Fit best when one interactive object should act like the centerpiece of the page.'
      ];
    }

    if (name === 'scrollstack') {
      return [
        'Use in story-driven product explainers, feature walkthroughs, or case-study sequences.',
        'Fit best on long landing pages where cards should stack and resolve with scroll.'
      ];
    }

    return [
      'Use where a whole section benefits from interaction, motion, and stronger visual structure.',
      'Fit best in hero follow-up sections, feature showcases, portfolios, and narrative content blocks.'
    ];
  }

  if (category === 'Backgrounds') {
    if (['aurora', 'softaurora', 'silk', 'threads', 'grainient', 'iridescence', 'particles', 'lightrays', 'lightpillar', 'darkveil', 'liquidether', 'orb'].includes(name)) {
      return [
        'Use as ambient hero or section backgrounds behind marketing copy, pricing, or testimonials.',
        'Fit best when the page needs atmosphere without overwhelming the foreground content.'
      ];
    }

    if (['hyperspeed', 'lightning', 'liquidchrome', 'balatro', 'evileye', 'galaxy', 'gridscan', 'pixelblast', 'prismaticburst', 'faultyterminal'].includes(name)) {
      return [
        'Use mostly in hero sections, launch screens, or campaign pages where the background should make a strong first impression.',
        'Fit best when the page can support a single dramatic canvas instead of multiple heavy effects.'
      ];
    }

    if (['dotgrid', 'gridmotion', 'griddistortion', 'shapegrid', 'ripplegrid', 'waves', 'linewaves', 'beams', 'floatinglines', 'prism', 'radar'].includes(name)) {
      return [
        'Use behind feature sections, timelines, about pages, product explainers, or section transitions.',
        'Fit best when you want structure and motion in the background without turning it into the hero.'
      ];
    }

    if (['letterglitch', 'pixelsnow'].includes(name)) {
      return [
        'Use in themed subsections, event pages, or niche brand moments where the visual language is very specific.',
        'Fit best when the rest of the page already supports that aesthetic.'
      ];
    }

    return [
      'Use as a controlled backdrop for hero or featured sections.',
      `Fit best when "${componentName}" supports the visual tone of the page more than the content hierarchy.`
    ];
  }

  return [
    'Use in visually important sections where motion helps the message.',
    `Fit best when "${componentName}" matches the tone described by: ${details || description}.`
  ];
}

async function buildUsageFileMap() {
  const codeRoot = path.join(upstreamDir, 'src', 'constants', 'code');
  const map = new Map();
  const categoryEntries = await fs.readdir(codeRoot, { withFileTypes: true });

  for (const entry of categoryEntries) {
    if (!entry.isDirectory()) continue;
    const categoryPath = path.join(codeRoot, entry.name);
    const files = await fs.readdir(categoryPath, { withFileTypes: true });

    for (const file of files) {
      if (!file.isFile() || !file.name.endsWith('Code.js')) continue;
      const baseName = file.name.slice(0, -'Code.js'.length);
      map.set(`${entry.name}:${normalizeKey(baseName)}`, path.join(categoryPath, file.name));
    }
  }

  return map;
}

async function walkFiles(dirPath, rootPath = dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath, rootPath)));
      continue;
    }

    files.push({
      fullPath,
      relativePath: path.relative(rootPath, fullPath).replace(/\\/g, '/')
    });
  }

  return files;
}

async function readComponentSourceFiles(category, componentName) {
  const sourceDir = path.join(upstreamDir, 'src', 'ts-tailwind', category, componentName);

  try {
    const files = await walkFiles(sourceDir);

    const tsFiles = await Promise.all(
      files
        .filter(file => /\.(ts|tsx)$/i.test(file.relativePath))
        .map(async file => ({
          path: `${componentName}/${file.relativePath}`,
          content: await fs.readFile(file.fullPath, 'utf8')
        }))
    );

    const extraFiles = files
      .filter(file => !/\.(ts|tsx)$/i.test(file.relativePath))
      .map(file => ({
        path: `${componentName}/${file.relativePath}`,
        binary: !/\.(md|txt|json|css|svg)$/i.test(file.relativePath)
      }));

    return { tsFiles, extraFiles };
  } catch {
    return { tsFiles: [], extraFiles: [] };
  }
}

async function readUsageSnippet(usageFileMap, category, componentName) {
  const matchKey = `${category}:${normalizeKey(componentName)}`;
  const filePath = usageFileMap.get(matchKey);

  if (!filePath) return null;

  const source = await fs.readFile(filePath, 'utf8');
  const match = source.match(/usage:\s*`([\s\S]*?)`,\s*code\s*[:,]/);
  if (!match) return null;

  return dedentBlock(match[1]);
}

function buildSkillIndexText() {
  return `---
name: react-bits
description: Use when working with React Bits components in Claude projects and you need the official TS-TW install command, npm dependency line, usage snippet, extracted TSX source, or guidance on where a component fits best in a website. This skill is optimized for low token usage: open the main skill first, then open exactly one component file from text-animations, animations, components, or backgrounds.
---

# React Bits

Use this skill as a router into the smallest relevant React Bits file.

## Workflow

1. Keep context small. Do not load multiple component files unless the user is actively comparing options.
2. Pick one category folder:
   - \`text-animations/\`
   - \`animations/\`
   - \`components/\`
   - \`backgrounds/\`
3. Open the exact component file you need, such as:
   - \`text-animations/text-pressure.md\`
   - \`text-animations/curved-loop.md\`
   - \`animations/animated-content.md\`
   - \`components/magic-bento.md\`
   - \`backgrounds/aurora.md\`
4. Use the install command, dependency line, usage snippet, and extracted TSX source from that single file.
5. Prefer the official TS-TW variant and customize via props and usage code instead of re-implementing the component.

## What Each Component File Contains

- Official React Bits docs URL
- \`npx shadcn@latest add\` command
- \`npx jsrepo@latest add\` fallback
- \`npm install\` line when the component needs extra packages
- Best website-fit guidance
- Usage snippet
- Extracted official TS-TW code

## Category Guidance

- \`text-animations/\`: hero headings, section titles, badges, counters, editorial typography
- \`animations/\`: wrappers, hover effects, cursor effects, CTA accents, decorative motion
- \`components/\`: cards, galleries, navs, menus, lists, carousels, interactive sections
- \`backgrounds/\`: hero backdrops, ambient section layers, dramatic visual canvases
`;
}

function buildComponentDoc({
  category,
  categoryDir,
  componentLabel,
  slug,
  docsUrl,
  description,
  shadcnCommand,
  jsrepoCommand,
  npmInstall,
  registryDependencies,
  usageSnippet,
  bestFit,
  tsFiles,
  extraFiles
}) {
  const sections = [];

  sections.push(`# ${componentLabel}`);
  sections.push('');
  sections.push(`- Category: ${categoryLabelMap[category]}`);
  sections.push(`- Docs: ${docsUrl}`);
  sections.push(`- Description: ${description}`);
  sections.push('');
  sections.push('## Install');
  sections.push('');
  sections.push('```bash');
  sections.push(shadcnCommand);
  if (npmInstall) {
    sections.push(npmInstall);
  }
  sections.push('```');
  sections.push('');
  sections.push('Fallback:');
  sections.push('');
  sections.push('```bash');
  sections.push(jsrepoCommand);
  sections.push('```');

  if (registryDependencies.length) {
    sections.push('');
    sections.push('## Registry Dependencies');
    sections.push('');
    sections.push(sentenceCaseList(registryDependencies.map(dep => `\`${dep}\``)));
  }

  sections.push('');
  sections.push('## Best Website Fit');
  sections.push('');
  sections.push(sentenceCaseList(bestFit));

  if (usageSnippet) {
    sections.push('');
    sections.push('## Usage');
    sections.push('');
    sections.push('```tsx');
    sections.push(usageSnippet);
    sections.push('```');
  }

  sections.push('');
  sections.push('## Extracted TSX Source');
  sections.push('');

  for (const file of tsFiles) {
    const ext = path.extname(file.path).toLowerCase() === '.ts' ? 'ts' : 'tsx';
    sections.push(`### ${file.path}`);
    sections.push('');
    sections.push(`\`\`\`${ext}`);
    sections.push(file.content.trimEnd());
    sections.push('```');
    sections.push('');
  }

  if (extraFiles.length) {
    sections.push('## Extra Files');
    sections.push('');
    sections.push(sentenceCaseList(
      extraFiles.map(file => `\`${file.path}\`${file.binary ? ' (binary asset; keep beside the component when copying manually)' : ''}`)
    ));
    sections.push('');
  }

  sections.push(`Source folder: \`${categoryDir}/${slug}.md\``);

  return sections.join('\n').trim() + '\n';
}

async function main() {
  const infoModule = await import(pathToFileURL(path.join(upstreamDir, 'src', 'constants', 'Information.js')).href);
  const componentMetadata = infoModule.componentMetadata;
  const usageFileMap = await buildUsageFileMap();

  await fs.mkdir(outputDir, { recursive: true });

  for (const dirName of Object.values(categoryDirMap)) {
    await fs.mkdir(path.join(outputDir, dirName), { recursive: true });
  }

  await fs.writeFile(path.join(outputDir, 'SKILL.md'), buildSkillIndexText(), 'utf8');

  const components = Object.values(componentMetadata).sort((a, b) => {
    const categoryCompare = a.category.localeCompare(b.category);
    if (categoryCompare !== 0) return categoryCompare;
    return a.name.localeCompare(b.name);
  });

  for (const component of components) {
    const categoryDir = categoryDirMap[component.category];
    if (!categoryDir) continue;

    const slug = slugFromDocsUrl(component.docsUrl, component.name);
    const registryPath = path.join(upstreamDir, 'public', 'r', `${component.name}-TS-TW.json`);
    const registryItem = JSON.parse(await fs.readFile(registryPath, 'utf8'));
    const { tsFiles, extraFiles } = await readComponentSourceFiles(component.category, component.name);

    const usageSnippet = await readUsageSnippet(usageFileMap, component.category, component.name);
    const bestFit = getWebsiteFit(component.category, component.name, component.description);
    const shadcnCommand = `npx shadcn@latest add @react-bits/${component.name}-TS-TW`;
    const jsrepoCommand = `npx jsrepo@latest add https://reactbits.dev/r/${component.name}-TS-TW`;
    const npmInstall = formatDependencyInstall(registryItem.dependencies ?? []);
    const registryDependencies = registryItem.registryDependencies ?? [];

    const doc = buildComponentDoc({
      category: component.category,
      categoryDir,
      componentName: component.name,
      componentLabel: prettyComponentLabel(component.name),
      slug,
      docsUrl: component.docsUrl,
      description: component.description,
      shadcnCommand,
      jsrepoCommand,
      npmInstall,
      registryDependencies,
      usageSnippet,
      bestFit,
      tsFiles,
      extraFiles
    });

    await fs.writeFile(path.join(outputDir, categoryDir, `${slug}.md`), doc, 'utf8');
  }

  const summary = {
    root: outputDir,
    categories: Object.values(categoryDirMap),
    components: components.length
  };

  console.log(JSON.stringify(summary, null, 2));
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
