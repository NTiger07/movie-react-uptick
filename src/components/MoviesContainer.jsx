import React from "react";
import { Link } from "react-router-dom";
import MoviesItem from "./MoviesItem.jsx";
import "./MoviesContainer.css";

const MoviesContainer = (props) => {
  const movieselem = props.movies.map((movie) => {
    return (
      <Link to={`/movies/${movie.imdbID}`}>
        <MoviesItem
          key={movie.imdbID}
          poster={movie.Poster}
          title={movie.Title}
          rating={movie.imdbRating}
        />
      </Link>
    );
  });

  return <div className="movies_container">{movieselem}</div>;
};

export default MoviesContainer;
