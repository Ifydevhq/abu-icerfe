import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { directorProfile } from '@grc/_shared/data/people';

/**
 * Offset composition: the portrait sits in a tall frame that overlaps a soft
 * panel behind it, so the block has depth instead of being another two-column
 * row of text beside a circular avatar.
 */
export const Directorate = () => (
  <section className="relative pb-24 md:pb-36">
    <Container size="wide">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal variant="panel" className="lg:col-span-5">
          <figure className="relative">
            {/* Offset backing plate — gives the portrait somewhere to sit. */}
            <div
              className="absolute -bottom-5 -left-5 h-full w-full border border-paper-edge bg-paper-soft"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-50">
              <Image
                src={directorProfile.photo}
                alt={directorProfile.name}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </figure>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink-faint">
              <span className="h-px w-10 bg-gold-500" aria-hidden />
              The Directorate
            </p>
          </Reveal>

          {/* Paraphrased from the Centre's own account of its founding mandate —
              deliberately not presented as a personal quotation. */}
          <Reveal delay={90}>
            <p className="mt-7 text-display font-medium leading-tight text-ink">
              The Centre was founded to close a gap: a shortage of specialists with the
              skills and knowledge that rural finance in Nigeria requires.
            </p>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-8 max-w-prose leading-relaxed text-ink-muted">
              {directorProfile.summary}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-paper-edge pt-7">
              <div>
                <p className="text-lg font-semibold text-ink">{directorProfile.name}</p>
                <p className="mt-1 text-sm font-medium text-brand-600">{directorProfile.role}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-ink-faint">
                  {directorProfile.qualifications}
                </p>
              </div>
              <Link
                href="/about/director"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-700"
              >
                <span className="link-underline">Read the full profile</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
);
