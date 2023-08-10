
import Input from "../../Input/Input";
import Card from "../../Card/Card";

import "./Home.css";
import { WeatherContext } from "../../contex/weatherContext";
import { useContext } from "react";

function Home() {
  const { filteredData } = useContext(WeatherContext);
 

  
  return (
    <div className="container">

      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <Input />
        </div>
      </div>
      <div className="row  justify-content-center align-items-center mb-5">
        <div className="col-md-12 col-sm-12 col-lg-8">
          <div className="row  justify-content-center align-items-center ">

            {filteredData && filteredData.map((item, index) => {
                return (
                    <div className="col-md-6 col-sm-12 mt-4 " key={index}  >
                        <Card key={item.id} id={item.id} dt={item.dt} time={item.time} date={item.date} name={item.name} country={item.country} temp={item.temp} temp_min={item.temp_min} temp_max={item.temp_max} description={item.description} />
                    </div>
                )
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
