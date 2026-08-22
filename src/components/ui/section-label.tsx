import { cn } from '@grc/_shared/utils';

/** Small uppercase eyebrow above a section heading, with the gold hairline. */
export const SectionLabel = ({
  children,
  className,
  tone = 'dark',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'dark' | 'light';
}) => (
  <p
    className={cn(
      'rule-mark mb-5 text-[0.7rem] font-medium uppercase tracking-[0.18em]',
      tone === 'dark' ? 'text-ink-muted' : 'text-brand-200',
      className,
    )}
  >
    {children}
  </p>
);
