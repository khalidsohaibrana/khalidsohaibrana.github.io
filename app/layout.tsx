import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./creative.css";
import "@fontsource-variable/nunito-sans";
import "@fontsource-variable/fraunces";
import "./studio.css";
import "./walkthrough.css";
import "./case-story.css";
import { Navigation } from "@/components/navigation";
import { MotionEffects } from '@/components/motion-effects';
export const metadata: Metadata = {
  metadataBase: new URL("https://khalidsohaibrana.github.io"),
  title: {
    default: "Khalid Sohaib — Full Stack & React Native Engineer",
    template: "%s | Khalid Sohaib",
  },
  description:
    "Full-stack engineer building React Native apps, React and Next.js web products, and Node.js backends. Available for work, 40 hours a week.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{let t='system';try{const v=localStorage.getItem('ks-theme');if(v==='light'||v==='dark')t=v}catch{}const d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light';document.documentElement.style.colorScheme=d?'dark':'light'})()`,
          }}
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navigation />
        <MotionEffects />
        {children}
        <footer className="footer wrap">
          <Link href="/" className="footer-brand">
            Khalid Sohaib<span>Full Stack & React Native Engineer</span>
          </Link>
          <p>Built with intent. From interface to infrastructure.</p>
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
