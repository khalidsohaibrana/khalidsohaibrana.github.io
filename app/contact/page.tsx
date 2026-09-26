import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { upwork } from "@/components/shared";
export const metadata: Metadata = {
  title: "Let’s work together",
  description:
    "Discuss your web or mobile project with Khalid Sohaib. Available for freelance work, 40 hours per week.",
  alternates: { canonical: "/contact/" },
};
export default function Contact() {
  return (
    <main id="main" className="wrap">
      <header className="page-hero">
        <p className="eyebrow">LET’S START A CONVERSATION</p>
        <h1>
          What are we
          <br />
          <span className="serif blue">building next?</span>
        </h1>
      </header>
      <div className="contact-layout">
        <aside className="contact-aside">
          <p>
            A new product, a tricky feature, or an existing app that needs some
            care—tell me what you have in mind.
          </p>
          <a className="email-link" href="mailto:khalidsohaibrana@gmail.com">
            khalidsohaibrana@gmail.com ↗
          </a>
          <div className="contact-detail">
            <span className="eyebrow">AVAILABILITY</span>
            <p>
              40 hours per week for freelance projects.
              <br />
              Based in Pakistan (UTC+5), working remotely.
            </p>
          </div>
          <div className="contact-detail">
            <span className="eyebrow">PREFER UPWORK?</span>
            <p>We can discuss your project and work together there.</p>
            <a className="text-link" href={upwork}>
              View my Upwork profile ↗
            </a>
          </div>
          <div className="contact-detail">
            <span className="eyebrow">A GOOD START</span>
            <p>
              Share your product, current stack, timeline, and the first outcome
              you want to achieve. A short description is plenty.
            </p>
          </div>
        </aside>
        <ContactForm />
      </div>
    </main>
  );
}
