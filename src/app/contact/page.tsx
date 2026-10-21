import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PageHeader } from '@grc/components/ui/page-header';
import { Container } from '@grc/components/ui/container';
import { SectionLabel } from '@grc/components/ui/section-label';
import { ContactForm } from '@grc/components/ui/contact-form';
import { site } from '@grc/_shared/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${site.fullName} at ${site.parent}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with the Centre"
        intro="For admissions, training, consultancy or partnership enquiries, contact the Centre directly."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionLabel>Contact details</SectionLabel>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                  <div>
                    <h2 className="text-sm font-medium text-ink">Address</h2>
                    <address className="mt-2 not-italic leading-relaxed text-ink-muted">
                      {site.fullName}
                      <br />
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                      <br />
                      {site.address.city}, {site.address.state}, {site.address.country}
                    </address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                  <div>
                    <h2 className="text-sm font-medium text-ink">Email</h2>
                    <ul className="mt-2 space-y-1">
                      {site.emails.map((email) => (
                        <li key={email}>
                          <a href={`mailto:${email}`} className="link-underline text-ink-muted hover:text-brand-700">
                            {email}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                  <div>
                    <h2 className="text-sm font-medium text-ink">Telephone</h2>
                    <ul className="mt-2 space-y-1">
                      {site.phones.map((phone) => (
                        <li key={phone}>
                          <a
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="link-underline text-ink-muted hover:text-brand-700"
                          >
                            {phone}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <SectionLabel>Send a message</SectionLabel>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-paper-edge">
        <div className="h-[420px] w-full bg-paper-soft">
          {/* Plain embed - no API key, and it degrades to a static tile rather
              than the WebGL error panel the OSM export embed now shows. */}
          <iframe
            title="Map showing the location of ICERFE, Ahmadu Bello University, Samaru Zaria"
            src="https://maps.google.com/maps?q=Ahmadu%20Bello%20University%20Samaru%20Zaria&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </>
  );
}
