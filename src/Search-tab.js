import React, { useState } from "react";
import "./Search-tab.css";

export default function Search(props) {
  let [city, setCity] = useState("");

  function submitForm(event) {
    event.preventDefault();
    props.onSearch(city);
  }
  function updateCityValue(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          className="form-control"
          id="search"
          type="search"
          placeholder="Write the city name here and press Enter key or Search"
          onChange={updateCityValue}
        />
        <input
          type="submit"
          className="btn btn-outline-warning"
          value="Search"
          id="search-button"
        />
      </form>
    </div>
  );
}
