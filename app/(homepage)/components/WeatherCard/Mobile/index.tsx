import { getRandomColor } from '@/app/lib/random-color';
import styles from './index.module.css';
const staticDetails = {
  wind: '8 km/h',
  humidity: '50%',
  rain: '50%',
  forecast: [
    { time: '13 PM', temp: '15°' },
    { time: '14 PM', temp: '16°' },
    { time: '15 PM', temp: '32°', active: true },
  ],
};

export default function WeatherCard({
  city,
  temp,
}: {
  city: string;
  temp: number;
}) {
  return (
    <div
      style={{ backgroundColor: getRandomColor() }}
      className={`${styles.card}`}
    >
      <div className={styles.leftSection}>
        <span className={styles.temperature}>{temp}</span>
        <div className={styles.details}>
          <span className={styles.location}>{city}</span>
          <span className={styles.quality}>Quality</span>
          <span className={styles.date}>Mar 26 2021</span>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.detailRows}>
          <div className={styles.row}>
            <span className={styles.label}>Wind</span>
            <span className={styles.value}>{staticDetails.wind}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Humidity</span>
            <span className={styles.value}>{staticDetails.humidity}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Rain</span>
            <span className={styles.value}>{staticDetails.rain}</span>
          </div>
        </div>
        <div className={styles.timeForecast}>
          {staticDetails.forecast.map((item) => (
            <div
              key={item.time}
              className={`${styles.timeItem} ${
                item.active ? styles.activeTime : ''
              }`}
            >
              <span className={styles.time}>{item.time}</span>
              <span className={styles.forecastTemp}>{item.temp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
