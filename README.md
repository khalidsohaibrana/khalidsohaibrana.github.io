# Khalid Sohaib — portfolio

Personal portfolio built with Next.js, React, TypeScript, and custom CSS. Static export hosted on GitHub Pages at https://khalidsohaibrana.github.io.

## Local development

Use Node.js 22 and npm.

```sh
npm ci
npm run dev
```

The local site runs on http://127.0.0.1:3091.

```sh
npm run typecheck
npm run build
```

The production site is exported into `out/`. Pushes to `main` trigger the Pages workflow. GitHub Pages must be configured to use GitHub Actions.

## Content

- Project copy: `lib/projects.ts`
- Homepage: `app/page.tsx`
- About and portrait space: `app/about/page.tsx`
- Contact and availability: `app/contact/page.tsx`
- Shared colors and responsive styles: `app/globals.css`
- Inzer walkthrough: `components/journey.tsx`

The About page uses a finished monogram panel while awaiting a portrait. Replace the panel with an accessible image when supplied. Keep its 4:5 desktop footprint and mobile treatment.

The contact form opens an email draft using the visitor's mail client. It does not store submissions or require a backend. The résumé is a public HTML version with print-to-PDF styling; the original private PDF and phone number are not included.

## Asset provenance

Inzer screens and video are adapted, code-derived portfolio demonstrations with fictional sample data. They are not a live app or proof of backend functionality. The underlying client source code is not included. Project descriptions describe Khalid's team contributions at Datics AI, based on his provided résumé. Other project covers are typographic project summaries, not fabricated product screenshots. Client media is not licensed for third-party reuse.

## Before updating claims

Keep project details, availability, employment dates, and performance statements current. Do not add testimonials, client logos, or new metrics without supporting evidence and permission.
