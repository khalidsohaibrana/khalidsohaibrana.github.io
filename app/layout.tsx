import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Navigation } from "@/components/navigation";
export const metadata: Metadata = {
  metadataBase: new URL("https://khalidsohaibrana.github.io"),
  title: {
    default: "Khalid Sohaib — Full Stack & React Native Engineer",
    template: "%s | Khalid Sohaib",
  },
  description:
    "Full-stack engineer building React Native apps, React and Next.js web products, and Node.js backends. Available for freelance projects, 40 hours a week.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Khalid Sohaib",
    title: "Khalid Sohaib — Web, mobile & everything behind them",
    description:
      "React Native, React, Next.js and Node.js engineer. Explore selected production work and get in touch.",
  },
  twitter: { card: "summary" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <footer className="footer wrap">
          <Link href="/" className="wordmark">
            khalid<span>sohaib.</span>
          </Link>
          <p>Thoughtfully built. Ready for what’s next.</p>
          <div>
            <a href="https://github.com/khalidsohaibrana">GitHub ↗</a>
            <a href="https://www.upwork.com/freelancers/~0163044333e8d98d92">
              Upwork ↗
            </a>
            <a href="mailto:khalidsohaibrana@gmail.com">Email ↗</a>
          </div>
          <small>© {new Date().getFullYear()} Khalid Sohaib</small>
        </footer>
      </body>
    </html>
  );
}
