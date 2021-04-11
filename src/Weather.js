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
          <div class="col">Date</div>
          <div class="col">{props.iconUrl}</div>
          <div class="col">{temperature}</div>
          <span className="TempUnits">
            {" "}
            <a href="./" onClick={showCelsius} id="celsius-link">
              ºC
            </a>{" "}
            |{" "}
            <a href="./" onClick={showFarehrenheit} id="fahrenheit-link">
              ºF
            </a>
          </span>
        </div>
        <div class="row align-items-center">
          <div class="col">Hour</div>
          <div class="col">{props.description}</div>
          <div class="col">{props.humidity}</div>
        </div>
        <div class="row align-items-end">
          <div class="col">{props.city}</div>
          <div class="col">blablabla</div>
          <div class="col">{props.wind}</div>
        </div>
      </div>
    </div>
  );
}
