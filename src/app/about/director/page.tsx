import type { Metadata } from 'next';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { SectionLabel } from '@grc/components/ui/section-label';
import { Avatar } from '@grc/components/ui/avatar';
import { CtaBand } from '@grc/components/ui/cta-band';
import { directorProfile } from '@grc/_shared/data/people';

export const metadata: Metadata = {
  title: "Director's Office",
  description: directorProfile.summary,
};

export default function DirectorPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Director's Office"
        intro={directorProfile.summary}
        breadcrumb={[{ label: 'About', href: '/about' }, { label: 'Director' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Avatar name={directorProfile.name} photo={directorProfile.photo} size="lg" />
                <h2 className="mt-6 font-sans text-2xl font-semibold leading-snug text-ink">
                  {directorProfile.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-brand-600">{directorProfile.role}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-ink-faint">
                  {directorProfile.qualifications}
                </p>

                {directorProfile.focus.length > 0 && (
                  <>
                    <h3 className="mt-10 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-faint">
                      Areas of focus
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                      {directorProfile.focus.map((area) => (
                        <li key={area} className="flex gap-3">
                          <span className="mt-2 h-px w-3 shrink-0 bg-gold-500" aria-hidden />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </aside>

            <div className="lg:col-span-8">
              <SectionLabel>Profile</SectionLabel>
              <div className="space-y-6">
                {directorProfile.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="max-w-prose leading-relaxed text-ink-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              <h3 className="mt-16 font-sans text-title font-semibold text-ink">Education</h3>
              <ul className="mt-8 divide-y divide-paper-edge border-y border-paper-edge">
                {directorProfile.education.map((entry) => (
                  <li key={entry.qualification} className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-10">
                    {entry.period && (
                      <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-ink-faint sm:w-32 sm:pt-1">
                        {entry.period}
                      </span>
                    )}
                    <span>
                      <span className="block font-sans text-lg font-semibold text-ink">
                        {entry.qualification}
                      </span>
                      <span className="mt-1 block text-sm text-ink-muted">{entry.institution}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
