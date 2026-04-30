import { business } from "@/lib/business";

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-ink text-white border-t border-white/10 grid grid-cols-2">
      <a
        href={business.phoneHref}
        className="py-4 text-center text-sm font-semibold flex items-center justify-center gap-2"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinejoin="round" />
        </svg>
        Call
      </a>
      <a
        href={business.directionsUrl}
        target="_blank"
        rel="noreferrer"
        className="py-4 text-center text-sm font-semibold flex items-center justify-center gap-2 bg-primary"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Directions
      </a>
    </div>
  );
}
