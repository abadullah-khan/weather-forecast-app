import React from "react";
import { WeatherDataType } from "../types";

import style from "../styles/highlights.module.css";

import { PiThermometer } from "react-icons/pi";
import { WiHumidity, WiRainWind } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { BiWind } from "react-icons/bi";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { GiWindSlap } from "react-icons/gi";

const Highlights = ({
  main: { feels_like, temp_max, temp_min, humidity, pressure },
  visibility,
  wind: { speed, deg, gust },
  sys: { sunrise, sunset },
  rain,
}: WeatherDataType) => {
  return (
    <div className={style.highlights}>
      Today's highlights
      <div className={style.cardWrapper}>
        <div className={style.card}>
          <span className={style.iconContainer}>
            <PiThermometer />
          </span>
          <div className={style.detailsContainer}>
            <p>
              Feels like :{" "}
              <span>
                {feels_like}
                &deg;
                <sup>c</sup>
              </span>
            </p>
            <p>
              Max temp :{" "}
              <span>
                {temp_max}&deg;<sup>c</sup>
              </span>
            </p>
            <p>
              Min temp :{" "}
              <span>
                {temp_min}&deg;<sup>c</sup>
              </span>
            </p>
          </div>
        </div>
        <div className={style.card}>
          <span className={style.iconContainer}>
            <WiHumidity />
          </span>
          <div className={style.detailsContainer}>
            <p>
              Humidity :{" "}
              <span>
                {humidity}
                <span>%</span>
              </span>
            </p>
          </div>
        </div>
        <div className={style.card}>
          <span className={style.iconContainer}>
            <MdOutlineVisibility />
          </span>
          <div className={style.detailsContainer}>
            <p>
              Visibility :{" "}
              <span>
                {visibility / 1000}
                <span>km</span>
              </span>
            </p>
          </div>
        </div>
        <div className={style.card}>
          <span className={style.iconContainer}>
            <BiWind />
          </span>
          <div className={style.detailsContainer}>
            <p>
              Speed :{" "}
              <span>
                {speed}
                <span>m/s</span>
              </span>
            </p>
            <p>
              Deg :{" "}
              <span>
                {deg}
                &deg;
              </span>
            </p>
            <p>
              Gust :{" "}
              <span>
                {gust}
                <span>m/s</span>
              </span>
            </p>
          </div>
        </div>
        <div className={style.card}>
          <span className={style.iconContainer}>
            <FiSunrise />
          </span>
          <div className={style.detailsContainer}>
            <p>
              Sunrise :{" "}
              <span>
                {/* converting UNIX timestamp  */}
                {new Date(sunrise * 1000).toLocaleString(undefined, {
                  hour12: true,
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}{" "}
                {/* PM */}
              </span>
            </p>
          </div>
        </div>
        <div className={style.card}>
          <span className={style.iconContainer}>
            <FiSunset />
          </span>
          <div className={style.detailsContainer}>
            <p>
              Sunset :{" "}
              <span>
                {/* converting UNIX timestamp  */}
                {new Date(sunset * 1000).toLocaleString(undefined, {
                  hour12: true,
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}{" "}
              </span>
            </p>
          </div>
        </div>
        <div className={style.card}>
          <span className={style.iconContainer}>
            <GiWindSlap />
          </span>
          <div className={style.detailsContainer}>
            <p>
              Pressure :{" "}
              <span>
                {pressure}
                <span>hpa</span>{" "}
              </span>
            </p>
          </div>
        </div>
        {rain && (
          <div className={style.card}>
            <span className={style.iconContainer}>
              <WiRainWind />
            </span>
            <div className={style.detailsContainer}>
              {/* We're getting all the entries into an array and mapping it  */}
              {Object.entries(rain).map(([key, value]) => (
                <p key={key}>
                  Rain :{" "}
                  <span>
                    {key} = {value}
                    <span>mm</span>
                  </span>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Highlights;
