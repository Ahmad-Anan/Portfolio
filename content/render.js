// Build-time templates for the repeated blocks in index.html.
// `html` escapes every interpolated value unless it is itself `html` output,
// so content from data.js can never inject markup.
import { nav, social, skills, projects, earlierWork, education } from './data.js';

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

const projectCards = projects.map(({ icon, title, description, tags, demo, source }) => html`
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
      <a href="${demo}"${external(demo)} class="btn btn-sm btn-solid">Live Demo</a>
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

const educationCards =education.map(({ icon, title, school, period, description }) => html`
  <li class="card flex flex-col sm:flex-row items-start gap-4">
    <i class="${icon} leading-icon mt-1" aria-hidden="true"></i>
    <div class="flex-1">
      <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
        <h3 class="text-xl">${title}</h3>
        <span class="eyebrow whitespace-nowrap">${period}</span>
      </div>
      <p class="mt-1">${school}</p>
      <p class="text-muted mt-3">${description}</p>
    </div>
  </li>`);

export const partials = {
  'nav-links': navLinks,
  'social-links': socialLinks,
  'skill-cards': skillCards,
  'project-cards': projectCards,
  'earlier-work': earlierWorkRows,
  'education-cards': educationCards,
};

/** Replaces each `<!-- render:name -->` marker with its rendered partial. */
export const renderPartials = (source) =>
  source.replace(/<!--\s*render:([\w-]+)\s*-->/g, (marker, name) => {
    if (!(name in partials)) throw new Error(`Unknown partial in index.html: ${marker}`);
    return toHtml(partials[name]);
  });
