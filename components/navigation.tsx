"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="header">
      <div className="wrap nav">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
          khalid<span>sohaib.</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
        <nav
          id="navigation"
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <Link href="/#work" onClick={() => setOpen(false)}>
            Selected work
          </Link>
          <Link href="/#services" onClick={() => setOpen(false)}>
            What I do
          </Link>
          <Link
            href="/about/"
            aria-current={path === "/about/" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            className="nav-cta"
            href="/contact/"
            onClick={() => setOpen(false)}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
