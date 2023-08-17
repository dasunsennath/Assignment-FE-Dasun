import Input from "../../Components/Input/Input";
import Card from "../../Components/Card/Card";

import "./Home.css";
import { useState, useEffect } from "react";
import {
  CACHE_EXPIRATION,
  CACHE_TIME_KEY,
} from "../../Constant/CookiesConstant";
import { COLORS } from "../../Constant/IconConstant";
import {
  GetWeatherDataByAPI,
  GetWeatherDataByCache,
  GetCacheData,
} from "../../Util/CacheHandlerUtil";

function Home() {
  const [WetherData, setWetherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let colorId = 0;

  const fetchData = async () => {
    setIsLoaded(true);
    let availableTime = CACHE_EXPIRATION;
    let lastFetched =GetCacheData(CACHE_TIME_KEY) || Date.now() + CACHE_EXPIRATION;
    try {
      if (lastFetched && Date.now() - lastFetched > CACHE_EXPIRATION) {
        console.log("fetching data from API");
        setWetherData(await GetWeatherDataByAPI());
        availableTime = CACHE_EXPIRATION - (Date.now() - lastFetched);
      } else {
        console.log("fetching data from cache");
        setWetherData(await GetWeatherDataByCache());
      }
      setIsLoaded(false);
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(fetchData, availableTime);
    }
  };

  useEffect(() => {
    fetchData();
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

        <div className="col-md-12 col-sm-12 col-lg-10">
          <div className="row  justify-content-center align-items-center ">
            {WetherData &&
              WetherData.map((item, index) => {
                if (colorId > COLORS.length - 1) {
                  colorId = 0;
                }
                return (
                  <div className="col-md-6 col-sm-12 mt-4 " key={index}>
                    <Card
                      key={item.id}
                      WetherDetails={item}
                      color={COLORS[colorId++]}
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
