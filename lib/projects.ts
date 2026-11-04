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
    category: "B2B CRM / ANONYMIZED PROJECT",
    title: "Real-time coordination for a busy dealership.",
    summary:
      "Multi-role dashboards on web and mobile, lead and appointment updates, and dependable background communication workflows.",
    role: "Full-stack & React Native development",
    stack: "React Native · React · Node.js · PostgreSQL · Socket.io · Redis · Bull",
    cover: "The right update. To the right team.",
    context:
      "This B2B dealership CRM supports users with different responsibilities and access levels. Lead and appointment activity needs to reach the right people promptly, while communication jobs need reliable processing. Client details are intentionally anonymized.",
    contributions: [
      "Developed React dashboards with granular role-based access control.",
      "Implemented Socket.io rooms for lead and appointment activity updates.",
      "Built scheduled and background processing with Bull queues and Redis-backed workers.",
      "Integrated Twilio SMS and Mailgun email into automated communication workflows.",
      "Optimized Node.js and PostgreSQL APIs for large datasets.",
    ],
    challenge:
      "Keep interactive dashboards current while processing communication and scheduled work reliably in the background.",
    approach:
      "I used Socket.io rooms for targeted interface updates and Bull with Redis for job scheduling and coordination. I also optimized API queries to improve responsiveness on larger datasets.",
    outcome:
      "API optimization reduced average query latency by more than 50%, as recorded in my project experience. Targeted real-time updates and queued work supported the broader operational workflow.",
    lessons:
      "Real-time messaging and background jobs solve different problems. Giving each a clear responsibility made the system easier to reason about and maintain.",
  },
} as const;
export type ProjectSlug = keyof typeof projects;
