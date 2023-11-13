import React, { Fragment} from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="nav-option">
          <h1>NETFLUX</h1>
          <NavLink to="">
            <span>Home</span>
          </NavLink>
          <NavLink to="/WatchLater">
            <span>Watch Later</span>
          </NavLink>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
