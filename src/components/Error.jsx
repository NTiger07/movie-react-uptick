import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import arrow from "../svgs/arrow-left.svg";

export default function Error() {
  return (
    <div className="error_container">
      <Link to="/">
        <button id="backButton">
          <span>
            <img src={arrow} alt="arrow" />
            Back
          </span>
        </button>
      </Link>
      <div className="error_content">
        <h1>Error 404</h1>
        <span>Oops, the page you are looking for doesn't exist.</span>
      </div>
    </div>
  );
}
