import React from "react";
import MoviesItem from "./MoviesItem.jsx";
import countries from "./countries";
import "./MoviesContainer.css";

const MoviesContainer = (props) => {
  const movieselem = props.movies.map(movie()=>{})
  // const movieselem = countries.map(({ id, name, flag }) => (
  //   <MoviesItem key={id} flag={flag} name={name} />
  // ));

  return <div className="movies_container">{movieselem}</div>;
};

export default MoviesContainer;
