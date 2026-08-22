import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { SectionLabel } from '@grc/components/ui/section-label';
import { CtaBand } from '@grc/components/ui/cta-band';
import { site, navigation } from '@grc/_shared/data/site';

export const metadata: Metadata = {
  title: 'About',
  description: site.vision,
};

const sections = navigation.find((item) => item.label === 'About')?.children ?? [];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Centre"
        title="A centre of excellence for rural finance and entrepreneurship"
        intro={site.mission}
        breadcrumb={[{ label: 'About' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionLabel>Vision</SectionLabel>
              <p className="font-sans text-title font-medium leading-snug text-ink">
                {site.vision}
              </p>
            </div>
            <div className="lg:col-span-7">
              <SectionLabel>Mission</SectionLabel>
              <p className="max-w-prose leading-relaxed text-ink-muted">{site.mission}</p>
              <p className="mt-6 max-w-prose leading-relaxed text-ink-muted">
                The Centre sits within {site.parent}, drawing on the University&apos;s academic
                base while working directly with the rural financial institutions,
                entrepreneurs and government bodies its research is meant to serve.
              </p>
            </div>
          </div>

          <ul className="mt-20 grid gap-px bg-paper-edge md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <li key={section.href}>
                <Link
                  href={section.href}
                  className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 ease-subtle hover:bg-paper-soft"
                >
                  <h2 className="font-sans text-lg font-semibold text-ink">{section.label}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {section.description}
                  </p>
                  <ArrowRight
                    className="mt-6 h-4 w-4 text-brand-600 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
