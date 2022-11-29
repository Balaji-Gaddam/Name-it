import React from "react";
import './searchBox.css'



const searchBox =({onInputChange}) =>{
    return(
        <div className="search-container">
            <input 
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="type keywords" 
                className="search-input"
              />
        </div>
    );
};

export default searchBox;