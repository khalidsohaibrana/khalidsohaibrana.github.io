import type { Metadata } from "next";
import Link from "next/link";
import { ContactBanner } from "@/components/shared";
export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Khalid Sohaib, a full-stack and React Native engineer building production mobile and web applications.",
  alternates: { canonical: "/about/" },
};
export default function About() {
  return (
    <main id="main">
      <div className="wrap">
        <header className="page-hero">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h1>
            Curious by nature.
            <br />
            <span className="serif blue">An engineer by craft.</span>
          </h1>
        </header>
        <section className="about-layout">
          <div className="about-copy">
            <p>
              I’m Khalid Sohaib, a full-stack and React Native engineer based in
              Pakistan. Since joining Datics AI in 2023, I’ve worked on
              production SaaS and mobile platforms with product, design, QA, and
              backend teams.
            </p>
            <p>
              My work spans the things people touch—calendars, dashboards,
              onboarding—and the systems that make them work: APIs,
              authentication, payments, notifications, and release pipelines.
            </p>
            <p>
              I like understanding the whole product. It helps me make better
              decisions, explain tradeoffs clearly, and deliver features that
              fit the way people actually work.
            </p>
            <div className="asset-actions">
              <Link className="button primary" href="/contact/">
                Work with me ↗
              </Link>
              <Link className="button secondary" href="/resume/">
                View résumé ↗
              </Link>
            </div>
          </div>
          <div
            className="portrait-slot"
            role="img"
            aria-label="Khalid Sohaib monogram; portrait to be added"
          >
            <span>ks.</span>
            <p>KHALID SOHAIB</p>
            <small>ENGINEER · BUILDER · TEAMMATE</small>
          </div>
        </section>
        <section className="experience">
          <p className="eyebrow">EXPERIENCE & FOUNDATIONS</p>
          <div className="experience-row">
            <div>
              <h3>Datics AI</h3>
              <p className="mono">APRIL 2023 — PRESENT · REMOTE</p>
            </div>
            <div>
              <h3>Full Stack & React Native Engineer</h3>
              <p>
                Building SaaS and mobile platforms, shared component systems,
                backend integrations, and real-time workflows. Contributing to
                code reviews, CI/CD, and stable releases alongside
                cross-functional teams.
              </p>
            </div>
          </div>
          <div className="experience-row">
            <div>
              <h3>COMSATS University</h3>
              <p className="mono">ISLAMABAD · 2016 — 2020</p>
            </div>
            <div>
              <h3>BS Computer Science</h3>
              <p>
                A foundation in software engineering that continues to shape how
                I think about systems and solve problems.
              </p>
            </div>
          </div>
          <div className="experience-row">
            <div>
              <h3>My toolkit</h3>
              <p className="mono">WEB · MOBILE · BACKEND</p>
            </div>
            <div>
              <p>
                React and React Native are at the center of my work, supported
                by the backend and delivery tools each product needs.
              </p>
              <div className="skills-list">
                {[
                  "React Native",
                  "Expo",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "Socket.io",
                  "Stripe",
                  "Firebase",
                  "AWS Cognito",
                  "GitHub Actions",
                  "Jest",
                ].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContactBanner />
    </main>
  );
}
