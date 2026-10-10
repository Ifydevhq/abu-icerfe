import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { CtaBand } from '@grc/components/ui/cta-band';
import { news } from '@grc/_shared/data/news';
import { formatDate } from '@grc/_shared/utils';

type Params = { slug: string };

/** Every item is known at build time, so the whole section prerenders. */
export const generateStaticParams = () => news.map((item) => ({ slug: item.slug }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  if (!item) return { title: 'Not found' };

  return {
    title: item.title,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: 'article',
      publishedTime: item.date,
      images: item.image ? [item.image] : undefined,
    },
  };
};

export default async function NewsItemPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const others = news.filter((entry) => entry.slug !== item.slug).slice(0, 3);

  return (
    <>
      <header className="relative isolate overflow-hidden bg-brand-900 text-white">
        <div className="grain absolute inset-0 opacity-50" aria-hidden />
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-[0.07]"
          aria-hidden
          style={{
            backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 14px)',
          }}
        />
        <Container className="relative py-16 md:py-24">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-sm text-brand-200 transition-colors duration-300 ease-subtle hover:text-white"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:-translate-x-1"
              aria-hidden
            />
            All news &amp; events
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="border border-brand-600 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-gold-400">
              {item.category}
            </span>
            <time dateTime={item.date} className="text-xs uppercase tracking-[0.14em] text-brand-200">
              {formatDate(item.date)}
            </time>
          </div>

          <h1 className="mt-6 max-w-3xl text-display font-semibold">{item.title}</h1>
        </Container>
      </header>

      <article className="py-16 md:py-24">
        <Container size="narrow">
          {/* Standfirst — the summary that also appears in the listing. */}
          <p className="text-lg leading-relaxed text-ink">{item.excerpt}</p>

          {item.image && (
            <figure className="mt-12">
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-50">
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? ''}
                  fill
                  priority
                  sizes="(min-width: 768px) 48rem, 100vw"
                  className="object-cover"
                />
              </div>
              {item.imageAlt && (
                <figcaption className="mt-3 flex items-center gap-3 text-xs text-ink-faint">
                  <span className="h-px w-6 shrink-0 bg-gold-500" aria-hidden />
                  {item.imageAlt}
                </figcaption>
              )}
            </figure>
          )}

          {item.body && item.body.length > 0 ? (
            <div className="mt-12 space-y-6">
              {item.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            /* No body copy supplied for this item yet. Saying so is better than
               padding the page out with invented detail. */
            <p className="mt-12 border-l-2 border-paper-edge pl-5 text-sm leading-relaxed text-ink-faint">
              A fuller account of this item has not been published yet. For more
              information, please{' '}
              <Link href="/contact" className="link-underline text-brand-700">
                contact the Centre
              </Link>
              .
            </p>
          )}
        </Container>
      </article>

      {others.length > 0 && (
        <section className="border-t border-paper-edge bg-paper-soft py-16 md:py-20">
          <Container size="wide">
            <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-faint">
              More from the Centre
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/news/${other.slug}`}
                    className="group flex h-full flex-col border border-paper-edge bg-white p-6 transition-all duration-500 ease-subtle hover:border-brand-300 hover:shadow-card"
                  >
                    <time
                      dateTime={other.date}
                      className="text-xs uppercase tracking-[0.14em] text-ink-faint"
                    >
                      {formatDate(other.date)}
                    </time>
                    <h3 className="mt-3 flex-1 font-semibold leading-snug text-ink transition-colors duration-300 ease-subtle group-hover:text-brand-700">
                      {other.title}
                    </h3>
                    <ArrowRight
                      className="mt-6 h-4 w-4 text-brand-600 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
