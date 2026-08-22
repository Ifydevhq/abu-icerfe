import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { SectionLabel } from '@grc/components/ui/section-label';
import { Avatar } from '@grc/components/ui/avatar';
import { directorProfile } from '@grc/_shared/data/people';

export const DirectorNote = () => (
  <section className="py-20 md:py-28">
    <Container>
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Avatar name={directorProfile.name} photo={directorProfile.photo} size="lg" />
          <h3 className="mt-6 font-sans text-xl font-semibold text-ink">
            {directorProfile.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-brand-600">{directorProfile.role}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-ink-faint">
            {directorProfile.qualifications}
          </p>
        </div>

        <div className="lg:col-span-8">
          <SectionLabel>The Directorate</SectionLabel>
          {/* Paraphrased from the Centre's own account of its founding mandate —
              deliberately not presented as a personal quotation. */}
          <p className="font-sans text-title font-medium leading-snug text-ink">
            The Centre was founded to close a gap: a shortage of specialists with the
            skills and knowledge that rural finance in Nigeria requires.
          </p>
          <p className="mt-6 max-w-prose leading-relaxed text-ink-muted">
            {directorProfile.summary}
          </p>
          <Link
            href="/about/director"
            className="link-underline mt-8 inline-flex text-sm font-medium text-brand-700"
          >
            Read the full profile
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </Container>
  </section>
);
