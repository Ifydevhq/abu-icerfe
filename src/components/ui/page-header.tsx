import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from './container';

/** Dark masthead that opens every interior page. Keeps navigation legible. */
export const PageHeader = ({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumb?: { label: string; href?: string }[];
}) => (
  <header className="relative overflow-hidden bg-brand-900 text-white">
    <div className="grain absolute inset-0 opacity-60" aria-hidden />
    <div
      className="absolute inset-y-0 right-0 w-1/2 opacity-[0.07]"
      aria-hidden
      style={{
        backgroundImage:
          'repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 14px)',
      }}
    />
    <Container className="relative py-16 md:py-24">
      {breadcrumb && (
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-200">
            <li>
              <Link href="/" className="link-underline hover:text-white">
                Home
              </Link>
            </li>
            {breadcrumb.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-brand-400" aria-hidden />
                {crumb.href ? (
                  <Link href={crumb.href} className="link-underline hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {eyebrow && (
        <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-400">
          {eyebrow}
        </p>
      )}
      <h1 className="max-w-3xl font-sans text-display font-semibold">{title}</h1>
      {intro && <p className="mt-6 max-w-prose text-lg leading-relaxed text-brand-100">{intro}</p>}
    </Container>
  </header>
);
