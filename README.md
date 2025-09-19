# Lotus Renovations Showcase

A modern, performant static showcase for Lotus Renovations built with Vite, React, and TypeScript. The site uses Tailwind CSS for utility-first styling and **shadcn/ui** for accessible, reusable UI components. This repository is configured for local development and production builds, and includes guidance for deploying to static hosts (Vercel/Netlify) and **GitHub Pages**.

---

**Table of contents**

- Project overview
- Tech stack
- Features
- Prerequisites
- Installation & setup
- Available scripts
- Styling & component notes
- Deployment
  - Standard static hosting (Vercel / Netlify)
  - GitHub Pages
- License

---

## Project Overview

Lotus Renovations Showcase is a small marketing site demonstrating a production-ready front-end setup using Vite, React, and TypeScript. The codebase favors clarity, performance, and accessibility, and is structured for easy extension and static deployment.

## Tech Stack

- **Vite** — fast build tool and dev server
- **React** — UI library
- **TypeScript** — static types
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible, unstyled React components that integrate with Tailwind

## Features

- Fast dev experience with Vite's instant HMR
- Production-optimized builds with minimal configuration
- Type-safe components and pages using TypeScript
- Utility-first styling and rapid UI iteration with Tailwind CSS
- Ready-to-use, accessible components from **shadcn/ui**, easily themeable with Tailwind
- Responsive, accessible markup and semantic HTML
- Configured for deployment to Vercel, Netlify, or GitHub Pages

## Prerequisites

- **Node.js** (v18 or newer recommended)
- One of: **npm**, **yarn**, or **pnpm**

Ensure Git is installed to clone the repository.

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/zekeczander-alt/lotus-renovations-showcase.git
cd lotus-renovations-showcase
```

2. Install dependencies (choose one):

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the local development server:

```bash
npm run dev
```

Open http://localhost:5173 (default) in your browser.

## Available Scripts

- `npm run dev` — Start the Vite development server with HMR
- `npm run build` — Build the app for production into `dist/`
- `npm run preview` — Locally preview the production build
- `npm run lint` — Run ESLint checks

(If you use `yarn`, replace `npm run <script>` with `yarn <script>`.)

## Styling & Component Notes

- Tailwind CSS is used for styling with utility classes. Configuration lives in `tailwind.config.ts` and global styles are in `src/index.css` / `App.css`.
- Use Tailwind utilities directly in your JSX for fast iteration. When adding global styles or custom utilities, update the Tailwind config and the CSS entry.
- shadcn/ui provides accessible component primitives and patterns that are intended to be customized with Tailwind.

How to add or customize shadcn/ui components:

1. Initialize or install the shadcn/ui tooling (if not already installed):

```bash
npx shadcn-ui@latest init
```

2. Add a component (example: `button`):

```bash
npx shadcn-ui@latest add button
```

3. The CLI will scaffold files under `src/components/ui/` — edit these files and theme with Tailwind classes.

Refer to the shadcn/ui docs: https://ui.shadcn.com

## Deployment

### Standard Static Hosting (Vercel / Netlify)

- Build the production output:

```bash
npm run build
```

- The built static site will be in the `dist/` folder. Deploy the contents of `dist/` to Vercel, Netlify, or any static hosting provider. No special server runtime is required.

Vercel and Netlify both support automatic builds from your Git repository — set the build command to `npm run build` and the publish directory to `dist`.

### GitHub Pages

GitHub Pages serves static sites from a branch (e.g., `gh-pages`) or the repository's `docs/` folder. For Vite apps hosted under a repository path (not a custom domain), you must configure Vite's `base` option so asset URLs are correct.

1) Vite configuration

Open `vite.config.ts` and set the `base` option to your repository name. Example (replace `lotus-renovations-showcase` with your repo name if different):

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lotus-renovations-showcase/',
  plugins: [react()],
})
```

2) Build and deploy

- Build the site:

```bash
npm run build
```

- Option A — Use `gh-pages` package (manual/simple):

```bash
npm install --save-dev gh-pages
# package.json scripts (example):
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
npm run deploy
```

This will publish the `dist` folder to the `gh-pages` branch and GitHub Pages will serve it at `https://<your-username>.github.io/lotus-renovations-showcase/`.

- Option B — Use GitHub Actions (recommended for CI):

Use a GitHub Action that builds the site and pushes `dist/` to `gh-pages` or uses the `peaceiris/actions-gh-pages` action. Example job steps:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          destination_branch: gh-pages
```

After the action runs, enable GitHub Pages in your repository settings (if not auto-enabled) and set the source to the `gh-pages` branch.

Notes:
- If you prefer to serve from the `docs/` folder, you can copy `dist/` to `docs/` and push to the `main` branch instead. In that case do not set `base` unless the site is served under a path.

## License

This project is available under the **MIT License**. See the `LICENSE` file for details.

---

If you'd like, I can also add a sample GitHub Actions workflow file (`.github/workflows/deploy.yml`) and update `package.json` with the `predeploy`/`deploy` scripts — would you like me to add those now?
