import { getWeather } from './api/weather';
import { CityWeather } from './api/weather/type';
import LazyWeatherCard from './components/LazyWeatherCard';
import styles from './page.module.css';

export default async function HomePage() {
  const cityWeather: CityWeather[] = await getWeather();

  return (
    <main>
      <h1 className={styles.title}>Weather</h1>
      <div className={styles.container}>
        {cityWeather.map((city) => (
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
