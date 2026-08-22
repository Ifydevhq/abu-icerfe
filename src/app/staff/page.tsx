import type { Metadata } from 'next';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { PersonCard } from '@grc/components/ui/person-card';
import { CtaBand } from '@grc/components/ui/cta-band';
import { staffGroups } from '@grc/_shared/data/people';

export const metadata: Metadata = {
  title: 'Staff Directory',
  description: 'Academic, administrative and technical staff of the Centre.',
};

export default function StaffPage() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Staff Directory"
        intro="Academic, administrative and technical staff across the Centre's directorate, finance, training, library and operations functions."
        breadcrumb={[{ label: 'Staff' }]}
      />

      <div className="py-20 md:py-28">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {staffGroups.map((group) => (
              <section key={group.title}>
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-3">
                    <div className="lg:sticky lg:top-28">
                      <h2 className="font-sans text-xl font-semibold text-ink">{group.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{group.blurb}</p>
                    </div>
                  </div>
                  <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
                    {group.members.map((member) => (
                      <PersonCard key={member.name} person={member} />
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </Container>
      </div>

      <CtaBand />
    </>
  );
}
