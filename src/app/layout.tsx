import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteHeader } from '@grc/components/layout/site-header';
import { SiteFooter } from '@grc/components/layout/site-footer';
import { site } from '@grc/_shared/data/site';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://icerfe.abu.edu.ng'),
  title: {
    default: `${site.name}, ${site.fullName}`,
    template: `%s · ${site.name}`,
  },
  description:
    'The International Center of Excellence for Rural Finance and Entrepreneurship at Ahmadu Bello University, Zaria. Research, training and enterprise development in rural finance.',
  icons: { icon: '/images/favicon.png' },
  openGraph: {
    title: `${site.name}, ${site.fullName}`,
    description: site.vision,
    type: 'website',
    locale: 'en_NG',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <head>
        {/* Entrance animations start hidden and are revealed by JS. Without
            scripting there is nothing to reveal them, so force them visible. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
