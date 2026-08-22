import type { Metadata } from 'next';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { PersonCard } from '@grc/components/ui/person-card';
import { CtaBand } from '@grc/components/ui/cta-band';
import { governingBoard } from '@grc/_shared/data/people';

export const metadata: Metadata = {
  title: 'Governing Board',
  description:
    'The Centre is overseen by a Governing Board chaired by the Vice-Chancellor of Ahmadu Bello University, Zaria.',
};

export default function GoverningBoardPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Governing Board"
        intro="Oversight of the Centre rests with a Board drawn from the principal officers of Ahmadu Bello University, chaired by the Vice-Chancellor."
        breadcrumb={[{ label: 'About', href: '/about' }, { label: 'Governing Board' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {governingBoard.map((member) => (
              <PersonCard key={member.name} person={member} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
