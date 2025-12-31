'use client';
import LazyWeatherCard from './components/LazyWeatherCard';
import styles from './page.module.css';
import useGetWeather from './query/weather';

export default function HomePage() {
  const { data: cityWeather, isLoading, error } = useGetWeather();

  if (isLoading) {
    return <div>load</div>;
  }

  return (
    <main>
      <h1 className={styles.title}>Weather</h1>
      <div className={styles.container}>
        {cityWeather?.map((city) => (
          <LazyWeatherCard
            key={city.province}
            city={city.province}
            temp={city.temperature ?? 0}
          />
        ))}
      </div>
    </main>
  );
}
