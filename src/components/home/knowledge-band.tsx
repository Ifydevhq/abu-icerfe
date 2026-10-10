import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { site } from '@grc/_shared/data/site';

/**
 * Surfaces two things the Centre produces that the homepage never showed: its
 * journal, which previously only existed as a nav link, and the postgraduate
 * curriculum developed with the Carsey Institute. Both are documented.
 */
export const KnowledgeBand = () => (
  <section className="border-y border-paper-edge bg-paper-soft py-20 md:py-24">
    <Container size="wide">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink-faint">
              <span className="h-px w-10 bg-gold-500" aria-hidden />
              Research &amp; knowledge
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-title font-semibold text-ink">
              Creating and disseminating practical knowledge
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal variant="panel" delay={120}>
          <a
            href={site.journalUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full flex-col border border-paper-edge bg-white p-8 transition-all duration-500 ease-subtle hover:border-brand-300 hover:shadow-card md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">Peer-reviewed</p>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-ink transition-colors duration-300 ease-subtle group-hover:text-brand-700">
              Nigerian Journal of Rural Finance &amp; Entrepreneurship
            </h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
              The Centre&apos;s journal, published through Ahmadu Bello University.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
              <span className="link-underline">Visit the journal</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </span>
          </a>
        </Reveal>

        <Reveal variant="panel" delay={210}>
          <Link
            href="/programmes"
            className="group flex h-full flex-col border border-paper-edge bg-white p-8 transition-all duration-500 ease-subtle hover:border-brand-300 hover:shadow-card md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">
              Curriculum development
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-ink transition-colors duration-300 ease-subtle group-hover:text-brand-700">
              Built with the Carsey Institute, University of New Hampshire
            </h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
              A modular course structure for the Centre&apos;s M.Sc. in Rural Finance and
              Entrepreneurship and its blended-learning professional Master programme.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
              <span className="link-underline">See the programmes</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </Link>
        </Reveal>
      </div>
    </Container>
  </section>
);
