import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { CtaBand } from '@grc/components/ui/cta-band';
import { news } from '@grc/_shared/data/news';
import { formatDate } from '@grc/_shared/utils';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Updates from the Centre on enterprise, training and facilities.',
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="From the Centre"
        title="News & Events"
        intro="Updates from the Centre's enterprise lines, training programmes and facilities."
        breadcrumb={[{ label: 'News & Events' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <ul className="divide-y divide-paper-edge border-y border-paper-edge">
            {news.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/news/${item.slug}`}
                  className="group flex flex-col gap-3 py-8 sm:flex-row sm:gap-10"
                >
                  <div className="shrink-0 sm:w-44">
                    <time
                      dateTime={item.date}
                      className="block text-xs uppercase tracking-[0.14em] text-ink-faint"
                    >
                      {formatDate(item.date)}
                    </time>
                    <span className="mt-2 inline-block border border-paper-edge px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-brand-700">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-sans text-xl font-semibold leading-snug text-ink transition-colors duration-300 ease-subtle group-hover:text-brand-700">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-prose leading-relaxed text-ink-muted">
                      {item.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
                      <span className="link-underline">Read more</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>

                  {/* Thumbnail, where the item has a featured image. */}
                  {item.image && (
                    <div className="relative hidden aspect-[4/3] w-40 shrink-0 overflow-hidden bg-brand-50 sm:block">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="10rem"
                        className="object-cover transition-transform duration-700 ease-subtle group-hover:scale-[1.04]"
                      />
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
