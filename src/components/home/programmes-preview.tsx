import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { SectionLabel } from '@grc/components/ui/section-label';
import { programmes } from '@grc/_shared/data/programmes';

export const ProgrammesPreview = () => (
  <section className="border-y border-paper-edge bg-paper-soft py-20 md:py-28">
    <Container>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <SectionLabel>Study with us</SectionLabel>
          <h2 className="font-sans text-display font-semibold text-ink">
            Postgraduate programmes
          </h2>
        </div>
        <Link
          href="/programmes"
          className="link-underline inline-flex text-sm font-medium text-brand-700"
        >
          All programmes
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {programmes.map((programme) => (
          <article
            key={programme.title}
            className="group flex flex-col border border-paper-edge bg-white p-8 transition-shadow duration-300 ease-subtle hover:shadow-card md:p-10"
          >
            <GraduationCap className="h-6 w-6 text-brand-600" aria-hidden />
            <p className="mt-6 text-xs uppercase tracking-[0.14em] text-ink-faint">
              {programme.level}
            </p>
            <h3 className="mt-3 font-sans text-xl font-semibold leading-snug text-ink">
              {programme.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
              {programme.summary}
            </p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
