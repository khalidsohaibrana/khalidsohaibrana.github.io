import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type ProjectSlug } from "@/lib/projects";
import { ContactBanner, Phones } from "@/components/shared";
import { Journey } from "@/components/journey";
import { CalendarArt, WorkflowArt } from "@/components/project-art";
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects[slug as ProjectSlug];
  if (!p) return {};
  return {
    title: p.name + " — Project",
    description: p.summary,
    alternates: { canonical: `/work/${slug}/` },
    openGraph: {
      title: p.name + " — Khalid Sohaib",
      description: p.summary,
      url: `/work/${slug}/`,
    },
  };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects[slug as ProjectSlug];
  if (!p) notFound();
  return (
    <main id="main">
      <div className="wrap">
        <header className="page-hero">
          <Link className="back-link" href="/#work">
            ← Selected work
          </Link>
          <p className="eyebrow">{p.category}</p>
          <h1>{p.title}</h1>
          <p className="intro">{p.summary}</p>
          <dl className="project-meta">
            <div>
              <dt>MY ROLE</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>CONTEXT</dt>
              <dd>Team contribution at Datics AI</dd>
            </div>
            <div>
              <dt>TECHNOLOGY</dt>
              <dd>{p.stack}</dd>
            </div>
          </dl>
        </header>
        {slug === "inzer" ? (
          <>
            <div className="case-visual">
              <div className="project-visual-label">
                <span>INZER</span>
                <span>WEB + PWA</span>
              </div>
              <Phones large />
            </div>
            <p className="case-note">
              Mobile web / PWA. Adapted screens with sample data.
            </p>
          </>
        ) : slug === "cleanhaus" ? (
          <div className="case-art">
            <CalendarArt />
          </div>
        ) : slug === "pv-rugs" ? (
          <div className="case-art">
            <WorkflowArt />
          </div>
        ) : (
          <div
            className={`editorial-cover ${slug === "cleanhaus" ? "cleanhaus" : slug === "pv-rugs" ? "pvrugs" : "toolkit-cover"}`}
          >
            <p className="eyebrow">{p.name.toUpperCase()}</p>
            <h2>{p.cover}</h2>
            <p>{p.stack}</p>
          </div>
        )}
        <div className="case-body">
          <section className="case-section">
            <h2>The product</h2>
            <div>
              <p>{p.context}</p>
            </div>
          </section>
          <section className="case-section">
            <h2>The challenge</h2>
            <div>
              <p>{p.challenge}</p>
            </div>
          </section>
          <section className="case-section">
            <h2>What I contributed</h2>
            <div>
              <ul>
                {p.contributions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </section>
          {slug === "inzer" && <Journey />}
          <section className="case-section">
            <h2>The approach</h2>
            <div>
              <p>{p.approach}</p>
            </div>
          </section>
          <section className="case-section">
            <h2>The result</h2>
            <div>
              <p>{p.outcome}</p>
              {slug === "inzer" && (
                <p>
                  My project experience records an approximately{" "}
                  <strong>40% improvement in interaction performance</strong>{" "}
                  following UI refactoring.
                </p>
              )}
              <p className="case-note">
                Contribution details and performance figures reflect my project
                experience. They describe my work within the team, not sole
                ownership of the product.
              </p>
            </div>
          </section>
          {slug === "inzer" && (
            <section>
              <p className="eyebrow">A CLOSER LOOK</p>
              <video
                className="case-video"
                controls
                playsInline
                preload="none"
                poster="/images/inzer/video-poster.webp"
                aria-label="Inzer portfolio walkthrough"
              >
                <source src="/media/inzer-demo.mp4" type="video/mp4" />
                Your browser does not support this video.{" "}
                <a href="/media/inzer-demo.mp4">Download the walkthrough</a>.
              </video>
              <p className="case-note">
                A 30-second portfolio walkthrough using staged UI renders.
              </p>
              <div className="asset-actions">
                <a
                  className="button secondary"
                  href="/downloads/INZER-Mobile-Portfolio.pptx"
                  download
                >
                  Download mobile deck ↓
                </a>
                <a
                  className="button secondary"
                  href="/media/inzer-demo.mp4"
                  download
                >
                  Download walkthrough ↓
                </a>
              </div>
            </section>
          )}
          <section className="case-section">
            <h2>What matters</h2>
            <div>
              <p>{p.lessons}</p>
            </div>
          </section>
          <Link className="text-link" href="/contact/">
            Have a similar challenge? Let’s talk ↗
          </Link>
        </div>
      </div>
      <ContactBanner />
    </main>
  );
}
