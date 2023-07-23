import React from "react";
import "./project-box-style.css"
import { Link } from "react-router-dom";

import { CSSTransition } from "react-transition-group";


export default function ProjectBox({name, cover, key, visible, ViewProject, darkModeOn}) {
    let [visibleState, setVisibleSate] = React.useState(true)

    React.useEffect(() =>
    {
        setVisibleSate(visible)

    },[])


    let [boxMode, setBoxMode] = React.useState("light")

    React.useEffect(() =>
    {
        darkModeOn?setBoxMode("box--dark"): setBoxMode("box--light")

    })


    
    let projectURL = name.split(" ").join("")




   
    
    return (

        
   
        <CSSTransition key = "project-box" in={!visibleState} timeout={0} classNames="trans">

            <Link className={!visibleState?"box-link":"box-link-hidden"} to={`/projects/${projectURL}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div  className={!visibleState?"project-box":"project-box-hidden"} id={boxMode} >
                    
                    <div className="project--cover--wrap">
                        <img className="project--cover" src={cover===""?"./assets/Projects/Coming_Soon.png":cover}></img>
                    </div>

                    <div className="project--name--wrap" id={boxMode}>
                        <p className="project--name">
                            {name}
                        </p>
                    </div>

                </div>
            </Link>




        </CSSTransition>


            
       
         
       

    )
}


