import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { PersonCard } from '@grc/components/ui/person-card';
import { CtaBand } from '@grc/components/ui/cta-band';
import { administration } from '@grc/_shared/data/people';

export const metadata: Metadata = {
  title: 'Administration',
  description: 'The management team responsible for the day-to-day running of the Centre.',
};

export default function AdministrationPage() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Centre Administration"
        intro="The management team responsible for the direction, finances and daily operation of the Centre."
        breadcrumb={[{ label: 'Administration' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {administration.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>

          <div className="mt-20 border-t border-paper-edge pt-10">
            <Link href="/staff" className="link-underline inline-flex text-sm font-medium text-brand-700">
              See the full staff directory
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
