import React from "react";
import PresentationBox from "./project-components/presentation-box.js";
import "./project-components/presentation-box.css";
import "./InSearchofDarkMatter.css";
import "./JulianBektashi.css"

import {useNavigate} from "react-router-dom";




export default function JulianBektashi() {



  
  const navigate = useNavigate();



  const HandleClose = () => {
      navigate("/")
  }

  
  function Tooltip() {


  return (
    <div>
      <p id="tooltip-p">
        <ul>
        <p id="tooltip-p"><b>Here's a list of some of the coolest things a unicorn can do:</b></p>
        <li>
        <b>Fly</b>: Unicorns are legendary creatures that are said to have the ability to fly.
        </li>
        <li>
        <b>Magic:</b> Unicorns are believed to possess magical powers, and can perform a variety of magical feats such as creating rainbows, granting wishes, and healing the sick.
        </li>
        <li>
        <b>Invisibility:</b> Unicorns have the ability to become invisible, allowing them to escape from danger or avoid unwanted attention.
        </li>
        <li>
        <b>Transformation:</b> Unicorns have the ability to transform themselves into any shape or form they desire.
        </li>
        <li>
        <b>Time Travel:</b> Unicorns have the power to travel through time and see into the future.
        </li>
        <li>
        <b>Telepathy:</b> Unicorns can communicate with others telepathically, and can sense the thoughts and emotions of those around them.
        </li>
        <li>
        <b>Summoning:</b>  Unicorns can summon other mythical creatures and control the elements.
        </li>
          </ul>
      </p>
    </div>
  );




}





  return (

    <div className="project--view">
    <div className="project--view--close--wrap">
        <img className="close--img" src="/assets/close.png" onClick={HandleClose}></img>
    </div>
    <div className="presentation--wrap">
<PresentationBox
structure={"presentation--intro"}
id={"julian"}
imgSrc="/Projects/Julian_Bektashi/Julian_Bektashi_Photo_01_Colour.jpg"
title={"About Julian Bektashi"}
text={
  <div>
    <p>
      Julian has a strong background in all things design, all things
      Imagery, and all things sound. That said, if you called him a
      “visual person” or, heaven fordbid, "left-brained", he would
      promptly let you know that he’s also a “scientific
      method-evidence-based guy”, that has a keen interest in technical
      stuff, and that the best creative ideas are the result of intense
      interaction between the two brain hemispheres.
    </p>

    <p>
      Julian has studied architecture, where, among other things, has
      developed a solid design thinking and a good sense of seeing the
      “forest for the trees”. His work experience includes architecture, CGI and graphic design.
      Since 2020 he has been working on his programming skills by using python and javascript.

    </p>

    <p>
      Based on well established taxonomic conventions, Julian roughly falls
      under the category of a
      <ev2>
        unicorn
        <span className="tooltip-2">
          <Tooltip/>
        </span>
      </ev2>
      .
    </p>
  </div>
}
/>
</div>

   
</div>
    
  );
}



