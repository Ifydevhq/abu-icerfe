'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '@grc/components/ui/container';
import { Reveal } from '@grc/components/ui/reveal';
import { programmes, services } from '@grc/_shared/data/programmes';

/**
 * Six cards built from the Centre's own programmes and services. The
 * photographs are illustrative of the Centre's work generally — they are not
 * documentation of a specific programme — so the alt text describes the scene
 * rather than claiming it depicts that item.
 */
const CARDS = [
  {
    kind: 'Postgraduate degree',
    title: programmes[0].title,
    body: programmes[0].summary,
    href: '/programmes',
    image: '/images/abu-icerfe-event-pic-3.jpeg',
    imageAlt: 'A training cohort gathered on the Samaru campus',
  },
  {
    kind: 'Service',
    title: services[0].title,
    body: services[0].body,
    href: '/programmes',
    image: '/images/abu-icerfe-event-pic-1.jpeg',
    imageAlt: 'A seminar in progress at the Centre',
  },
  {
    kind: 'Service',
    title: services[1].title,
    body: services[1].body,
    href: '/programmes',
    image: '/people/director.jpeg',
    imageAlt: 'The Director of the Centre',
  },
  {
    kind: 'Professional award',
    title: programmes[1].title,
    body: programmes[1].summary,
    href: '/programmes',
    image: '/images/abu-icerfe-event-pic-2.jpeg',
    imageAlt: 'Participants outside the ICERFE building',
  },
  {
    kind: 'Service',
    title: services[2].title,
    body: services[2].body,
    href: '/programmes',
    image: '/images/abu-icerfe-event-pic-3.jpeg',
    imageAlt: 'Participants outside the ICERFE building',
  },
  {
    kind: 'Service',
    title: services[3].title,
    body: services[3].body,
    href: '/programmes',
    image: '/images/abu-icerfe-event-pic-1.jpeg',
    imageAlt: 'A seminar in progress at the Centre',
  },
];

const AUTOPLAY_MS = 3000;
/** Must match the track's transition duration below. */
const TRANSITION_MS = 700;

/** Cards on screen at once, by breakpoint. */
const visibleAt = (width: number) => (width >= 1024 ? 4 : width >= 768 ? 3 : width >= 640 ? 2 : 1);

export const DeliveryCarousel = () => {
  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Suppresses the transition for the single frame in which the track is
  // rewound, so the reset is invisible.
  const [snapping, setSnapping] = useState(false);
  const reducedMotion = useRef(false);
  // Mirrors `index` so click handlers can branch on the current position
  // without putting a side effect inside a state updater.
  const indexRef = useRef(0);

  useEffect(() => {
    const sync = () => setVisible(visibleAt(window.innerWidth));
    sync();
    window.addEventListener('resize', sync);
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return () => window.removeEventListener('resize', sync);
  }, []);

  /**
   * Cloning the first `visible` cards onto the end turns the strip into a loop:
   * advancing past the last card slides onto the clones, which are pixel-identical
   * to the start, and the track is then rewound to 0 with the transition off.
   * The carousel therefore only ever travels one way on its own — it never
   * rewinds across the whole strip to get back to the beginning.
   */
  const slides = [...CARDS, ...CARDS.slice(0, visible)];

  // Re-entering a smaller breakpoint can leave the index inside the clones.
  useEffect(() => {
    setIndex((i) => (i >= CARDS.length ? 0 : i));
  }, [visible]);

  // Clamped: the track never travels past the clones, so a missed rewind
  // can leave it parked at the loop point but never scrolled into blank space.
  const advance = useCallback(() => setIndex((i) => (i >= CARDS.length ? i : i + 1)), []);

  const retreat = useCallback(() => {
    if (indexRef.current > 0) {
      setIndex(indexRef.current - 1);
      return;
    }
    // Only the left arrow can reach this. Jump without animating rather than
    // sweeping the whole strip backwards.
    setSnapping(true);
    setIndex(CARDS.length - 1);
  }, []);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // Once the slide onto the clones has played out, rewind to the real first
  // card. Driven by the transition's own duration rather than a transitionend
  // event, which does not fire if the browser skips or interrupts the
  // animation — that would strand the track on the clones.
  useEffect(() => {
    if (index < CARDS.length) return;
    const id = window.setTimeout(() => {
      setSnapping(true);
      setIndex(0);
    }, TRANSITION_MS);
    return () => window.clearTimeout(id);
  }, [index]);

  // Restore the transition on the frame after the rewind has been painted.
  useEffect(() => {
    if (!snapping) return;
    const id = requestAnimationFrame(() => setSnapping(false));
    return () => cancelAnimationFrame(id);
  }, [snapping]);

  // Autoplay. Paused on hover and keyboard focus so it never moves out from
  // under someone who is reading or tabbing through, and off entirely for
  // anyone who has asked for reduced motion.
  useEffect(() => {
    if (paused || reducedMotion.current || CARDS.length <= visible) return;
    const id = window.setInterval(advance, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, visible, advance]);

  return (
    <section className="border-t border-paper-edge py-20 md:py-28">
      <Container size="wide">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="block h-px w-10 bg-gold-500" aria-hidden />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-display font-semibold text-ink">What we deliver</h2>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={retreat}
                  aria-label="Previous"
                  className="inline-flex h-10 w-10 items-center justify-center border border-paper-edge text-ink transition-colors duration-300 ease-subtle hover:border-brand-400 hover:bg-paper-soft"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={advance}
                  aria-label="Next"
                  className="inline-flex h-10 w-10 items-center justify-center border border-paper-edge text-ink transition-colors duration-300 ease-subtle hover:border-brand-400 hover:bg-paper-soft"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
              <Link
                href="/programmes"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-700"
              >
                <span className="link-underline">View all</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-subtle group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <ul
            className={`-mx-3 flex ${snapping ? '' : 'transition-transform duration-700 ease-subtle'}`}
            style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
          >
            {slides.map((card, i) => (
              <li
                key={`${card.title}-${i}`}
                className="shrink-0 grow-0 basis-full px-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                aria-hidden={i < index || i >= index + visible}
              >
                <Link
                  href={card.href}
                  // aria-hidden alone would leave these links tabbable, which
                  // is worse than not hiding them at all.
                  tabIndex={i < index || i >= index + visible ? -1 : undefined}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-brand-50">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-subtle group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-ink transition-colors duration-300 ease-subtle group-hover:text-brand-700">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 border-l-2 border-gold-500 pl-3 text-xs uppercase tracking-[0.12em] text-ink-faint">
                    {card.kind}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">
                    {card.body}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
