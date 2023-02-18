import React from "react";
import { Link, useParams } from "react-router-dom";
import Error from "./Error";
import "./MoviesDetails.css";
import arrow from "../svgs/arrow-left.svg";

export default function CountriesDetails(props) {
  const { id } = useParams();
  const movie = props.movies.find((m) => String(m.imdbID) === id);

  if (!movie) {
    return <Error />;
  }

  return (
    <div className="movies_details-container" id="detailtest">
      <Link to="/">
        <button id="backButton">
          <span>
            <img src={arrow} alt="arrow" />
            Back
          </span>
        </button>
      </Link>
      <div className="details_container">
        <div className="details_image">
          <img src={movie.Poster} alt="country-flag" />
        </div>
        <div className="details_content">
          <h1>{movie.Title}</h1>
          <div className="points-container">
            <span>
              <b>Release Date: {movie.Year}</b>
            </span>
            <span>
              <b>Genre(s): {movie.Genre}</b>
            </span>
            <span>
              <b>Plot: {movie.Plot}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
