import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { site } from '@grc/_shared/data/site';

/**
 * Full-bleed impact band. Sits between the Directorate and the news list, where
 * the page needs a change of register before it moves into updates.
 *
 * The supporting copy is the Centre's own mission statement rather than written
 * for the section, and no figures are quoted here — the masthead already
 * carries those, and repeating them would weaken both.
 */
export const ImpactBand = () => (
  <section className="relative isolate overflow-hidden bg-brand-900 text-white">
    <div className="absolute inset-0 -z-10" aria-hidden>
      <Image
        src="/people/abu_icerfe_group_image_1.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="img-drift object-cover object-[center_40%]"
      />
      {/* Flat 90% wash holds the whole band at an even darkness — the
          photograph stays perceptible but never competes. A second pass
          deepens the left, where the type sits. */}
      <div className="absolute inset-0 bg-brand-900/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/60 via-transparent to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 16px)',
        }}
      />
      <div className="grain absolute inset-0 opacity-40" />
    </div>

    <Container size="wide" className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-3xl">
        <Reveal>
          <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold-400">
            <span className="h-px w-10 bg-gold-500" aria-hidden />
            Research with impact
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="mt-7 text-display font-semibold">
            Knowledge created here, applied in the field
          </h2>
        </Reveal>

        <Reveal delay={170}>
          <p className="mt-7 max-w-prose text-lg leading-relaxed text-brand-100">
            {site.mission}
          </p>
        </Reveal>

        <Reveal delay={250}>
          <Link
            href="/about/history"
            className="group mt-10 inline-flex items-center gap-2.5 border border-brand-500 px-7 py-4 text-sm font-medium text-white transition-colors duration-300 ease-subtle hover:border-white hover:bg-white hover:text-brand-900"
          >
            See what the Centre has built
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Reveal>
      </div>
    </Container>
  </section>
);
