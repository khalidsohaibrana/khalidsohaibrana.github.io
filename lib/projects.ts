export const projects = {
  inzer: {
    name: "Inzer",
    category: "GYM MANAGEMENT / WEB + PWA",
    title: "A gym experience that moves with its members.",
    summary:
      "An installable gym platform connecting workouts, progress, trainers, and the wider gym community.",
    role: "Frontend & PWA development",
    stack: "React · Material UI · WebSockets · PWA",
    cover: "Work out. Track progress. Stay connected.",
    context:
      "Gym members need a clear path from signing up to building a routine. Inzer brings those interactions together in a member-facing web application, alongside admin tools for managing users, routines, and progress.",
    contributions: [
      "Maintained and enhanced the React application, including member-facing screens and admin interfaces.",
      "Converted the web application into an installable Progressive Web App with offline support.",
      "Integrated social authentication and real-time updates using WebSockets.",
      "Refactored UI components and improved interaction performance.",
    ],
    challenge:
      "Make a broad set of gym features feel connected and accessible on a phone, while keeping the React application maintainable as it evolves.",
    approach:
      "I worked on the existing platform, improving reusable UI components and the member journey. PWA capabilities added installability and offline support, while real-time updates helped keep the interface in sync.",
    outcome:
      "The work brought an installable mobile web experience to the existing platform and made frequently used interactions more responsive.",
    lessons:
      "Mobile usability is a sequence of small decisions: clear actions, readable forms, useful feedback, and a natural next step. Those details matter just as much as adding another feature.",
  },
  cleanhaus: {
    name: "CleanHaus",
    category: "RENTAL OPERATIONS / MOBILE + WEB",
    title: "One scheduling experience. Three connected platforms.",
    summary:
      "Helping short-term rental hosts and cleaners coordinate schedules, tasks, and property operations across mobile and web.",
    role: "Full Stack & React Native Engineer",
    stack: "React Native · React · Next.js · Expo · AWS Cognito",
    cover: "Shared foundations. Native-feeling experiences.",
    context:
      "CleanHaus supports short-term rental operations, from individual properties to larger portfolios. Its clients need consistent scheduling and task workflows across a React Native app, a React web app, and a Next.js enterprise app.",
    contributions: [
      "Built synchronized month, week, and day calendar views with time-positioned event bars.",
      "Packaged the calendar as a shared library used across three clients and improved rendering and scrolling with virtualization and memoization.",
      "Implemented turnover scheduling, role-based task views, and improvements to onboarding.",
      "Integrated the existing Claus AI assistant, AWS Cognito authentication, Firebase notifications and analytics, Stripe Connect payout onboarding, and localization.",
      "Implemented offline support using secure token storage and cached state.",
      "Owned EAS delivery workflows, custom Expo config plugins, automated submission, and OTA updates; resolved native dependency issues during a React Native upgrade.",
    ],
    challenge:
      "Keep scheduling behavior consistent across three platforms without losing the usability and performance people expect on each device.",
    approach:
      "I separated shared calendar behavior from platform concerns, used virtualization and memoization for demanding views, and kept builds reproducible through pinned dependencies and controlled prebuilds.",
    outcome:
      "One calendar library served three clients. The implementation improved calendar rendering and scrolling performance by approximately 30%, as recorded in my project experience.",
    lessons:
      "Shared code pays off when its boundaries are deliberate. Calendar behavior can be common while navigation, input, and delivery still respect each platform.",
  },
  "pv-rugs": {
    name: "PV Rugs",
    category: "SERVICE OPERATIONS / FULL STACK",
    title: "A clearer journey from collection to completion.",
    summary:
      "A Next.js platform connecting QR-based service tracking, payments, customer updates, and operational reporting.",
    role: "Full-stack development",
    stack: "Next.js · Stripe · Twilio · Mailgun",
    cover: "Every service job, connected.",
    context:
      "A rug cleaning operation needs visibility across a service lifecycle: where a job is, what has been paid, and what the customer needs to know. PV Rugs brings those workflows together.",
    contributions: [
      "Built full-stack features using Next.js, server-side rendering, API routes, and server actions.",
      "Implemented QR-based service lifecycle tracking for job visibility.",
      "Integrated Stripe payments alongside manual payment workflows.",
      "Added SMS and email workflows using Twilio and Mailgun for notifications and invoicing.",
      "Developed dashboards for service throughput and revenue monitoring.",
    ],
    challenge:
      "Connect physical service operations with a digital system that staff and customers can depend on.",
    approach:
      "I connected QR-based tracking with backend workflows and surfaced job information in the interface. Payment and notification integrations helped keep the service lifecycle coordinated.",
    outcome:
      "The platform supported a connected workflow for tracking service jobs, collecting payments, sending updates, and monitoring operations.",
    lessons:
      "Useful business software makes the state of a job easy to understand. Tracking, notifications, and payments work best when they follow the same service lifecycle.",
  },
  "dealership-toolkit": {
    name: "Dealership Toolkit",
    category: "B2B SAAS PLATFORM / ANONYMIZED PROJECT",
    title: "One platform. Every surface.",
    summary:
      "A multi-tenant SaaS platform for dealership groups — visitor intelligence, leads, appointments, service and campaign automation — used from a web dashboard or a phone, and kept running by a background job engine.",
    role: "Full-stack & React Native development",
    stack: "React Native · React · Node.js · PostgreSQL · Socket.io · Redis · Bull",
    cover: "One platform. Every surface.",
    context:
      "Dealership groups use this platform as separate tenants, each with their own users, their own data and only the modules they have been given. The product spans visitor intelligence, lead management, appointments, service tracking, campaign automation and reporting, with staff working the same records from a web dashboard or a mobile app while imports, scheduled sends and third-party synchronization run continuously in the background. Client and vendor details are intentionally anonymized.",
    contributions: [
      "Built React Native screens for the mobile client — dashboards, lead and appointment workflows, and charting — on React Native 0.73 with the New Architecture enabled.",
      "Implemented mobile navigation, server-state caching and persisted storage using React Navigation, TanStack Query and MMKV, with English and French localization.",
      "Developed React dashboards wired to the platform's tenant-aware role and permission model.",
      "Implemented Socket.io rooms so lead and appointment activity reached only the users it concerned.",
      "Built scheduled and background processing on Redis-backed Bull queues, and integrated Twilio SMS and Mailgun email into automated communication workflows.",
      "Optimized Node.js and PostgreSQL APIs for large datasets.",
    ],
    challenge:
      "Keep one product coherent across a web dashboard, a mobile client and a continuously running job engine — while every tenant sees only their own data and only the modules they are entitled to.",
    approach:
      "Both clients derive their navigation and visible actions from the same feature, group and permission contract, so an entitlement change takes effect on web and mobile without a client release. Interactive updates go through Socket.io rooms, while anything slow or scheduled moves onto Bull queues to keep the request path responsive. On mobile I leaned on cached server state and persisted storage so screens stay usable on unreliable connections.",
    outcome:
      "API optimization reduced average query latency by more than 50%, as recorded in my project experience. Sharing one permission contract let the mobile client cover the same modules as the web dashboard, and queued processing kept imports and communication work off the request path.",
    lessons:
      "Real-time messaging and background jobs solve different problems, and so do web and mobile clients. Giving each a clear responsibility — while sharing one permission contract between them — kept the platform straightforward to extend as modules were added.",
  },
} as const;
export type ProjectSlug = keyof typeof projects;
