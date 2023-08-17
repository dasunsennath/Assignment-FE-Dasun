import Input from "../../Components/Input/Input";
import Card from "../../Components/Card/Card";

import "./Home.css";
import {
  CACHE_EXPIRATION,
  WEATHER_COOKIE,
  QUEART_KEY,
} from "../../Constant/CookiesConstant";
import { COLORS } from "../../Constant/IconConstant";
import { GetWeatherDataByAPI, GetCacheData } from "../../Util/CacheHandlerUtil";
import { useQuery } from "@tanstack/react-query";

function Home() {
  let colorId = 0;
  const { isFetched, isLoading, error, data } = useQuery(
    [QUEART_KEY],
    GetWeatherDataByAPI,
    {
      staleTime: CACHE_EXPIRATION, 
    }
  );

  let WetherData = null;
  if (!data && !isFetched) {
    WetherData = GetCacheData(WEATHER_COOKIE);
    if (WetherData) {
      WetherData = JSON.parse(WetherData);
    }
  } else {
    WetherData = data;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <Input />
        </div>
      </div>
      <div className="row  justify-content-center align-items-center mb-5">
        {isLoading && !WetherData && (
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
