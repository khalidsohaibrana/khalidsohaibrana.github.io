# Products

Reference notes on the products I've worked on — what each one *is* as a
product, not just what I did on it. Useful when writing portfolio copy,
answering interview questions, or deciding what a case study should emphasise.

These are product notes, named as the vendors name themselves. The public case
studies on the site are written separately and some are presented anonymised;
this file is not a key to them.

**How this is sourced.** Everything here comes from (a) each vendor's own
public marketing, linked at the end of each section, (b) technology already
disclosed on this site, or (c) my own project experience. It deliberately
contains **no** internal architecture, infrastructure or integration detail
from private repositories or client documentation.

---

## STEALTH CDXP — Coast Technology

A multi-tenant AI marketing and customer-data platform for dealerships. Its
core claim is identity resolution: de-anonymising **40–60% of a dealer's
anonymous website traffic** against a large third-party identity graph, then
unifying every touchpoint into a single shopper profile that can be segmented,
messaged and attributed through to a sold unit.

Sold to RV, marine, powersports and automotive dealers. Coast Technology was
founded in 2019, is based in Mandeville, Louisiana, and reports serving 150+
dealers across North America.

**Modules**

| Module | Purpose |
| --- | --- |
| CDXP / identity | Resolve anonymous traffic into named shopper profiles |
| Audience Builder | Segment profiles into targetable audiences |
| Outbound | Email and SMS campaigns, templates, automation workflows |
| CRM | Leads, tasks, assignment and follow-up |
| Appointments | Scheduling, reminders, urgent-lead alerting |
| Service | Service-lane visits, notes, escalation routing |
| Reporting | Channel performance and attribution dashboards |
| Administration | Multi-tenant dealership setup, users, roles, entitlements |

**Technology** — React (web dashboard) · React Native (mobile client) ·
Node.js / Express · PostgreSQL · Redis · Bull (background jobs) · Socket.IO
(real-time) · Twilio (SMS) · Mailgun (email)

**Business case** — Most dealership web traffic never identifies itself. If
you can name a meaningful share of it, generic advertising becomes targeted
follow-up, and spend becomes attributable to actual sales. The platform's value
is the chain from anonymous visit → named profile → campaign → appointment →
attributed sale.

**Sources** — [Coast Technology](https://www.coasttechnology.com/) ·
[STEALTH CDXP](https://www.coasttechnology.com/cdxp) ·
[CDP](https://coasttechnology.com/cdp/) ·
[Automotive](https://www.coasttechnology.com/dealers/automotive) ·
[Stealth AI Suite release](https://coasttechnology.com/blog/coast-technology-packs-major-release-across-the-stealth-ai-suite-for-rv-marine-and-powersports-dealers/) ·
[RVBusiness coverage](https://rvbusiness.com/coast-technology-exhibits-stealth-ai-suite-during-rvda/)

---

## CleanHaus

Cleaning-coordination platform for self-managing Airbnb and short-term rental
hosts. It connects booking calendars (Airbnb, Vrbo, custom feeds) directly to
cleaners, so a turnover job is scheduled the moment a guest books, changes or
cancels — removing the manual back-and-forth that usually sits between a
booking and a clean property.

**Broomy**, its AI agent, handles cleaner notifications and coordination in the
background. **CleanHaus Lite** is a web-and-SMS tier that needs no app install,
aimed at hosts and cleaners who won't adopt another mobile app.

**Features** — calendar-triggered turnover scheduling · cleaner assignment and
notifications · turnover completion confirmations with notes and photos ·
automatic payment handling · AI coordination agent · SMS-first lightweight tier

**Technology** — React Native + Expo (mobile) · React · Next.js (enterprise
web) · AWS Cognito (auth) · Firebase (notifications, analytics) · Stripe
Connect (payouts) · EAS (builds, submission, OTA updates)

**Business case** — A missed or late turnover costs a host a booking and a
review. Automating scheduling off the booking calendar removes the single most
error-prone step in short-term rental operations, and scales from one property
to a managed portfolio.

Founded November 2024; platform announced December 2025.

**Sources** — [CleanHaus](https://cleanhaus.ai/) ·
[How it works](https://cleanhaus.ai/how-it-works) ·
[CleanHaus Lite](https://cleanhaus.ai/lite) ·
[Google Play](https://play.google.com/store/apps/details?id=haus.clean.app) ·
[Launch announcement](https://finance.yahoo.com/news/cleanhaus-launches-ai-agent-scheduling-180000663.html)

---

## Inzer

A gym training and community platform that puts the gym — rather than a
generic fitness tracker — at the centre of a member's routine. Members log
workouts, follow structured programs, book personal trainers and connect with
other members, while the gym gets member engagement and admin tooling.

**Features** — workout logging (exercises, sets, reps, weight) · structured
4/8/12-week programs for weight loss, strength or muscle · personal-trainer
profiles, booking and PT plan management · community features (workout
partners, gym events, in-app chat) · progress analytics (body measurements,
personal records, milestones) · admin tools for users, routines and progress

**Technology** — React · Material UI · WebSockets (real-time updates) ·
Progressive Web App with offline support · social authentication

**Business case** — Gyms lose members to apps that have no connection to the
gym itself. Tying workout tracking, trainer booking and community to a specific
gym makes the membership stickier, and gives operators a channel to their
members.

Available on iOS and Android.

**Sources** — [INZER](https://inzer.com.au/) ·
[App Store](https://apps.apple.com/us/app/inzer-gym-workouts-tracking/id6745819005) ·
[Google Play](https://play.google.com/store/apps/details?id=au.com.inzer.test.twa)

---

## PV Rugs

A rug-cleaning and restoration business in Scottsdale, Arizona, operating since
2005 and serving the Phoenix valley. It runs pickup and drop-off collection
into an off-site cleaning plant, with a multi-step process covering oriental and
area rug cleaning, repair, appraisal, moth proofing and fabric protection.

The platform I worked on digitises that physical service lifecycle.

> Unlike the products above, PV Rugs does not publicly document its internal
> platform. The capabilities below come from my own project experience, not
> from published material.

**Features** — QR-based service lifecycle tracking (where a rug is in the
process) · Stripe payments alongside manual payment workflows · SMS and email
notifications and invoicing · dashboards for service throughput and revenue

**Technology** — Next.js (SSR, API routes, server actions) · Stripe · Twilio
(SMS) · Mailgun (email)

**Business case** — In a pickup-clean-return business the customer's main
anxiety is "where is my rug?", and the operator's is "what's been paid and
what's due back?". QR tracking answers both from the same record, and reduces
the phone calls that otherwise fill the day.

**Sources** — [PV Rugs](https://pvrugs.com/) ·
[Oriental rug cleaning](https://pvrugs.com/oriental-rug-cleaning-scottsdale-az)

---

## Keeping this accurate

Vendor marketing changes. Re-check the linked pages before reusing a claim —
especially figures like identity-match rates and dealer counts, which are the
vendor's claims and not something I measured. Do not add internal architecture,
infrastructure or integration-partner detail from private repositories.
