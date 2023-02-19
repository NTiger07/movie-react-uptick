/* eslint-disable no-lone-blocks */
import React from "react";
import { Link } from "react-router-dom";
import MoviesItem from "./MoviesItem.jsx";
import LoadingSpinner from "./LoadingSpinner";
import "./MoviesContainer.css";

const MoviesContainer = (props) => {
  const img_url = "https://image.tmdb.org/t/p/w500";
  const movieselem = props.movies.map((movie) => {
    return (
      <Link to={`/movies/${movie.id}`}>
        <MoviesItem
          key={movie.id}
          poster={img_url + movie.poster_path}
          title={movie.original_title}
          date={movie.release_date}
          rating={movie.vote_average}
          plot={movie.overview}
          genre={movie.genre_ids}
        />
      </Link>
    );
  });

  return (
    <>
      <div className="movies_container">{movieselem}</div>
      {props.isLoading && (
        <div className="loading_container">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default MoviesContainer;
