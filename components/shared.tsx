import Link from "next/link";
export const upwork = "https://www.upwork.com/freelancers/~0163044333e8d98d92";
export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="wrap">
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
        <div className="contact-banner-row">
          <h2>
            Let’s make it
            <br />
            <em>work beautifully.</em>
          </h2>
          <Link
            className="circle-cta"
            href="/contact/"
            aria-label="Start a conversation"
          >
            ↗
          </Link>
        </div>
        <div className="contact-banner-bottom">
          <span>Available for freelance · 40 hours / week</span>
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
        width="480"
        height="960"
      />
      <img
        className="phone phone-center"
        src="/images/inzer/home.webp"
        alt="Inzer member home, with workouts and QR access"
        width="480"
        height="960"
      />
      <img
        className="phone phone-right"
        src="/images/inzer/progress.webp"
        alt="Inzer workout progress chart"
        width="480"
        height="960"
      />
    </div>
  );
}
