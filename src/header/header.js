import React from "react";
import './header.css';



const Header =({headTitle , headerExpanded}) =>{
    return(
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" className={` ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted' }`} alt="headerimage"></img>
            <h1 className="head-text">{headTitle}</h1>
        </div>
    )
}

export default Header;