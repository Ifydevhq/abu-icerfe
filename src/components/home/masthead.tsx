import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@grc/components/ui/container";
import { Reveal } from "@grc/components/ui/reveal";
import { site } from "@grc/_shared/data/site";
import { stats } from "@grc/_shared/data/history";

/**
 * The masthead collage. Tiles are placed as percentages of a square box so the
 * arrangement holds its proportions at every width from `lg` up.
 */
const HERO_TILES = [
  {
    src: "/images/abu-icerfe-event-pic-7.jpeg",
    alt: "A seminar in progress at the Centre",
    box: { left: "0%", top: "10%", width: "80%", height: "80%" },
    delay: 120,
  },
  // {
  //   src: "/images/abu-icerfe-event-pic-3.jpeg",
  //   alt: "Participants at an ICERFE training session",
  //   // Largest — anchors the cluster.
  //   box: { right: "0%", top: "16%", width: "54%", height: "68%" },
  //   delay: 210,
  // },
  // {
  //   src: "/images/abu-icerfe-event-pic-1.jpeg",
  //   alt: "An ICERFE event on the Samaru campus",
  //   box: { left: "5%", bottom: "10%", width: "44%", height: "44%" },
  //   delay: 300,
  // },
] as const;

/**
 * Set SHOW_HERO_IMAGE=true in .env to show the masthead collage; any other
 * value (or no value) hides it and the headline column takes the full width.
 *
 * The collage is shown from `lg` up only — on phones and tablets the hero is
 * type-only, so the headline and actions are reachable without scrolling.
 *
 * This is read on the server at build time, so it never reaches the browser
 * bundle — but it also means a change needs a rebuild to take effect, since
 * every page here is statically prerendered.
 */
const showHeroImage = process.env.SHOW_HERO_IMAGE?.trim().toLowerCase() === "true";

/**
 * Type-led masthead with a photograph bleeding off the right edge of the
 * viewport, and the Centre's key figures closing the column beneath a hairline.
 *
 * The photograph is positioned against the section rather than the container so
 * it can run to the true page edge; the content column is capped at 46% of the
 * container so it never slides underneath it at any width from `lg` up.
 */
export const Masthead = () => (
  <section className="relative isolate overflow-hidden bg-brand-900 text-white">
    {/* The Centre's own building, well below the threshold of attention — it
        gives the ground texture and a sense of place. Decorative, hence alt="". */}
    <div className="absolute inset-0 -z-10" aria-hidden>
      <div className="absolute inset-0 bg-brand-900" />
      {/* <Image
        src="/images/campus.png"
        alt=""
        fill
        sizes="100vw"
        className="img-drift object-cover opacity-[0.14]"
      /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/80 to-brand-900/40" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 16px)",
        }}
      />
      <div className="grain absolute inset-0 opacity-40" />
    </div>

    {/* Wide screens: a staggered collage of three photographs from the
        Centre's own events, offset against each other rather than set in a
        row so the cluster reads as one composition. */}
    {showHeroImage && (
      <div className="pointer-events-none absolute left-[calc(50%+40px)] right-6 top-1/2 hidden max-w-[700px] -translate-y-1/2 lg:block xl:right-10">
        <div className="relative aspect-square">
          {HERO_TILES.map((tile) => (
            <Reveal
              key={tile.src}
              variant="panel"
              delay={tile.delay}
              className="absolute"
              style={tile.box}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-lift">
                <Image
                  src={tile.src}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 22vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}

          {/* One quiet accent, echoing the gold hairline used elsewhere. */}
          <span
            aria-hidden
            className="absolute -right-2 top-[6%] h-14 w-14 rounded-full border border-gold-500/40"
          />
        </div>
      </div>
    )}

    <Container size="wide" className="relative py-16 md:py-20 lg:py-24">
      <div className={showHeroImage ? "lg:w-[calc(50%-20px)]" : "lg:max-w-4xl"}>
        <Reveal>
          <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold-400">
            <span className="h-px w-10 bg-gold-500" aria-hidden />
            {site.parent}
          </p>
        </Reveal>

        <h1 className="mt-7 text-[clamp(2.25rem,3.4vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          <Reveal delay={90}>
            <span className="block">Rural finance and</span>
          </Reveal>
          <Reveal delay={160}>
            <span className="block">entrepreneurship,</span>
          </Reveal>
          <Reveal delay={230}>
            <span className="block text-brand-200">
              studied and put to work.
            </span>
          </Reveal>
        </h1>

        <Reveal delay={320}>
          <p className="mt-7 max-w-prose leading-relaxed text-brand-100">
            {site.fullName} builds the expertise that rural financial
            institutions and entrepreneurs need — through teaching, applied
            research, training and business support services.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/programmes"
              className="group inline-flex items-center gap-2.5 bg-white px-7 py-4 text-sm font-medium text-brand-900 transition-colors duration-300 ease-subtle hover:bg-brand-50"
            >
              Explore programmes
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link
              href="/about/history"
              className="group inline-flex items-center gap-2.5 border border-brand-600 px-7 py-4 text-sm font-medium text-white transition-colors duration-300 ease-subtle hover:border-brand-400 hover:bg-brand-800"
            >
              About the Centre
              <ArrowRight
                className="h-4 w-4 text-brand-300 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </Reveal>


        <Reveal delay={480}>
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-brand-700/70 pt-7 lg:grid-cols-4 lg:gap-x-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold leading-none text-white md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-2.5 max-w-[20ch] text-xs leading-relaxed text-brand-200">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Container>
  </section>
);
