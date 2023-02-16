import React from "react";
import { Link, useParams } from "react-router-dom";
import Error from "./Error";
import "./MoviesDetails.css";
import arrow from "../svgs/arrow-left.svg";

export default function CountriesDetails(props) {
  const { id } = useParams();
  const movie = props.movies.find((m) => String(m.id) === id);

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
          <img src={movie.flag} alt="country-flag" />
        </div>
        <div className="details_content">
          <h1>{movie.name}</h1>
          <div className="points-container">
            <div className="content_pointsone">
              <span>
                <b>Native Name: </b>
                {movie.capital}
              </span>
              <span>
                <b>Population: </b>
                {movie.population}
              </span>
              <span>
                <b>Region: </b>
                {movie.region}
              </span>
              <span>
                <b>Sub Region: </b>
                {movie.region}
              </span>
              <span>
                <b>Capital: </b>
                {movie.capital}
              </span>
            </div>
            <div className="content_pointstwo">
              <span>
                <b>Top Level Domain: </b>-
              </span>
              <span>
                <b>Currencies: </b>-
              </span>
              <span>
                <b>Languages: </b>
                {movie.languages}
              </span>
            </div>
          </div>
          <div className="details_border">
            <b>Border Countries: </b>
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  );
}
