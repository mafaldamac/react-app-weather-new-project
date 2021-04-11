import React from "react";
import "./Search-tab.css";

export default function Search() {
  return (
    <div>
      Search Engine here
      <div>
        <form>
          <input
            type="search"
            placeholder="Write a city here"
            className="form-search"
          />
          <button type="submit" class="btn btn-outline-warning">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
