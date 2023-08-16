import Input from "../../Components/Input/Input";
import Card from "../../Components/Card/Card";
import { getCityWeather } from "../../API/WetherAPIHelper";
import DataFiletering from "../../Util/WeatherDataUtil";
import "./Home.css";
import { useState, useEffect } from "react";

import CityList from "../../Data/cities.json";
import Cookies from "js-cookie";
import { WEATHER_COOKIE } from "../../Constant/CookiesConstant";

function Home() {
  const colors = ["bg-blue", "bg-green", "bg-red", "bg-purple", "bg-orange"];
  const [WetherData, setWetherData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let colorId = 0;

  const FetchingData = async () => {
    let cities = CityList.List.map((city) => city.CityCode).join(",");
    const data = await getCityWeather(cities);
    return DataFiletering(data);
  };

  useEffect(() => {
    let cityWeather = Cookies.get(WEATHER_COOKIE);
    if (
      cityWeather === undefined ||
      cityWeather === null ||
      cityWeather.length === 0
    ) {
      setIsLoaded(true);
      FetchingData()
        .then((data) => {
          Cookies.set(WEATHER_COOKIE, JSON.stringify(data), {
            expires: new Date(Date.now() + 5 * 60 * 1000),
          });
          setWetherData(data);
          setIsLoaded(false);
          return data;
        })
        .catch((data) => {
          console.log("error", data);
          setError(data);
          setIsLoaded(false);
        });
    } else {
      cityWeather = JSON.parse(cityWeather);
      setWetherData(cityWeather);
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <Input />
        </div>
      </div>
      <div className="row  justify-content-center align-items-center mb-5">
        {isLoaded && (
          <div className="text-center text-white fs-3">Loading...</div>
        )}
        {error && (
          <div className="text-center text-white fs-3">
            Error: {error.message}
          </div>
        )}

        <div className="col-md-12 col-sm-12 col-lg-8">
          <div className="row  justify-content-center align-items-center ">
            {WetherData &&
              WetherData.map((item, index) => {
                if (colorId > colors.length - 1) {
                  colorId = 0;
                }
                return (
                  <div className="col-md-6 col-sm-12 mt-4 " key={index}>
                    <Card
                      key={item.id}
                      WetherDetails={item}
                      color={colors[colorId++]}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
