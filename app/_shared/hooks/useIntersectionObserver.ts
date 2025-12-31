'use client';

import { RefObject, useEffect, useState } from 'react';

interface Options extends IntersectionObserverInit {}

export function useIntersectionObserver<T extends Element>(
  ref: RefObject<T>,
  options?: Options
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}
