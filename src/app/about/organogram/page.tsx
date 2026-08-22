import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { CtaBand } from '@grc/components/ui/cta-band';

export const metadata: Metadata = {
  title: 'Organogram',
  description: 'How the International Center of Excellence for Rural Finance and Entrepreneurship is structured.',
};

export default function OrganogramPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Organogram"
        intro="The reporting structure of the Centre, from the Governing Board through the Directorate to its operating units."
        breadcrumb={[{ label: 'About', href: '/about' }, { label: 'Organogram' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <figure>
            {/* Wide diagram: scrolls inside its own container rather than
                forcing the page to scroll horizontally on small screens. */}
            <div className="overflow-x-auto border border-paper-edge bg-white p-4 md:p-8">
              <Image
                src="/images/organogram.jpg"
                alt="ICERFE organisational chart showing the Governing Board, Directorate and operating units"
                width={1600}
                height={1100}
                className="mx-auto h-auto w-full min-w-[640px] max-w-4xl"
              />
            </div>
            <figcaption className="mt-4 text-sm text-ink-faint">
              ICERFE organisational structure.
            </figcaption>
          </figure>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
