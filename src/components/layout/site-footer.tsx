import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { navigation, site } from '@grc/_shared/data/site';

const year = new Date().getFullYear();

export const SiteFooter = () => (
  <footer className="border-t border-brand-800 bg-brand-900 text-brand-100">
    <Container className="py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          {/* The mark is green-on-transparent, so it needs a light ground to
              read against the dark footer rather than a filter. */}
          <div className="inline-flex bg-white px-4 py-3">
            <Image src="/images/icerfe-logo.png" alt="" width={160} height={48} className="h-9 w-auto" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-200">{site.fullName}</p>
          <p className="mt-4 text-sm text-brand-300">{site.parent}</p>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-400">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="link-underline text-brand-100 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.journalUrl}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-brand-100 hover:text-white"
              >
                Journal (NJRFE)
                <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-400">
            Find us
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
              <address className="not-italic leading-relaxed text-brand-200">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}, {site.address.state}, {site.address.country}
              </address>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
              <span className="flex flex-col gap-1">
                {site.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="link-underline hover:text-white">
                    {email}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
              <span className="flex flex-col gap-1">
                {site.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="link-underline hover:text-white"
                  >
                    {phone}
                  </a>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-brand-800 pt-8 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}, {site.parent}. All rights reserved.
        </p>
        <a
          href={site.universityUrl}
          target="_blank"
          rel="noreferrer"
          className="link-underline hover:text-white"
        >
          abu.edu.ng
          <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
      </div>
    </Container>
  </footer>
);
