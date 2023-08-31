import React from "react";
import style from "../styles/weekDaysForecast.module.css";
import { ForecastDataType } from "../types";

const WeekDaysForecast = ({ list }: ForecastDataType) => {
  return (
    <div className={style.weekDaysForecast}>
      5 Days Forecast
      {list.map(
        (item) =>
          item.dt_txt.includes("12:00:00") && (
            <div className={style.card} key={item.dt}>
              <span>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={item.weather[0].main}
                />
                <span>{Math.round(item.main.temp)}&deg;</span>
              </span>
              <span>
                {new Date(item.dt * 1000).toLocaleString(undefined, {
                  day: "numeric",
                  month: "short",
                })}
              </span>
              <span>
                {new Date(item.dt * 1000).toLocaleString(undefined, {
                  weekday: "long",
                })}
              </span>
            </div>
          )
      )}
    </div>
  );
};

export default WeekDaysForecast;
