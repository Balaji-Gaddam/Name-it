import React from "react";
import NameCard from "../nameCard/nameCard";
import './ResultContainer.css' ;

const  ResultContainer= ({suggestedNames}) => {
     const suggestNameJSX = suggestedNames.map((suggestedName) =>{
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
     });
    return(
        <div className="resultContainer">
            {suggestNameJSX}
        </div>
    );
}


export default ResultContainer