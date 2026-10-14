# Trimmy landing page — Next.js port

Port of `apps/site-v2` (Vite + React) from the Trimmy monorepo to Next.js 16 (App Router), TypeScript and Tailwind CSS 4, with the Three.js world, Lenis smooth scroll and audio kept intact.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Routes
- `/` — the 17-screen scroll story
- `/world-study` — the retained design-study page (not indexed)

## What changed from the Vite version
- `src/App.tsx` → `src/components/Story.tsx`, rendered from `src/app/page.tsx`
- `main.tsx` / `index.html` → `src/app/layout.tsx` (metadata, viewport, font preload)
- `React.lazy` → `next/dynamic` with `ssr: false` for `WorldStage` and `RoutePreview`
- `lib/sound.ts`: browser-only listeners guarded for server rendering; `import.meta.hot` / `import.meta.env` replaced
- `"use client"` added to every component and hook file

Everything else (story copy, easing, scroll stepper, Three.js engine, CSS, assets) is unchanged.

## Known gap
`/audio/floor.mp3` and `/audio/floor-quiet.mp3` are referenced by the code but were not in the uploaded repo. The sound layer handles the missing files silently; add them to `public/audio/` for the floor ambience.
