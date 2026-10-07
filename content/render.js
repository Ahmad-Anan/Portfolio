// Build-time templates for the repeated blocks in index.html.
// `html` escapes every interpolated value unless it is itself `html` output,
// so content from data.js can never inject markup.
import { nav, social, skills, projects, earlierWork, experience, education } from './data.js';
import { caseStudies } from './case-studies.js';

class Markup {
  constructor(value) { this.value = value; }
}

const escape = (text) => String(text).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const toHtml = (value) =>
  value instanceof Markup ? value.value
    : Array.isArray(value) ? value.map(toHtml).join('')
    : escape(value ?? '');

const html = (strings, ...values) =>
  new Markup(strings.reduce((out, s, i) => out + toHtml(values[i - 1]) + s));

// Escaped text in which `backticks` become <code>, for case-study prose.
const prose = (text) =>
  new Markup(escape(text).replace(/`([^`]+)`/g, '<code>$1</code>'));

// External links open in a new tab; mailto:/tel: and in-page links don't.
const external = (href) => (/^https?:/.test(href) ? html` target="_blank" rel="noopener noreferrer"` : '');

const navLinks = nav.map(({ href, label }) => html`
  <li><a href="${href}" class="nav-link">${label}</a></li>`);

const socialLinks = social.map(({ icon, label, tooltip, href }) => html`
  <a href="${href}"${external(href)} aria-label="${label}" class="icon-link">
    <i class="${icon}" aria-hidden="true"></i>
    <span class="tooltip">${tooltip}</span>
  </a>`);

const skillCards = skills.map(({ icon, name, note }) => html`
  <li class="card flex items-start gap-4">
    <i class="${icon} leading-icon mt-0.5" aria-hidden="true"></i>
    <div>
      <p class="font-medium">${name}</p>
      <p class="text-sm text-muted mt-1">${note}</p>
    </div>
  </li>`);

const projectCards = projects.map(({ icon, title, description, tags, caseStudy: study, demo, source }) => html`
  <article class="card flex flex-col">
    <div class="flex items-center gap-3 mb-4">
      <i class="${icon} leading-icon" aria-hidden="true"></i>
      <h3 class="text-xl">${title}</h3>
    </div>
    <p class="text-muted mb-4">${description}</p>
    <ul class="flex flex-wrap gap-2 mb-6" aria-label="Technologies">
      ${tags.map((tag) => html`<li class="tag">${tag}</li>`)}
    </ul>
    <div class="flex flex-wrap gap-3 mt-auto">
      ${study ? html`<a href="${study}" class="btn btn-sm btn-solid">Read the case study</a>` : ''}
      <a href="${demo}"${external(demo)} class="btn btn-sm ${study ? 'btn-ghost' : 'btn-solid'}">Live Demo</a>
      <a href="${source}"${external(source)} class="btn btn-sm btn-ghost"><i class="fab fa-github" aria-hidden="true"></i>Source Code</a>
    </div>
  </article>`);

const earlierWorkRows = earlierWork.map(({ title, summary, demo, source }) => html`
  <li class="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-4">
    <h4 class="font-medium md:w-40 shrink-0">${title}</h4>
    <p class="text-muted flex-1">${summary}</p>
    <p class="flex gap-4 text-sm shrink-0">
      <a href="${demo}"${external(demo)} class="text-link">Live Demo</a>
      <a href="${source}"${external(source)} class="text-link">GitHub</a>
    </p>
  </li>`);

const timelineCard = ({ icon, title, place, period, description }) => html`
  <li class="card flex flex-col sm:flex-row items-start gap-4">
    <i class="${icon} leading-icon mt-1" aria-hidden="true"></i>
    <div class="flex-1">
      <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
        <h4 class="font-display font-bold text-xl leading-tight tracking-[-0.02em]">${title}</h4>
        <span class="eyebrow whitespace-nowrap">${period}</span>
      </div>
      <p class="mt-1">${place}</p>
      <p class="text-muted mt-3">${description}</p>
    </div>
  </li>`;

const figure = ({ src, width, height, alt, caption, narrow }) => html`
  <figure class="${narrow ? 'max-w-xs' : ''}">
    <img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async" class="shot" />
    <figcaption class="text-sm text-muted mt-3">${caption}</figcaption>
  </figure>`;

const caseStudy = ({ title, tagline, facts, demo, source, cover, stack, challenges }) => html`
  <header class="space-y-6">
    <p class="eyebrow">Case study</p>
    <h1 class="text-5xl md:text-6xl">${title}</h1>
    <p class="text-xl text-muted max-w-2xl">${tagline}</p>
    <dl class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
      ${facts.map(({ label, value }) => html`
      <div class="card">
        <dt class="eyebrow mb-2">${label}</dt>
        <dd>${value}</dd>
      </div>`)}
    </dl>
    <div class="flex flex-wrap gap-3">
      <a href="${demo}"${external(demo)} class="btn btn-solid">Live Demo</a>
      <a href="${source}"${external(source)} class="btn btn-ghost"><i class="fab fa-github" aria-hidden="true"></i>Source Code</a>
    </div>
  </header>
  ${cover ? html`<img src="${cover.src}" alt="${cover.alt}" width="${cover.width}" height="${cover.height}" fetchpriority="high" class="shot" />` : ''}
  <section class="panel" aria-labelledby="stack-title">
    <h2 id="stack-title" class="section-title mb-10">Stack &amp; decisions</h2>
    <dl class="divide-y divide-line border-t border-line">
      ${stack.map(({ label, text }) => html`
      <div class="flex flex-col md:flex-row gap-1 md:gap-6 py-4">
        <dt class="eyebrow md:w-40 shrink-0 md:pt-1">${label}</dt>
        <dd class="flex-1">${prose(text)}</dd>
      </div>`)}
    </dl>
  </section>
  <section class="panel" aria-labelledby="challenges-title">
    <h2 id="challenges-title" class="section-title mb-10">Challenges</h2>
    <ol class="space-y-16">
      ${challenges.map(({ title: name, problem, fix, figure: shot }, i) => html`
      <li class="space-y-6">
        <div>
          <p class="eyebrow mb-2">${String(i + 1).padStart(2, '0')}</p>
          <h3 class="text-2xl">${name}</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div>
            <p class="eyebrow mb-2">Problem</p>
            <p class="text-muted">${prose(problem)}</p>
          </div>
          <div>
            <p class="eyebrow mb-2">Fix</p>
            <p>${prose(fix)}</p>
          </div>
        </div>
        ${shot ? figure(shot) : ''}
      </li>`)}
    </ol>
  </section>`;

export const partials = {
  'nav-links': navLinks,
  'social-links': socialLinks,
  'skill-cards': skillCards,
  'project-cards': projectCards,
  'earlier-work': earlierWorkRows,
  'experience-cards': experience.map(timelineCard),
  'education-cards': education.map(timelineCard),
  ...Object.fromEntries(caseStudies.map((study) => [`case-study-${study.slug}`, caseStudy(study)])),
};

/** Replaces each `<!-- render:name -->` marker with its rendered partial. */
export const renderPartials = (source) =>
  source.replace(/<!--\s*render:([\w-]+)\s*-->/g, (marker, name) => {
    if (!(name in partials)) throw new Error(`Unknown partial in index.html: ${marker}`);
    return toHtml(partials[name]);
  });
