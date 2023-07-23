import React from "react";
import "./globalstyles.css";
import ToggleSwitch from "./toggle-switch";
import Sandwich from "./sandwich";
import About from "./about";
import { motion, transform } from "framer-motion";
import Info from "./info.js";


export default function UpperBar({ToggleMode}) {

    var [showMainMenu, setShowMainMenu] = React.useState(false)
    var[suffix, setSuffix] = React.useState("") 



    return (

        <div className="upper--bar">

            <div className="upper--bar--left--side">

                <a className="logo--wrap">
                    <img id="joscoyne--logo" src="assets/New_Logo_Draft_01.png" alt="joscoyne"></img>
                </a>
            

            </div>

            <div className="upper--bar--right--side">

               
               <Info/>


            </div>

        </div>

    )

}
