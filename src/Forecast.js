import React, { useState, useEffect } from "react";
import "./Forecast.css";

export default function Weather(props) {
  let [minTemperature, setMinTemperature] = useState(props.minTemperature);
  let [maxTemperature, setMaxTemperature] = useState(props.maxTemperature);

  useEffect(() => {
    setMinTemperature(props.minTemperature);
    setMaxTemperature(props.maxTemperature);
  }, [props.maxTemperature, props.minTemperature]);

  function showFarehrenheit(event, typeTemperature) {
    event.preventDefault();
    if (typeTemperature === "min") {
      setMinTemperature(Math.round((props.minTemperature * 9) / 5 + 32));
    } else {
      setMaxTemperature(Math.round((props.maxTemperature * 9) / 5 + 32));
    }
    if (typeTemperature === "max") {
      setMaxTemperature(Math.round((props.maxTemperature * 9) / 5 + 32));
    } else {
      setMinTemperature(Math.round((props.minTemperature * 9) / 5 + 32));
    }
  }

  function showCelsius(event, typeTemperature) {
    event.preventDefault();
    if (typeTemperature === "min") {
      setMinTemperature(props.minTemperature);
    } else {
      setMaxTemperature(props.maxTemperature);
    }
    if (typeTemperature === "man") {
      setMaxTemperature(props.maxTemperature);
    } else {
      setMinTemperature(props.minTemperature);
    }
  }

  function showDate(props) {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = monthNames[props.date.getMonth()];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[props.date.getDay()];
    let dayNumber = props.date.getDate();

    return { month, dayNumber, day };
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            {showDate(props).dayNumber} of {showDate(props).month} <br />
            {showDate(props).day}
          </div>
          <div>
            <img src={props.iconUrl} alt="icon" />
          </div>
          <div className="WeatherForecast-description">{props.description}</div>
          <br />
          <div className="WeatherForecast-temperatures">
            <a href="./" onClick={showCelsius} id="celsius-link">
              ºC
            </a>{" "}
            |{" "}
            <a href="./" onClick={showFarehrenheit} id="fahrenheit-link">
              ºF
            </a>
            <br />
            <span className="WeatherForecast-temperature-max">
              {" "}
              Max: {maxTemperature}{" "}
            </span>
            <br />
            <span className="WeatherForecast-temperature-min">
              {" "}
              Min: {minTemperature}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
