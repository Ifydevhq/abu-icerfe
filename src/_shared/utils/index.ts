export const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ');

/** "Dr. I. B. Bugaje" -> "IB"; used for the avatar fallback. */
export const initials = (name: string) => {
  const parts = name
    .replace(/^(Dr|Prof|Mrs|Mr|Mal|Engr)\.?\s+/i, '')
    .split(/\s+/)
    .filter((p) => /[A-Za-z]/.test(p));

  const letters = parts.map((p) => p.replace(/[^A-Za-z]/g, '')[0]).filter(Boolean);
  return (letters[0] ?? '') + (letters[letters.length - 1] ?? '');
};

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
