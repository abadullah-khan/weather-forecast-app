import React, { useState } from "react";
import axios from "axios";
import "./styles/variables.css";
import "./App.css";

import Header from "./components/Header";

import {
  HandleFetchDataType,
  WeatherDataType,
  ForecastDataType,
} from "./types";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import WeekDaysForecast from "./components/WeekDaysForecast";

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
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      const getForecast = axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
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

      /* Typescript is unable to infer the type of error object within the catch block and typescript doesn't allow explicitly typed catch clause variables in this manner so I used any type. */
    } catch (error: any) {
      setWeatherData(null);
      setForecastData(null);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <Header handleFetchData={handleFetchData} weatherData={weatherData} />
      </header>
      {error ? (
        <div className="errorMessage">{error}</div>
      ) : (
        <main>
          <aside>
            {weatherData && <Weather {...weatherData} />}
            {forecastData && <WeekDaysForecast {...forecastData} />}
          </aside>
          <div>
            {weatherData && <Highlights {...weatherData} />}
            {forecastData && <Forecast {...forecastData} />}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
