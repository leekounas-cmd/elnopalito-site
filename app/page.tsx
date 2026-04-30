import Image from "next/image";
import Link from "next/link";
import { business, fullAddress } from "@/lib/business";
import { tacoTuesday } from "@/lib/menu";
import { Reveal } from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <SimpleStatement />
      <TacoTuesday />
      <FollowAlong />
    </>
  );
}

const subtext = "font-black uppercase tracking-[0.18em]";
const kicker = "font-black uppercase tracking-[0.32em]";
const overlayShadow = "[text-shadow:0_2px_24px_rgba(0,0,0,0.55)]";

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/images/inside-taco.jpg"
          alt="A hand-pressed taco at El Nopalito Taqueria in Oak Cliff, Dallas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />

      <div className="relative h-full mx-auto max-w-6xl px-5 sm:px-6 flex flex-col items-center justify-center text-center text-cream">
        <span className={`animate-fade-up inline-flex items-center gap-2 bg-primary text-ink rounded-md px-4 py-1.5 text-[11px] mb-7 ${kicker}`}>
          <span className="size-1.5 rounded-full bg-ink animate-pulse-dot" />
          Now open · Oak Cliff
        </span>

        <h1 className={`font-display lowercase leading-[0.86] text-[clamp(3.5rem,12vw,9.5rem)] ${overlayShadow}`}>
          <span className="block animate-fade-up delay-1">small spot.</span>
          <span className="block mt-3 md:mt-5 text-primary animate-fade-up delay-2">
            family owned.
          </span>
        </h1>

        <p className={`animate-fade-up delay-3 mt-7 text-cream text-xs sm:text-sm ${subtext} [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]`}>
          2436 W Kiest Blvd · Oak Cliff
        </p>

        <div className="animate-fade-up delay-4 mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className={`rounded-md bg-primary text-ink px-8 py-4 text-sm shadow-2xl shadow-black/40 hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 ${subtext}`}
          >
            Get Directions
          </a>
          <a
            href={business.phoneHref}
            className={`rounded-md bg-cream text-ink px-8 py-4 text-sm shadow-xl shadow-black/30 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 ${subtext}`}
          >
            Call {business.phone}
          </a>
        </div>

        <p className={`animate-fade-up delay-4 mt-7 text-cream text-[11px] flex items-center gap-2 ${kicker} [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--primary)">
            <path d="M12 2l2.5 7h7.5l-6 4.5L18 21l-6-4.5L6 21l2-7.5L2 9h7.5z" />
          </svg>
          4.6 on Google · {business.hours}
        </p>
      </div>
    </section>
  );
}

function SimpleStatement() {
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
        <Reveal>
          <p className={`text-primary text-[11px] ${kicker} [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]`}>
            Our style
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className={`font-display lowercase mt-5 leading-[0.86] text-[clamp(3.5rem,11vw,8.5rem)] ${overlayShadow}`}>
            we keep it simple.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className={`mt-8 text-cream text-base sm:text-lg max-w-2xl mx-auto ${subtext} [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]`}>
            Flavorful tacos. Spicy salsas. No shortcuts.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/menu"
              className={`rounded-md bg-primary text-ink px-7 py-4 text-sm shadow-2xl shadow-black/40 hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 ${subtext}`}
            >
              See the Menu
            </Link>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className={`rounded-md bg-cream text-ink px-7 py-4 text-sm shadow-xl shadow-black/30 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 ${subtext}`}
            >
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TacoTuesday() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/salsa-tacos.jpg"
        alt="Three soft tacos with green and orange salsas at El Nopalito"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-28 md:py-40 text-center text-cream">
        <Reveal>
          <p className={`text-primary text-[11px] ${kicker} [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]`}>
            {tacoTuesday.headline}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className={`font-display lowercase mt-6 leading-[0.82] text-[clamp(4rem,17vw,13rem)] ${overlayShadow}`}>
            <span className="block">street tacos</span>
            <span className="block mt-2 md:mt-4 text-primary">
              {tacoTuesday.price}
            </span>
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <p className={`mt-7 text-cream text-base sm:text-lg ${subtext} [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]`}>
            Every Tuesday · No Catch
          </p>
        </Reveal>
        <Reveal delay={380}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className={`rounded-md bg-primary text-ink px-8 py-4 text-sm shadow-2xl shadow-black/40 hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 ${subtext}`}
            >
              Pull Up Tuesday
            </a>
            <a
              href={business.phoneHref}
              className={`rounded-md bg-cream text-ink px-8 py-4 text-sm shadow-xl shadow-black/30 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 ${subtext}`}
            >
              Call {business.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FollowAlong() {
  const tiles = [
    { src: "/images/quesataco.jpg", alt: "Quesataco close-up" },
    { src: "/images/salsa-tacos.jpg", alt: "Three salsa tacos" },
    { src: "/images/inside-taco.jpg", alt: "Hand-pressed taco" },
  ];
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-20 md:py-28 text-center">
        <Reveal>
          <p className={`text-primary-dark text-[11px] ${kicker}`}>
            Follow along
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display lowercase mt-5 leading-[0.86] text-[clamp(3rem,9vw,7rem)] text-ink">
            see what&apos;s coming out the kitchen.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-2 md:gap-3">
          {tiles.map((t, i) => (
            <Reveal key={t.src} delay={i * 120}>
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-square overflow-hidden bg-ink group"
                aria-label={`View ${t.alt} on Instagram`}
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 33vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <a
            href={business.instagram}
            target="_blank"
            rel="noreferrer"
            className={`mt-12 inline-flex items-center gap-3 rounded-md bg-ink text-cream px-8 py-4 text-sm hover:bg-primary hover:text-ink hover:-translate-y-0.5 transition-all duration-300 ${subtext}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Follow {business.instagramHandle}
          </a>
        </Reveal>

        <p className={`mt-6 text-ink/70 text-[11px] ${kicker}`}>
          {fullAddress}
        </p>
      </div>
    </section>
  );
}
