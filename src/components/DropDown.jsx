import React from "react";
import "./DropDown.css";
import Cancel from "../svgs/cancel_icon.png";

export default function DropDown(props) {
  const [parameters, setParameters] = React.useState("");

  var year = React.useRef("");
  var genre = React.useRef("");

  const toggle = () => {
    props.setToggleFilter(true);
  };
  function apply() {
    // var year = year.current.value;
    // var genre = genre.current.value;
    setParameters(`${year}${genre}`);
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
          <select name="genre" id="genre" ref={props.genre}>
            <option value="">All</option>
            <input type="date" name="" id="" />
          </select>
        </div>
        <div className="filter_container-item">
          <span className="label-title">Year</span>
          <select name="year" id="year" ref={props.year}>
            <option value="">All</option>
            <option value="&health=alcohol-cocktail">Alcohol-Cocktail</option>
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
