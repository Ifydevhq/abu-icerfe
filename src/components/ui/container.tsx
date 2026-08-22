import { cn } from '@grc/_shared/utils';

export const Container = ({
  children,
  className,
  size = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}) => (
  <div
    className={cn(
      'mx-auto w-full px-6 md:px-8',
      size === 'narrow' && 'max-w-3xl',
      size === 'default' && 'max-w-6xl',
      size === 'wide' && 'max-w-7xl',
      className,
    )}
  >
    {children}
  </div>
);
