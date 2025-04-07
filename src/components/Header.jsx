import React from "react";
import image from "./img/disney.png";
import image2 from "./img/search.png";
import { IoMdMenu } from "react-icons/io";


const Header = ()=>{
    return(
        <div className="Header">
            <div className="header">
                <div className="logo">
                    <img src={image} alt="disney"/>
                </div>
                <div className="headertext">
                    <nav>
                        <ul>
                            <li>DISNEY+</li>
                            <li>PARKS & TRAVEL</li>
                            <li>MOVIES</li>
                            <li>SHOP</li>
                            <li>MORE</li>
                        </ul>
                    </nav>
                    <div className="leftheader">
                        <div>SIGN IN</div>
                        <div className="searchspace">
                            <input type="text" placeholder="Search"/>
                            <div className="search">
                                <img src={image2} alt=""></img>
                            </div>
                        </div>   
                    </div>
                    
                </div>
                <div className="menu">
                    <IoMdMenu/>
                </div>
            </div>
        </div>
    )
}

export default Header