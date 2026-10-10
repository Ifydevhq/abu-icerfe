import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { news } from '@grc/_shared/data/news';
import { formatDate } from '@grc/_shared/utils';

const [lead, ...rest] = news.slice(0, 4);

/**
 * Editorial split rather than four identical rows: the first item is given real
 * prominence and the remaining three sit beside it as a ruled index. No imagery
 * is introduced — the Centre has no per-item photographs, so the hierarchy is
 * carried typographically.
 */
export const Dispatches = () => (
  <section className="border-t border-paper-edge bg-paper-soft py-24 md:py-32">
    <Container size="wide">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink-faint">
              <span className="h-px w-10 bg-gold-500" aria-hidden />
              From the Centre
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-display font-semibold text-ink">News &amp; events</h2>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-700"
          >
            <span className="link-underline">All updates</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal variant="panel" delay={120} className="lg:col-span-7">
          <Link
            href={`/news/${lead.slug}`}
            className="group flex h-full flex-col border border-paper-edge bg-white p-8 transition-all duration-500 ease-subtle hover:border-brand-300 hover:shadow-card md:p-12"
          >
            <div className="flex items-center gap-4">
              <span className="bg-brand-50 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-brand-700">
                {lead.category}
              </span>
              <time dateTime={lead.date} className="text-xs uppercase tracking-[0.14em] text-ink-faint">
                {formatDate(lead.date)}
              </time>
            </div>
            <h3 className="mt-8 text-title font-semibold leading-tight text-ink transition-colors duration-300 ease-subtle group-hover:text-brand-700">
              {lead.title}
            </h3>
            <p className="mt-5 flex-1 max-w-prose leading-relaxed text-ink-muted">{lead.excerpt}</p>
            <span
              className="mt-10 block h-px w-12 bg-gold-500 transition-all duration-500 ease-subtle group-hover:w-24"
              aria-hidden
            />
          </Link>
        </Reveal>

        <div className="lg:col-span-5">
          <ul className="border-t border-paper-edge">
            {rest.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={200 + index * 90}>
                <Link
                  href={`/news/${item.slug}`}
                  className="group block border-b border-paper-edge py-7 transition-colors duration-300 ease-subtle"
                >
                  <div className="flex items-center gap-4">
                    <time
                      dateTime={item.date}
                      className="text-xs uppercase tracking-[0.14em] text-ink-faint"
                    >
                      {formatDate(item.date)}
                    </time>
                    <span className="text-[0.65rem] uppercase tracking-[0.14em] text-brand-600">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-3 font-semibold leading-snug text-ink transition-colors duration-300 ease-subtle group-hover:text-brand-700">
                    {item.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </section>
);
