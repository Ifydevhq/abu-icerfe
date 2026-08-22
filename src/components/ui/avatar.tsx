import Image from 'next/image';
import { cn, initials } from '@grc/_shared/utils';

/**
 * Photographs exist for only a few members of the Centre. Rather than mix
 * portraits with stock silhouettes, everyone without a photo gets a typographic
 * monogram — it keeps the directory visually even.
 */
export const Avatar = ({
  name,
  photo,
  className,
  size = 'md',
}: {
  name: string;
  photo?: string;
  className?: string;
  size?: 'md' | 'lg';
}) => {
  const dimension = size === 'lg' ? 128 : 96;

  return (
    <div
      className={cn(
        'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-50 ring-1 ring-inset ring-brand-100',
        size === 'lg' ? 'h-32 w-32' : 'h-24 w-24',
        className,
      )}
    >
      {photo ? (
        <Image src={photo} alt={name} fill sizes={`${dimension}px`} className="object-cover object-top" />
      ) : (
        <span
          aria-hidden
          className={cn(
            'font-sans font-semibold text-brand-600',
            size === 'lg' ? 'text-3xl' : 'text-xl',
          )}
        >
          {initials(name)}
        </span>
      )}
    </div>
  );
};
