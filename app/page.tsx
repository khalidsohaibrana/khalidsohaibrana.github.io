import Link from "next/link";
import { ContactBanner, Phones } from "@/components/shared";
export default function Home() {
  return (
    <main id="main">
      <section className="hero wrap">
        <div className="hero-top">
          <p className="eyebrow">FULL STACK & REACT NATIVE ENGINEER</p>
          <p className="availability">
            <span /> Open for freelance · 40 hrs/week
          </p>
        </div>
        <h1>
          Good ideas.
          <br />
          Great <span className="serif blue">digital products.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            I’m Khalid. I turn complex requirements into
            <br className="desktop-break" /> web and mobile experiences people
            enjoy using.
          </p>
          <Link className="button primary" href="#work">
            Explore my work <span aria-hidden="true">↘</span>
          </Link>
        </div>
        <div className="hero-foot">
          <div className="stack-line">
            <span>React Native</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>TypeScript</span>
          </div>
          <span className="mono">BASED IN PAKISTAN · WORKING REMOTELY</span>
        </div>
      </section>
      <section id="work" className="work wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Real products.
              <br />
              <span className="serif">Thoughtful engineering.</span>
            </h2>
          </div>
          <p>
            From the first interaction to the systems
            <br /> working quietly behind the scenes.
          </p>
        </div>
        <Link className="featured-project" href="/work/inzer/">
          <div className="featured-visual">
            <div className="project-visual-label">
              <span>INZER</span>
              <span>TRAIN. TRACK. CONNECT.</span>
            </div>
            <Phones />
            <div className="visual-bottom">
              <span>THE GYM, IN YOUR POCKET.</span>
              <span className="round-arrow">↗</span>
            </div>
          </div>
          <div className="project-info">
            <div>
              <p className="eyebrow">FEATURED CASE STUDY / WEB + PWA</p>
              <h3>Inzer — a more connected gym experience.</h3>
              <p>
                Workout tracking, member journeys, and an installable app that
                keeps up with life outside the gym.
              </p>
            </div>
            <span className="text-link">View case study ↗</span>
          </div>
        </Link>
        <div className="project-grid">
          <Link className="project-card" href="/work/cleanhaus/">
            <div className="project-cover cleanhaus">
              <div className="cover-top">
                <span>CleanHaus</span>
                <span>01 / OPERATIONS</span>
              </div>
              <h3>
                One calendar.
                <br />
                <span>Three platforms.</span>
              </h3>
              <div className="platforms">
                <span>Mobile</span>
                <i>↔</i>
                <span>Web</span>
                <i>↔</i>
                <span>Enterprise</span>
              </div>
              <p>Shared scheduling infrastructure</p>
              <span className="round-arrow">↗</span>
            </div>
            <div className="card-caption">
              <h3>CleanHaus</h3>
              <p>React Native · React · Next.js</p>
            </div>
            <p className="card-summary">
              Helping hosts and cleaners stay in sync across mobile and web.
            </p>
          </Link>
          <Link className="project-card" href="/work/pv-rugs/">
            <div className="project-cover pvrugs">
              <div className="cover-top">
                <span>PV Rugs</span>
                <span>02 / SERVICE OPERATIONS</span>
              </div>
              <h3>
                From collection
                <br />
                <span>to completion.</span>
              </h3>
              <div className="lifecycle">
                <span>Scan</span>
                <b>→</b>
                <span>Track</span>
                <b>→</b>
                <span>Deliver</span>
              </div>
              <p>A connected service lifecycle</p>
              <span className="round-arrow">↗</span>
            </div>
            <div className="card-caption">
              <h3>PV Rugs</h3>
              <p>Next.js · Stripe · Twilio</p>
            </div>
            <p className="card-summary">
              Turning service jobs, payments, and updates into one connected
              workflow.
            </p>
          </Link>
        </div>
        <Link className="confidential-project" href="/work/dealership-toolkit/">
          <span className="mono">ALSO IN MY TOOLKIT</span>
          <div>
            <h3>Real-time dealership CRM</h3>
            <p>
              Role-based dashboards, background jobs, and communication
              workflows.
            </p>
          </div>
          <span className="text-link">Explore the engineering ↗</span>
        </Link>
      </section>
      <section id="services" className="services">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / HOW I CAN HELP</p>
              <h2>
                Your product.
                <br />
                <span className="serif">My next challenge.</span>
              </h2>
            </div>
            <p>
              Joining your team or owning a feature,
              <br /> from the first conversation to release.
            </p>
          </div>
          <div className="service-grid">
            {[
              [
                "01",
                "Web & SaaS applications",
                "Customer-facing products, admin dashboards, and business tools built with React and Next.js.",
                "React / Next.js / TypeScript",
              ],
              [
                "02",
                "Cross-platform mobile",
                "React Native apps with native integrations, offline experiences, and a dependable path to the app stores.",
                "React Native / Expo / EAS",
              ],
              [
                "03",
                "Backends & integrations",
                "APIs, payments, notifications, and real-time workflows that make your product useful end to end.",
                "Node.js / PostgreSQL / Socket.io",
              ],
              [
                "04",
                "Make an existing app better",
                "Untangle a codebase, improve performance, modernize screens, and ship the features your users need.",
                "Audits / Refactoring / Delivery",
              ],
            ].map(([n, title, description, tech]) => (
              <article className="service" key={n}>
                <span className="service-number">{n}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="mono">{tech}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="about-preview wrap">
        <div>
          <p className="eyebrow">03 / THE PERSON BEHIND THE PRODUCTS</p>
          <h2>
            A builder’s mindset.
            <br />
            <span className="serif">A teammate’s approach.</span>
          </h2>
        </div>
        <div>
          <p>
            I’m a full-stack engineer at Datics AI, working across mobile apps,
            SaaS platforms, and the systems that connect them.
          </p>
          <p>
            I care about the details users notice—and the architecture they
            don’t. Clear communication, thoughtful code, and steady delivery are
            how I work.
          </p>
          <Link className="text-link" href="/about/">
            A little more about me ↗
          </Link>
        </div>
      </section>
      <section className="process wrap">
        <p className="eyebrow">A CLEAR PATH FROM IDEA TO RELEASE</p>
        <div className="process-grid">
          {[
            [
              "01",
              "Understand",
              "Align on your users, codebase, and the outcome that matters.",
            ],
            [
              "02",
              "Build",
              "Ship visible milestones with clear decisions and regular updates.",
            ],
            [
              "03",
              "Refine",
              "Test the important flows and polish the experience on real devices.",
            ],
            [
              "04",
              "Deliver",
              "Release with practical documentation and a clean handover.",
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span className="mono">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
