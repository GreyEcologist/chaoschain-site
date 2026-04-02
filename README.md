# ChaosChain

ChaosChain is a local Next.js marketing site for the ChaosChain product. The app currently includes a homepage experience, pricing page, reusable landing-page sections, and API route support under the App Router.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` starts the local dev server.
- `npm run build` creates a production build.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint.

## Project Structure

- `app/` contains App Router pages, layout, API routes, and page-specific components.
- `components/` contains shared sections, navigation, footer, and visual building blocks.
- `public/` contains static assets.

## Git Notes

- Build output and local environment files are ignored through `.gitignore`.
- Text files are normalized to LF via `.gitattributes`.
- Editor defaults are defined in `.editorconfig`.

## Status

This repository currently has local Git history on `main` and is set up for local-only development. If you want to publish it later, add a remote with:

```bash
git remote add origin <your-repo-url>
```
