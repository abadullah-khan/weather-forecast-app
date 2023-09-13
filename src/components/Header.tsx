import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import style from "../styles/header.module.css";
import { HandleFetchDataType } from "../types";

type Prop = {
  handleFetchData: HandleFetchDataType;
};

const Header = ({ handleFetchData }: Prop) => {
  const [city, setCity] = useState("");
  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <TiWeatherPartlySunny className={style.logoIcon} />
        <span>WeatherForecast</span>
      </div>
      <div className={style.searchContainer}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
