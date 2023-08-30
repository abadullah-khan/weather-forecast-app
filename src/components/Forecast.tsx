import React from "react";
import { ForecastDataType } from "../types";
import style from "../styles/forecast.module.css";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const Forecast = ({ list }: ForecastDataType) => {
  console.log(typeof list);
  return (
    <div className={style.forecast}>
      Today at
      <div className={style.cardWrapper}>
        {/* {list.slice(0, 8).map((item) => (
          <div className={style.card}>
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
            <span>{item.main.temp}&deg;</span>
          </div>
        ))} */}
        <div>
          {list.map(
            (item) =>
              new Date(item.dt_txt).toISOString().slice(0, 10) ===
                new Date().toISOString().slice(0, 10) && ( // Getting the current date.
                // new Date(item.dt_txt).getDate() === new Date().getDate() && (
                <div className={style.card}>
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
                  <span>{item.main.temp}&deg;</span>
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
                <div className={style.card}>
                  <span>
                    {new Date(item.dt_txt).getHours() % 12 === 0
                      ? 12
                      : new Date(item.dt_txt).getHours() % 12}{" "}
                    {new Date(item.dt_txt).getHours() >= 12 ? "pm" : "am"}
                  </span>
                  <div className={style.iconContainer}>
                    <HiOutlinePaperAirplane />
                  </div>
                  <span>{item.main.temp}&deg;</span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
