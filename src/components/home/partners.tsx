import Image from 'next/image';
import { Container } from '@grc/components/ui/container';
import { SectionLabel } from '@grc/components/ui/section-label';

const partners = [
  { name: 'MacArthur Foundation', note: 'Founding grant' },
  { name: 'National Universities Commission', note: 'Entrepreneurship programme' },
  { name: 'Carsey Institute, University of New Hampshire', note: 'Curriculum development' },
  { name: 'Heinrich Böll Stiftung Nigeria', note: 'Rocket oven technology' },
  { name: 'Kano State Government', note: 'Microfinance capacity building' },
];

export const Partners = () => (
  <section className="border-t border-paper-edge bg-paper-soft py-20 md:py-24">
    <Container>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <SectionLabel>Partners</SectionLabel>
          <h2 className="font-sans text-title font-semibold text-ink">
            Built with international and national partners
          </h2>
          <Image
            src="/images/macarthur-logo.jpg"
            alt="MacArthur Foundation"
            width={180}
            height={60}
            className="mt-8 h-12 w-auto object-contain"
          />
        </div>

        <div className="lg:col-span-8">
          <ul className="grid gap-px bg-paper-edge sm:grid-cols-2">
            {partners.map((partner) => (
              <li key={partner.name} className="bg-paper-soft px-6 py-7">
                <p className="font-medium leading-snug text-ink">{partner.name}</p>
                <p className="mt-1.5 text-sm text-ink-faint">{partner.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </section>
);
