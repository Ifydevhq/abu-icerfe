import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { site } from '@grc/_shared/data/site';

export const Hero = () => (
  <section className="relative overflow-hidden bg-brand-900 text-white">
    <div className="absolute inset-0">
      <Image
        src="/images/campus.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/95 to-brand-900/70" />
    </div>
    <div className="grain absolute inset-0 opacity-50" aria-hidden />

    <Container className="relative py-24 md:py-36">
      <div className="max-w-3xl">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-400">
          {site.parent}
        </p>
        <h1 className="mt-6 text-display-lg font-semibold">
          Rural finance and entrepreneurship,
          <span className="block text-brand-200">studied and put to work.</span>
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-brand-100">
          {site.fullName} builds the expertise that rural financial institutions and
          entrepreneurs need — through teaching, applied research, training and
          business support services.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-brand-900 transition-colors duration-300 ease-subtle hover:bg-brand-50"
          >
            Explore programmes
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/about/history"
            className="inline-flex items-center gap-2 border border-brand-600 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 ease-subtle hover:border-brand-400 hover:bg-brand-800"
          >
            About the Centre
          </Link>
        </div>
      </div>
    </Container>
  </section>
);
