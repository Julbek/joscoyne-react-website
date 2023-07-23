import "./toggle-switch-style.css";

import React from "react";
import { ModeContext } from "../App";


let app



export default function ToggleSwitch({ToggleMode}) 
    
    {

        return (

            <div className="toggle--switch--wrap">

               
                <label className="toggle" >
                    
                    <input  className = "toggle--input "type="checkbox"></input>
                    <span className="slider" onClick={ToggleMode}>
                       
                        <p className="toggle--switch--icons">
                        <img className="toggle--switch--icon" src="./assets/Moon_Icon.png"></img>
                            <img className="toggle--switch--icon" src="./assets/Sun_Icon.png"></img>
                            
                         </p>

                    </span>
                    
                </label>

            </div>
            

        )


    }