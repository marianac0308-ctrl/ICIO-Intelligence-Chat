# ICIO intelligence exchange — Model UN mockup

A static front-end mockup of a secure intelligence-sharing platform, built for a
Model UN committee presentation. Everything is hardcoded/in-memory: no backend,
no real encryption, no authentication. It is meant to *look* like a real,
official, classified-style system.

Two screens, toggled with the tab bar at the top:

1. **Exchange network** — a two-panel secure messaging view (member list +
   conversation thread with Finland, including a "certified intelligence
   packet" card).
2. **Certification review** — the Chamber's 8-criteria checklist for
   certifying a country's legal framework.

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
  App.jsx                     top-level tabs + dark mode toggle
  data.js                     mock member list & certification criteria
  icons.jsx                   inline SVG icons
  styles.css                  all styling (light/dark theme via CSS variables)
  components/
    Avatar.jsx                circular country-code avatar
    ExchangeScreen.jsx        screen 1: member list + secure thread
    CertificationScreen.jsx   screen 2: certification checklist
```
