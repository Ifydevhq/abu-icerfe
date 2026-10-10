import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';

/**
 * Homepage-only closing panel. The shared <CtaBand /> still serves every other
 * page unchanged — this one is darker and full-bleed so the homepage ends on a
 * deliberate note rather than the same soft-grey band the interior pages use.
 */
export const ClosingCta = () => (
  <section className="relative isolate overflow-hidden bg-brand-900 text-white">
    <div className="grain absolute inset-0 -z-10 opacity-40" aria-hidden />
    <div
      className="absolute inset-y-0 right-0 -z-10 w-1/2 opacity-[0.06]"
      aria-hidden
      style={{
        backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 16px)',
      }}
    />

    <Container size="wide" className="py-20 md:py-28">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <Reveal>
            <span className="block h-px w-10 bg-gold-500" aria-hidden />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 text-display font-semibold">Work with the Centre</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-brand-100">
              We deliver training, consultancy and applied research for rural financial
              institutions, government and enterprises across Nigeria.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-white px-7 py-4 text-sm font-medium text-brand-900 transition-colors duration-300 ease-subtle hover:bg-brand-50"
            >
              Get in touch
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2.5 border border-brand-600 px-7 py-4 text-sm font-medium text-white transition-colors duration-300 ease-subtle hover:border-brand-400 hover:bg-brand-800"
            >
              View programmes
            </Link>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
