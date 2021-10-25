import React, { createContext, useState, useEffect } from "react";
import dotenv from "dotenv";
dotenv.config();

export const TempDataContext = createContext();

export const TempData = ({ children }) => {
  const [city, setCity] = useState("Utinga");
  const [allData, setAllData] = useState({});
  const [cityData, setCityData] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${
    city || "Rio de Janeiro"
  }&lang=pt&appid=${apiKey}`;

  function refreshPage() {
    window.location.reload(false);
  }

  const fetchData = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setCityData(data.city);
        setAllData(data.list);
      })
      .catch((err) => {
        alert("Cidade não encontrada");
        console.log(err);
        window.location.reload();
        refreshPage();
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <TempDataContext.Provider value={{ city, setCity, allData, cityData }}>
      {children}
    </TempDataContext.Provider>
  );
};
