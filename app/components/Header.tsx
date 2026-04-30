"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/lib/business";

const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-2xl text-primary leading-none">
          El Nopalito
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-primary transition">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={business.phoneHref}
            className="text-sm font-semibold text-ink hover:text-primary"
          >
            {business.phone}
          </a>
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition"
          >
            Directions
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-ink"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={business.phoneHref}
              className="text-lg font-semibold text-primary"
            >
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
