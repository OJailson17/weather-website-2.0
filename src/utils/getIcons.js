import Clear from "../images/Clear.png";
import HeavyCloud from "../images/HeavyCloud.png";
import HeavyRain from "../images/HeavyRain.png";
import LightCloud from "../images/LightCloud.png";
import LightRain from "../images/LightRain.png";
import Shower from "../images/Shower.png";
import Sleet from "../images/Sleet.png";
import Snow from "../images/Snow.png";
import Thunderstorm from "../images/Thunderstorm.png";

const getIcon = (conditionId) => {
  const icons = {
    211: Thunderstorm,
    500: LightRain,
    503: HeavyRain,
    521: Shower,
    601: Snow,
    611: Sleet,
    800: Clear,
    801: LightCloud,
    802: LightCloud,
    803: LightCloud,
    804: HeavyCloud,
  };

  return icons[conditionId] || icons[800];
};

export default getIcon;
