# ICIO intelligence platform — Model UN mockup

A static front-end mockup of a secure intelligence-sharing platform, built for a
Model UN committee presentation. Everything is hardcoded/in-memory: no backend,
no real encryption, no authentication. It is meant to *look* like a real,
official, classified-style system.

The platform is one login with two connected levels, toggled with the tab bar
at the top:

1. **Floor 1 · Passport** — open to any country from day one. A mock request
   form (intelligence type + purpose) submits into a public registry: every
   request — including rejections — is stamped ("Prevention · fast lane",
   "Review · 72 hours", or "Rejected · no reason owed") and logged for all
   members to see. A "Track record" card at the bottom tallies the acting
   country's (Sweden's) history and is the bridge into Floor 2: a clean,
   mostly-prevention record is what makes a country eligible for
   certification.
2. **Floor 2 · Referee** — earned, not open by default. Shows the country
   submitting its full legal framework (never intelligence content) to the
   Chamber's 8-criteria checklist, backed by its Passport track record. Once
   certification is granted, the view unlocks into the certified-members-only
   encrypted channel (member list + conversation thread with Finland,
   including a "certified intelligence packet" card and an interactive
   composer).

A dark mode toggle is available in the top-right corner.

## Stack

- React 18 + Vite
- Plain CSS (no UI component libraries)
- No routing — screens are toggled with local component state

## Local development

```bash
npm install
npm run dev
```

This starts a local dev server (Vite will print the URL, typically
`http://localhost:5173`).

## Production build

```bash
npm run build
```

Outputs a self-contained static site to `/dist` — no backend or runtime
dependencies required. Any static file host can serve it.

To sanity-check the production build locally before deploying:

```bash
npm run preview
```

## Deployment

The project uses a relative base path (`base: './'` in `vite.config.js`), so
the built site works whether it's served from a domain root or a subpath
(like GitHub Pages).

### Deploy to Vercel

**Option A — import the repo:**

1. Go to [vercel.com/new](https://vercel.com/new) and import this repository.
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy — Vercel gives you a shareable URL.

**Option B — CLI:**

```bash
npx vercel
```

Follow the prompts (accept the detected Vite settings). Run `npx vercel --prod`
to push a production deployment.

### Deploy to GitHub Pages

This repo includes a ready-to-use workflow at
`.github/workflows/deploy.yml` that builds the site on every push to `main`
and publishes `/dist` to GitHub Pages via GitHub Actions.

One-time setup:

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab) —
   the site will be published to `https://<user>.github.io/<repo>/`.

## Project structure

```
src/
  App.jsx                     top-level floor tabs + dark mode toggle
  data.js                     mock member list & certification criteria
  registryData.js              Passport mock data: intelligence types, purpose
                               presets, stamp copy, and the pre-populated registry
  icons.jsx                   inline SVG icons
  styles.css                  all styling (light/dark theme via CSS variables)
  components/
    Avatar.jsx                circular country-code avatar
    StampBadge.jsx            colored stamp pill (prevention / review / rejected)
    PassportScreen.jsx        Floor 1: request form + public registry + track record
    CertificationScreen.jsx   Chamber's 8-criteria checklist (used inside Floor 2)
    RefereeScreen.jsx         Floor 2: certification checklist → unlock → exchange
    ExchangeScreen.jsx        the certified-members-only secure thread + composer
```
