import "./project-view-styles.css"
import { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {useParams, useNavigate} from "react-router-dom";


export default function ProjectView () {

    const {id} = useParams();
    const navigate = useNavigate();



        const ProjectToView = lazy(() => import(`./projects/${id}.js`));



    const HandleClose = () => {
        navigate("/")
    }

    return (
        <div className="project--view">
            <div className="project--view--close--wrap">
                <img className="close--img" src="/assets/close.png" onClick={HandleClose}></img>
            </div>
            <Suspense fallback={<div><h2>Loading...</h2></div>}>

                <motion.div initial={{opacity:0}} animate={{opacity:1,  transitionDuration:"0.4s"}} exit={{transform:"scale(0)", width:"0%"}}> 
                    <ProjectToView /> 
                </motion.div>
            </Suspense>
           
        </div>
    )
}