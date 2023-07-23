import React from "react";
import "./sandwich.css"

export default function Sandwich ({SandwichClick, showMainMenu}) {

    return (
        <div className={"sandwich--wrap"} onClick={SandwichClick}>
            
            <div className="sandwich">
                
                <div className="sandwich--line" id="sl--1"></div>
                <div className="sandwich--line" id="sl--2"></div>
                <div className="sandwich--line" id="sl--3"></div>
                
            </div>
            
        </div>
    )
}