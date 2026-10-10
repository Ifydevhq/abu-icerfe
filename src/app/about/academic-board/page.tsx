import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { SectionLabel } from '@grc/components/ui/section-label';
import { CtaBand } from '@grc/components/ui/cta-band';

export const metadata: Metadata = {
  title: 'Professional & Academic Board',
  description:
    'The Board that sets academic direction for the Centre’s postgraduate and professional programmes.',
};

const remit = [
  {
    title: 'Academic direction',
    body: 'Approves the structure and content of the Centre’s postgraduate and professional programmes, and reviews them against practice in rural finance.',
  },
  {
    title: 'Standards and assessment',
    body: 'Maintains academic standards across teaching, assessment and the award of the Centre’s qualifications.',
  },
  {
    title: 'Research direction',
    body: 'Guides the Centre’s research priorities and its contribution to the Nigerian Journal of Rural Finance and Entrepreneurship.',
  },
  {
    title: 'Professional linkage',
    body: 'Connects the Centre’s academic work to the microfinance institutions, cooperatives and enterprises it is designed to serve.',
  },
];

export default function AcademicBoardPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Professional & Academic Board"
        intro="The Board sets the academic direction of the Centre's programmes and connects its teaching and research to professional practice in rural finance."
        breadcrumb={[{ label: 'About', href: '/about' }, { label: 'Academic Board' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionLabel>Remit</SectionLabel>
          <dl className="grid gap-px bg-paper-edge sm:grid-cols-2">
            {remit.map((item) => (
              <div key={item.title} className="bg-white p-8">
                <dt className="font-sans text-lg font-semibold text-ink">{item.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</dd>
              </div>
            ))}
          </dl>

          {/* The Centre's published membership listing for this Board duplicated the
              Governing Board, so no membership is asserted here. */}
          <div className="mt-16 border border-paper-edge bg-paper-soft p-8 md:p-10">
            <h2 className="font-sans text-lg font-semibold text-ink">Board membership</h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted">
              The current membership of the Professional &amp; Academic Board is being
              confirmed for publication. For enquiries about the Board or its work,
              please contact the Centre directly.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="link-underline inline-flex text-sm font-medium text-brand-700"
              >
                Contact the Centre
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
