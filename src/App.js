import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import Search from "./Search-tab";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState(``);
  let [temperature, setTemperature] = useState(``);
  let [wind, setWind] = useState(``);
  let [humidity, setHumidity] = useState(``);
  let [description, setDescription] = useState(``);
  let [iconUrl, setIconUrl] = useState(``);

  const searchCity = (cityName) => {
    setCity(cityName);
    const apiKey = "be65b4815a4ad8711d696d04653d1f47";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
    axios.get(url).then((response) => {
      setTemperature(Math.round(response.data.main.temp));
      setWind(Math.round(response.data.wind.speed));
      setHumidity(Math.round(response.data.main.humidity));
      setDescription(response.data.weather[0].description);
      setIconUrl(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    });
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <br />
        <div>
          <Search onSearch={searchCity} />
        </div>
        <br />
        <div>
          <Weather
            temperature={temperature}
            city={city}
            wind={wind}
            humidity={humidity}
            description={description}
            iconUrl={iconUrl}
          />
        </div>

        <br />
        <footer>
          This project was coded by Mafalda Lourenço and is
          <a href="https://github.com/mafaldamac/react-app-weather-new-project/">
            {" "}
            open-source on Github{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
