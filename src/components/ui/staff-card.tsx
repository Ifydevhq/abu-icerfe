import Image from 'next/image';
import { Mail } from 'lucide-react';
import { initials } from '@grc/_shared/utils';
import type { Person } from '@grc/_shared/data/people';

/**
 * Directory card built around a real portrait.
 *
 * The old staff list used the same small circular avatar as the board pages,
 * which made the photographs we now have almost invisible. These are squared
 * portraits at the top of the card instead, and anyone still without a photo
 * gets a monogram panel at the same size so the grid never goes ragged.
 */
export const StaffCard = ({ person }: { person: Person }) => (
  <article className="group flex h-full flex-col border border-paper-edge bg-white transition-all duration-500 ease-subtle hover:border-brand-300 hover:shadow-card">
    <div className="relative aspect-[4/5] overflow-hidden bg-brand-50">
      {person.photo ? (
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-subtle group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span aria-hidden className="text-4xl font-semibold text-brand-300">
            {initials(person.name)}
          </span>
        </div>
      )}
    </div>

    <div className="flex flex-1 flex-col p-6">
      <span
        className="block h-px w-8 bg-gold-500 transition-all duration-500 ease-subtle group-hover:w-16"
        aria-hidden
      />
      <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{person.name}</h3>
      <p className="mt-1.5 text-sm font-medium text-brand-700">{person.role}</p>

      {person.rank && person.rank !== person.role && (
        <p className="mt-1 text-sm text-ink-faint">{person.rank}</p>
      )}

      {person.qualifications && (
        <p className="mt-3 text-xs leading-relaxed text-ink-muted">{person.qualifications}</p>
      )}

      {person.email && (
        <a
          href={`mailto:${person.email}`}
          className="mt-auto inline-flex items-center gap-2 pt-5 text-xs text-ink-muted transition-colors duration-300 ease-subtle hover:text-brand-700"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="break-all">{person.email}</span>
        </a>
      )}
    </div>
  </article>
);
