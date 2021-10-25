import React, { useContext } from "react";
import { TempDataContext } from "../../Context";
import calculateArray from "../../utils/calculateArray";
import convertTemp from "../../utils/convertTemp";
import getIcon from "../../utils/getIcons";
import getDate from "../../utils/getDate";

import Hightlights from "../Hightlights/Hightlights";

import "./WeekDay.style.css";

function WeekDays({ description, date }) {
  const { allData } = useContext(TempDataContext);

  const weekDays = calculateArray(allData);
  weekDays.splice(1, 1);
  const fullDateArr = getDate();
  fullDateArr.shift();

  // Generate a random number
  const generateKey = () => Math.random() * 18979832;

  return (
    <div className="weekDaysContainer">
      <div className="weekDays">
        {weekDays.map((element, i) => (
          <div className="day-container" key={generateKey()}>
            <p>
              {element?.dt === weekDays[0]?.dt ? "Tomorrow" : fullDateArr[i]}
            </p>
            <img src={getIcon(element?.weather[0]?.id)} alt="" />
            <div className="minmax">
              <span className="max">
                {convertTemp("Kelvin2C", element?.main?.temp_max)}°C
              </span>
              <span className="min">
                {convertTemp("Kelvin2C", element?.main?.temp_min)}°C
              </span>
            </div>
          </div>
        ))}
      </div>
      <Hightlights />
    </div>
  );
}

export default WeekDays;
