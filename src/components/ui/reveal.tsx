'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@grc/_shared/utils';

type RevealVariant = 'rise' | 'fade' | 'panel';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in ms. Keep increments small (60–120ms) so groups read as one move. */
  delay?: number;
  variant?: RevealVariant;
  as?: 'div' | 'section' | 'article' | 'li' | 'figure';
  /** Merged with the delay custom property — used for absolute placement. */
  style?: React.CSSProperties;
};

/**
 * One-shot entrance animation driven by IntersectionObserver.
 *
 * Deliberately not a motion library: the whole homepage needs fade/rise and
 * nothing more, so a ~40-line component plus three CSS classes keeps the
 * First Load JS where it was. The hidden state lives in CSS (see globals.css)
 * with a prefers-reduced-motion opt-out and a <noscript> fallback in the root
 * layout, so content is never trapped invisible.
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  variant = 'rise',
  as: Tag = 'div',
  style,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Anything already on screen at mount should not wait for a scroll event.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Fire a little before the element is fully in view so the motion has
      // finished by the time it reaches comfortable reading position.
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={
        delay
          ? ({ ...style, '--reveal-delay': `${delay}ms` } as React.CSSProperties)
          : style
      }
      className={cn(
        'reveal',
        variant === 'fade' && 'reveal--fade',
        variant === 'panel' && 'reveal--panel',
        visible && 'is-visible',
        className,
      )}
    >
      {children}
    </Tag>
  );
};
