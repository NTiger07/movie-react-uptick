import React from "react";
import "./DropDown.css";
import Cancel from "../svgs/cancel_icon.png";

export default function DropDown(props) {
  var year = React.useRef("");
  var genre = React.useRef("");

  const toggle = () => {
    props.setToggleFilter(true);
  };
  function apply() {
    var yearValue = `&with_genres=${year.current.value}`;
    var genreValue = `&release_year=${genre.current.value}`;
    props.setYear(yearValue);
    props.setGenre(genreValue);
    props.setToggleFilter(true);
  }
  function reset() {
    props.setYear("");
    props.setGenre("");
    props.setToggleFilter(true);
  }
  return (
    <div className="drop_down" id="dropDown">
      <div className="dropdown_head">
        <h1>Filter by</h1>
        <img src={Cancel} alt="cancel" className="svgs" onClick={toggle} />
      </div>
      <div className="filter_container">
        <div className="filter_container-item">
          <span className="label-title">Genre</span>
          <select name="genre" id="genre" ref={genre}>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Sci-Fi</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </select>
        </div>
        <div className="filter_container-item">
          <span className="label-title">Year</span>
          <input
            type="number"
            min="1950"
            max="2023"
            name="year"
            id="year"
            ref={year}
            defaultValue="2023"
          />
        </div>
      </div>
      <div className="filter_container-button">
        <button id="resetBtn" onClick={reset}>
          Reset
        </button>
        <button id="applyBtn" onClick={apply}>
          Apply
        </button>
      </div>
    </div>
  );
}
