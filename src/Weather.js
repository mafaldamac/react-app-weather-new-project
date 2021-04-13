import React, { useState } from "react";
import "./Weather.css";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function showFarehrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  function showDate(props) {
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
    let hours = props.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return (
      <div>
        {day} {hours}:{minutes}
      </div>
    );
  }

  return (
    <div className="Weather">
      <div class="container">
        <div class="row align-items-start">
          <div className="col">
            {" "}
            <div className="col">{showDate}</div>{" "}
          </div>
          <div className="col">{props.city}</div>
          <div className="col">
            {temperature}{" "}
            <a href="./" onClick={showCelsius} id="celsius-link">
              ºC
            </a>{" "}
            |{" "}
            <a href="./" onClick={showFarehrenheit} id="fahrenheit-link">
              ºF
            </a>
          </div>
        </div>
        <div class="row align-items-center">
          <div className="col">12:00</div>
          <div className="col">
            <img src={props.iconUrl} alt="icon" />
          </div>
          <div className="col">{props.humidity} % Humidity </div>
        </div>
        <div class="row align-items-end">
          <div className="col"></div>
          <div class="col">{props.description}</div>
          <div className="col">{props.wind} Km/h Wind-speed </div>
        </div>
      </div>
    </div>
  );
}
