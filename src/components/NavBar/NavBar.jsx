import React, { Fragment} from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Container } from "../../App"; 
import Logo from '../Logo/Logo';

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="nav-option">
          
          <NavLink to="">
          <Logo></Logo>
          </NavLink>
          <NavLink to="">
          <span>Movie List</span>
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
  