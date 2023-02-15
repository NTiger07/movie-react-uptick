import React, { useState } from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";
import MoviesContainer from "./MoviesContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf";
import "../fonts/Sacramento/Sacramento-Regular.ttf";
import "../App.css";

const App = () => {
  // const [movies, setMovies] = useState([]);
  // const [favourites, setFavourites] = useState([]);
  // const [searchValue, setSearchValue] = useState("");
  return (
    <div className="main_container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <SearchBox />
                <MoviesContainer/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
