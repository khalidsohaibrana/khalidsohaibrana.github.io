import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="wrap not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>A small detour.</h1>
      <p>This page isn’t here. Let’s get you back to the work.</p>
      <Link className="button primary" href="/">
        Back to home ↗
      </Link>
    </main>
  );
}
