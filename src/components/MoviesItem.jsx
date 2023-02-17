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
        <span>
          <b>Released: </b>
          {props.year}
        </span>
        <span>
          <b>Duration: </b>
          {props.duration}
        </span>
      </div>
    </div>
  );
};

export default MoviesItem;
