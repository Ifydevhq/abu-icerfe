import { Avatar } from './avatar';
import type { Person } from '@grc/_shared/data/people';

export const PersonCard = ({ person }: { person: Person }) => (
  <article className="group flex flex-col items-start gap-5 border-t border-paper-edge pt-6 transition-colors duration-300 ease-subtle hover:border-brand-300">
    <Avatar name={person.name} photo={person.photo} />
    <div>
      <h3 className="font-sans text-lg font-semibold leading-snug text-ink">{person.name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-600">{person.role}</p>
      {person.unit && <p className="mt-1 text-sm text-ink-faint">{person.unit}</p>}
      {person.qualifications && (
        <p className="mt-2 text-xs uppercase tracking-wider text-ink-faint">{person.qualifications}</p>
      )}
    </div>
  </article>
);
