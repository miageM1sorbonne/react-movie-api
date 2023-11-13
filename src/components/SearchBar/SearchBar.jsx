import React, {useContext } from "react";
import { Container } from "../../App"; 
import './SearchBar.css';
 {/*import {AiOutlineSearch} from 'react-icons/io';*/}

const SearchBar = ({ setInputValue }) => {
    const inputValue = useContext(Container); 
  
    return (
        <div className="sc-AxhUy fxWvvr">
            <div className="sc-AxgMl cVmQYF">
            {/*<AiOutlineSearch/>*/}
                <input type="text" placeholder="Search for a movie" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>  
        </div>  

    );
  };
  
  export default SearchBar;
  