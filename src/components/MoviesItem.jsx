import React from "react";
import "./MoviesItem.css";

const MoviesItem = (props) => {
  return (
    <div className="movies_item">
      <div className="movies_item-image">
        <img src={props.poster} alt="movie" />
      </div>
      <div className="movies_item-content">
        <span>{props.title}</span>
        <span>{props.rating}</span>
        <span>favourite</span>
      </div>
    </div>
  );
};

export default MoviesItem;
