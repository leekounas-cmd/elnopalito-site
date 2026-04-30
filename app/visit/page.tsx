import type { Metadata } from "next";
import Image from "next/image";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Visit · 2436 W Kiest Blvd, Dallas TX 75233",
  description: `Find El Nopalito Taqueria at ${fullAddress}. Hours, directions, parking, and phone. Kiestwood Village, Oak Cliff.`,
  alternates: { canonical: "/visit" },
};

const dayHours = [
  { day: "Monday", hours: "Call to confirm" },
  { day: "Tuesday", hours: "Taco Tuesday, call to confirm" },
  { day: "Wednesday", hours: "Call to confirm" },
  { day: "Thursday", hours: "Call to confirm" },
  { day: "Friday", hours: "Call to confirm" },
  { day: "Saturday", hours: "Call to confirm" },
  { day: "Sunday", hours: "Call to confirm" },
];

export default function VisitPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.name + " " + fullAddress
  )}&output=embed`;

  return (
    <>
      <section className="bg-cream pt-16 md:pt-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20">
          <p className="uppercase tracking-widest text-primary text-xs font-bold">
            Visit us
          </p>
          <h1 className="font-display text-5xl md:text-6xl mt-2 text-ink leading-[1.05]">
            {fullAddress}
          </h1>
          <p className="mt-4 text-ink/70 text-lg max-w-2xl">
            We&apos;re in Kiestwood Village on W Kiest Blvd, just off I-35E in
            Oak Cliff. Easy parking, dine-in or to-go.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16 grid gap-10 md:grid-cols-2">
        <div>
          <div className="rounded-2xl overflow-hidden border border-ink/10 aspect-[4/3]">
            <iframe
              src={mapSrc}
              title={`Map to ${business.name}`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark"
          >
            Open in Google Maps →
          </a>
        </div>

        <div>
          <h2 className="font-display text-3xl text-ink">Hours</h2>
          <ul className="mt-4 divide-y divide-ink/10">
            {dayHours.map((d) => (
              <li
                key={d.day}
                className="flex items-center justify-between py-3 text-ink/80"
              >
                <span className="font-medium">{d.day}</span>
                <span className="text-ink/60">{d.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-ink/55">
            Generally open daily, closes around 9 PM. Call ahead to confirm.
            We&apos;ll update these once finalized.
          </p>

          <h2 className="font-display text-3xl text-ink mt-10">Contact</h2>
          <dl className="mt-4 space-y-3 text-ink/80">
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink/50">
                Phone
              </dt>
              <dd className="text-lg">
                <a href={business.phoneHref} className="hover:text-primary">
                  {business.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink/50">
                Instagram
              </dt>
              <dd className="text-lg">
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  {business.instagramHandle}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink/50">
                Neighborhood
              </dt>
              <dd className="text-lg">
                {business.address.neighborhood}, Oak Cliff
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/extra.jpg"
              alt="El Nopalito Taqueria"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ink">
              Driving from somewhere?
            </h2>
            <p className="mt-4 text-ink/75 text-lg leading-relaxed">
              We&apos;re a quick stop for folks coming from Bishop Arts, Methodist
              hospital, downtown Dallas, Duncanville, DeSoto, or anywhere in
              southwest Dallas. Plenty of parking out front.
            </p>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-ink text-cream px-6 py-3 font-semibold hover:bg-primary"
            >
              Get directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
