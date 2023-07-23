import "./menu-button-style.css";
import React from "react";
import { LowerBar } from "./navbar";
import AllButton from "./all-button";
import Main from "./main";
import { Link } from "react-scroll";



export default function MenuButton(props) {
   
    return (
    
        <Link className="menu--button--wrap" to="getback" spy={true} smooth={true} offset={50} duration={500}>
            
            <label className="menu--button" onClick={()=> props.ButtonClick(props.catName)} style={props.checked ? {backgroundColor:"rgb(0, 0, 0, 1)", color:"white"}:{backgroundColor:"rgb(0, 0, 0, 0)", color:"black"}} id={props.catName} >
                
                <p className="menu--button--text">{props.catName}</p>

            </label>


        </Link>

    ) 


    
}
