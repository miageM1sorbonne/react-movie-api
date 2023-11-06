import React, { Fragment, useState } from "react";
import "./NavBar.css";
import { Routes, Route, NavLink } from 'react-router-dom';
import TMDbLayout from "../TMDbLayout/TMDbLayout";
import WatchLater from "../WatchLater/WatchLater";

// Create a context to provide the 'inputValue' (for search) to child components.
export const Container = React.createContext();

const NavBar = () => { 
    // State to manage the search input value.
    const [inputValue, setInputValue] = useState('');

    return (
        // Provide the 'inputValue' to child components using the context.
        <Container.Provider value={inputValue}> 
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
                {/* Input for searching movies and updating 'inputValue'. */}
                <input type="text" placeholder="Search" onChange={(e) => setInputValue(e.target.value)}/>
            </nav>
            <Routes>
                <Route path="" element={<TMDbLayout />} />    
                <Route path="WatchLater" element={<WatchLater />} />  
            </Routes>
        </Fragment>
        </Container.Provider>
    );
}

export default NavBar;