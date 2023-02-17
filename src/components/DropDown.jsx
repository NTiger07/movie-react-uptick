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
    var yearValue = year.current.value;
    var genreValue = genre.current.value;
    props.setYear(yearValue);
    props.setGenre(genreValue);
    props.setToggleFilter(true);
  }
  function reset() {
    year.current.value = "";
    genre.current.value = "";
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
            <option value="">All</option>
            <option value="&y=2023">Action</option> `bla bla`
            <option value="&y=2022">2022</option>
            <option value="&y=2021">2021</option>
            <option value="&y=2020">2020</option>
            <option value="&y=2019">2019</option>
          </select>
        </div>
        <div className="filter_container-item">
          <span className="label-title">Year</span>
          <select name="year" id="year" ref={year}>
            <option value="">All</option>
            <option value="&y=2023">2023</option>
            <option value="&y=2022">2022</option>
            <option value="&y=2021">2021</option>
            <option value="&y=2020">2020</option>
            <option value="&y=2019">2019</option>
          </select>
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
