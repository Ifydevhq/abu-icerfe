import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { site } from '@grc/_shared/data/site';
import { services } from '@grc/_shared/data/programmes';

/**
 * The four services were a 2x2 grid of equal boxes — the same treatment used by
 * three other blocks on the old page. As numbered rows against a sticky
 * statement column they read as an index, which gives the section its own shape.
 */
export const Mandate = () => (
  <section className="py-24 md:py-36">
    <Container size="wide">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink-faint">
                <span className="h-px w-10 bg-gold-500" aria-hidden />
                What the Centre is for
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 text-display font-semibold text-ink">
                A reference point for rural finance in Nigeria and beyond
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 max-w-prose leading-relaxed text-ink-muted">{site.vision}</p>
            </Reveal>
            <Reveal delay={220}>
              <Link
                href="/about/history"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-brand-700"
              >
                <span className="link-underline">Read our history</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ol className="border-t border-paper-edge">
            {services.map((service, index) => (
              <Reveal as="li" key={service.title} delay={index * 90}>
                <div className="group grid grid-cols-[auto_1fr] gap-6 border-b border-paper-edge py-8 transition-colors duration-300 ease-subtle hover:bg-paper-soft md:gap-10 md:py-10">
                  <span
                    className="pt-1 text-sm font-medium tabular-nums text-ink-faint transition-colors duration-300 ease-subtle group-hover:text-gold-600"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-ink md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-prose leading-relaxed text-ink-muted">
                      {service.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Container>
  </section>
);
