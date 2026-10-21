import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { innovationHub } from '@grc/_shared/data/innovation-hub';
import { site } from '@grc/_shared/data/site';

/**
 * Closing call to action. Until the standalone Hub website is live, enquiries
 * route to the Centre's contact page; once `innovationHub.websiteUrl` is set,
 * a link to the Hub's own site appears here as well.
 */
export const HubClosing = () => (
  <section className="relative overflow-hidden bg-brand-900 text-white">
    <div className="grain absolute inset-0 opacity-50" aria-hidden />
    <Container size="wide" className="relative py-20 md:py-28">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold-400">
              <span className="h-px w-10 bg-gold-500" aria-hidden />
              Get involved
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 text-display font-semibold">
              Bring an idea, or help us back one
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-prose leading-relaxed text-brand-100">
              Founders can enquire about the next intake, and institutions, funders and
              companies can partner with the Hub on programmes, mentorship or finance. Write to{' '}
              <a href={`mailto:${site.emails[0]}`} className="link-underline text-white">
                {site.emails[0]}
              </a>{' '}
              or use the contact page.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220} className="lg:col-span-5">
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-brand-900 transition-colors duration-300 ease-subtle hover:bg-brand-50"
            >
              Contact the Hub
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            {innovationHub.websiteUrl ? (
              <a
                href={innovationHub.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-brand-500 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 ease-subtle hover:border-white"
              >
                Visit the Hub website
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            ) : (
              <Link
                href="/programmes"
                className="inline-flex items-center gap-2 border border-brand-500 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 ease-subtle hover:border-white"
              >
                ICERFE programmes
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);
