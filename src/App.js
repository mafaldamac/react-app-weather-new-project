import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import Search from "./Search-tab";
import Forecast from "./Forecast";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(``);
  let [wind, setWind] = useState(``);
  let [humidity, setHumidity] = useState(``);
  let [description, setDescription] = useState(``);
  let [iconUrl, setIconUrl] = useState(``);
  let [date, setDate] = useState(new Date());
  let [forecasts, setForecasts] = useState([]);
  useEffect(() => {
    if (!city) {
      searchCity("Lisbon");
    }
  }, [city]);

  const searchCity = (cityName) => {
    setCity(cityName);
    const apiKey = "be65b4815a4ad8711d696d04653d1f47";
    const units = "metric";
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
    axios.get(urlWeather).then((response) => {
      const latitude = response.data.coord.lat;
      const longitude = response.data.coord.lon;
      setTemperature(Math.round(response.data.main.temp));
      setWind(Math.round(response.data.wind.speed));
      setHumidity(Math.round(response.data.main.humidity));
      setDescription(response.data.weather[0].description);
      setIconUrl(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      setDate(new Date(response.data.dt * 1000));
      setTemperature(Math.round(response.data.main.temp));
      setIconUrl(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      // Forecast
      const urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
      axios.get(urlForecast).then((response) => {
        const newForcasts = [];
        for (let index = 1; index < 5; index++) {
          const data = {
            minTemperature: Math.round(response.data.daily[index].temp.min),
            maxTemperature: Math.round(response.data.daily[index].temp.max),
            date: new Date(response.data.daily[index].dt * 1000),
            icon: `http://openweathermap.org/img/wn/${response.data.daily[index].weather[0].icon}@2x.png`,
            description: response.data.daily[index].weather[0].description,
          };
          newForcasts.push(data);
        }
        setForecasts(newForcasts);
      });
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
            defaultCity="Lisbon"
            temperature={temperature}
            city={city}
            wind={wind}
            humidity={humidity}
            description={description}
            iconUrl={iconUrl}
            date={date}
          />
          <div className="row">
            {forecasts.map((data, index) => {
              return (
                <div key={index} className="col-3">
                  <Forecast
                    defaultCity="Lisbon"
                    minTemperature={data.minTemperature}
                    maxTemperature={data.maxTemperature}
                    city={data.city}
                    description={data.description}
                    iconUrl={data.icon}
                    date={data.date}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <br />
        <footer>
          This project was coded by Mafalda Lourenço
          <a href="https://github.com/mafaldamac/react-app-weather-new-project/">
            {" "}
            open-source on Github{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
