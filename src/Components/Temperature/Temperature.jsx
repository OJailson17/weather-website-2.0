import React, { useState, useContext } from "react";
import MenuSearch from "../MenuSearch/MenuSearch";
import getIcons from '../../utils/getIcons'
import convertTemp from '../../utils/convertTemp'
import getDate from '../../utils/getDate'

import MyLocationIcon from "@material-ui/icons/MyLocation";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import { TempDataContext } from '../../Context/index'

import "./Temperature.style.css";

function Temperature() {
  const [widthNav, setWidthNav] = useState(0)
  const { setCity, cityData, allData } = useContext(TempDataContext)
  const id = allData[0]?.weather[0]?.id
  const temp = allData[0]?.main?.temp
  const description = allData[0]?.weather[0]?.main
  const todayDate = getDate()

  const openNav = () => {
    setWidthNav(100)
  }

  const closeNav = () => {
    setWidthNav(0)
  }
  
  return (
    <>
      <div className="main-header">
        <div className="first-container">
          <div className="background"></div>
          <div className="header-buttons">
            <button className="search" onClick={openNav}>Search for places</button>
            <button className="myLocation">
              <MyLocationIcon />
            </button>
          </div>
          <div className="image-temp">
            <img className="image" src={getIcons(id)} alt="" />
          </div>
        </div>
        <MenuSearch width={widthNav} closeNav={closeNav} setWidth={setWidthNav} setCity={setCity}/>

        <div className="second-container" >
          <div className="temperature">
            <p>{convertTemp("Kelvin2C", temp || 300)}</p>
            <span style={{ fontSize: "48px" }}>°C</span>
          </div>

          <div className="weather-description">
            <span>{description}</span>
          </div>

          <div className="extra-info">
            <div className="date">
              <span>Today</span>
              <span style={{ fontSize: "18px" }}>.</span>
              <span>{todayDate[0]}</span>
            </div>
            <div className="location">
              <span>
                <LocationOnIcon />
                {cityData?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Temperature;
