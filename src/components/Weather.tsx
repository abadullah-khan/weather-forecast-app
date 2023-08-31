import React from "react";
import { WeatherDataType } from "../types";
import style from "../styles/weather.module.css";

import { ImLocation } from "react-icons/im";
import { BsCalendarWeek } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";

const Weather = ({ name, weather, main, dt, sys }: WeatherDataType) => {
  return (
    <div className={style.weather}>
      Now
      <div>
        <span>
          <ImLocation />
        </span>
        {name}, {sys.country}
      </div>
      <hr />
      <div>
        <h1>
          {/* Rounding the temperature value so that it doesn't get rendered in point. */}
          {Math.round(main.temp)}
          &deg;
          <sup>c</sup>
        </h1>
      </div>
      <hr />
      <div>
        {/* Mapping the weather icons and descriptions */}
        {weather.map((e) => (
          <div className={style.imageContainer} key={e.id}>
            <img
              src={`https://openweathermap.org/img/wn/${e.icon}.png`}
              alt={e.main}
            />
            {e.description}
          </div>
        ))}
      </div>
      <hr />
      <div>
        <span>
          <BsCalendarWeek />
        </span>
        {/* Converting the UNIX timestamp */}
        {new Date(dt * 1000).toLocaleString(undefined, {
          day: "numeric",
          weekday: "long",
          month: "long",
          year: "numeric",
        })}
      </div>
      <hr />
      <div>
        <span>
          <MdAccessTime />
        </span>
        {/* Converting the UNIX timestamp */}
        {new Date(dt * 1000).toLocaleString(undefined, {
          hour: "numeric",
          minute: "numeric",
          timeZoneName: "short",
        })}
      </div>
    </div>
  );
};

export default Weather;
