import Image from "next/image";
import Link from "next/link";
import { business, fullAddress } from "@/lib/business";
import { tacoTuesday } from "@/lib/menu";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BigStatement />
      <Gallery />
      <TacoTuesday />
      <Visit />
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
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/75" />

      <div className="relative h-full mx-auto max-w-6xl px-5 sm:px-6 flex flex-col items-center justify-center text-center text-cream">
        <span className="inline-flex items-center gap-2 bg-primary text-cream rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] mb-7 border-2 border-ink">
          <span className="size-1.5 rounded-full bg-accent" />
          Now open · Oak Cliff
        </span>

        <h1 className="font-display lowercase leading-[0.86] text-[clamp(3.5rem,12vw,9.5rem)]">
          small spot.
          <br />
          <span className="text-accent">big tacos.</span>
        </h1>
        <p className="mt-7 text-lg md:text-2xl text-cream max-w-2xl font-medium">
          Family-run taqueria on W Kiest Blvd. Hand-pressed,
          slow-braised, worth the drive.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary text-cream px-8 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-primary-dark transition shadow-2xl shadow-black/30 border-2 border-ink"
          >
            Get Directions
          </a>
          <a
            href={business.phoneHref}
            className="rounded-full bg-accent text-ink px-8 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-accent-dark transition shadow-xl shadow-black/20 border-2 border-ink"
          >
            Call {business.phone}
          </a>
        </div>

        <p className="mt-7 text-xs text-cream/85 flex items-center gap-2 uppercase tracking-[0.18em] font-bold">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)">
            <path d="M12 2l2.5 7h7.5l-6 4.5L18 21l-6-4.5L6 21l2-7.5L2 9h7.5z" />
          </svg>
          4.6 on Google · {business.hours}
        </p>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Street Tacos",
    "Quesatacos",
    "Birria",
    "Quesadillas",
    "Taco Tuesday $1.99",
    "Hand-Pressed Tortillas",
    "Made Fresh Daily",
    "Dine-In · Takeout",
  ];
  const row = [...items, ...items];
  return (
    <section
      className="bg-primary text-cream py-5 md:py-6 overflow-hidden border-y-[3px] border-ink"
      aria-hidden
    >
      <div className="marquee-track flex gap-10 whitespace-nowrap font-display lowercase text-3xl md:text-4xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={i % 3 === 1 ? "text-accent" : ""}>{t}</span>
            <span className="text-accent text-2xl">★</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function BigStatement() {
  return (
    <section className="bg-background border-b-[3px] border-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-24 md:py-36 text-center">
        <p className="uppercase tracking-[0.4em] text-primary text-xs font-black">
          The whole pitch
        </p>
        <h2 className="font-display lowercase text-ink mt-5 leading-[0.86] text-[clamp(3.5rem,11vw,8.5rem)]">
          we make tacos.
          <br />
          <span className="text-primary">that&apos;s it.</span>
          <br />
          we make them right.
        </h2>
        <p className="mt-8 text-ink/75 text-xl max-w-2xl mx-auto">
          Four things on the menu. Tortillas pressed in house. Birria braised
          low and slow. Nothing fancy, just done right.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/menu"
            className="rounded-full bg-ink text-cream px-7 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-primary transition border-2 border-ink"
          >
            See the Menu
          </Link>
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary text-cream px-7 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-primary-dark transition border-2 border-ink"
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
    <section className="bg-paper border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-20 md:py-28">
        <div className="grid gap-3 md:grid-cols-12 md:grid-rows-[26rem_22rem]">
          <Frame
            className="md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto"
            src="/images/taco-plate.jpg"
            alt="Plate of street tacos at El Nopalito"
            kicker="The plate"
            title="four meats, one tortilla"
          />
          <Frame
            className="md:col-span-5 md:row-span-1 aspect-[4/3] md:aspect-auto"
            src="/images/storefront.jpg"
            alt="El Nopalito Taqueria storefront on W Kiest Blvd, Dallas"
            kicker="Find us"
            title="2436 w kiest blvd"
          />
          <Frame
            className="md:col-span-5 md:row-span-1 aspect-[4/3] md:aspect-auto"
            src="/images/extra.jpg"
            alt="El Nopalito Taqueria, Kiestwood Village, Oak Cliff"
            kicker="The neighborhood"
            title="kiestwood village"
          />
        </div>
      </div>
    </section>
  );
}

function Frame({
  className = "",
  src,
  alt,
  kicker,
  title,
}: {
  className?: string;
  src: string;
  alt: string;
  kicker: string;
  title: string;
}) {
  return (
    <figure className={`relative overflow-hidden bg-ink group border-[3px] border-ink ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 700px"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-ink/95 via-ink/45 to-transparent">
        <p className="uppercase tracking-[0.32em] text-accent text-[10px] font-black">
          {kicker}
        </p>
        <p className="font-display lowercase text-cream text-2xl md:text-3xl mt-1">
          {title}
        </p>
      </figcaption>
    </figure>
  );
}

function TacoTuesday() {
  return (
    <section className="bg-primary text-cream relative overflow-hidden border-b-[3px] border-ink">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.2) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-24 md:py-32 text-center">
        <p className="uppercase tracking-[0.4em] text-accent text-xs font-black">
          {tacoTuesday.headline}
        </p>
        <h2 className="font-display lowercase mt-6 leading-[0.82] text-[clamp(4rem,17vw,13rem)]">
          street tacos
          <br />
          <span className="text-accent">{tacoTuesday.price}</span>
        </h2>
        <p className="mt-6 text-cream text-2xl md:text-3xl font-display lowercase">
          every tuesday. no catch.
        </p>
        <p className="mt-3 text-cream/85 text-lg max-w-xl mx-auto">
          Bring a friend. Bring four. Just bring an appetite.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent text-ink font-black px-8 py-4 text-sm uppercase tracking-[0.18em] hover:bg-accent-dark transition shadow-2xl shadow-black/30 border-2 border-ink"
          >
            Pull Up Tuesday
          </a>
          <a
            href={business.phoneHref}
            className="rounded-full bg-cream text-ink px-8 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-white transition shadow-xl border-2 border-ink"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="relative overflow-hidden h-[85vh] min-h-[560px]">
      <Image
        src="/images/storefront.jpg"
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/55 to-ink/95" />
      <div className="relative h-full mx-auto max-w-4xl px-5 sm:px-6 flex flex-col justify-end items-center text-center text-cream pb-20 md:pb-28">
        <p className="uppercase tracking-[0.4em] text-accent text-xs font-black">
          Visit
        </p>
        <h2 className="font-display lowercase mt-4 leading-[0.88] text-[clamp(3.5rem,11vw,8.5rem)]">
          come hungry.
          <br />
          <span className="text-accent">stay a minute.</span>
        </h2>
        <p className="mt-6 text-cream text-lg md:text-xl">{fullAddress}</p>
        <p className="text-cream/85 text-sm mt-1 uppercase tracking-[0.18em] font-bold">{business.hours}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary text-cream px-7 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-primary-dark transition shadow-xl border-2 border-ink"
          >
            Get Directions
          </a>
          <a
            href={business.phoneHref}
            className="rounded-full bg-accent text-ink px-7 py-4 text-sm font-black uppercase tracking-[0.18em] hover:bg-accent-dark transition shadow-xl border-2 border-ink"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
