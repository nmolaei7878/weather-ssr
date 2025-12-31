'use client';

import { useIntersectionObserver } from '@/app/_shared/hooks/useIntersectionObserver';
import { useRef } from 'react';
import WeatherCard from '../WeatherCard';

interface LazyWeatherCardProps {
  city: string;
  temp: number;
}

export default function LazyWeatherCard({ city, temp }: LazyWeatherCardProps) {
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
