import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import style from "../styles/header.module.css";
import { HandleFetchDataType, WeatherDataType } from "../types";

type Prop = {
  handleFetchData: HandleFetchDataType;
  weatherData: WeatherDataType | null;
};

const Header = ({ handleFetchData, weatherData }: Prop) => {
  const [city, setCity] = useState("");
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.key === "Enter") {
      handleFetchData(city);
    }
  };
  return (
    <div className={weatherData ? style.header : style.onlyHeader}>
      <div className={style.logoContainer}>
        <TiWeatherPartlySunny className={style.logoIcon} />
        <span>WeatherForecast</span>
      </div>
      <div className={style.searchContainer}>
        <input
          type="search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyUp={(e) => handleKeyUp(e)}
          placeholder="Enter city name"
          style={{
            border: ` 2px solid ${
              city ? "rgb(231, 227, 227)" : "rgb(186, 189, 187)"
            }`,
          }}
        />
        <button onClick={() => handleFetchData(city)} title="Search weather">
          <HiSearch className={style.searchIcon} />
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
