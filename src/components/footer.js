import React from "react";
import "./footer.css"



function SocialMediaLink(props) {

    return(
        <a className="social--media--icon--wrap" href={props.link} target= {props.target}>
            
            <img className="social--media--img" src={props.imgsrc}>
            
            </img>
        
        </a>
    )
    
}

function Email(props) {

    let [message, setMessage] = React.useState("Copy to cliboard?")
    let [showMessage, setShowMessage] = React.useState(false)

    function CopyToCliboard() {
        setMessage("Copy To Clipboard?")
        setShowMessage(true)

    }

    function Copied() {
        navigator.clipboard.writeText(props.email)
        setMessage("Copied (:")
        setShowMessage(true)
    }

    function MouseOut() {
        setShowMessage(false)
    }



    return (

        <div className="email--wrap" onMouseEnter={CopyToCliboard} onMouseOut={MouseOut} onClick = {Copied}>
            
            <p className="clip--board" style={showMessage ? {opacity:"1", transiton:"0.1s"} : {opacity:"0", transiton:"0.1s"}}> {message}</p>

            <p className="email" onMouseEnter={CopyToCliboard} onMouseOut={MouseOut} onClick = {Copied} >{props.email}</p>

        </div>

    )

}








export default function Footer({darkModeOn}) {

    let [footerMode, setFooterMode] = React.useState("");

    React.useEffect(()=>{
        darkModeOn?setFooterMode("footer--dark"):setFooterMode("");
    })
    
    return (
        <div className="footer--wrap" id={footerMode}>
            <div className="footer">

                <Email email= "hello@joscoyne.co.uk"/>

                <div className="social--media--wrap">
                    <SocialMediaLink imgsrc= "/assets/Linktree_Icon_BB.png" link="https://linktr.ee/julianbektashi" target = "_blank" />
                    <SocialMediaLink imgsrc= "/assets/Github_Icon_BB.png" link="https://discord.com/users/886192436269953025" target = "_blank" />
                    <SocialMediaLink imgsrc= "/assets/Whatsapp_Icon_BB.png" link="https://wa.me/447395390152" target = "_blank" />
                    <SocialMediaLink imgsrc= "/assets/LinkedIn_Icon_BB.png" link="https://www.linkedin.com/in/julianbektashi/" target = "_blank" />
                </div>

                <div className="copyright--wrap">

                    <p className="copyright--text">

                        ©2023 Joscoyne. All Rights Reserved.

                    </p>


                </div>

            </div>

        </div>  
    )
}