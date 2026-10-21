import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { innovationHub } from '@grc/_shared/data/innovation-hub';
import { site } from '@grc/_shared/data/site';

/**
 * Opening band for the Innovation Hub. Uses the PageHeader ground (brand-900,
 * grain, diagonal hairlines) so the page sits with the other interior pages,
 * but carries a photograph and actions because it doubles as the Hub's
 * landing page until its standalone site exists.
 */
export const HubMasthead = () => (
  <header className="relative overflow-hidden bg-brand-900 text-white">
    <div className="grain absolute inset-0 opacity-60" aria-hidden />
    <div
      className="absolute inset-y-0 right-0 w-1/2 opacity-[0.07]"
      aria-hidden
      style={{
        backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 14px)',
      }}
    />

    <Container size="wide" className="relative py-16 md:py-24">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-200">
          <li>
            <Link href="/" className="link-underline hover:text-white">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-brand-400" aria-hidden />
            <span className="text-white">Innovation Hub</span>
          </li>
        </ol>
      </nav>

      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold-400">
              {site.name} · {site.parent}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-display-lg font-semibold">{innovationHub.name}</h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 text-title font-medium text-brand-100">{innovationHub.tagline}</p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-prose leading-relaxed text-brand-100">{innovationHub.intro}</p>
          </Reveal>

          <Reveal delay={290}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-brand-900 transition-colors duration-300 ease-subtle hover:bg-brand-50"
              >
                Apply or enquire
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
                <a
                  href="#programmes"
                  className="inline-flex items-center gap-2 border border-brand-500 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 ease-subtle hover:border-white"
                >
                  What the Hub offers
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal variant="panel" delay={200}>
            <div className="relative">
              <div
                className="absolute -bottom-4 -right-4 hidden h-full w-full border border-gold-500/60 sm:block"
                aria-hidden
              />
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-800">
                <Image
                  src={innovationHub.images.hero}
                  alt="A presentation session at the ICERFE Innovation Hub"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  </header>
);
