import "./Card.css";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import { RiSendPlaneLine } from "react-icons/ri";
import { UnitConstant } from "../../Constant/UnitConstant";

function Card({ WetherDetails, color }) {
  const navigate = useNavigate();

  const clickhandller = () => {
    const share = {
      WetherDetails,
      color,
    };
    navigate(`${WetherDetails.name}`, { state: share });
  };

  return (
    <div
      className="card cursor-pointer border-0 shadow-lg"
      onClick={clickhandller}
    >
      <div className={"card-header bg-cloud " + color}>
        <div className="text-end text-white close">
          <IoCloseOutline />{" "}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6 text-center text-white">
              <div className=" fs-5 fw-bolder">
                {WetherDetails.name}, {WetherDetails.country}
              </div>
              <div className=" fs-7 ">
                {WetherDetails.time}, {WetherDetails.date}
              </div>
            </div>

            <div className="col-6 text-center text-white">
              <div className=" fs-1">
                {parseInt(WetherDetails.temp)}{UnitConstant.CELSIUS}
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-6 text-center text-white d-flex justify-content-center align-items-center  gap-2">
              <div className="fs-3 text-center mb-2">
                <Icon icon={WetherDetails.icon} />
              </div>
              <div className=" fs-6 fw-bold text-center">
                {WetherDetails.description}
              </div>
            </div>

            <div className="col-6 text-center text-white mb-3">
              <div className=" fs-7 fw-bold">
                Temp Min : {parseInt(WetherDetails.temp_min)}
                {UnitConstant.CELSIUS}
              </div>
              <div className=" fs-7 fw-bold">
                Temp Max : {parseInt(WetherDetails.temp_max)}
                {UnitConstant.CELSIUS}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer bg-black-light border-0 pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3  col-3 text-start text-white">
              <div className=" fs-8 fw-bold">
                Presure:
                <span className="text-white fw-normal">
              
                  {WetherDetails.presure}{UnitConstant.PREASUER}
                </span>
              </div>
              <div className=" fs-8 fw-bold">
                Humidity:
                <span className="text-white fw-normal">
                 
                  {WetherDetails.humidity}{UnitConstant.HUMIDITY}
                </span>
              </div>
              <div className=" fs-8 fw-bold">
                Visibility:
                <span className="text-white fw-normal">
                  {WetherDetails.visibility}{UnitConstant.VISIBILITY}
                </span>
              </div>
            </div>
            <div className="col-md-1 col-sm-1  col-1 text-center text-white d-flex justify-content-center align-items-center">
              <div className="text-gray vr  h-100"></div>
            </div>
            <div className="col-md-4 col-sm-4  col-3 text-center text-white ">
              <RiSendPlaneLine />
              <div className=" fs-8 fw-bold mt-2">
                {WetherDetails.wind_speed}
                {UnitConstant.WIND_SPEED} {WetherDetails.wind_deg}
                {UnitConstant.WIND_DEG}
              </div>
            </div>
            <div className="col-md-1 col-sm-1   col-1 text-center text-white d-flex justify-content-center align-items-center">
              <div className="text-gray vr h-100"></div>
            </div>
            <div className="col-md-3 col-sm-3  col-3 text-start text-white d-flex justify-content-center align-items-start flex-column ">
              <div className=" fs-8 fw-bold">
                Sunrise:
                <span className="text-white fw-normal">
                  {" "}
                  {WetherDetails.sunrise}{" "}
                </span>
              </div>
              <div className=" fs-8 fw-bold">
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
  );
}

export default Card;
