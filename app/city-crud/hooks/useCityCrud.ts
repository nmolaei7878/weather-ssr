import { useLocalStorage } from '@/app/_shared/hooks/useLocalStorage';
import { City, cities as defaultCities } from '../../_shared/constants/cities';

export function useCities() {
  const [cityList, setCityList] = useLocalStorage<City[]>(
    'cities',
    defaultCities
  );

  const addCity = (city: City) => {
    setCityList([...cityList, city]);
  };

  const updateCity = (province: string, updatedCity: Partial<City>) => {
    setCityList(
      cityList.map((c: any) =>
        c.province === province ? { ...c, ...updatedCity } : c
      )
    );
  };

  const deleteCity = (province: string) => {
    setCityList(cityList.filter((c: any) => c.province !== province));
  };

  const getCity = (province: string) =>
    cityList.find((c: any) => c.province === province);

  return { cityList, addCity, updateCity, deleteCity, getCity };
}
