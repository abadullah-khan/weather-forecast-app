import React from "react";
import { ForecastDataType } from "../types";
import style from "../styles/forecast.module.css";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const Forecast = ({ list }: ForecastDataType) => {
  return (
    <div className={style.forecast}>
      Today at
      <div className={style.cardWrapper}>
        <div>
          {list.map(
            (item) =>
              new Date(item.dt_txt).toISOString().slice(0, 10) ===
                new Date().toISOString().slice(0, 10) && ( // Getting the current date.
                // new Date(item.dt_txt).getDate() === new Date().getDate() && (
                <div className={style.card} key={item.dt}>
                  <span>
                    {new Date(item.dt_txt).getHours() % 12 === 0
                      ? 12
                      : new Date(item.dt_txt).getHours() % 12}{" "}
                    {new Date(item.dt_txt).getHours() >= 12 ? "pm" : "am"}
                  </span>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt={item.weather[0].main}
                  />
                  <span>{Math.round(item.main.temp)}&deg;c</span>
                </div>
              )
          )}
        </div>
        <hr />
        <div>
          {list.map(
            (item) =>
              new Date(item.dt_txt).toISOString().slice(0, 10) ===
                new Date().toISOString().slice(0, 10) && (
                <div className={style.card} key={item.dt}>
                  <span>
                    {new Date(item.dt_txt).getHours() % 12 === 0
                      ? 12
                      : new Date(item.dt_txt).getHours() % 12}{" "}
                    {new Date(item.dt_txt).getHours() >= 12 ? "pm" : "am"}
                  </span>
                  <div
                    className={style.iconContainer}
                    style={{ rotate: `${item.wind.deg}deg` }}
                  >
                    <HiOutlinePaperAirplane />
                  </div>
                  <span>{item.wind.speed} m/s</span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
