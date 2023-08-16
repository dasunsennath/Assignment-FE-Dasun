import React from "react";
import "./WeatherDetails.css";

import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "../../Components/Icon/Icon";
import { RiSendPlaneLine } from "react-icons/ri";
import { UnitConstant } from "../../Constant/UnitConstant";
const WeatherDetail = () => {
  const { WetherDetails, color } = useLocation().state;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { replace: false });
  };

  return (
    <div className="container h1-100 mt-5">
      <div className="row align-items-center justify-content-center h-75">
        <div className="col-md-9 col-sm-12 align-self-center">
          <div className="card shadow-lg border-0">
            <div className={"card-header border-0 " + color}>
              <button
                type="button"
                className="btn text-white fs-5"
                onClick={handleBack}
              >
                <BiArrowBack size={25} />
              </button>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-12  col-lg-7 text-center text-white d-flex justify-content-center align-items-center flex-column  ">
                  <h2 className="card-title text-center text-white fw-bolder">
                    {WetherDetails.name},{WetherDetails.country}
                  </h2>
                  <h5 className="card-title text-center text-white">
                    {WetherDetails.time}, {WetherDetails.date}
                  </h5>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-md-12  col-lg-7 text-center text-white d-flex justify-content-center align-items-center  ">
                  <div className="row pt-5 pb-5 w-100">
                    <div className="col-5  col-sm-5 d-flex justify-content-center align-items-center flex-column gap-3">
                      <div className="icon-size">
                        <Icon icon={WetherDetails.icon} />
                      </div>
                      <span className="fs-5">{WetherDetails.description}</span>
                    </div>

                    <div className="col-2  col-sm-2 text-center">
                      <div className="vr h-100 "></div>
                    </div>

                    <div className="col-5  col-sm-5">
                      <p className="fw-bolder fs-1">
                        {parseInt(WetherDetails.temp)} {UnitConstant.CELSIUS}
                      </p>
                      <div className="fs-7 fw-bold w-100">
                        Temp Min: {parseInt(WetherDetails.temp_min)}
                        {UnitConstant.CELSIUS}
                      </div>
                      <div className="fs-7 fw-bold w-100">
                        Temp Max: {parseInt(WetherDetails.temp_max)}
                        {UnitConstant.CELSIUS}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-dark border-0 pt-4 pb-4 ">
              <div className="container foot">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-lg-3 col-3 text-start text-white">
                    <div className=" fs-6 fw-bold">
                      Presure:
                      <span className="text-white fw-normal">
                        {WetherDetails.presure}
                        {UnitConstant.PREASUER}
                      </span>
                    </div>
                    <div className=" fs-6 fw-bold">
                      Humidity:
                      <span className="text-white fw-normal">
                        {WetherDetails.humidity}
                        {UnitConstant.HUMIDITY}
                      </span>
                    </div>
                    <div className=" fs-6 fw-bold">
                      Visibility:
                      <span className="text-white fw-normal">
                        {WetherDetails.visibility}
                        {UnitConstant.VISIBILITY}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-1 col-sm-1  col-lg-1 col-1 text-center text-white d-flex justify-content-center align-items-center">
                    <div className="text-gray vr  h-100"></div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-lg-4 col-3 text-center text-white ">
                    <RiSendPlaneLine size={22} />
                    <div className=" fs-6 fw-bold mt-2">
                      {WetherDetails.wind_speed}
                      {UnitConstant.WIND_SPEED} {WetherDetails.wind_deg}
                      {UnitConstant.WIND_DEG}
                    </div>
                  </div>
                  <div className="col-md-1 col-sm-1  col-lg-1 col-1 text-center text-white d-flex justify-content-center align-items-center">
                    <div className="text-gray vr h-100"></div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-lg-3 col-3 text-start text-white d-flex justify-content-center align-items-start flex-column ">
                    <div className=" fs-6 fw-bold">
                      Sunrise:
                      <span className="text-white fw-normal">
                        {" "}
                        {WetherDetails.sunrise}{" "}
                      </span>
                    </div>
                    <div className=" fs-6 fw-bold">
                      Sunset:
                      <span className="text-white fw-normal">
                        {" "}
                        {WetherDetails.sunset}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
