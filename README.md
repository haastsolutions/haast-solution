# Haast Solution website

Vite + React 19 + TypeScript + React Router.

```
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run lint
```

## Configuration

Copy `.env.example` to `.env` and set `VITE_BOOKING_ENDPOINT` to the HTTPS endpoint that should receive
"Let's Connect" intro-call requests (Formspree, a webhook, your own API...). If it is empty, the form opens a
pre-filled email to info@haastsolution.com instead.

## Layout

Pages are full-width. Horizontal margin comes from `--page-gutter` in `src/index.css`.

## Hosting note

This is a single-page app using `BrowserRouter`. Your host must rewrite unknown paths to `index.html`,
otherwise refreshing `/process`, `/about`, etc. returns 404 (Netlify: `public/_redirects` with `/* /index.html 200`;
Vercel: a `rewrites` rule; Nginx: `try_files $uri /index.html`).
