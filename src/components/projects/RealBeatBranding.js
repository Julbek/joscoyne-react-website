import React from "react";
import PresentationBox from "./project-components/presentation-box.js";
import "./project-components/presentation-box.css";
import "./InSearchofDarkMatter.css";

export default function RealBeatBranding() {
  return (
    <div className="presentation--wrap">
      <PresentationBox
        structure={"presentation--intro"}
        id={"realbeat"}
        imgSrc="/Projects/Real_Beat_Branding/Real_Beat_COVER.png"
        title={"BRANDING A NEW MODEL FOR THE MUSIC INDUSTRY"}
        text={
          <div>
            <p>
              RealBeat is a start-up aiming to emancipate both musicians and
              music fans by making them business partners. Imagine a completely
              decentralised music industry where fans are not simply supporters
              or patreons , but active investors in the
              art and work of the artists they choose to put their money on, and
              with potential long term gains that benefits both. One different
              way to see it is “musicians or bands as start-ups”. The role of
              real beat is to create a networking system and infrastructure to
              make this possible and intermediating between artist and potential
              investors interested in adhering in this new model.
            </p>

            <p>
              <b>Full Branding Presentation coming soon...</b>
            </p>
          </div>
        }
      />
    </div>
  );
}
