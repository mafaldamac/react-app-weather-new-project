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

  return (
    <div className="Weather">
      <div class="container">
        <div class="row align-items-start">
          <div className="col">11 Abril 2021</div>
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
