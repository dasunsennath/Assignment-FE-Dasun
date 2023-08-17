import Cookies from "js-cookie";
import { WEATHER_COOKIE, CACHE_EXPIRATION } from "../Constant/CookiesConstant";
import CityList from "../Data/cities.json";
import { getCityWeather } from "../API/WetherAPIHelper";
import DataFiletering from "../Util/WeatherDataUtil";

export const GetCacheData = (Key) => {
  let cityWeather = Cookies.get(Key);
  return cityWeather;
};

export const SetCacheData = (Key, Value, ExpireTime) => {
  Cookies.set(Key, Value, { expires: ExpireTime });
  return true;
};

const FetchingData = async () => {
  let cities = CityList.List.map((city) => city.CityCode).join(",");
  const data = await getCityWeather(cities);
  return DataFiletering(data);
};

export const GetWeatherDataByAPI = async () => {
  const feted_data = await FetchingData();
  SetCacheData(WEATHER_COOKIE, JSON.stringify(feted_data), CACHE_EXPIRATION);
  return feted_data;
};
