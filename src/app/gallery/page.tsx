import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { CtaBand } from '@grc/components/ui/cta-band';
import { galleryItems } from '@grc/_shared/data/news';
import { cn } from '@grc/_shared/utils';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'The Centre’s facilities, training sessions and enterprise lines.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="The Centre in pictures"
        intro="Facilities on the Samaru Main Campus, training sessions, and the enterprise lines run through the Centre's laboratory."
        breadcrumb={[{ label: 'Gallery' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <li key={item.title}>
                <figure className="group h-full border border-paper-edge bg-white">
                  <div
                    className={cn(
                      'relative aspect-[4/3] overflow-hidden bg-brand-50',
                      !item.image && 'flex items-center justify-center',
                    )}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-subtle group-hover:scale-[1.03]"
                      />
                    ) : (
                      /* Several archive photographs are no longer available from the
                         Centre's records. The slot keeps its place in the grid. */
                      <span className="px-6 text-center font-sans text-sm text-brand-300">
                        Photograph to be added
                      </span>
                    )}
                    <span
                      className="absolute left-4 top-4 bg-white/90 px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-ink-muted"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <figcaption className="p-6">
                    <h2 className="font-sans text-lg font-semibold leading-snug text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-ink-faint">{item.caption}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
