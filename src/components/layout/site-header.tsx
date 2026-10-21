'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { navigation, site } from '@grc/_shared/data/site';
import { cn } from '@grc/_shared/utils';

export const SiteHeader = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Utility strip: the parent university and the journal live here so the
          main navigation stays focused on the Centre itself. */}
      <div className="hidden border-b border-brand-800 bg-brand-900 text-brand-100 md:block">
        <Container className="flex items-center justify-between py-2 text-xs">
          <p className="tracking-wide">{site.parent}</p>
          <div className="flex items-center gap-6">
            <a
              href={site.journalUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline hover:text-white"
            >
              Journal (NJRFE)
              <ExternalLink className="h-3 w-3" aria-hidden />
            </a>
            <a href={`mailto:${site.emails[0]}`} className="link-underline hover:text-white">
              {site.emails[0]}
            </a>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-paper-edge bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <Container className="flex h-20 items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
            <Image
              src="/images/icerfe-logo.png"
              alt=""
              width={148}
              height={44}
              priority
              className="h-9 w-auto"
            />
            <span className="sr-only">{site.fullName}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navigation.map((item) => {
              const hasChildren = 'children' in item && item.children;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors duration-200 ease-subtle xl:px-4',
                      isActive(item.href) ? 'text-brand-700' : 'text-ink-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className={cn(
                      'flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-sm font-medium xl:px-4 transition-colors duration-200 ease-subtle',
                      isActive(item.href) ? 'text-brand-700' : 'text-ink-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-200 ease-subtle',
                        openMenu === item.label && 'rotate-180',
                      )}
                      aria-hidden
                    />
                  </button>

                  {openMenu === item.label && (
                    <div className="absolute left-0 top-full w-72 border border-paper-edge bg-white shadow-lift">
                      <ul className="py-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-5 py-3 transition-colors duration-200 ease-subtle hover:bg-paper-soft"
                            >
                              <span className="block text-sm font-medium text-ink">{child.label}</span>
                              <span className="mt-0.5 block text-xs leading-relaxed text-ink-faint">
                                {child.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden bg-brand-700 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 ease-subtle hover:bg-brand-800 xl:inline-flex"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center border border-paper-edge text-ink lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <Container className="flex h-20 items-center justify-between border-b border-paper-edge">
            <Image src="/images/icerfe-logo.png" alt="" width={148} height={44} className="h-9 w-auto" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center border border-paper-edge"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </Container>

          <nav className="h-[calc(100vh-5rem)] overflow-y-auto px-6 py-8" aria-label="Mobile">
            <ul className="space-y-8">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-sans text-2xl font-semibold text-ink"
                  >
                    {item.label}
                  </Link>
                  {'children' in item && item.children && (
                    <ul className="mt-4 space-y-3 border-l border-paper-edge pl-5">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="text-ink-muted hover:text-brand-700">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <a
                  href={site.journalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-2xl font-semibold text-ink"
                >
                  Journal
                  <ExternalLink className="h-4 w-4 text-ink-faint" aria-hidden />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
