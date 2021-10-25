import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";

import "./MenuSearch.style.css";

const searchIconStyle = {
  color: "#616475",
  width: "17px",
  height: "17px",
  position: "absolute",
  left: "12.5%",
};

function MenuSearch({ width, setWidth, closeNav, setCity }) {
  const recentCities = ["London", "Barcelona", "Long Beach"];
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setCity(inputValue);
      setWidth(0);
      setInputValue("");
    } else {
      alert("Error");
    }
  };

  return (
    <div className="sidenav" style={{ width: `${width}%` }}>
      <span className="closeBtn" onClick={closeNav}>
        <CloseIcon style={{ color: "#E7E7EB", cursor: "pointer" }} />
      </span>
      <div className="sidenav-header">
        <div className="sidenav-input">
          <SearchIcon style={searchIconStyle} />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search location"
              value={inputValue}
              onChange={handleInput}
              autoFocus={true}
            />
          </form>
        </div>
        <button className="searchBtn" onClick={handleSubmit}>
          Seach
        </button>
      </div>

      <div className="recent-search-container">
        {recentCities.map((city) => (
          <div className="recent-city" key={city}>
            <span>{city}</span>
            <ArrowForwardIosIcon style={{ color: "#616475" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSearch;
