import React, { Fragment, useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Container } from "../../App"; 

const NavBar = ({ setInputValue }) => {
  const inputValue = useContext(Container); 

  return (
    <Fragment>
      <nav className="navbar">
        <div className="nav-option">
          <h1>NETFLUX</h1>
          <NavLink to="">
            <span>Movies</span>
          </NavLink>
          <NavLink to="/WatchLater">
            <span>Watch Later</span>
          </NavLink>
        </div>
        <input type="text" placeholder="Search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </nav>
    </Fragment>
  );
};

export default NavBar;
