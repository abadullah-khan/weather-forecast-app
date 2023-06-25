import React from "react";
import axios from "axios";
import "./styles/variables.css";
import style from "./styles/App.module.css";

import Header from "./components/Header";

import { HandleFetchData } from "./types";

function App() {
  const handleFetchData: HandleFetchData = async (city) => {
    try {
      const getCurrentWeather = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const getForecast = axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const [responseWeather, responseForecast] = await Promise.all([
        getCurrentWeather,
        getForecast,
      ]);
      console.log(responseWeather);
      console.log(responseForecast);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={style.App}>
      <div className={style.headerContainer}>
        <Header handleFetchData={handleFetchData} />
      </div>
    </div>
  );
}

export default App;
