import type { Metadata } from "next";
import Image from "next/image";
import { menu, tacoTuesday } from "@/lib/menu";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Menu · Tacos, Quesatacos, Birria & Quesadillas",
  description:
    "El Nopalito Taqueria menu: street tacos, quesatacos, birria tacos, and quesadillas. Taco Tuesday $1.99. Kiestwood Village, Oak Cliff, Dallas TX 75233.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20">
          <p className="uppercase tracking-widest text-primary text-xs font-bold">
            The menu
          </p>
          <h1 className="font-display text-5xl md:text-6xl mt-2 text-ink">
            Tacos, quesatacos, birria, quesadillas.
          </h1>
          <p className="mt-4 text-ink/70 text-lg max-w-2xl">
            Small menu on purpose. Every item is something we&apos;d serve our
            family. Prices may vary, call to confirm or pull up and ask.
          </p>
        </div>
      </section>

      {/* Taco Tuesday banner */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <span className="rounded-full bg-accent text-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            {tacoTuesday.headline}
          </span>
          <p className="font-display text-2xl md:text-3xl">
            Street tacos <span className="text-accent">{tacoTuesday.price}</span>{" "}
            every Tuesday.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20 grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          {menu.map((section) => (
            <div key={section.title} className="mb-12 last:mb-0">
              <h2 className="font-display text-3xl md:text-4xl text-ink border-b-2 border-primary/20 pb-3">
                {section.title}
              </h2>
              <ul className="mt-6 space-y-7">
                {section.items.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-semibold text-xl text-ink">
                        {item.name}
                      </h3>
                      {item.price && (
                        <span className="font-display text-xl text-primary">
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-ink/70 leading-relaxed">
                      {item.description}
                    </p>
                    {item.badge && (
                      <span className="mt-2 self-start rounded-full bg-accent/30 text-ink text-xs font-semibold px-3 py-1">
                        {item.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-sm text-ink/60 mt-8">
            Don&apos;t see something? Just ask. We&apos;ll make it happen if we
            can.
          </p>
        </div>

        <aside className="md:sticky md:top-24 md:self-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/inside-taco.jpg"
              alt="Tacos at El Nopalito"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-6 rounded-2xl bg-cream p-6 border border-ink/5">
            <h3 className="font-display text-2xl text-ink">Order in person</h3>
            <p className="mt-2 text-ink/70">
              We&apos;re dine-in and takeout only. Call ahead and we&apos;ll
              have it ready.
            </p>
            <a
              href={business.phoneHref}
              className="mt-4 inline-flex rounded-full bg-primary text-white px-5 py-3 font-semibold hover:bg-primary-dark"
            >
              Call {business.phone}
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
