# Portfolio redesign notes

## What changed
- Kept the original stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React.
- Converted the single-page portfolio into a multi-page site:
  - `/`
  - `/about`
  - `/education`
  - `/experience`
  - `/projects`
- Added persistent two-theme support:
  - Dark: black / neon cyberpunk
  - Light: pink / princess-inspired
- Added responsive animated navigation with a mobile menu.
- Added ambient animated backgrounds, morphing hero art, floating chips, page entrance animation, scroll-reveal sections, project hover motion, skill marquee and theme transitions.
- Added `prefers-reduced-motion` handling for accessibility/performance.
- Reorganized portfolio content into a central `data/portfolio.ts` file for easier future editing.

## Validation
- TypeScript: passes `tsc --noEmit`
- ESLint: passes for `app`, `components`, and `data`
- Production `next build` could not complete in the sandbox because the uploaded dependencies require Next.js to download a Linux SWC binary from npm, while network access is disabled in this environment.

## Run locally
```bash
npm install
npm run dev
```

For a production check:
```bash
npm run build
```
