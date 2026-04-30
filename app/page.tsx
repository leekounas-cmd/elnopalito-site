import Image from "next/image";
import Link from "next/link";
import { business, fullAddress } from "@/lib/business";
import { tacoTuesday } from "@/lib/menu";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <BrandStory />
      <PolaroidGallery />
      <TacoTuesdayBanner />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
      <Image
        src="/images/inside-taco.jpg"
        alt="A taco on the counter at El Nopalito Taqueria in Oak Cliff, Dallas"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/75" />

      {/* corner tape */}
      <span className="hidden md:block tape tape-red" style={{ top: 24, left: 24, transform: "rotate(-8deg)" }} />
      <span className="hidden md:block tape" style={{ top: 30, right: 40, transform: "rotate(7deg)" }} />

      <div className="relative h-full mx-auto max-w-6xl px-5 sm:px-6 flex flex-col justify-end pb-20 md:pb-28 text-cream">
        <p className="uppercase tracking-[0.25em] text-accent text-xs font-bold">
          Kiestwood Village · Oak Cliff · Dallas
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl mt-4 leading-[0.95] max-w-4xl">
          Real-deal tacos.
          <br />
          <span className="text-accent">Quietly</span> the best in Oak Cliff.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-cream/85 max-w-xl">
          Family-run taqueria slinging hand-pressed street tacos, crispy
          quesatacos, and slow-braised birria on W Kiest Blvd.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition shadow-lg shadow-black/30"
          >
            Get directions
          </a>
          <a
            href={business.phoneHref}
            className="rounded-full bg-cream px-7 py-4 font-semibold text-ink hover:bg-white transition"
          >
            Call {business.phone}
          </a>
          <Link
            href="/menu"
            className="ml-2 underline underline-offset-4 decoration-cream/50 hover:decoration-accent text-cream/90 hover:text-accent text-sm font-medium transition"
          >
            see the menu
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/80">
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)">
              <path d="M12 2l2.5 7h7.5l-6 4.5L18 21l-6-4.5L6 21l2-7.5L2 9h7.5z" />
            </svg>
            4.6 on Google
          </span>
          <span aria-hidden className="opacity-50">·</span>
          <span>{business.hours}</span>
          <span aria-hidden className="opacity-50">·</span>
          <span className="truncate max-w-[260px] sm:max-w-none">{fullAddress}</span>
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const items = [
    "Street Tacos",
    "Quesatacos",
    "Birria",
    "Quesadillas",
    "Taco Tuesday $1.99",
    "Hand-Pressed Tortillas",
    "Slow-Braised",
    "Made Fresh Daily",
  ];
  const row = [...items, ...items];
  return (
    <section className="bg-ink text-cream py-5 border-y-2 border-primary overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap font-display text-3xl md:text-4xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className={i % 2 ? "text-accent" : ""}>{t}</span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="relative">
          <span className="hidden md:block tape" style={{ top: -14, left: 30, transform: "rotate(-6deg)", zIndex: 2 }} />
          <span className="hidden md:block tape tape-red" style={{ bottom: -14, right: 40, transform: "rotate(8deg)", zIndex: 2 }} />
          <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-paper p-3 shadow-xl">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/taco-plate.jpg"
                alt="Plate of tacos at El Nopalito Taqueria"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[0.25em] text-primary text-xs font-bold">
            Our story
          </p>
          <h2 className="font-display text-4xl md:text-6xl mt-3 text-ink leading-[1.05]">
            A small spot. A short menu. Tacos worth the trip.
          </h2>
          <p className="mt-6 text-ink/75 text-lg leading-relaxed">
            We&apos;re a new family taqueria in Kiestwood Village. No 50-item
            menu, no shortcuts. Tortillas pressed in house, birria braised low
            and slow, salsas made the way our family has always made them.
          </p>
          <p className="mt-4 text-ink/75 text-lg leading-relaxed">
            If you find us, you&apos;ll tell a friend. That&apos;s how we&apos;re
            building this place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PolaroidGallery() {
  return (
    <section className="bg-cream py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-primary text-xs font-bold">
            Off the plancha
          </p>
          <h2 className="font-display text-4xl md:text-6xl mt-3 text-ink leading-[1.05]">
            Hot off the plancha. Made in front of you.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 items-center">
          <Polaroid src="/images/storefront.jpg" alt="El Nopalito storefront on W Kiest Blvd" caption="Find us on Kiest Blvd." rotate="-3deg" />
          <Polaroid src="/images/inside-taco.jpg" alt="Hand-pressed taco at El Nopalito" caption="Pressed to order." rotate="2deg" tapeColor="tape-red" />
          <Polaroid src="/images/taco-plate.jpg" alt="Plate of tacos at El Nopalito" caption="The full plate." rotate="-1deg" />
          <Polaroid src="/images/extra.jpg" alt="El Nopalito on Kiest Blvd in Oak Cliff" caption="The neighborhood spot." rotate="3deg" tapeColor="tape-cream" />
          <div className="col-span-2 md:col-span-1 flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl text-primary">20/10</p>
              <p className="mt-2 text-ink/70 text-sm uppercase tracking-widest">
                Honest local rating
              </p>
              <Link
                href="/menu"
                className="mt-5 inline-flex rounded-full bg-ink text-cream px-5 py-3 text-sm font-semibold hover:bg-primary transition"
              >
                See the menu →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Polaroid({
  src,
  alt,
  caption,
  rotate,
  tapeColor = "",
}: {
  src: string;
  alt: string;
  caption: string;
  rotate: string;
  tapeColor?: string;
}) {
  return (
    <div className="relative" style={{ transform: `rotate(${rotate})` }}>
      <span className={`tape ${tapeColor}`} style={{ top: -12, left: "50%", marginLeft: -45, transform: "rotate(-3deg)", zIndex: 2 }} />
      <div className="bg-paper p-3 pb-12 shadow-xl">
        <div className="relative aspect-square overflow-hidden">
          <Image src={src} alt={alt} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
        </div>
        <p className="absolute bottom-3 left-0 right-0 text-center font-display text-ink/80 text-base">
          {caption}
        </p>
      </div>
    </div>
  );
}

function TacoTuesdayBanner() {
  return (
    <section className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 paper-texture opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20 grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-accent text-xs font-bold">
            {tacoTuesday.headline}
          </p>
          <h2 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95]">
            Street tacos for{" "}
            <span className="text-accent">{tacoTuesday.price}</span>.<br />
            Every Tuesday. No catch.
          </h2>
          <p className="mt-5 text-white/85 text-lg max-w-lg">
            {tacoTuesday.subhead} Bring a friend, bring a few. Just leave room
            for one more.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent text-ink font-semibold px-7 py-3.5 hover:bg-yellow-300 transition"
            >
              Pull up Tuesday →
            </a>
            <a
              href={business.phoneHref}
              className="rounded-full border border-white/40 text-white px-7 py-3.5 font-semibold hover:bg-white/10 transition"
            >
              {business.phone}
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <span className="tape tape-cream" style={{ top: -10, left: 40, transform: "rotate(-6deg)", zIndex: 2 }} />
          <div className="bg-paper p-3 pb-10 shadow-2xl rotate-3">
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/taco-plate.jpg" alt="Street tacos at El Nopalito" fill loading="lazy" sizes="(max-width: 1024px) 50vw, 400px" className="object-cover" />
            </div>
            <p className="absolute bottom-2 left-0 right-0 text-center font-display text-ink/80 text-base">
              See you Tuesday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/storefront.jpg" alt="" fill loading="lazy" sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/65 to-ink/85" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 py-24 md:py-32 text-center text-cream">
        <p className="uppercase tracking-[0.25em] text-accent text-xs font-bold">
          Visit
        </p>
        <h2 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95]">
          Come hungry. Stay a minute.
        </h2>
        <p className="mt-5 text-cream/80 text-lg">
          {fullAddress} · {business.hours}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary text-white px-7 py-3.5 font-semibold hover:bg-primary-dark transition"
          >
            Get directions
          </a>
          <a
            href={business.phoneHref}
            className="rounded-full bg-cream text-ink px-7 py-3.5 font-semibold hover:bg-white transition"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
