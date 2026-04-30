import Image from "next/image";
import Link from "next/link";
import { business, fullAddress } from "@/lib/business";
import { tacoTuesday } from "@/lib/menu";

export default function Home() {
  return (
    <>
      <Hero />
      <BigStatement />
      <Gallery />
      <TacoTuesday />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <Image
        src="/images/inside-taco.jpg"
        alt="A hand-pressed taco at El Nopalito Taqueria in Oak Cliff, Dallas"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />

      <div className="relative h-full mx-auto max-w-6xl px-5 sm:px-6 flex flex-col items-center justify-center text-center text-cream">
        <span className="inline-flex items-center gap-2 bg-primary text-ink rounded-md px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] mb-7">
          <span className="size-1.5 rounded-full bg-ink" />
          Now open · Oak Cliff
        </span>

        <h1 className="font-display lowercase leading-[0.86] text-[clamp(3.5rem,12vw,9.5rem)] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
          small spot.
          <br />
          <span className="text-primary">big tacos.</span>
        </h1>
        <p className="mt-7 text-lg md:text-2xl text-cream max-w-2xl font-medium [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
          Family-run taqueria on W Kiest Blvd. Hand-pressed,
          slow-braised, worth the drive.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-primary text-ink px-8 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-primary-dark transition shadow-2xl shadow-black/40"
          >
            Get Directions
          </a>
          <a
            href={business.phoneHref}
            className="rounded-md bg-cream text-ink px-8 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-white transition shadow-xl shadow-black/30"
          >
            Call {business.phone}
          </a>
        </div>

        <p className="mt-7 text-xs text-cream flex items-center gap-2 uppercase tracking-[0.18em] font-bold [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--primary)">
            <path d="M12 2l2.5 7h7.5l-6 4.5L18 21l-6-4.5L6 21l2-7.5L2 9h7.5z" />
          </svg>
          4.6 on Google · {business.hours}
        </p>
      </div>
    </section>
  );
}

function BigStatement() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/quesataco.jpg"
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-28 md:py-40 text-center text-cream">
        <p className="uppercase tracking-[0.4em] text-primary text-xs font-black [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
          The whole pitch
        </p>
        <h2 className="font-display lowercase mt-5 leading-[0.86] text-[clamp(3.5rem,11vw,8.5rem)] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
          we make tacos.
          <br />
          we make them right.
        </h2>
        <p className="mt-8 text-cream/95 text-xl max-w-2xl mx-auto [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
          Four things on the menu. Tortillas pressed in house. Birria braised
          low and slow. Nothing fancy, just done right.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/menu"
            className="rounded-md bg-primary text-ink px-7 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-primary-dark transition shadow-2xl shadow-black/40"
          >
            See the Menu
          </Link>
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-cream text-ink px-7 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-white transition shadow-xl shadow-black/30"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-20 md:py-28 grid gap-3 md:grid-cols-2">
        <Frame
          src="/images/salsa-tacos.jpg"
          alt="Three soft tacos with green and orange salsas at El Nopalito"
          kicker="Three salsas"
          title="green, orange, fire."
          aspect="aspect-[4/5]"
        />
        <Frame
          src="/images/quesataco.jpg"
          alt="Quesataco close-up at El Nopalito Taqueria"
          kicker="The crispy fold"
          title="quesatacos."
          aspect="aspect-[4/5]"
        />
      </div>
    </section>
  );
}

function Frame({
  src,
  alt,
  kicker,
  title,
  aspect,
}: {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  aspect: string;
}) {
  return (
    <figure className={`relative overflow-hidden bg-ink group ${aspect}`}>
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/95 via-black/45 to-transparent">
        <p className="uppercase tracking-[0.32em] text-primary text-[11px] font-black">
          {kicker}
        </p>
        <p className="font-display lowercase text-cream text-3xl md:text-4xl mt-1">
          {title}
        </p>
      </figcaption>
    </figure>
  );
}

function TacoTuesday() {
  return (
    <section className="bg-primary text-ink relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-24 md:py-32 text-center">
        <p className="uppercase tracking-[0.4em] text-ink text-xs font-black">
          {tacoTuesday.headline}
        </p>
        <h2 className="font-display lowercase mt-6 leading-[0.82] text-[clamp(4rem,17vw,13rem)]">
          street tacos
          <br />
          {tacoTuesday.price}
        </h2>
        <p className="mt-6 text-ink text-2xl md:text-3xl font-display lowercase">
          every tuesday. no catch.
        </p>
        <p className="mt-3 text-ink/80 text-lg max-w-xl mx-auto">
          Bring a friend. Bring four. Just bring an appetite.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-ink text-cream font-black px-8 py-4 text-sm uppercase tracking-[0.18em] hover:bg-ink/85 transition shadow-2xl shadow-black/30"
          >
            Pull Up Tuesday
          </a>
          <a
            href={business.phoneHref}
            className="rounded-md bg-cream text-ink px-8 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-white transition shadow-xl"
          >
            Call {business.phone}
          </a>
        </div>
        <p className="mt-10 text-ink/85 text-sm uppercase tracking-[0.18em] font-bold">
          {fullAddress}
        </p>
      </div>
    </section>
  );
}
