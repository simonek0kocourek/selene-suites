import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import puppeteer from 'puppeteer-core';

const cwd = process.cwd();
const args = process.argv.slice(2);

if (!args.length) {
  console.error('Usage: node screenshot.mjs <url> [label] [--mobile] [--width=1440] [--height=2200]');
  process.exit(1);
}

const url = args[0];
const labelArg = args.find((arg, index) => index > 0 && !arg.startsWith('--')) ?? null;
const mobile = args.includes('--mobile');
const widthArg = args.find((arg) => arg.startsWith('--width='));
const heightArg = args.find((arg) => arg.startsWith('--height='));

const width = widthArg ? Number(widthArg.split('=')[1]) : mobile ? 390 : 1440;
const height = heightArg ? Number(heightArg.split('=')[1]) : mobile ? 844 : 2200;

if (!Number.isFinite(width) || !Number.isFinite(height)) {
  console.error('Width and height must be valid numbers.');
  process.exit(1);
}

const browserCandidates = [
  process.env.CHROME_PATH,
  process.env.PUPPETEER_EXECUTABLE_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);

async function findBrowserPath() {
  for (const candidate of browserCandidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {}
  }

  throw new Error(
    'No supported Chrome or Edge executable was found. Set CHROME_PATH or PUPPETEER_EXECUTABLE_PATH.'
  );
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'capture';
}

async function nextFilePath(outputDir, label) {
  const files = await fs.readdir(outputDir);
  const pngFiles = files.filter((file) => file.endsWith('.png'));
  const nextIndex = pngFiles.length + 1;
  const basename = label ? `${slugify(label)}-${nextIndex}` : `screenshot-${nextIndex}`;
  return path.join(outputDir, `${basename}.png`);
}

const outputDir = path.join(cwd, 'temporary screenshots');
await ensureDir(outputDir);

const executablePath = await findBrowserPath();
const outputPath = await nextFilePath(outputDir, mobile && labelArg ? `${labelArg}-mobile` : labelArg);

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  defaultViewport: {
    width,
    height,
    deviceScaleFactor: 1,
    isMobile: mobile,
    hasTouch: mobile,
  },
  args: ['--hide-scrollbars'],
});

try {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('body', { timeout: 15000 });
  await page.evaluate(async () => {
    if ('fonts' in document) {
      await document.fonts.ready;
    }
  });
  await new Promise((resolve) => setTimeout(resolve, 1400));
  await page.screenshot({
    path: outputPath,
    fullPage: true,
  });
  console.log(outputPath);
} finally {
  await browser.close();
}
