import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { programmes } from '@grc/_shared/data/programmes';

/**
 * An inset dark panel rather than a full-bleed band: it gives the page a real
 * change of ground partway down, and the white gutter around it keeps the
 * section from reading as another stacked stripe.
 */
export const ProgrammesPanel = () => (
  <section className="pb-24 md:pb-32">
    <Container size="wide">
      <Reveal variant="panel">
        <div className="relative isolate overflow-hidden bg-brand-900 px-7 py-16 text-white md:px-14 md:py-20">
          {/* Same treatment as the impact band: a photograph held under a flat
              90% wash so it reads as texture, with a second pass deepening the
              left where the heading sits. Decorative, hence alt="". */}
          <div className="absolute inset-0 -z-10" aria-hidden>
            <Image
              src="/images/abu-icerfe-event-pic-3.jpeg"
              alt=""
              fill
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="img-drift object-cover object-[center_40%]"
            />
            <div className="absolute inset-0 bg-brand-900/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/60 via-transparent to-transparent" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 16px)',
              }}
            />
            <div className="grain absolute inset-0 opacity-40" />
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Reveal>
                <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold-400">
                  <span className="h-px w-10 bg-gold-500" aria-hidden />
                  Study with us
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-display font-semibold">Postgraduate programmes</h2>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <Link
                href="/programmes"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white"
              >
                <span className="link-underline">All programmes</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px bg-brand-700/60 md:grid-cols-2">
            {programmes.map((programme, index) => (
              <Reveal as="article" key={programme.title} delay={200 + index * 110}>
                <div className="group h-full bg-brand-900 p-8 transition-colors duration-500 ease-subtle hover:bg-brand-800 md:p-10">
                  <p className="text-xs uppercase tracking-[0.16em] text-brand-300">
                    {programme.level}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug">{programme.title}</h3>
                  <span
                    className="mt-6 block h-px w-10 bg-gold-500 transition-all duration-500 ease-subtle group-hover:w-20"
                    aria-hidden
                  />
                  <p className="mt-6 leading-relaxed text-brand-100">{programme.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
);
