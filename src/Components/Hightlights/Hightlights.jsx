import React, { useContext } from "react";
import NavigationIcon from "@material-ui/icons/Navigation";

import "./Hightlights.style.css";
import { TempDataContext } from "../../Context";

function Hightlights() {
  const { allData } = useContext(TempDataContext);
  const wind = allData[0]?.wind?.speed;
  const humidity = allData[0]?.main?.humidity;
  const airPressure = allData[0]?.main?.pressure;
  const visibility = allData[0]?.visibility;

  const cutNumber = (number = 10000) => {
    const string = String(number);
    const num = string.slice(0, 2);
    return num;
  };
  return (
    <>
      <h2 className="hightlight-title">Today's Hightlights</h2>
      <div className="hightlights-container">
      
        {/* Wind */}
        <div className="wind-container container">
          <p>Wind status</p>
          <div className="wind">
            <span className="wind-value value">{wind || ""}</span>
            <span className="unit">mph</span>
          </div>
          <div className="wind-direction">
            <div className="icon-navigation">
              <NavigationIcon style={{ fontSize: "13px", color: "#E7E7EB" }} />
            </div>
            <span>WSW</span>
          </div>
        </div>

        {/* Humidity */}
        <div className="humidity-container container">
          <p>Humidity</p>
          <div className="humidity">
            <span className="humidity-value value">{humidity || ""}</span>
            <span className="unit">%</span>
          </div>
          <div className="bar-container">
            <div className="indices">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="bar">
              <div style={{ width: `${humidity}%` }}></div>
            </div>
            <div className="percentage">
              <span>%</span>
            </div>
          </div>
        </div>

        {/* Visibility */}
        <div className="visibility-container container viair">
          <p>Visibility</p>
          <div className="visibility">
            <span className="visibility-value value">
              {cutNumber(visibility)}
            </span>
            <span className="unit">miles</span>
          </div>
        </div>

        {/* Air pressure */}
        <div className="airPressure-container container viair">
          <p>Air Pressure</p>
          <div className="airPressure">
            <span className="airPressure value">{airPressure || ""}</span>
            <span className="unit">mb</span>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Created by{" "}
          <a target="blank" href="https://github.com/OJailson17">
            Jailson de Oliveira
          </a>{" "}
          - devChallenges.io
        </p>
      </footer>
    </>
  );
}

export default Hightlights;
