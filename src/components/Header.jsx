import React from "react";
import SearchBox from "./SearchBox";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header_container">
      <nav className="navbar">
        <h1 className="logo">The Movie App</h1>
      </nav>
      <SearchBox setSearchValue={props.setSearchValue} />
    </div>
  );
};
export default Header;
