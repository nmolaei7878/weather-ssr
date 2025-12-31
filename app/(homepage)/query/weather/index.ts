import axiosClient from '@/app/_shared/config/axios';
import { toErrorResponse } from '@/app/_shared/config/error';
import { cities, City } from '@/app/_shared/constants/cities';
import { useQuery } from '@tanstack/react-query';
import { CityForecast, CityWeather, mapWeatherToCitiesByOrder } from './type';

export default function useGetWeather(hourIndex = 0) {
  return useQuery<CityWeather[], Error>({
    queryKey: ['cities', hourIndex],
    queryFn: () => getWeather(hourIndex),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}

export async function getWeather(hourIndex = 0): Promise<CityWeather[]> {
  try {
    const storedCities =
      typeof window !== 'undefined' ? localStorage.getItem('cities') : null;
    const cityList: City[] = storedCities ? JSON.parse(storedCities) : cities;

    if (cityList.length === 0) return [];

    const latitudes = cityList.map((c) => c.lat).join(',');
    const longitudes = cityList.map((c) => c.lon).join(',');

    const url = `/v1/forecast?latitude=${latitudes}&longitude=${longitudes}&hourly=temperature_2m&forecast_days=1`;
    const res = await axiosClient.get(url);

    return mapWeatherToCitiesByOrder(
      cityList,
      res.data as CityForecast[],
      hourIndex
    );
  } catch (e) {
    throw toErrorResponse(e);
  }
}
