import { cities } from '@/app/_shared/constants/cities';
import { CityForecast, CityWeather, mapWeatherToCitiesByOrder } from './type';

export async function getWeather(hourIndex = 0): Promise<CityWeather[]> {
  const latitudes = cities.map((c) => c.lat).join(',');
  const longitudes = cities.map((c) => c.lon).join(',');

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitudes}&longitude=${longitudes}&hourly=temperature_2m&forecast_days=1`;

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch weather');

  const forecasts: CityForecast[] = await res.json();

  return mapWeatherToCitiesByOrder(cities, forecasts, hourIndex);
}
