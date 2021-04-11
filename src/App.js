import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <div>
          <Weather />
        </div>
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
