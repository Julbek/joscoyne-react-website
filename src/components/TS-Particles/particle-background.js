
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import particlesConfigLight from "./particles-config-light";
import particlesConfigDark from "./particles-config-dark";
import { useCallback, useMemo } from "react";
import "./background.css";
import React from "react";





export default function ParticleBackground({darkModeOn}) {

    var [config, setConfig] = React.useState(null)

    React.useEffect(()=>{

        darkModeOn?setConfig(particlesConfigDark):setConfig(particlesConfigLight);
    })


    const options = useMemo(() => {return {}}, []);

    const particlesInit = useCallback ((engine) => {loadSlim(engine)}, []);

    return( 
  
    
    <Particles init={particlesInit} options={config}></Particles>

)
    
}