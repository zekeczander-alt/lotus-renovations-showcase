# Lotus Renovations Showcase

A professional web showcase for Lotus Renovations, built with modern web technologies for speed, maintainability, and beautiful design. This project leverages Vite, React, TypeScript, Tailwind CSS, and shadcn/ui to deliver a performant, visually appealing, and easily extensible static site.

---

## 🛠️ Tech Stack

- **Vite** (build tool)
- **React** (UI library)
- **TypeScript** (type-safe JavaScript)
- **Tailwind CSS** (utility-first CSS framework)
- **shadcn/ui** (accessible, customizable React components)

---

## ✨ Features

- **Lightning-fast development** with Vite's instant HMR and optimized builds
- **Type-safe codebase** using TypeScript for reliability and maintainability
- **Utility-first styling** with Tailwind CSS for rapid, consistent UI development
- **Beautiful, accessible UI components** from shadcn/ui, easily customizable and extendable
- **Responsive design** for all devices
- **Ready for static deployment** on Vercel, Netlify, or GitHub Pages

---

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js), or [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

---

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zekeczander-alt/lotus-renovations-showcase.git
   cd lotus-renovations-showcase
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## 📜 Available Scripts

- `npm run dev` — Start the local development server
- `npm run build` — Build the app for production (output in `dist/`)
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint to check for code issues

---

## 🎨 Styling & Component Notes

- **Tailwind CSS** is used for utility-first, responsive styling. You can compose complex UIs quickly by combining utility classes directly in your JSX.
- **shadcn/ui** provides a set of accessible, themeable React components. To add new components:
  1. Install the shadcn/ui CLI if you haven't:
     ```bash
     npx shadcn-ui@latest init
     ```
  2. Add a component (e.g., Button):
     ```bash
     npx shadcn-ui@latest add button
     ```
  3. Customize the component in `src/components/ui/` as needed.

See the [shadcn/ui documentation](https://ui.shadcn.com/docs/installation) for more details.

---

## 🚢 Deployment

### 1. Standard Static Hosting (Vercel/Netlify)

- Build the project:
  ```bash
  npm run build
  ```
- Deploy the contents of the `dist/` folder to your static hosting provider (Vercel, Netlify, etc.).
- No special configuration is needed for most static hosts.

### 2. GitHub Pages Deployment

#### a. Vite Configuration

Set the `base` property in `vite.config.ts` to your repository name (e.g., `/lotus-renovations-showcase/`):

```ts
// vite.config.ts
export default defineConfig({
  base: '/lotus-renovations-showcase/',
  // ...other config
});
```

#### b. Build & Deploy

1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Deploy to GitHub Pages:**
   - You can use the [gh-pages](https://www.npmjs.com/package/gh-pages) package or a GitHub Action.
   - Example using `gh-pages`:
     ```bash
     npm install --save-dev gh-pages
     # Add the following scripts to your package.json:
     # "predeploy": "npm run build",
     # "deploy": "gh-pages -d dist"
     npm run deploy
     ```
   - Or, set up a GitHub Action to deploy `dist/` to the `gh-pages` branch automatically on push.

See the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html#github-pages) for more details.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
