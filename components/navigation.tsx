"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return (
    <header className="header">
      <div className="wrap nav">
        <Link
          className="brand"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Khalid Sohaib — home"
        >
          <span className="brand-mark">
            ks<span>.</span>
          </span>
          <span className="brand-name">
            Khalid Sohaib<span>Software engineer</span>
          </span>
        </Link>
        <nav
          id="navigation"
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <Link href="/#work" onClick={() => setOpen(false)}>
            Work
          </Link>
          <Link href="/#services" onClick={() => setOpen(false)}>
            Expertise
          </Link>
          <Link
            href="/about/"
            aria-current={path === "/about/" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact/"
            aria-current={path === "/contact/" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <div className="nav-controls">
          <ThemeSwitch />
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
