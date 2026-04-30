"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";

const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        solid
          ? "bg-cream border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="El Nopalito Taqueria home">
          <span className="relative size-11 md:size-12 rounded-full overflow-hidden ring-2 ring-primary shrink-0">
            <Image src="/images/logo.jpg" alt="" fill sizes="48px" className="object-cover" priority />
          </span>
          <span
            className={`hidden sm:inline font-display text-xl md:text-2xl lowercase leading-none tracking-tight transition-colors ${
              solid ? "text-ink" : "text-cream"
            }`}
          >
            el nopalito
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-[0.2em]">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`transition-colors ${
                solid ? "text-ink hover:text-primary-dark" : "text-cream hover:text-primary"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex rounded-md bg-primary text-ink px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] hover:bg-primary-dark transition-colors"
        >
          Directions
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 -mr-2 transition-colors ${
            solid ? "text-ink" : "text-cream"
          }`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
          <div className="mx-auto max-w-7xl px-5 py-5 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-lg font-black uppercase tracking-[0.18em] text-ink"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3 grid grid-cols-2 gap-2 border-t border-ink/10">
              <a
                href={business.phoneHref}
                className="rounded-md bg-cream border border-ink/20 text-ink px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em]"
              >
                Call
              </a>
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-primary text-ink px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em]"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
