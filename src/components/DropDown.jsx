import React from "react";
import "./DropDown.css";
import Cancel from "../svgs/cancel_icon.png";

export default function DropDown(props) {
  var year = React.useRef("");

  const toggle = () => {
    props.setToggleFilter(true);
  };
  function apply() {
    var yearValue = `&y=${year.current.value}`;
    props.setYear(yearValue);
    props.setToggleFilter(true);
  }
  function reset() {
    props.setYear("");
  }
  return (
    <div className="drop_down" id="dropDown">
      <div className="dropdown_head">
        <h1>Filter by</h1>
        <img src={Cancel} alt="cancel" className="svgs" onClick={toggle} />
      </div>
      <div className="filter_container">
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
