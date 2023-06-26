import React, { useState } from "react";
import axios from "axios";
import "./styles/variables.css";
import style from "./styles/App.module.css";

import Header from "./components/Header";

import {
  HandleFetchDataType,
  WeatherDataType,
  ForecastDataType,
} from "./types";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";

function App() {
  //  Initialized the useState variables and specified what type of data it will be having.
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);
  const [forecastData, setForecastData] = useState<ForecastDataType | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  // Function to fetch the data.
  const handleFetchData: HandleFetchDataType = async (city) => {
    try {
      const getWeather = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const getForecast = axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );

      // Fetching data at same time from both APIs.
      const [responseWeather, responseForecast] = await Promise.all([
        getWeather,
        getForecast,
      ]);

      // Storing the weather data in the useState variable.
      setWeatherData(responseWeather.data);
      setForecastData(responseForecast.data);

      setError(null); // Clear any previous error.
    } catch (error) {
      // Storing the error message in the useState variable.

      /* Typescript is unable to infer the type of error object within the catch block and typescript doesn't allow explicitly typed catch clause variables in this manner so, we type assertion to cast the error object to the error type. */
      console.log((error as Error).message);
      setError((error as Error).message);
    }
  };
  console.log(weatherData);
  console.log(forecastData);
  return (
    <div className={style.App}>
      <div className={style.headerContainer}>
        <Header handleFetchData={handleFetchData} />
      </div>
      <div className={style.weatherContainer}>
        {weatherData && <Weather {...weatherData} />}
      </div>
      <div>{forecastData && <Forecast {...forecastData} />}</div>
    </div>
  );
}

export default App;
