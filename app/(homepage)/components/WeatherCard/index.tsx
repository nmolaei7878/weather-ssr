import useIsMobile from '@/app/_shared/hooks/useIsMobile';
import DesktopWeatherCard from './Desktop';
import MobileWeatherCard from './Mobile';

interface LazyWeatherCardProps {
  city: string;
  temp: number;
}

const WeatherCard = ({ city, temp }: LazyWeatherCardProps) => {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? (
        <MobileWeatherCard city={city} temp={temp} />
      ) : (
        <DesktopWeatherCard city={city} temp={temp} />
      )}
    </div>
  );
};

export default WeatherCard;
