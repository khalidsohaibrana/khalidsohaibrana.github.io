import Link from "next/link";
import { Icon } from "./icons";
export const upwork = "https://www.upwork.com/freelancers/~0163044333e8d98d92";
export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="wrap">
        <p className="eyebrow">
          <span className="status-dot" /> AVAILABLE FOR WORK
        </p>
        <div className="contact-banner-row">
          <h2>
            Got something in mind?
            <br />
            <span>Let’s make it happen.</span>
          </h2>
          <Link
            className="circle-cta"
            href="/contact/"
            aria-label="Start a conversation"
          >
            <Icon name="arrow" />
          </Link>
        </div>
        <div className="contact-banner-bottom">
          <span>40 hours / week · Remote · UTC+5</span>
          <a href="mailto:khalidsohaibrana@gmail.com">
            khalidsohaibrana@gmail.com ↗
          </a>
        </div>
      </div>
    </section>
  );
}
export function Phones({ large = false }: { large?: boolean }) {
  return (
    <div
      className={large ? "phones phones-large" : "phones"}
      aria-label="Inzer mobile app screens"
    >
      <img
        className="phone phone-left"
        src="/images/inzer/plan.webp"
        alt="Inzer saved workout plan with exercise list"
        width="600"
        height="1200"
        loading="lazy"
      />
      <img
        className="phone phone-center"
        src="/images/inzer/home.webp"
        alt="Inzer member home, with workouts and QR access"
        width="600"
        height="1200"
        loading="lazy"
      />
      <img
        className="phone phone-right"
        src="/images/inzer/progress.webp"
        alt="Inzer workout progress chart"
        width="600"
        height="1200"
        loading="lazy"
      />
    </div>
  );
}
