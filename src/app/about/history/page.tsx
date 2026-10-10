import type { Metadata } from 'next';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { CtaBand } from '@grc/components/ui/cta-band';
import { milestones } from '@grc/_shared/data/history';

export const metadata: Metadata = {
  title: 'History',
  description:
    'From an $850,000 MacArthur Foundation grant to postgraduate programmes, a green building and Nigeria’s first Improved Rocket Baker’s Oven.',
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="History of the Centre"
        intro="What began as a MacArthur Foundation grant has become a working centre for teaching, research and enterprise development in rural finance."
        breadcrumb={[{ label: 'About', href: '/about' }, { label: 'History' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          {/* The "In brief" figures were removed at the Centre's request. Every
              one of them is still stated in the milestone entries below, so the
              page loses no information. */}
          <ol className="relative space-y-12 border-l border-paper-edge pl-8">
            {milestones.map((milestone) => (
              <li key={milestone.title} className="relative">
                <span
                  className="absolute -left-[2.15rem] top-2 h-2 w-2 rounded-full bg-gold-500 ring-4 ring-white"
                  aria-hidden
                />
                <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">
                  {milestone.year}
                </p>
                <h2 className="mt-2 font-sans text-xl font-semibold leading-snug text-ink">
                  {milestone.title}
                </h2>
                <p className="mt-3 max-w-prose leading-relaxed text-ink-muted">
                  {milestone.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-14 max-w-prose border-l-2 border-brand-200 pl-6 font-sans text-lg italic leading-relaxed text-ink-muted">
            The Centre&apos;s stated aim is not only to catch up with well-established centres
            in other Nigerian universities, but to become one of the best in the country.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
