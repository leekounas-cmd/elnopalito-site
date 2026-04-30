import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "About · Family Taqueria in Kiestwood Village",
  description:
    "El Nopalito Taqueria is a small, family-run taco spot in Kiestwood Village, Oak Cliff. Real recipes, fresh tortillas, and a menu that stays small on purpose.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream pt-16 md:pt-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="uppercase tracking-widest text-primary text-xs font-bold">
              Our story
            </p>
            <h1 className="font-display text-5xl md:text-6xl mt-2 text-ink leading-[1.05]">
              A family taqueria, finding its neighborhood.
            </h1>
            <p className="mt-5 text-ink/75 text-lg leading-relaxed">
              El Nopalito is a small, new spot on W Kiest Blvd in Oak Cliff. We
              opened to serve the kind of tacos we grew up on: pressed
              tortillas, real salsas, slow-braised meats. No shortcuts.
            </p>
            <p className="mt-4 text-ink/75 text-lg leading-relaxed">
              We&apos;re still building word of mouth. Every plate that goes out
              is a chance to earn a regular. If you find us, tell a friend.
            </p>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/storefront.jpg"
              alt={`${business.name} storefront on W Kiest Blvd, Dallas`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <Block
            kicker="The cooking"
            title="Real recipes, no shortcuts."
            body="Tortillas pressed in-house. Salsas from scratch. Birria braised low and slow until it falls apart. The way it should be."
          />
          <Block
            kicker="The menu"
            title="Small on purpose."
            body="Tacos, quesatacos, birria, quesadillas. We&rsquo;d rather do four things great than forty things fine."
          />
          <Block
            kicker="The neighborhood"
            title="Built for Oak Cliff."
            body="We&rsquo;re proud to be in Kiestwood Village. Whether you&rsquo;re from southwest Dallas, Duncanville, or just driving by, pull up."
          />
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-accent">
            Come hungry.
          </h2>
          <p className="mt-4 text-cream/80 max-w-xl mx-auto">
            We&apos;re at {fullAddress}. {business.hours}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-primary px-7 py-3.5 font-semibold text-white hover:bg-primary-dark"
            >
              See the menu
            </Link>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cream text-ink px-7 py-3.5 font-semibold hover:bg-white"
            >
              Get directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <p className="uppercase tracking-widest text-primary text-xs font-bold">
        {kicker}
      </p>
      <h3 className="font-display text-3xl mt-2 text-ink">{title}</h3>
      <p
        className="mt-3 text-ink/70 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
