'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { site } from '@grc/_shared/data/site';

const fields = [
  { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', autoComplete: 'email' },
  { name: 'organisation', label: 'Organisation (optional)', type: 'text', autoComplete: 'organization' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
] as const;

/**
 * The Centre has no mail-handling backend, so the form composes a well-formed
 * message and hands it to the visitor's mail client. That keeps the page honest:
 * nothing is silently dropped.
 */
export const ContactForm = () => {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `Name: ${values.name ?? ''}`,
      `Email: ${values.email ?? ''}`,
      values.organisation ? `Organisation: ${values.organisation}` : null,
      '',
      values.message ?? '',
    ]
      .filter((line) => line !== null)
      .join('\n');

    const subject = values.subject || 'Enquiry via the ICERFE website';
    window.location.href = `mailto:${site.emails[0]}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const update = (name: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((current) => ({ ...current, [name]: event.target.value }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.name === 'subject' ? 'sm:col-span-2' : ''}>
            <label
              htmlFor={field.name}
              className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-muted"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.name !== 'organisation'}
              value={values[field.name] ?? ''}
              onChange={update(field.name)}
              className="mt-2 w-full border border-paper-edge bg-white px-4 py-3 text-sm text-ink transition-colors duration-200 ease-subtle placeholder:text-ink-faint hover:border-brand-300 focus:border-brand-600 focus:outline-none"
            />
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={values.message ?? ''}
          onChange={update('message')}
          className="mt-2 w-full resize-y border border-paper-edge bg-white px-4 py-3 text-sm text-ink transition-colors duration-200 ease-subtle hover:border-brand-300 focus:border-brand-600 focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-brand-700 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 ease-subtle hover:bg-brand-800"
        >
          Send message
          <Send className="h-4 w-4" aria-hidden />
        </button>
        <p className="text-xs text-ink-faint">
          Opens in your email application, addressed to {site.emails[0]}.
        </p>
      </div>
    </form>
  );
};
