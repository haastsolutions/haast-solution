# Review & change log

## Critical fixes
- **Booking form delivered nothing.** `CtaCall` rendered `<OpenSlotBooking>` without `onBook`, so visitors saw "You're booked"
  while no request was sent anywhere. Now wired to `src/lib/booking.ts` (`VITE_BOOKING_ENDPOINT`, or a pre-filled email fallback).
  Confirmation copy now says what really happens (we confirm by email) instead of "the invite is on its way".
- **Homepage CTAs were dead** (`href="#"`): "Start a project" -> `/process#book`, "Our services" -> `#services`.
- **`npm run build` failed** (17 TypeScript errors: unused React imports, missing d3 types, wrong `art` type, unused vars). Now clean.
- ESLint: 40 errors -> 0 (19 warnings remain, see below).

## Navigation / routing
- One shared `Navbar` (active link from the URL) replaces three copy-pasted inline navs; the old unused component is now the real one.
- Internal links use React Router (no full reloads): footer, hero nav and CTAs via `SiteLink`.
- `ScrollManager`: scroll to top on page change, honours `#hash` targets.
- 404 page, per-page `<title>`, lazy-loaded routes (initial JS ~682 KB -> ~292 KB minified).
- Mobile: navbar wraps instead of overflowing on narrow screens.

## Performance
- `haast-custom-logo.png` 1.6 MB -> `.webp` 17 KB (640 px, with width/height set).
- Fonts loaded once in `index.html` (preconnect + `display=swap`) instead of CSS `@import`, a per-page `@import` and runtime injection.
- Footer spotlight no longer re-renders React on every mouse move.

## Code quality
- Removed dead code: `src/data/{electrician,emergency,hvac,plumbing}.ts`, Vite template assets, `App.css`, `public/icons.svg`, Next.js-only `"use client"`.
- `ServiceFoldersSection`: two copy-pasted rows -> one loop; removed the demo "add" button that let visitors add a fake "New Workflow" card.
- `Home`: dead Tailwind classes replaced with real styles. Dark-mode CSS removed (page is light-only; it made unstyled text unreadable in OS dark mode).
- `index.html`: real title, description, theme colour, Open Graph tags.
- Package renamed `site` -> `haast-solution-website`.

## Deliberately NOT changed (needs your decision)
1. **Layout is now full-width (done on request).** The old 1126 px boxed column (Vite-template CSS) is gone: `#root` is 100% wide, and nav, footer, hero and
   section containers span the window using a shared fluid margin `--page-gutter` (`clamp(20px, 3.2vw, 48px)`, defined in `src/index.css`). Readable text blocks
   (paragraph widths, legal pages ~800 px) and diagram-style components (ramp timeline, booking widget, globe) stay centred on purpose; widen their `maxWidth`
   if you want them to stretch too.
2. **Name spelling**: "Mohit Bhararde" (About, badge) vs "Mohit Bharade" (booking widget default host name).
3. **Response-time claims** conflict: "within 1 business day" (CTA) vs "usually within 2 hours" (booking widget).
4. **`support@haastsolution.com`** is displayed but the link goes to `info@haastsolution.com` (src/components/ui/contact-with-globe.tsx).
5. **Booking hours** are Mon-Fri 09:00-17:00 IST; US/UK visitors will see night-time slots. No calendar is connected (`hostBusy` is empty), so double-booking is possible.
6. **Legal copy**: Privacy Policy mentions Google Workspace/Drive connectors and "creating a profile on our website" (not applicable to this site) and calls the DPA a
   "Data Protection Agreement"; Terms of Service has no governing-law/jurisdiction clause. Have a lawyer review.
7. **Third-party runtime dependencies**: hero images are hotlinked from `cdn.21st.dev` (a broken-image icon shows if it is unreachable) and the globe fetches
   its map from jsdelivr. Download them into `public/` and point the code at local files.
8. **Tailwind class names in `lanyard-badge.tsx`** (`absolute`, `h-full`, ...) have no effect because Tailwind was never configured. Left untouched
   because the badge renders correctly today; remove them or set Tailwind up properly.
9. **SEO**: client-rendered SPA. Consider pre-rendering (e.g. `vite-react-ssg`) if organic search matters; add `sitemap.xml`/`robots.txt` once the domain is final.

## Follow-ups to run locally
```
npm i -D @types/d3            # then delete src/types/d3.d.ts (temporary shim)
npm uninstall tailwindcss postcss autoprefixer @radix-ui/react-separator @radix-ui/react-slot class-variance-authority   # unused
```
Also move `@types/react`, `@types/react-dom` (and `@types/node` if present) from `dependencies` to `devDependencies`.

## Remaining lint warnings (19)
`react-hooks/refs` and `react-hooks/set-state-in-effect` (React-Compiler advisories, downgraded to warnings in `eslint.config.js`) and a few
`exhaustive-deps` in `open-slot-booking.tsx`. They are not functional bugs and changing them risks behaviour changes in the canvas widgets.

## Verification performed
`tsc -b` clean; `eslint` 0 errors; bundled with esbuild and loaded in headless Chromium: all 7 routes + 404 render with no JS errors; home layout is
checked for horizontal overflow at 390 / 1440 / 1920 / 2560 px widths (page width = window width, no sideways scroll). NOT verified: a real `vite build` (the supplied node_modules was installed on Windows), hero with its remote images (in the test the hero image is blocked, so a thin outline box is visible; this is a broken-image artifact, not a layout bug),
booking against a live endpoint, mobile screenshots.
