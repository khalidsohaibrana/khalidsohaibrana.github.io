import Link from 'next/link';
import type { Metadata } from 'next';
import { ContactBanner } from '@/components/shared';
import { Icon } from '@/components/icons';
import { InzerArt, CleanHausArt } from '@/components/project-art';

export const metadata: Metadata = { alternates: { canonical: '/' } };

const projects = [
  { name: 'Inzer', slug: 'inzer', description: 'A gym experience that moves with its members.', kind: 'Web app', art: <InzerArt /> },
  { name: 'CleanHaus', slug: 'cleanhaus', description: 'Keeping hosts, cleaners, and schedules in sync.', kind: 'Mobile & web', art: <CleanHausArt /> },
];

export default function Home() {
  return (
    <main id="main">
      <section className="intro wrap">
        <span className="availability"><span className="status-dot" />Available for work</span>
        <div className="hello-mark" aria-hidden="true"><i /><i /><b /></div>
        <p className="intro-name">Hey, I’m Khalid.</p>
        <h1>Useful apps.<br /><span className="highlight-word">A little delight.</span></h1>
        <p className="intro-description">I build thoughtful web and mobile experiences<br className="desktop-break" /> with React Native, React, and Next.js.</p>
        <div className="intro-actions">
          <Link className="button primary" href="#work">Explore my work <span aria-hidden="true">↓</span></Link>
          <Link className="text-link" href="/contact/">Say hello <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section id="work" className="gallery wrap">
        <div className="gallery-heading"><h2>A few things I’ve built<span aria-hidden="true">✳</span></h2><p>Made with teams. Built with care.</p></div>
        <div className="work-gallery">
          {projects.map(project => (
            <Link className={`work-tile tile-${project.slug}`} href={`/work/${project.slug}/`} key={project.slug}>
              <div className="tile-art">{project.art}<span className="tile-open" aria-hidden="true"><Icon name="arrow" /></span></div>
              <div className="tile-caption"><h3>{project.name}</h3><span className="project-kind">{project.kind}</span></div>
              <p className="tile-description">{project.description}</p>
            </Link>
          ))}
        </div>
        <div className="more-work">
          <Link href="/work/pv-rugs/"><span className="small-project-mark rugs-mark" aria-hidden="true">pv.</span><span><strong>PV Rugs</strong><small>Service workflows, connected.</small></span><Icon name="arrow" /></Link>
          <Link href="/work/dealership-toolkit/"><span className="small-project-mark crm-mark" aria-hidden="true"><Icon name="layers" /></span><span><strong>Dealership Toolkit</strong><small>Real-time tools for busy teams.</small></span><Icon name="arrow" /></Link>
        </div>
      </section>

      <section id="services" className="capabilities wrap">
        <div className="capabilities-heading"><p className="eyebrow">HOW I CAN HELP</p><h2>Your idea.<br /><span>Let’s give it life.</span></h2><p>From the first tap to the systems behind it.</p></div>
        <div className="capability-list">
          {[
            ['mobile', 'Apps that feel at home', 'React Native experiences for iOS and Android.'],
            ['monitor', 'Websites with a purpose', 'Responsive React and Next.js products.'],
            ['layers', 'The pieces behind the scenes', 'APIs, payments, and real-time connections.'],
          ].map(([icon, title, copy]) => <article key={title}><span className="capability-icon"><Icon name={icon as 'mobile' | 'monitor' | 'layers'} /></span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </section>

      <section className="personal-note wrap">
        <div className="note-monogram" aria-hidden="true">ks.</div>
        <div><h2>A curious human behind the code.</h2><p>Based in Pakistan, building with teams everywhere. I’ve been working on web and mobile products at Datics AI since 2023.</p><Link className="text-link" href="/about/">A little more about me <span aria-hidden="true">↗</span></Link></div>
      </section>
      <ContactBanner />
    </main>
  );
}
