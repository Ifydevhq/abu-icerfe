import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { SectionLabel } from '@grc/components/ui/section-label';
import { site } from '@grc/_shared/data/site';
import { services } from '@grc/_shared/data/programmes';

export const Purpose = () => (
  <section className="py-20 md:py-28">
    <Container>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionLabel>What the Centre is for</SectionLabel>
          <h2 className="font-sans text-display font-semibold text-ink">
            A reference point for rural finance in Nigeria and beyond
          </h2>
          <p className="mt-6 text-ink-muted leading-relaxed">{site.vision}</p>
          <Link
            href="/about/history"
            className="link-underline mt-8 inline-flex text-sm font-medium text-brand-700"
          >
            Read our history
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="lg:col-span-7">
          <dl className="grid gap-px bg-paper-edge sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8">
                <dt className="font-sans text-lg font-semibold text-ink">{service.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-muted">{service.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Container>
  </section>
);
