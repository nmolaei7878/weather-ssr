'use client';

import { useIntersectionObserver } from '@/app/_shared/hooks/useIntersectionObserver';
import { useRef } from 'react';
import WeatherCard from '../WeatherCard/index';

export default function LazyWeatherCard({
  city,
  temp,
}: {
  city: string;
  temp: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref as React.RefObject<Element>, {
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {isVisible ? <WeatherCard city={city} temp={temp} /> : null}
    </div>
  );
}
