import {
  BsSun,
  BsCloudDrizzle,
  BsClouds,
  BsCloudy,
  BsCloudSun,
  BsCloudFog,
} from "react-icons/bs";
import { ICONS } from "../../Constant/IconConstant";

function Icon({ icon }) {
  return (
    <>
      {icon === ICONS.BsSun && <BsSun />}
      {icon === ICONS.BsCloudDrizzle && <BsCloudDrizzle />}
      {icon === ICONS.BsClouds && <BsClouds />}
      {icon === ICONS.BsCloudy && <BsCloudy />}
      {icon === ICONS.BsCloudSun && <BsCloudSun />}
      {icon === ICONS.BsCloudFog && <BsCloudFog />}
    </>
  );
}

export default Icon;
