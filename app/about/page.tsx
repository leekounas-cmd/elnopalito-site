import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business, fullAddress } from "@/lib/business";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "About · Family Taqueria in Kiestwood Village",
  description:
    "El Nopalito Taqueria is a small, family-run taco spot in Kiestwood Village, Oak Cliff. Real recipes, fresh tortillas, and a menu that stays small on purpose.",
  alternates: { canonical: "/about" },
};

const subtext = "font-black uppercase tracking-[0.18em]";
const kicker = "font-black uppercase tracking-[0.32em]";
const overlayShadow = "[text-shadow:0_2px_24px_rgba(0,0,0,0.55)]";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Principles />
      <ClosingCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[90svh] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/images/storefront.jpg"
          alt="El Nopalito Taqueria storefront on W Kiest Blvd, Dallas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />

      <div className="relative h-full mx-auto max-w-6xl px-5 sm:px-6 flex flex-col items-center justify-center text-center text-cream">
        <p className={`animate-fade-up text-primary text-[11px] mb-5 ${kicker} [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]`}>
          Our story
        </p>
        <h1 className={`font-display lowercase leading-[0.86] text-[clamp(3.5rem,11vw,8.5rem)] ${overlayShadow}`}>
          <span className="block animate-fade-up delay-1">a family taqueria.</span>
          <span className="block mt-3 md:mt-5 text-primary animate-fade-up delay-2">on kiest blvd.</span>
        </h1>
        <p className={`animate-fade-up delay-3 mt-7 text-cream text-xs sm:text-sm ${subtext} [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]`}>
          Family Owned · Kiestwood Village
        </p>
      </div>
    </section>
  );
}

function Principles() {
  const items = [
    {
      kicker: "Real Recipes",
      body: "The kind we grew up on. No corners cut.",
    },
    {
      kicker: "Made by Hand",
      body: "Tortillas pressed every plate. Salsas from scratch.",
    },
    {
      kicker: "Slow & Steady",
      body: "Birria braised until it falls apart. Worth the wait.",
    },
  ];
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

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-24 md:py-36 text-center text-cream">
        <Reveal>
          <p className={`text-primary text-[11px] ${kicker} [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]`}>
            Why we&apos;re here
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className={`font-display lowercase mt-5 leading-[0.86] text-[clamp(3rem,9.5vw,7.5rem)] ${overlayShadow}`}>
            we make tacos like home.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.kicker} delay={200 + i * 120}>
              <div className="text-left md:text-center">
                <p className={`text-primary text-[11px] ${kicker} [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]`}>
                  {it.kicker}
                </p>
                <p className={`mt-3 text-cream text-base sm:text-lg ${subtext} [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]`}>
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28 text-center">
        <Reveal>
          <p className={`text-primary-dark text-[11px] ${kicker}`}>
            Come see us
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display lowercase mt-5 leading-[0.86] text-[clamp(3rem,9vw,7rem)] text-ink">
            come hungry.<br />tell a friend.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className={`mt-6 text-ink/75 text-sm ${subtext}`}>
            {fullAddress}
          </p>
          <p className={`mt-1 text-ink/60 text-[11px] ${kicker}`}>
            {business.hours}
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className={`rounded-md bg-primary text-ink px-8 py-4 text-sm shadow-xl shadow-black/20 hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300 ${subtext}`}
            >
              Get Directions
            </a>
            <Link
              href="/menu"
              className={`rounded-md bg-ink text-cream px-8 py-4 text-sm shadow-xl shadow-black/20 hover:bg-primary hover:text-ink hover:-translate-y-0.5 transition-all duration-300 ${subtext}`}
            >
              See the Menu
            </Link>
            <a
              href={business.phoneHref}
              className={`rounded-md bg-cream text-ink px-8 py-4 text-sm border-2 border-ink/15 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 ${subtext}`}
            >
              Call {business.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
