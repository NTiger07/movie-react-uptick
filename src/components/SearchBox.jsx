import React from "react";
import sliderImg from "../svgs/sliders-white.svg";
import searchImg from "../svgs/search.svg";
import "./SearchBox.css";

const SearchBox = (props) => {
  const toggle = () => {
    props.setToggleFilter(!props.toggleFilter);
  };
  return (
    <div className="search_container">
      <button id="filterBtn" onClick={toggle}>
        <img src={sliderImg} alt="slider" className="svgs" />
        Filter
      </button>
      <input
        type="text"
        id="search_input"
        value="spider-man"
        placeholder="Search for a movie, series or game"
        onChange={(e) => props.setSearchValue(`&query=${e.target.value}`)}
        onKeyUp={props.getMovies}
      />
      <button id="searchBtn">
        <img src={searchImg} alt="search" className="svgs" />
      </button>
    </div>
  );
};
export default SearchBox;
