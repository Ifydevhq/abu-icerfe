import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { SectionLabel } from '@grc/components/ui/section-label';
import { hubFocusAreas, hubJourney } from '@grc/_shared/data/innovation-hub';

/**
 * The path through the Hub as four steps, followed by the sectors it focuses
 * on. Steps run horizontally on desktop with a shared rule, and stack with a
 * left rule on smaller screens.
 */
export const HubJourney = () => (
  <section className="py-20 md:py-28">
    <Container size="wide">
      <div className="max-w-2xl">
        <Reveal>
          <SectionLabel>How it works</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-display font-semibold text-ink">From idea to enterprise</h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 max-w-prose leading-relaxed text-ink-muted">
            Ventures move through the Hub in stages, so support matches where a founder
            actually is rather than where a programme assumes they should be.
          </p>
        </Reveal>
      </div>

      <ol className="mt-14 grid gap-10 border-l border-paper-edge pl-8 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:border-t lg:pl-0">
        {hubJourney.map((stage, index) => (
          <Reveal as="li" key={stage.step} delay={index * 100} className="relative lg:pt-10">
            <span
              className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-brand-600 ring-1 ring-brand-200 lg:-top-[6px] lg:left-0"
              aria-hidden
            />
            <p className="text-xs font-medium tabular-nums tracking-[0.14em] text-gold-600">
              Stage {stage.step}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-ink">{stage.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{stage.body}</p>
          </Reveal>
        ))}
      </ol>

      <div className="mt-24 grid gap-10 border-t border-paper-edge pt-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel>Focus areas</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-title font-semibold text-ink">
              Sectors that matter to rural economies
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <ul className="flex flex-wrap gap-3">
            {hubFocusAreas.map((area, index) => (
              <Reveal as="li" key={area} delay={index * 60} variant="fade">
                <span className="inline-flex border border-paper-edge bg-white px-5 py-3 text-sm font-medium text-ink transition-colors duration-300 ease-subtle hover:border-brand-300 hover:text-brand-700">
                  {area}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </section>
);
