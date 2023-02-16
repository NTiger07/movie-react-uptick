import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./Header";
import MoviesDetails from "./MoviesDetails";
import SearchBox from "./SearchBox";
import MoviesContainer from "./MoviesContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf";
import "../fonts/Sacramento/Sacramento-Regular.ttf";
import "../App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
                <Header setSearchValue={setSearchValue} />
                <MoviesContainer movies={movies} />
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
