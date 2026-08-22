import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from './container';

export const CtaBand = () => (
  <section className="border-t border-paper-edge bg-paper-soft">
    <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
      <div className="max-w-xl">
        <h2 className="font-sans text-title font-semibold text-ink">
          Work with the Centre
        </h2>
        <p className="mt-3 text-ink-muted">
          We deliver training, consultancy and applied research for rural financial
          institutions, government and enterprises across Nigeria.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-brand-700 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 ease-subtle hover:bg-brand-800"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link
          href="/programmes"
          className="inline-flex items-center gap-2 border border-paper-edge bg-white px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 ease-subtle hover:border-brand-300 hover:text-brand-700"
        >
          View programmes
        </Link>
      </div>
    </Container>
  </section>
);
