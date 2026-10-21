import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { SectionLabel } from '@grc/components/ui/section-label';
import { hubPillars } from '@grc/_shared/data/innovation-hub';

/** What the Hub offers. Anchored as #programmes for the masthead link. */
export const HubPillars = () => (
  <section
    id="programmes"
    className="scroll-mt-24 border-y border-paper-edge bg-paper-soft py-20 md:py-28"
  >
    <Container size="wide">
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel>What the Hub offers</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-display font-semibold text-ink">
            Support for every stage of a new venture
          </h2>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-px bg-paper-edge sm:grid-cols-2 lg:grid-cols-3">
        {hubPillars.map((pillar, index) => (
          <Reveal as="li" key={pillar.title} delay={(index % 3) * 90}>
            <div className="group flex h-full flex-col bg-paper-soft p-8 transition-colors duration-300 ease-subtle hover:bg-white">
              <span className="text-xs font-medium tabular-nums tracking-[0.14em] text-gold-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{pillar.body}</p>
              <span className="mt-auto block pt-8" aria-hidden>
                <span className="block h-px w-8 bg-gold-500 transition-all duration-500 ease-subtle group-hover:w-16" />
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Container>
  </section>
);
