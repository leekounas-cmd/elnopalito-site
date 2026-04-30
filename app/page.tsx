import Image from "next/image";
import Link from "next/link";
import { business, fullAddress } from "@/lib/business";
import { tacoTuesday } from "@/lib/menu";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <PhotoEssay />
      <BrandStory />
      <TacoTuesdayBanner />
      <MarqueeStrip slow />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <Image
        src="/images/inside-taco.jpg"
        alt="A hand-pressed taco at El Nopalito Taqueria in Oak Cliff"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/30 to-ink/70" />

      <div className="relative h-full mx-auto max-w-6xl px-5 sm:px-6 flex flex-col items-center justify-center text-center text-cream">
        <p className="uppercase tracking-[0.32em] text-accent text-[11px] sm:text-xs font-bold">
          Kiestwood Village · Oak Cliff · Dallas
        </p>
        <h1 className="font-display lowercase mt-5 leading-[0.92] max-w-5xl text-[clamp(3.25rem,11vw,8rem)]">
          real-deal tacos,
          <br />
          made by hand.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-cream/90 max-w-xl mx-auto">
          The little taqueria on Kiest Blvd. Hand-pressed, slow-braised, and worth the drive.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition shadow-xl shadow-black/30"
          >
            Get directions
          </a>
          <a
            href={business.phoneHref}
            className="rounded-full bg-cream px-7 py-4 font-semibold text-ink hover:bg-white transition"
          >
            Call {business.phone}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-cream/85">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)">
              <path d="M12 2l2.5 7h7.5l-6 4.5L18 21l-6-4.5L6 21l2-7.5L2 9h7.5z" />
            </svg>
            4.6 on Google
          </span>
          <span aria-hidden className="opacity-50">·</span>
          <span>{business.hours}</span>
          <span aria-hidden className="opacity-50 hidden sm:inline">·</span>
          <Link href="/menu" className="underline underline-offset-4 decoration-cream/40 hover:text-accent hover:decoration-accent">
            see the menu
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider-zigzag" />
    </section>
  );
}

function MarqueeStrip({ slow = false }: { slow?: boolean }) {
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
      className="bg-primary text-cream py-6 overflow-hidden border-y-2 border-accent/30"
      aria-hidden
    >
      <div
        className={`marquee-track flex gap-10 whitespace-nowrap font-display lowercase text-3xl md:text-4xl ${slow ? "marquee-slow" : ""}`}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={i % 3 === 1 ? "text-accent" : ""}>{t}</span>
            <span className="text-accent/70 text-2xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function PhotoEssay() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-20 md:py-28">
        <div className="grid gap-6 md:gap-3 md:grid-cols-12 md:grid-rows-[28rem_22rem]">
          <FrameCard
            className="md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto"
            src="/images/taco-plate.jpg"
            alt="Plate of street tacos at El Nopalito"
            caption="The plate."
          />
          <FrameCard
            className="md:col-span-5 md:row-span-1 aspect-[4/3] md:aspect-auto"
            src="/images/storefront.jpg"
            alt="El Nopalito Taqueria storefront on W Kiest Blvd"
            caption="2436 W Kiest Blvd."
          />
          <FrameCard
            className="md:col-span-5 md:row-span-1 aspect-[4/3] md:aspect-auto"
            src="/images/extra.jpg"
            alt="The El Nopalito sign in Kiestwood Village"
            caption="Kiestwood Village."
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-[1.4fr_1fr] items-end">
          <div>
            <p className="uppercase tracking-[0.32em] text-primary text-xs font-bold">
              Off the plancha
            </p>
            <h2 className="font-display lowercase text-5xl md:text-7xl mt-3 text-ink leading-[0.95]">
              hot, fresh, made in front of you.
            </h2>
          </div>
          <p className="text-ink/75 text-lg leading-relaxed md:pb-2">
            Tortillas pressed to order. Birria braised low and slow. Salsas
            made the way our family always has. Four things, done right.
          </p>
        </div>
      </div>
    </section>
  );
}

