import Image from "next/image";
import Link from "next/link";
import { business, fullAddress } from "@/lib/business";
import { tacoTuesday } from "@/lib/menu";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/taco-plate.jpg"
            alt="Plate of tacos at El Nopalito Taqueria in Oak Cliff, Dallas"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/85" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 pt-20 pb-28 md:pt-32 md:pb-40 text-cream">
          <p className="uppercase tracking-[0.2em] text-accent text-xs font-semibold">
            Kiestwood Village · Oak Cliff · Dallas
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl mt-4 leading-[1.05] max-w-3xl">
            Tacos so good, the neighborhood keeps coming back.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-cream/85 max-w-xl">
            Family-run taqueria slinging hand-pressed street tacos, crispy
            quesatacos, and slow-braised birria on W Kiest Blvd.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-primary px-7 py-3.5 font-semibold text-white hover:bg-primary-dark transition shadow-lg shadow-black/20"
            >
              See the menu
            </Link>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cream px-7 py-3.5 font-semibold text-ink hover:bg-white transition"
            >
              Get directions
            </a>
            <a
              href={business.phoneHref}
              className="rounded-full border border-cream/40 px-7 py-3.5 font-semibold text-cream hover:bg-cream/10 transition"
            >
              {business.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/80">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#f4c430">
                <path d="M12 2l2.5 7h7.5l-6 4.5L18 21l-6-4.5L6 21l2-7.5L2 9h7.5z" />
              </svg>
              4.6 on Google · 27+ reviews
            </span>
            <span>·</span>
            <span>{business.hours}</span>
          </div>
        </div>
      </section>

      {/* Taco Tuesday strip */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="uppercase tracking-widest text-accent text-xs font-bold">
              {tacoTuesday.headline}
            </p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">
              Street tacos for{" "}
              <span className="text-accent">{tacoTuesday.price}</span>. Every
              Tuesday.
            </h2>
            <p className="mt-2 text-white/85">{tacoTuesday.subhead}</p>
          </div>
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent text-ink font-semibold px-7 py-3.5 hover:bg-yellow-300 transition whitespace-nowrap"
          >
            Pull up Tuesday →
          </a>
        </div>
      </section>

      {/* What we serve */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-20">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-primary text-xs font-bold">
            What we serve
          </p>
          <h2 className="font-display text-4xl md:text-5xl mt-2 text-ink">
            Small menu. Done right.
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            We don&apos;t do a 50-item menu. We do tacos, quesatacos, birria, and
            quesadillas — and we do them like our abuela&apos;s watching.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Street Tacos"
            body="Hand-pressed corn tortillas, your meat, onion, cilantro, salsa. The original."
          />
          <FeatureCard
            title="Quesatacos"
            body="Crispy cheese-griddled tortilla folded around tender meat. The one everyone posts."
          />
          <FeatureCard
            title="Birria Tacos"
            body="Slow-braised, cheese-pulled, dipped in consomé. Comes with a cup for dunking."
          />
        </div>

        <div className="mt-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
          >
            See the full menu →
          </Link>
        </div>
      </section>

      {/* Photo split */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/inside-taco.jpg"
              alt="Inside El Nopalito Taqueria — taco close-up"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="uppercase tracking-widest text-primary text-xs font-bold">
              The local spot
            </p>
            <h2 className="font-display text-4xl md:text-5xl mt-2 text-ink">
              A small, new taqueria worth driving for.
            </h2>
            <p className="mt-5 text-ink/70 text-lg leading-relaxed">
              We&apos;re a family taqueria in Kiestwood Village. No drive-thru,
              no shortcuts — just fresh tortillas, real salsas, and meats we
              actually season. If you&apos;re in Oak Cliff, southwest Dallas, or
              Duncanville, we&apos;re a quick stop on W Kiest Blvd.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-ink text-cream px-6 py-3 font-semibold hover:bg-primary transition"
              >
                Our story
              </Link>
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/20 text-ink px-6 py-3 font-semibold hover:border-primary hover:text-primary transition"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit strip */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="uppercase tracking-widest text-primary text-xs font-bold">
              Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl mt-2 text-ink">
              Find us on W Kiest Blvd.
            </h2>
            <dl className="mt-6 space-y-3 text-ink/80">
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink/50">
                  Address
                </dt>
                <dd className="text-lg">{fullAddress}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink/50">
                  Hours
                </dt>
                <dd className="text-lg">{business.hours}</dd>
              </div>
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
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark transition"
              >
                Get directions
              </a>
              <Link
                href="/visit"
                className="rounded-full border border-ink/20 text-ink px-6 py-3 font-semibold hover:border-primary hover:text-primary transition"
              >
                More info
              </Link>
            </div>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden border border-ink/10">
            <Image
              src="/images/storefront.jpg"
              alt={`Front of ${business.name} at ${business.address.street}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-cream border border-ink/5 p-7 hover:border-primary/30 transition">
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      <p className="mt-3 text-ink/70 leading-relaxed">{body}</p>
    </div>
  );
}
