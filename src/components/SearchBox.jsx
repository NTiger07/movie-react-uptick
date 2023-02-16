import React from "react";
import sliderImg from "../svgs/sliders-white.svg";
import searchImg from "../svgs/search.svg";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div className="search_container">
      <button id="filterBtn" onClick={props.toggle}>
        <img src={sliderImg} alt="slider" className="svgs" />
        Filter
      </button>
      <input
        type="text"
        id="search_input"
        placeholder="Search for a movie"
        onChange={(e) => props.setSearchValue(e.target.value)}
        onKeyUp={props.getMovies}
      />
      <button id="searchBtn">
        <img
          src={searchImg}
          alt="search"
          className="svgs"
          onClick={props.getMovies}
          disabled={props.isLoading}
        />
      </button>
    </div>
  );
};
export default SearchBox;