function FrameCard({
  className = "",
  src,
  alt,
  caption,
}: {
  className?: string;
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className={`relative overflow-hidden bg-ink ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
        className="object-cover"
      />
      <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-cream font-display lowercase text-lg bg-gradient-to-t from-ink/85 via-ink/40 to-transparent">
        {caption}
      </figcaption>
    </figure>
  );
}

function BrandStory() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-24 md:py-32 grid gap-12 md:gap-16 md:grid-cols-2 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/inside-taco.jpg"
            alt="A taco being plated at El Nopalito Taqueria"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute top-5 left-5 inline-flex items-center gap-2 bg-primary text-cream text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            <span className="size-1.5 rounded-full bg-accent" />
            Family-run
          </span>
        </div>

        <div>
          <p className="uppercase tracking-[0.32em] text-primary text-xs font-bold">
            Our story
          </p>
          <h2 className="font-display lowercase text-5xl md:text-7xl mt-3 text-ink leading-[0.92]">
            a small spot. a short menu. tacos worth the trip.
          </h2>
          <p className="mt-7 text-ink/75 text-lg leading-relaxed">
            We&apos;re a new family taqueria in Kiestwood Village. No 50-item
            menu, no shortcuts. We press tortillas in house, slow-braise the
            birria, and make our salsas the way our family always has.
          </p>
          <p className="mt-4 text-ink/75 text-lg leading-relaxed">
            If you find us, you&apos;ll tell a friend. That&apos;s how we&apos;re
            building this place.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full bg-ink text-cream px-6 py-3 font-semibold hover:bg-primary transition"
            >
              More about us
            </Link>
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/20 text-ink px-6 py-3 font-semibold hover:border-primary hover:text-primary transition"
            >
              Follow {business.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TacoTuesdayBanner() {
  return (
    <section className="bg-primary text-cream relative overflow-hidden">
      <div className="absolute inset-0 paper-texture opacity-15" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28 text-center">
        <p className="uppercase tracking-[0.4em] text-accent text-xs font-bold">
          {tacoTuesday.headline}
        </p>
        <h2 className="font-display lowercase mt-5 leading-[0.9] text-[clamp(3.5rem,12vw,9rem)]">
          street tacos<br />
          <span className="text-accent">{tacoTuesday.price}</span>
        </h2>
        <p className="mt-6 text-cream/90 text-xl max-w-xl mx-auto">
          Every Tuesday. No catch. Bring a friend. Or four.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent text-ink font-semibold px-8 py-4 hover:bg-yellow-300 transition shadow-lg shadow-black/20"
          >
            Pull up Tuesday
          </a>
          <a
            href={business.phoneHref}
            className="rounded-full border-2 border-cream/40 text-cream px-8 py-4 font-semibold hover:bg-cream/10 transition"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden h-[80vh] min-h-[520px]">
      <Image
        src="/images/storefront.jpg"
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/55 to-ink/90" />
      <div className="relative h-full mx-auto max-w-4xl px-5 sm:px-6 flex flex-col justify-end items-center text-center text-cream pb-20 md:pb-28">
        <p className="uppercase tracking-[0.32em] text-accent text-xs font-bold">
          Visit
        </p>
        <h2 className="font-display lowercase text-5xl md:text-7xl mt-4 leading-[0.95]">
          come hungry.<br />stay a minute.
        </h2>
        <p className="mt-5 text-cream/90 text-lg">
          {fullAddress}
        </p>
        <p className="text-cream/75 text-sm mt-1">{business.hours}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary text-white px-7 py-4 font-semibold hover:bg-primary-dark transition"
          >
            Get directions
          </a>
          <a
            href={business.phoneHref}
            className="rounded-full bg-cream text-ink px-7 py-4 font-semibold hover:bg-white transition"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
