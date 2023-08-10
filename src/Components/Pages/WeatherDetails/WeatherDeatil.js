import React from "react";
import "./WeatherDetails.css";

import { BiArrowBack } from "react-icons/bi";
import { useLocation,useNavigate  } from "react-router-dom";
import { useEffect ,useState} from "react";
import {BsSun,BsCloudDrizzle,BsCloudy,BsJustify} from 'react-icons/bs'

const WeatherDetail = () => {
  const data = useLocation().state;
  const [icon,setIcon] = useState(null);
  console.log(data);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const captipitalizeWords = (str) => {
    return str.replace(/\b\w/g, function(l) {
      return l.toUpperCase();
    });
  }
  useEffect(() => {
    if(data.description === 'Clear Sky'){
      setIcon(<BsSun  size={80} />);
    }else if(data.description === 'Few Clouds'){
      setIcon(<BsCloudDrizzle  size={80} />);
    
    }else if(data.description === 'Scattered Clouds'){
      setIcon(<BsCloudy  size={80} />);
     
    }else if(data.description === 'Broken Clouds'){
      setIcon(<BsCloudy  size={80} />);
      
    }else if(data.description === 'Overcast Clouds'){
      setIcon(<BsCloudy  size={80} />);
      
    }else if(data.description === 'Mist'){
      setIcon(<BsJustify  size={80} />);
    }
    else{
      setIcon(<BsSun  size={80} />);
    }
  
    data.description = captipitalizeWords(data.description);

  }, [data.description])
  return (
    <div className="container h1-100 mt-5">
      <div className="row align-items-center justify-content-center h-75">
        <div className="col-md-9 col-sm-12 align-self-center">
          <div className="card shadow-lg border-0">
            <div className={"card-header border-0 " +data.color}>
             <button type="button" className="btn text-white fs-5" onClick={handleBack}><BiArrowBack size={25}/></button>
              <h2 className="card-title text-center text-white fw-bolder">{data.name},{data.country}</h2>
              <h5 className="card-title text-center text-white">{data.time}, {data.date}</h5>
              
              <div className="row justify-content-center align-items-center">
                <div className="col-md-12 col-sm-12 col-lg-7 text-center text-white ">
                <div className="row pt-3 pb-5">
              <div className="col-5 text-white d-flex flex-column align-items-center text-center gap-2">
              
                     {icon} 
                    <span>{data.description}</span>
              </div>
              <div className="col-1 text-center">
              <div className="vr h-100"></div>
              </div>
              <div className="col-6  text-white d-flex flex-column text-center">
                    <p className="fw-bolder fs-1">{data.temp}&deg;C</p>
                    <h6>Temp Min: {data.temp_min}&deg;C</h6>
                    <h6>Temp Max: {data.temp_max}&deg;C</h6>
              </div>
              </div>

                  </div>

              </div>

            </div>
            <div className="card-footer bg-dark border-0 h-40 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
