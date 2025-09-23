const fs = require('node:fs');
const path = require('node:path');

const baseUrl = 'https://basola.de';

const pages = [];

function formatDate(value) {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }
  return date.toISOString().split('T')[0];
}

function fileLastMod(filePath) {
  const stats = fs.statSync(filePath);
  const now = Date.now();
  const mtime = stats.mtime.getTime();
  return formatDate(new Date(Math.min(mtime, now)));
}

function addPageGroup(entries, options = {}) {
  const { includeXDefault = true } = options;
  const alternates = entries.map((entry) => ({
    lang: entry.lang,
    href: new URL(entry.path, baseUrl).toString().replace(/(?<!:)\/$/, '/'),
  }));

  if (includeXDefault) {
    const defaultHref = alternates[0]?.href;
    if (defaultHref) {
      alternates.push({ lang: 'x-default', href: defaultHref });
    }
  }

  for (const entry of entries) {
    const loc = new URL(entry.path, baseUrl).toString();
    pages.push({
      loc,
      lastmod: entry.lastmod,
      alternates,
    });
  }
}

addPageGroup([
  { lang: 'de', path: '/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'index.astro')) },
  { lang: 'en', path: '/en/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'en', 'index.astro')) },
  { lang: 'es', path: '/es/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'es', 'index.astro')) },
]);

addPageGroup([
  { lang: 'de', path: '/de/impressum/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'de', 'impressum.astro')) },
  { lang: 'en', path: '/en/imprint/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'en', 'imprint.astro')) },
  { lang: 'es', path: '/es/aviso-legal/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'es', 'aviso-legal.astro')) },
]);

addPageGroup([
  { lang: 'de', path: '/de/datenschutz/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'de', 'datenschutz.astro')) },
  { lang: 'en', path: '/en/privacy-policy/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'en', 'privacy-policy.astro')) },
  { lang: 'es', path: '/es/politica-de-privacidad/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'es', 'politica-de-privacidad.astro')) },
]);

addPageGroup([
  { lang: 'de', path: '/news/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'news', 'index.astro')) },
  { lang: 'en', path: '/en/news/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'en', 'news', 'index.astro')) },
  { lang: 'es', path: '/es/news/', lastmod: fileLastMod(path.join(__dirname, '..', 'src', 'pages', 'es', 'news', 'index.astro')) },
]);

const newsDir = path.join(__dirname, '..', 'src', 'content', 'news');
const newsFiles = fs.readdirSync(newsDir).filter((name) => name.endsWith('.md') || name.endsWith('.mdx'));

const newsGroups = new Map();

for (const fileName of newsFiles) {
  const filePath = path.join(newsDir, fileName);
  const slug = fileName.replace(/\.(md|mdx)$/i, '');
  const raw = fs.readFileSync(filePath, 'utf8');
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) continue;
  const frontMatter = fmMatch[1];
  const draftMatch = frontMatter.match(/\bdraft:\s*(true|false)/i);
  if (draftMatch && draftMatch[1].toLowerCase() === 'true') {
    continue;
  }
  const dateMatch = frontMatter.match(/\bdate:\s*"?([^"\n]+)"?/i);
  const langMatch = frontMatter.match(/\blang:\s*"?([^"\n]+)"?/i);
  const lastmod = formatDate(dateMatch ? dateMatch[1].trim() : undefined);
  const lang = langMatch ? langMatch[1].trim() : 'de';

  const key = slug.replace(/-(en|es)$/i, '');
  if (!newsGroups.has(key)) {
    newsGroups.set(key, []);
  }
  newsGroups.get(key).push({
    slug,
    lang,
    lastmod,
  });
}

for (const group of newsGroups.values()) {
  const alternates = group
    .map((entry) => ({
      lang: entry.lang,
      href: new URL(`/news/${entry.slug}/`, baseUrl).toString(),
    }))
    .sort((a, b) => a.lang.localeCompare(b.lang));

  const defaultHref = alternates.find((alt) => alt.lang === 'de')?.href ?? alternates[0]?.href;
  if (defaultHref) {
    alternates.push({ lang: 'x-default', href: defaultHref });
  }

  for (const entry of group) {
    pages.push({
      loc: new URL(`/news/${entry.slug}/`, baseUrl).toString(),
      lastmod: entry.lastmod,
      alternates,
    });
  }
}

pages.sort((a, b) => a.loc.localeCompare(b.loc));

const xmlLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
];

for (const page of pages) {
  xmlLines.push('  <url>');
  xmlLines.push(`    <loc>${page.loc}</loc>`);
  if (page.lastmod) {
    xmlLines.push(`    <lastmod>${page.lastmod}</lastmod>`);
  }
  if (Array.isArray(page.alternates)) {
    for (const alt of page.alternates) {
      xmlLines.push(`    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`);
    }
  }
  xmlLines.push('  </url>');
}

xmlLines.push('</urlset>');
xmlLines.push('');

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xmlLines.join('\n'));

console.log(`Generated sitemap with ${pages.length} entries at ${outputPath}`);
