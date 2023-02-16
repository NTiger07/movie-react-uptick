import React from "react";
import "./MoviesItem.css";

const MoviesItem = (props) => {
  return (
    <div className="movies_item">
      <div className="movies_item-image">
        <img src={props.flag} alt="movie" />
      </div>
      <div className="movies_item-content">
        <span>{props.name}</span>
        <span>5.0</span>
        <span>favourite</span>
      </div>
    </div>
  );
};

export default MoviesItem;
