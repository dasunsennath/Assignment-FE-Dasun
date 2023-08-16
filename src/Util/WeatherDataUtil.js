import moment from "moment/moment";
import { WEATHER_ICON_MAPPINGS, ICONS } from "../Constant/IconConstant";

const DataFiletering = (data) => {
  console.log("*************** DataFiletering Called ******************");
  const fiteredData = data.list.map((item) => {
    const data = {
      id: item.id,
      dt: item.dt,
      time: new Date(item.dt * 1000)
        .toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .replace(" ", ""),
      date: moment(new Date(item.dt * 1000)).format("MMM D"),
      name: item.name,
      country: item.sys.country,
      temp: item.main.temp,
      temp_min: item.main.temp_min,
      temp_max: item.main.temp_max,
      description: captipitalizeWords(item.weather[0].description),
      sunrise: new Date(item.sys.sunrise * 1000)
        .toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .replace(" ", ""),
      sunset: new Date(item.sys.sunset * 1000)
        .toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .replace(" ", ""),
      humidity: item.main.humidity,
      presure: item.main.pressure,
      visibility: parseFloat(item.visibility / 1000).toFixed(1),
      wind_speed: item.wind.speed,
      wind_deg: parseFloat(item.wind.deg).toFixed(0),
      icon:
        WEATHER_ICON_MAPPINGS[item.weather[0].description.toLowerCase()] ||
        ICONS.BsSun,
    };
    return data;
  });
  return fiteredData;
};

const captipitalizeWords = (str) => {
  return str.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
};

export default DataFiletering;
