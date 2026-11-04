import Link from 'next/link';
import type { Metadata } from 'next';
import { ContactBanner } from '@/components/shared';
import { Icon } from '@/components/icons';
import { CleanHausArt } from '@/components/project-art';
import { StudioIllustration } from '@/components/studio-illustration';
import { ProjectPeek } from '@/components/project-peek';
import { DealershipArt } from '@/components/platform-story';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <main id="main" className="studio-home">
      <section className="studio-hero wrap">
        <div className="studio-introduction">
          <span className="availability"><span className="status-dot" />Available for work</span>
          <h1>Hey, I’m<br /><span className="name-underline">Khalid.</span><span className="hero-star" aria-hidden="true">✳</span></h1>
          <p className="studio-role">Full-stack & React Native engineer.</p>
          <p className="studio-summary">I turn complex ideas into thoughtful web & mobile apps. Built to work well. And feel a little wonderful.</p>
          <div className="studio-actions"><Link className="button primary" href="#work">View my work <span aria-hidden="true">↓</span></Link><Link className="text-link" href="/contact/">Let’s talk <span aria-hidden="true">↗</span></Link></div>
        </div>
        <StudioIllustration />
        <div className="studio-footnote"><span>Based in Pakistan. Building beyond borders.</span><a href="#work">A little further down <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="work" className="project-stories wrap">
        <header className="stories-heading"><p className="eyebrow">SELECTED WORK</p><h2>Good ideas.<br /><span>Made real, together.</span></h2><p>A few products I’ve helped build at Datics AI.</p></header>
        <article className="project-story story-inzer">
          <div className="story-copy"><span className="story-index">01 / INZER</span><h3>From the first workout<br />to the next personal best.</h3><p>A gym platform that brings workouts, progress, and community into one mobile-friendly experience.</p><div className="story-contribution"><span>MY PART</span><p>I enhanced the React app, added installable PWA capabilities and offline support, and connected real-time updates.</p></div><Link className="story-link" href="/work/inzer/">Explore the Inzer story <Icon name="arrow" /></Link><small className="story-disclosure">Code-derived demo screens with fictional data.</small></div>
          <ProjectPeek />
        </article>
        <article className="project-story story-cleanhaus">
          <div className="cleanhaus-story-art"><CleanHausArt /><span className="shared-calendar-note">One calendar.<br /><strong>Three platforms.</strong><span aria-hidden="true">↗</span></span></div>
          <div className="story-copy"><span className="story-index">02 / CLEANHAUS</span><h3>Less juggling.<br />More in sync.</h3><p>Helping rental hosts and cleaners coordinate the everyday details, across mobile and web.</p><div className="story-contribution"><span>MY PART</span><p>I built a shared calendar library for React Native, React, and Next.js, and worked on scheduling, onboarding, and mobile delivery.</p></div><Link className="story-link" href="/work/cleanhaus/">Explore the CleanHaus story <Icon name="arrow" /></Link><small className="story-disclosure">Product onboarding illustration.</small></div>
        </article>
        <article className="project-story story-toolkit">
          <div className="story-copy"><span className="story-index">03 / DEALERSHIP TOOLKIT</span><h3>Every shopper.<br />Every screen.</h3><p>A multi-tenant dealership platform where staff work the same leads, appointments, and campaigns from a web dashboard or a phone.</p><div className="story-contribution"><span>MY PART</span><p>I built React Native screens for the mobile client and React dashboards for the web, sharing one role-based permission model, and backed them with queue-driven background jobs.</p></div><Link className="story-link" href="/work/dealership-toolkit/">Explore the Dealership Toolkit story <Icon name="arrow" /></Link><small className="story-disclosure">Real app screens captured with fictional data; client branding replaced.</small></div>
          <DealershipArt />
        </article>
        <div className="more-work">
          <Link href="/work/pv-rugs/"><span className="small-project-mark rugs-mark" aria-hidden="true">pv.</span><span><strong>PV Rugs</strong><small>QR tracking, payments & connected operations.</small></span><Icon name="arrow" /></Link>
        </div>
      </section>

      <section id="services" className="capabilities wrap">
        <div className="capabilities-heading"><p className="eyebrow">FROM INTERFACE TO INFRASTRUCTURE</p><h2>The whole picture.<br /><span>The little details.</span></h2><p>One engineer who cares about how all the pieces fit.</p></div>
        <div className="capability-list">{[
          ['mobile', 'Made for mobile', 'React Native and Expo apps, from onboarding to app-store delivery.'],
          ['monitor', 'Built for the web', 'React and Next.js experiences that work across screens.'],
          ['layers', 'Connected underneath', 'Node.js, databases, APIs, payments, and real-time systems.'],
        ].map(([icon, title, copy]) => <article key={title}><span className="capability-icon"><Icon name={icon as 'mobile' | 'monitor' | 'layers'} /></span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>
      <section className="personal-note wrap"><div className="note-monogram" aria-hidden="true">ks.</div><div><p className="eyebrow">A PERSON BEHIND THE PIXELS</p><h2>Curiosity is part of the job.</h2><p>I’ve been building web and mobile products with the team at Datics AI since 2023. I like thoughtful details, clear conversations, and understanding why something needs to exist before deciding how to build it.</p><div className="personal-links"><Link className="text-link" href="/about/">More about me ↗</Link><Link className="text-link" href="/resume/">View résumé ↗</Link></div></div></section>
      <ContactBanner />
    </main>
  );
}
