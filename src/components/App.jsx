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

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [toggleFilter, setToggleFilter] = React.useState(true);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1531fa9c`;
    const result = await Axios.get(url);
    const resultJson = await result.data;
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
                  <Header setSearchValue={setSearchValue} />
                  <SearchBox
                    setToggleFilter={setToggleFilter}
                    toggleFilter={toggleFilter}
                  />
                </div>
                <MoviesContainer movies={movies} />
                {!toggleFilter && (
                  <DropDown setToggleFilter={setToggleFilter} />
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
