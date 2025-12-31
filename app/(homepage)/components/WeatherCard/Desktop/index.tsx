import { getRandomColor } from '@/app/lib/random-color';
import styles from './index.module.css';

const staticDetails = {
  wind: '8 km/h',
  humidity: '50%',
  rain: '50%',
  date: 'Mar 26 2021',
  quality: 'Quality',
};

export default function DesktopWeatherCard({
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
      <div className={styles.topSection}>
        <span className={styles.date}>{staticDetails.date}</span>
      </div>

      <div className={styles.middleSection}>
        <span className={styles.temperature}>{temp}</span>
        <div className={styles.details}>
          <span className={styles.location}>{city}</span>
          <span className={styles.quality}>{staticDetails.quality}</span>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.detailItem}>
          <span className={styles.value}>{staticDetails.wind}</span>
          <span className={styles.label}>Wind</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.value}>{staticDetails.humidity}</span>
          <span className={styles.label}>Humidity</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.value}>{staticDetails.rain}</span>
          <span className={styles.label}>Rain</span>
        </div>
      </div>
    </div>
  );
}
