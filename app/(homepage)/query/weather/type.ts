import { City } from '@/app/_shared/constants/cities';

export interface OpenMeteoHourly {
  time: string[];
  temperature_2m: number[];
}

export interface CityForecast {
  latitude: number;
  longitude: number;
  hourly: OpenMeteoHourly;
}

export interface CityWeather {
  city: string;
  province: string;
  temperature: number | null;
}

export function mapWeatherToCitiesByOrder(
  cities: City[],
  forecasts: CityForecast[],
  hourIndex = 0
): CityWeather[] {
  return cities.map((city, index) => ({
    city: city.city,
    province: city.province,
    temperature: forecasts[index]?.hourly.temperature_2m[hourIndex] ?? null,
  }));
}
