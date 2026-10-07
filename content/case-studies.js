// Case-study content, one object per project page (projects/<slug>/index.html).
// Every technical claim here was checked against the project's code and git history.
// In text fields, `backticks` render as inline code.

export const tawasol = {
  slug: 'tawasol',
  title: 'Tawasol',
  tagline: 'A LinkedIn-style social app in English and Arabic.',
  facts: [
    { label: 'Role', value: 'Solo: design, front end, tests, deployment' },
    { label: 'Timeline', value: 'About 6–7 weeks, Aug – Sep 2026' },
    { label: 'Backend', value: 'Route Academy’s public Posts API, not mine. Everything here is the Angular front end.' },
  ],
  demo: 'https://tawasol-two.vercel.app',
  source: 'https://github.com/Ahmad-Anan/tawasol',
  cover: {
    src: '/projects/tawasol/feed-en-light.webp',
    width: 1440,
    height: 900,
    alt: 'Tawasol’s feed in the light theme: filters, a post composer, a post, and people suggestions.',
  },
  stack: [
    { label: 'Angular 22', text: 'Zoneless, Signals, and OnPush on every component.' },
    { label: 'Rendering', text: 'An Angular SSR server on Vercel. Signed-in routes are deliberately client-rendered because the auth token lives in `localStorage`, and unknown URLs get a real 404 status.' },
    { label: 'Styling', text: 'Angular Material and Tailwind CSS v4 share one set of design tokens for the light and dark themes.' },
    { label: 'i18n', text: 'ngx-translate for English and Arabic, with full RTL.' },
    { label: 'Data & forms', text: 'Signal Forms for sign-in, registration, password change, and the post composer; `rxResource` for loading the feed, bookmarks, and suggestions.' },
    { label: 'Quality', text: '200+ unit tests and a GitHub Actions CI that builds and tests every push.' },
  ],
  challenges: [
    {
      title: 'Mixed-direction text',
      problem: 'In Arabic, “@username · date” rendered scrambled, and Arabic posts read in the wrong word order inside the English UI.',
      fix: 'Names and handles are isolated in `<bdi>`, every piece of user-generated text and its input gets `dir="auto"`, and a small helper wraps names in FSI/PDI isolates for translated strings like “Unfollow {name}?”, where markup can’t go.',
      figure: {
        src: '/projects/tawasol/post-arabic-in-en-ui.webp',
        width: 1440,
        height: 1100,
        alt: 'An Arabic post and Arabic comments inside the English UI, each reading right to left.',
        caption: 'Arabic posts and comments inside the English UI, each reading in its own direction.',
      },
    },
    {
      title: 'Arabic plurals',
      problem: 'The UI showed “1 likes”, and Arabic needs six plural forms, not two. ngx-translate has no plural support.',
      fix: 'A custom ngx-translate compiler turns a translation written as CLDR categories (zero, one, two, few, many, other) into a function that picks the form with `Intl.PluralRules` for that file’s language. Call sites stay a plain `translate: { count }`.',
      figure: {
        src: '/projects/tawasol/feed-ar-mobile.webp',
        width: 585,
        height: 1266,
        narrow: true,
        alt: 'The Arabic feed on a phone. One post shows “إعجاب واحد” (one like), another “0 إعجاب”.',
        // FSI…PDI (\u2068…\u2069) keep the Arabic from reordering the quotes around it.
        caption: '“\u2068إعجاب واحد\u2069” (one like): Arabic’s singular form, picked by Intl.PluralRules.',
      },
    },
    {
      title: 'A public demo account',
      problem: 'The demo credentials ship in the JavaScript bundle, so any visitor could rewrite or delete the showcase content, or change the password and lock everyone else out.',
      fix: 'The demo is identified by its user `_id`, however the visitor signed in. A route guard keeps it off the change-password page and the profile photo is locked. Edit and Delete on its pre-existing posts are blocked twice: dimmed with a note in the UI, and rejected in the service layer so no code path can send the request. Posts created during the visit stay editable.',
      figure: {
        src: '/projects/tawasol/profile-ar-demo-lock.webp',
        width: 1440,
        height: 900,
        alt: 'The demo profile in Arabic and the dark theme. The Edit profile button is disabled with the note “Not available on the demo account”.',
        caption: 'Edit profile is disabled on the demo account, with a note saying why.',
      },
    },
    {
      title: 'Bugs the tests found',
      problem: 'Writing a test for a new Retry button showed that `rxResource.value()` throws while the resource is in its error state, so every failed load also raised an uncaught error in three services. Separately, a slow profile response could overwrite a newer one when moving quickly between profiles.',
      fix: 'Those reads now check `hasValue()` first. Profile loading goes through `switchMap`, which cancels the stale request when a new profile is opened. Both fixes are covered by tests.',
    },
  ],
};

// Screenshots are added once KingMart's image fix is deployed (cover and figures are optional).
export const kingmart = {
  slug: 'kingmart',
  title: 'KingMart',
  tagline: 'A luxury e-commerce store with a “quiet luxury” design system, in English and Arabic.',
  facts: [
    { label: 'Role', value: 'Solo: design, front end, deployment' },
    { label: 'Timeline', value: 'About 6–7 weeks' },
    { label: 'Backend', value: 'Route Academy’s public e-commerce API, not mine. Everything here is the Angular front end.' },
  ],
  demo: 'https://kingmart.vercel.app',
  source: 'https://github.com/Ahmad-Anan/kingmart',
  stack: [
    { label: 'Angular 22', text: 'Signals, zoneless change detection, and OnPush on every component.' },
    { label: 'Rendering', text: 'Prerendered pages plus client-rendered dynamic routes, served as static files on Vercel.' },
    { label: 'Styling', text: 'Tailwind CSS v4 and PrimeNG 22, themed to one “quiet luxury” design system in light and dark mode.' },
    { label: 'State', text: 'Signal-based cart and wishlist services.' },
    { label: 'Checkout', text: 'Stripe checkout, behind SSR-safe auth guards with return-URL redirects.' },
    { label: 'i18n', text: 'Full English and Arabic, with RTL layout.' },
  ],
  challenges: [
    {
      title: 'A runaway quantity input',
      problem: 'PrimeNG’s InputNumber had a runaway-value bug in the cart.',
      fix: 'I replaced it with a custom quantity stepper: two buttons around the count, disabled while that item is updating and at a quantity of one.',
    },
    {
      title: 'Unreadable text in dark mode',
      problem: 'Some text in dark mode was unreadable, because it used Tailwind color tokens that didn’t exist.',
      fix: 'Dark mode now has one source of truth, the `my-app-dark` class. PrimeNG’s `darkModeSelector`, Tailwind’s `@custom-variant dark`, and the theme service all key off that one class.',
    },
    {
      title: '404s on hard reload',
      problem: 'On Vercel, reloading a product, brand, or category page returned a 404. Those routes have parameters, so they can’t be prerendered.',
      fix: 'Those routes render on the client (`RenderMode.Client`), and a Vercel rewrite falls back to the client-side app shell for any path without a prerendered page.',
    },
    {
      title: 'Sideways scrolling in Arabic',
      problem: 'In Arabic, the page scrolled sideways on small phones because of a decorative element.',
      fix: 'The overflow is clipped on the section that holds it, so the decoration stays but can’t widen the page.',
    },
  ],
};

export const caseStudies = [tawasol, kingmart];
