import Image from 'next/image';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';

const partners = [
  { name: 'MacArthur Foundation', note: 'Founding grant' },
  { name: 'National Universities Commission', note: 'Entrepreneurship programme' },
  { name: 'Carsey Institute, University of New Hampshire', note: 'Curriculum development' },
  { name: 'Heinrich Böll Stiftung Nigeria', note: 'Rocket oven technology' },
  { name: 'Kano State Government', note: 'Microfinance capacity building' },
];

/**
 * Deliberately the quietest block on the page — a single horizontal rail rather
 * than another headed section, so it supports the Centre's credibility without
 * competing with the programmes or the directorate.
 */
export const PartnerRail = () => (
  <section className="py-20 md:py-24">
    <Container size="wide">
      <Reveal>
        <div className="flex flex-col gap-8 border-y border-paper-edge py-10 md:flex-row md:items-center md:gap-14">
          <div className="flex shrink-0 flex-col items-start gap-5 md:w-64">
            <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink-faint">
              <span className="h-px w-8 bg-gold-500" aria-hidden />
              Partners
            </p>
            <h2 className="max-w-[24ch] text-base font-semibold leading-snug text-ink">
              Built with international and national partners
            </h2>
            <Image
              src="/images/macarthur-logo.jpg"
              alt="MacArthur Foundation"
              width={180}
              height={60}
              className="h-9 w-auto object-contain md:h-10"
            />
          </div>

          <ul className="grid flex-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <Reveal as="li" key={partner.name} delay={index * 70}>
                <p className="text-sm font-medium leading-snug text-ink">{partner.name}</p>
                <p className="mt-1 text-xs text-ink-faint">{partner.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Reveal>
    </Container>
  </section>
);
