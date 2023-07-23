import "./big-logo.css"
import React from "react"



export default function BigLogo({darkModeOn}) {

    let [animationSuffix, setAnimationSuffix] = React.useState("")
    let [bigLogoMode, setBigLogoMode] = React.useState("logo--light")



    React.useEffect(()=>{
        return darkModeOn===true? setBigLogoMode("logo--dark"): setBigLogoMode("logo--light");
    })
    
    
    function Expand() {
        setAnimationSuffix("--trans")
    }

    function contract() {
        setAnimationSuffix("")
    }


    return (
        <div className="big--logo--wrap" id={bigLogoMode}>

            <div className="big--logo--img--wrap">
                <img className="big--logo--img" onMouseOver={Expand} onMouseOut={contract} id={"Z3"+ animationSuffix} src="./assets/Big_Logo_Z3.png" ></img>
            </div>

            <div className="big--logo--img--wrap">
                <img className="big--logo--img" onMouseOver={Expand} onMouseOut={contract} id={"Z2"+ animationSuffix} src="./assets/Big_Logo_Z2.png"></img>
            </div>
            
            <div className="big--logo--img--wrap">
                <img className="big--logo--img" onMouseOver={Expand} onMouseOut={contract} id={"Z1"+ animationSuffix} src="./assets/Big_Logo_Z1.png"></img>
            </div>
            
        </div>
    )
}






