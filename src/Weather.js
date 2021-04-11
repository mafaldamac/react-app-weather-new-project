import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div class="container">
        <div class="row align-items-start">
          <div class="col">Date</div>
          <div class="col">Icon</div>
          <div class="col">Temperature</div>
        </div>
        <div class="row align-items-center">
          <div class="col">Hour</div>
          <div class="col">Description</div>
          <div class="col">Humidity</div>
        </div>
        <div class="row align-items-end">
          <div class="col">City</div>
          <div class="col">blablabla</div>
          <div class="col">Wind speed</div>
        </div>
      </div>
    </div>
  );
}
