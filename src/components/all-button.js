import "./menu-button-style.css";
import React from "react";
import MenuButton from "./menu-button";
import Main from "./main";
import { Link } from "react-scroll";



export default function AllButton(props) {
    return (
    
        <Link className="menu--button--wrap" to="getback" spy={true} smooth={true} offset={50} duration={500}>
            
            <label className="menu--button" onClick={props.ResetButtons} style={props.checked ? {backgroundColor:"rgb(0, 0, 0, 1)", color:"white"}:{backgroundColor:"rgb(0, 0, 0, 0)", color:"black"}} id="All" >
                
                <p className="menu--button--text">All</p>

            </label>


        </Link>

    ) 


    
}
