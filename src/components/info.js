import React from "react";
import "./info.css"
import { Link } from 'react-scroll'

export default function Info() {

    return (
        <Link to="about" spy={true} smooth={true} offset={50} duration={500} className={"info--wrap"}>

            <img className="info--img" src="assets/Info_Icon_02.png"></img>
           
        </Link>
    )
}