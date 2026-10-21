import Image from 'next/image';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { SectionLabel } from '@grc/components/ui/section-label';
import { hubFacilities, innovationHub } from '@grc/_shared/data/innovation-hub';

/** The spaces founders work in, all within the Centre on Samaru Main Campus. */
export const HubFacilities = () => (
  <section className="border-t border-paper-edge bg-paper-soft py-20 md:py-28">
    <Container size="wide">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6 lg:order-2">
          <Reveal>
            <SectionLabel>Spaces & facilities</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-display font-semibold text-ink">
              A place to build, on campus
            </h2>
          </Reveal>
          <dl className="mt-10 divide-y divide-paper-edge border-y border-paper-edge">
            {hubFacilities.map((facility, index) => (
              <Reveal key={facility.title} delay={index * 80} className="py-6">
                <dt className="font-semibold text-ink">{facility.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted">{facility.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 lg:order-1">
          <div className="grid grid-cols-5 gap-4">
            <Reveal variant="panel" className="col-span-5 sm:col-span-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-edge">
                <Image
                  src={innovationHub.images.facilities}
                  alt="The ICERFE building on Samaru Main Campus"
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal
              variant="panel"
              delay={150}
              className="col-span-5 sm:col-span-2 sm:mt-24"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-edge sm:aspect-[3/4]">
                <Image
                  src={innovationHub.images.facilitiesSecondary}
                  alt="A rural entrepreneur carrying produce to market"
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
