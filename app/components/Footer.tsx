import Link from "next/link";
import { business, fullAddress } from "@/lib/business";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-3xl text-accent">El Nopalito</h3>
          <p className="mt-3 text-cream/70 text-sm leading-relaxed">
            A small family taqueria in Kiestwood Village serving real-deal tacos,
            quesadillas, quesatacos, and birria.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold uppercase tracking-wider text-accent text-xs mb-3">
            Visit
          </h4>
          <p className="text-cream/80">{fullAddress}</p>
          <p className="text-cream/80 mt-1">{business.hours}</p>
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-accent hover:underline"
          >
            Get directions →
          </a>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold uppercase tracking-wider text-accent text-xs mb-3">
            Connect
          </h4>
          <a href={business.phoneHref} className="block text-cream/80 hover:text-accent">
            {business.phone}
          </a>
          <a
            href={business.instagram}
            target="_blank"
            rel="noreferrer"
            className="block text-cream/80 hover:text-accent mt-1"
          >
            Instagram {business.instagramHandle}
          </a>
          <div className="mt-4 flex gap-4 text-cream/60">
            <Link href="/menu" className="hover:text-accent">Menu</Link>
            <Link href="/about" className="hover:text-accent">About</Link>
            <Link href="/visit" className="hover:text-accent">Visit</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-5 text-xs text-cream/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} El Nopalito Taqueria. Dallas, TX.</p>
          <p>Made with love in Oak Cliff.</p>
        </div>
      </div>
    </footer>
  );
}
