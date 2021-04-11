import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import Search from "./Search-tab";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <br />
        <div>
          <Search />
        </div>
        <br />
        <div>
          <Weather />
        </div>
        <br />
        <div>
          <Forecast />
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
