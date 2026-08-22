import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { SectionLabel } from '@grc/components/ui/section-label';
import { news } from '@grc/_shared/data/news';
import { formatDate } from '@grc/_shared/utils';

export const NewsPreview = () => (
  <section className="border-t border-paper-edge py-20 md:py-28">
    <Container>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <SectionLabel>From the Centre</SectionLabel>
          <h2 className="font-sans text-display font-semibold text-ink">News &amp; events</h2>
        </div>
        <Link href="/news" className="link-underline inline-flex text-sm font-medium text-brand-700">
          All updates
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <ul className="mt-12 divide-y divide-paper-edge border-y border-paper-edge">
        {news.slice(0, 4).map((item) => (
          <li key={item.slug}>
            <Link
              href="/news"
              className="group flex flex-col gap-2 py-7 transition-colors duration-300 ease-subtle sm:flex-row sm:items-baseline sm:gap-8"
            >
              <time
                dateTime={item.date}
                className="shrink-0 text-xs uppercase tracking-[0.14em] text-ink-faint sm:w-40"
              >
                {formatDate(item.date)}
              </time>
              <div className="flex-1">
                <h3 className="font-sans text-lg font-semibold leading-snug text-ink transition-colors duration-300 ease-subtle group-hover:text-brand-700">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
                  {item.excerpt}
                </p>
              </div>
              <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-brand-600">
                {item.category}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
