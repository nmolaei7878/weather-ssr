import styles from './index.module.css';

const WeatherCard = ({ temp, city }: { temp: number; city: string }) => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.weatherInfo}>
        <div className={styles.temp}>{temp}°C</div>
        <div className={styles.details}>
          <div className={styles.wind}>8 km/h Wind</div>
          <div className={styles.humidity}>50% Humidity</div>
          <div className={styles.rain}>50% Rain</div>
        </div>
      </div>
      <div className={styles.hourly}>
        <div className={styles.time}>13 PM</div>
        <div className={styles.time}>14 PM</div>
        <div className={styles.time}>15 PM</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.location}>{city}</div>
        <div className={styles.date}>Mar 26, 2021</div>
      </div>
    </div>
  );
};

export default WeatherCard;
