import React from "react"
import PresentationBox from "./project-components/presentation-box.js"
import "./project-components/presentation-box.css"


export default function DekaChambers() {
  return (
    <div className="presentation--wrap" id="presentation--wrap--deka">
      <PresentationBox
        structure={"presentation--intro"}
        id={"deka--logo"}
        imgSrc="/Projects/Deka_Chambers/Deka_Chambers_Logo.png"
        title={"DESIGNING FOR THE LEGAL WORLD"}
        text={
          <div>
            <p>
              Deka Chambers is a leading national and international common law
              Set offering some of the finest advocates and best performing
              barristers across its practice areas. Comprising over 110
              barristers, including 14 market leading Silks, it is one of the
              biggest common law sets in the UK.
            </p>

            <p>
              Deka Chambers is a brand resulting from a recent merge between two
              very successful sets: 9 Gough Chambers and 1 Chancery Lane. The
              following web and print products were consciously developed
              following the client's branding guidelines.
            </p>

            <p>
              <b>Products designed:</b> Briefing Booklets, Magazine Ads, Event
              Banners, Social Media Templates, Powerpoint Projects.
            </p>
          </div>
        }
      />


      <PresentationBox
        structure={"text-2-img"}
        id={"deka"}
        imgSrc="/Projects/Deka_Chambers/Clin_Neg_Rollup_Banner.jpg"
        imgSrc2="/Projects/Deka_Chambers/General_Rollup_Banner.jpg"
        heading={"Event Banners (800x2000mm)"}

      
      />

      <PresentationBox
        structure={"img-text"}
        id={"deka"}
        imgSrc="/Projects/Deka_Chambers/Deka_Chambers_PI_Focus_Ad.jpg"
        heading={"Magazine Ad (A4)"}

      
      />


      <PresentationBox
        structure={"4-img"}
        heading={"Briefing Booklet"}
        id={"deka"}
        imgSrc="/Projects/Deka_Chambers/Briefing_04.jpg"
        imgSrc2="/Projects/Deka_Chambers/Briefing_01.jpg"
        imgSrc3="/Projects/Deka_Chambers/Briefing_03.jpg"
        imgSrc4="/Projects/Deka_Chambers/Briefing_02.jpg"
      
      />

      <PresentationBox
        structure={"3-img"}
        id={"deka"}
        heading={"Social Media Post Templates"}
        imgSrc="/Projects/Deka_Chambers/News_Stone_01.jpg"
        imgSrc3="/Projects/Deka_Chambers/Blog_Moss.jpg"
        imgSrc2="/Projects/Deka_Chambers/Webinar_Blush.jpg"
      
      /> 




    </div>

    
  );
}
