# Dealership Toolkit — capture library

Source screenshots for the Dealership Toolkit case study. **Not deployed** —
Next.js only serves `public/`, so everything here stays in the repo as a library
you can draw from or swap in later without re-running the capture setup.

Files actually used by the site live in `public/images/dealership-toolkit/` as
optimized WebP. These are the full-resolution originals.

## What these are

Real screens from the real applications (`sit-frontend` and `dtp-mobile`),
rendered against a dummy-data API. They are **not** mockups or illustrations,
and they contain **no** real customer data.

Every record shown is invented: the dealership is "Northgate Auto Group", the
shoppers are "Sample", and the phone numbers and emails use reserved example
domains. Client and vendor branding is replaced at capture time — the logo
becomes "AUTO PLATFORM", the product name becomes "CDXP", and the vendor footer
becomes "Portfolio demonstration".

## Contents

### `web/` — 1456×816, masked

| File | Screen |
| --- | --- |
| `ghost-dashboard.jpg` | Visitor analytics dashboard with KPI tiles |
| `visitors-and-views.jpg` | Visitor data grid — names, contacts, status badges |
| `appointments-dashboard.jpg` | Appointment KPIs and month calendar |
| `automations.jpg` | Campaign automation / workflow list |

### `mobile/` — 1206×2622, iOS simulator

| File | Screen |
| --- | --- |
| `login.png` | Sign-in screen |
| `ghost-dashboard-full.png` | Visitor KPIs (includes an RN dev warning toast at the bottom) |
| `ghost-dashboard-cropped.png` | Same, toast cropped off — this is the shipped one |
| `ghost-dashboard-empty-state.png` | Same screen with zero counts, kept as an alternate |

The mobile app shows no client logo, so no masking was needed there — only the
dealership and user names, which are already dummy data.

## Regenerating or adding screens

The harness lives outside this repo at `Stealth/portfolio-capture/`. See its
README. In short: start the mock API, point an app at it via `API_URL`, run
`mask-branding.js` in the page before capturing, and screenshot.

To add a screen that renders empty, watch the mock server log for `⚠` lines —
they name the exact endpoint that needs demo data.

## Before publishing anything new here

Check the capture for client or vendor names before committing it. The mask
covers the logo, product name and footer, but in-app copy can still mention a
third-party service (an email provider warning banner, for example). Add a rule
to `mask-branding.js` rather than editing the image.
