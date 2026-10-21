import Image from 'next/image';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { SectionLabel } from '@grc/components/ui/section-label';
import { hubAudiences, innovationHub } from '@grc/_shared/data/innovation-hub';

/**
 * Introduces the Hub as a section of the Centre and says who it is for. The
 * mandate wording in the second paragraph is the Centre's own.
 */
export const HubOverview = () => (
  <section className="py-20 md:py-28">
    <Container size="wide">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel>About the Hub</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-display font-semibold text-ink">
              The Centre&apos;s enterprise arm, built for founders
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-7 max-w-prose leading-relaxed text-ink-muted">
              ICERFE was established to build expertise in rural finance and entrepreneurship.
              The Innovation Hub turns that expertise outward: it is where students, graduates
              and rural entrepreneurs bring an idea and leave with a business that can stand
              on its own.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <p className="mt-5 max-w-prose leading-relaxed text-ink-muted">
              It carries out the Centre&apos;s mandate to provide incubation and consultancy
              services, and to support entrepreneurs from start-up to maturity, drawing on the
              same faculty, laboratories and partnerships that serve its academic programmes.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal variant="panel">
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-soft">
              <Image
                src={innovationHub.images.overview}
                alt="An entrepreneurship training session at ICERFE"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-20">
        <Reveal>
          <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
            Who the Hub serves
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-px bg-paper-edge sm:grid-cols-2 lg:grid-cols-4">
          {hubAudiences.map((audience, index) => (
            <Reveal as="li" key={audience.title} delay={index * 80}>
              <div className="h-full bg-white p-7">
                <span className="block h-px w-8 bg-gold-500" aria-hidden />
                <p className="mt-5 font-semibold text-ink">{audience.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{audience.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);
