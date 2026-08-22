import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { SectionLabel } from '@grc/components/ui/section-label';
import { CtaBand } from '@grc/components/ui/cta-band';
import { programmes, services, enterprises } from '@grc/_shared/data/programmes';
import { site } from '@grc/_shared/data/site';

export const metadata: Metadata = {
  title: 'Programmes',
  description:
    'Postgraduate and professional programmes in rural finance and entrepreneurship, plus training, consultancy and enterprise development services.',
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Study & train"
        title="Programmes and services"
        intro="Postgraduate awards, professional training and consultancy — built on the Centre's research and delivered with international academic partners."
        breadcrumb={[{ label: 'Programmes' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionLabel>Postgraduate & professional awards</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-2">
            {programmes.map((programme) => (
              <article key={programme.title} className="flex flex-col border border-paper-edge p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.14em] text-ink-faint">
                  {programme.level}
                </p>
                <h2 className="mt-3 font-sans text-2xl font-semibold leading-snug text-ink">
                  {programme.title}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-muted">{programme.summary}</p>
                <ul className="mt-8 space-y-3 border-t border-paper-edge pt-6 text-sm text-ink-muted">
                  {programme.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-gold-500" aria-hidden />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 border border-paper-edge bg-paper-soft p-8">
            <h2 className="font-sans text-lg font-semibold text-ink">Further awards</h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted">
              The Centre has developed additional postgraduate and diploma awards in rural
              finance and entrepreneurship. Details and admission requirements are published
              as each intake opens — contact the Centre for the current position.
            </p>
            <Link href="/contact" className="link-underline mt-5 inline-flex text-sm font-medium text-brand-700">
              Enquire about admissions
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-paper-edge bg-paper-soft py-20 md:py-28">
        <Container>
          <SectionLabel>Training, consultancy & support</SectionLabel>
          <dl className="grid gap-px bg-paper-edge sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="bg-paper-soft p-8">
                <dt className="font-sans text-lg font-semibold text-ink">{service.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-muted">{service.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionLabel>Enterprise laboratory</SectionLabel>
              <h2 className="font-sans text-display font-semibold text-ink">
                Training that produces real products
              </h2>
              <p className="mt-6 max-w-prose leading-relaxed text-ink-muted">
                The Centre&apos;s skill acquisition training runs through working production
                lines on campus — students and trainees learn by making and selling.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-paper-edge border-y border-paper-edge">
                {enterprises.map((enterprise) => (
                  <li key={enterprise.name} className="py-6">
                    <h3 className="font-sans text-lg font-semibold text-ink">{enterprise.name}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted">{enterprise.note}</p>
                  </li>
                ))}
              </ul>
              <a
                href={site.journalUrl}
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-8 inline-flex text-sm font-medium text-brand-700"
              >
                Nigerian Journal of Rural Finance &amp; Entrepreneurship
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
