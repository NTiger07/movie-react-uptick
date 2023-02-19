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
          {props.date.slice(0, 4)}
        </span>
        <span>
          <b>Rating: </b>
          {props.rating === 0 ? "N/A" : props.rating}
        </span>
      </div>
    </div>
  );
};

export default MoviesItem;
