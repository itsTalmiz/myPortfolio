'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered reveal: returns a ref to attach to an element and a boolean
 * for whether it has entered the viewport. Pair with the `.reveal` / `.in-view`
 * classes in globals.css. Fires once (unobserves after first intersection) so
 * content doesn't re-hide when scrolling back up.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
