import React from "react";
import { Link } from "react-router-dom";
import MoviesItem from "./MoviesItem.jsx";
import "./MoviesContainer.css";

const MoviesContainer = (props) => {
  const movieselem = props.movies.map((movie) => {
    if (movie.Poster) {
      return (
        <Link to={`/movies/${movie.imdbID}`}>
          <MoviesItem
            key={movie.imdbID}
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            date={movie.Released}
            duration={movie.Runtime}
            plot={movie.Plot}
            genre={movie.Genre}
          />
        </Link>
      );
    }
  });

  return <div className="movies_container">{movieselem}</div>;
};

export default MoviesContainer;
