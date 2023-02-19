import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./Header";
import MoviesDetails from "./MoviesDetails";
import DropDown from "./DropDown";
import MoviesContainer from "./MoviesContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf";
import "../fonts/Sacramento/Sacramento-Regular.ttf";
import "../App.css";
import SearchBox from "./SearchBox";
require("dotenv").config();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("spider-man");
  const [year, setYear] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [toggleFilter, setToggleFilter] = React.useState(true);

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6db8969ab1758f7f886e121bcbab6c33&query=${searchValue}`;
    const result = await Axios.get(url);
    const resultJson = await result.data;
    console.log(resultJson);
    if (resultJson.Search) {
      setMovies(resultJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="main_container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="header_container">
                  <Header />
                  <SearchBox
                    setSearchValue={setSearchValue}
                    setToggleFilter={setToggleFilter}
                    toggleFilter={toggleFilter}
                  />
                </div>
                <MoviesContainer movies={movies} genre={genre} />
                {!toggleFilter && (
                  <DropDown
                    setToggleFilter={setToggleFilter}
                    setYear={setYear}
                    setGenre={setGenre}
                  />
                )}
              </>
            }
          />
          <Route
            path="/movies/:id"
            element={
              <>
                <MoviesDetails movies={movies} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
