import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { enterprises } from '@grc/_shared/data/programmes';

/**
 * The Centre's production lines, which until now only appeared on /programmes.
 * Every claim here is the Centre's own: the three lines come from the
 * programmes data, and the oven note is taken from the history milestones.
 */
export const EnterpriseLines = () => (
  <section className="py-24 md:py-32">
    <Container size="wide">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink-faint">
              <span className="h-px w-10 bg-gold-500" aria-hidden />
              Innovation &amp; enterprise
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 text-display font-semibold text-ink">
              Training that produces real products
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-7 max-w-prose leading-relaxed text-ink-muted">
              The Centre&apos;s skill acquisition training runs through working production
              lines on campus — students and trainees learn by making and selling.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <Link
              href="/programmes"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-brand-700"
            >
              <span className="link-underline">Programmes and services</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-px bg-paper-edge sm:grid-cols-3">
            {enterprises.map((enterprise, index) => (
              <Reveal as="li" key={enterprise.name} delay={index * 90}>
                <div className="group flex h-full flex-col bg-white p-7 transition-colors duration-300 ease-subtle hover:bg-paper-soft">
                  <span
                    className="block h-px w-8 bg-gold-500 transition-all duration-500 ease-subtle group-hover:w-16"
                    aria-hidden
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-ink">
                    {enterprise.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{enterprise.note}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          {/* Documented in the Centre's history: first of its kind in Nigeria. */}
          <Reveal delay={300}>
            <div className="mt-6 border-l-2 border-brand-200 bg-paper-soft py-6 pl-6 pr-7">
              <p className="max-w-prose text-sm leading-relaxed text-ink-muted">
                The bakery runs on the first{' '}
                <span className="font-medium text-ink">
                  Improved Rocket Baker&apos;s Oven built in Nigeria
                </span>{' '}
                — adopted from Uganda with a ₦1 million grant from Heinrich Böll Stiftung
                Nigeria.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  </section>
);
