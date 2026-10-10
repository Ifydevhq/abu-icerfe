import type { Metadata } from 'next';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { StaffCard } from '@grc/components/ui/staff-card';
import { CtaBand } from '@grc/components/ui/cta-band';
import { staffGroups } from '@grc/_shared/data/people';

export const metadata: Metadata = {
  title: 'Staff Directory',
  description: 'Academic, administrative and technical staff of the Centre.',
};

const headcount = staffGroups.reduce((total, group) => total + group.members.length, 0);

export default function StaffPage() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Staff Directory"
        intro="Academic, administrative and technical staff across the Centre's leadership, teaching, registry, finance, library and operations functions."
        breadcrumb={[{ label: 'Staff' }]}
      />

      <div className="py-20 md:py-28">
        <Container size="wide">
          {/* A short index at the top — the directory runs long enough that
              jumping to a function is quicker than scrolling for it. */}
          <nav aria-label="Staff sections" className="border-y border-paper-edge py-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-faint">
                {headcount} staff
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {staffGroups.map((group) => (
                  <li key={group.title}>
                    <a
                      href={`#${slug(group.title)}`}
                      className="link-underline text-sm font-medium text-brand-700"
                    >
                      {group.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="space-y-20 md:space-y-24">
            {staffGroups.map((group) => (
              <section key={group.title} id={slug(group.title)} className="scroll-mt-28 pt-16">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <span className="block h-px w-10 bg-gold-500" aria-hidden />
                    <h2 className="mt-5 text-title font-semibold text-ink">{group.title}</h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{group.blurb}</p>
                  </div>
                  <p className="shrink-0 text-xs uppercase tracking-[0.14em] text-ink-faint">
                    {group.members.length}{' '}
                    {group.members.length === 1 ? 'member' : 'members'}
                  </p>
                </div>

                <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.members.map((member) => (
                    <li key={member.name}>
                      <StaffCard person={member} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </div>

      <CtaBand />
    </>
  );
}

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
