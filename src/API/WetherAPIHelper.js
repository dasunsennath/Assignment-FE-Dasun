import axios from "axios";
import { API_KEY, WEATHER_API_ENDPOINT, UNITS } from "../Constant/APIConstant";

export const getCityWeather = async (city) => {
  console.log("*************** API Called ******************");
  const response = await axios.get(WEATHER_API_ENDPOINT, {
    params: {
      id: city,
      units: UNITS,
      APPID: API_KEY,
    },
  });
  return response.data;
};
