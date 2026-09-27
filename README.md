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
- Project cover compositions: `components/project-art.tsx`
- Light, dark, and system preference: `components/theme-switch.tsx`

Nunito Sans is self-hosted through Fontsource, with rounded letterforms, relaxed tracking, and generous line spacing. The homepage prioritizes two visual case studies and two quieter project links instead of four equally dense cards. The theme defaults to the device setting and persists an explicit choice in local storage. An early inline script applies the saved setting before the page paints; system changes and cross-tab preference changes are also supported.

The About page uses a finished monogram panel while awaiting a portrait. Replace the panel with an accessible image when supplied. Keep its 4:5 desktop footprint and mobile treatment.

The contact form opens an email draft using the visitor's mail client. It does not store submissions or require a backend. The résumé is a public HTML version with print-to-PDF styling; the original private PDF and phone number are not included.

## Asset provenance

Inzer screens and video are adapted, code-derived portfolio demonstrations with fictional sample data. They are not a live app or proof of backend functionality. The underlying client source code is not included. Project descriptions describe Khalid's team contributions at Datics AI, based on his provided résumé. The CleanHaus gallery artwork is its supplied onboarding illustration (`assets/onboarding/welcome-stack/hero-1.png`), optimized for the website. CleanHaus detail, PV Rugs, and Dealership Toolkit diagrams describe architecture and workflows, not product screenshots. Client media is not licensed for third-party reuse.

The redesign takes presentation inspiration from the user's specific [AI Property Management App shot by Asib Iquebal](https://dribbble.com/shots/27761850-AI-Property-Management-App-Smart-Tenant-Maintenance-Assistant): paired mobile screens, soft mint and warm neutral canvases, rounded surfaces, and generous spacing. This refers to the artwork inside the shot, not Dribbble's website layout. No Dribbble artwork is embedded or copied. The portfolio's editorial layout and original project compositions are implemented in `app/creative.css` and `components/project-art.tsx`.

Motion includes staggered introductory text, one-time section reveals, and responsive project-cover interactions. CSS and JavaScript both respect reduced-motion preferences. Content remains visible if JavaScript is unavailable.

## Before updating claims

Keep project details, availability, employment dates, and performance statements current. Do not add testimonials, client logos, or new metrics without supporting evidence and permission.
