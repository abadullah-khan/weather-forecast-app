import React from "react";
import { WeatherDataType } from "../types";

// type Prop = {
//   weatherData: WeatherDataType;
// };

const Weather = ({
  coord,
  timezone,
  id,
  name,
  cod,
  weather,
  base,
  main,
  visibility,
  wind,
  clouds,
  dt,
}: WeatherDataType) => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "2px solid white",
          // flex: 1,
          width: "100%",
        }}
      >
        <div>
          <h1 style={{ fontSize: "11rem", padding: "10px" }}>
            {main.temp}
            <sup>0</sup>C
          </h1>
        </div>
        <div
          style={{
            borderLeft: "2px solid white",
            width: "100%",
          }}
        >
          {weather.map((e) => (
            <span
              style={{
                display: "flex",
                padding: "10px",
              }}
            >
              <img
                src={`https://openweathermap.org/img/wn/${e.icon}.png`}
                alt={e.description}
                height={"150px"}
                style={{ border: "1px solid yellow", width: "100%" }}
              />
            </span>
          ))}
          <hr />
          <p style={{ marginLeft: "10px", width: "100%" }}>
            Description :{" "}
            {weather.map((e) => (
              <span style={{ fontSize: "25px" }}>{e.description}, </span>
            ))}
          </p>
          <hr />
          <p style={{ marginLeft: "10px", width: "100%" }}>
            Feels like :{" "}
            <span style={{ fontSize: "25px" }}>{main.feels_like}</span>
          </p>
          <hr />
          <p style={{ marginLeft: "10px", width: "100%" }}>
            Maximum temperature :{" "}
            <span style={{ fontSize: "25px" }}>{main.temp_max}</span>
          </p>
          <hr />
          <p style={{ marginLeft: "10px", width: "100%" }}>
            Minimum temperature :{" "}
            <span style={{ fontSize: "25px" }}>{main.temp_min}</span>
          </p>
          <hr />
          <p style={{ marginLeft: "10px", width: "100%" }}>
            Humidity : <span style={{ fontSize: "25px" }}>{main.humidity}</span>
          </p>
          <hr />
          <p style={{ marginLeft: "10px", width: "100%" }}>
            Pressure : <span style={{ fontSize: "25px" }}>{main.pressure}</span>
          </p>
          <hr />
          {main.grnd_level && (
            <p style={{ marginLeft: "10px", width: "100%" }}>
              Ground level :{" "}
              <span style={{ fontSize: "25px" }}>{main.grnd_level}</span>
            </p>
          )}
          {main.sea_level && (
            <p style={{ marginLeft: "10px", width: "100%" }}>
              Sea level :{" "}
              <span style={{ fontSize: "25px" }}>{main.sea_level}</span>
            </p>
          )}
          <p style={{ padding: "10px" }}>Wind Icon</p>
          <hr />
          <h3>Wind</h3>
          <hr />
          <p style={{ marginLeft: "10px", width: "100%" }}>
            Speed : <span style={{ fontSize: "25px" }}>{wind.speed}</span>
          </p>
          <hr />
          <p style={{ marginLeft: "10px", width: "100%" }}>
            Degree : <span style={{ fontSize: "25px" }}>{wind.deg}</span>
          </p>
          {wind.gust && (
            <p style={{ marginLeft: "10px", width: "100%" }}>
              <hr />
              Gust : <span style={{ fontSize: "25px" }}>{wind.gust}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
