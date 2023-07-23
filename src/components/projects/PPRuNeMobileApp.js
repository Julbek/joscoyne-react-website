import React from "react"
import PresentationBox from "./project-components/presentation-box.js"
import "./project-components/presentation-box.css"




export default function PPRuNeMobileApp() {

    return (
      <div className="presentation--wrap">
        <PresentationBox
          structure={"presentation--intro"}
          imgSrc="/Projects/PPRuNe_App/Full Logo Black.png"
          title={"RENOVATING A TRADITIONAL ONLINE COMMUNITY"}
          id={"pprune"}
          text={
            <div>
              <p>
                The Professional Pilots Rumor Network, or PPRuNe, is an Internet
                forum catering to airline pilots and other professionals in the
                aviation industry
              </p>

              <p>
                PPRuNe is the most popular site in its field, with more than
                250,000 registered members, many of them professional pilots. It
                is sometimes at the centre of debates about aviation issues in
                the new and commercial pilots often share insights and
                perspectives about aviation mishaps, sometimes eyewitness
                accounts
              </p>

              <p>
                The goal of this presentation was to develop from scratch a new
                digital product while being considerate of the history and
                identity of the community.
              </p>

              <p>
                <b>Activities involved:</b> User Research, UI Design, Graphic
                Design & Branding.
              </p>
            </div>
          }
        />

        <PresentationBox
            structure={"text-img"}
            imgSrc="/Projects/PPRuNe_App/Forums PNG.png"
            heading={"Structure and Contents"}
            text={
            <div>
              <p>
                An initial analysis og the current website individuated key
                design and functional problems, some of which where at the very
                fundamental level.
              </p>

              <p>
                The website clearly lacks the quality standards worthy of its
                name and popularity, and it seems rather stuck in the previous
                decade.
              </p>

              <p>
                Structure and contents were also thoroughly analyzed. PPRuNe has
                many forums and they have been more or less the same through the
                year. The following is the full list of the forums and
                sub-forums.
              </p>
            </div>
          }
        />

        <PresentationBox
            structure={"img-text"}
            imgSrc="/Projects/PPRuNe_App/Protopersonas_2.png "
            heading={"User Base"}
            text={
            <div>
              <p>
                PPRuNe users are aviation professionals and enthusiasts, the
                majority of whom are airline or general aviation pilots. It also
                includes engineers, technicians, enthusiasts, private pilots and
                most importantly, aspiring pilots who look for information and
                advice.
              </p>

              <p>
                From an online survey of over 100 responses, it immediately
                emerged that the PPRuNe users are overwhelmingly male, with only
              </p>

              <p>
                Around <strong>46%</strong> of the users are{" "}
                <strong>aviation professionals </strong>: Pilots, Instructors,
                cabin crew, Traffic controllers etc. <strong> 36% </strong> are{" "}
                <strong>students/wannabes</strong> and <strong>18%</strong> are{" "}
                <strong>enthusiasts.</strong>
              </p>
            </div>
          }
        />

        <PresentationBox
            structure={"text-img"}
            imgSrc="/Projects/PPRuNe_App/Forums PNG.png"
            heading={"Structure and Contents"}
            text={
            <div>
              <p>
                An initial analysis og the current website individuated key
                design and functional problems, some of which where at the very
                fundamental level.
              </p>

              <p>
                The website clearly lacks the quality standards worthy of its
                name and popularity, and it seems rather stuck in the previous
                decade.
              </p>

              <p>
                Structure and contents were also thoroughly analyzed. PPRuNe has
                many forums and they have been more or less the same through the
                year. The following is the full list of the forums and
                sub-forums.
              </p>
            </div>
          }
        />

        <PresentationBox
            structure={"2-span"}
            imgSrc="/Projects/PPRuNe_App/Information Architecture.png"
            heading={"  Defining a new information architecture"}
        />

        <PresentationBox
            structure={"img-text"}
            imgSrc="/Projects/PPRuNe_App/logos.png "
            heading={"Rebranding"}
            text={
            <div>
              <p>
                This logo is central to the forum's identity, however, as part
                of developing the product, a restyling of the logo was also
                performed in order to boost the app's image and help it stand
                out as an all-around well-designed product.
              </p>

            </div>
          }
        />

        <PresentationBox
            
            structure={"text-2-img"}
            id={"round--border"}
            imgSrc="/Projects/PPRuNe_App/Prototype Mockups/Amend 1.jpg"
            imgSrc2="/Projects/PPRuNe_App/Prototype Mockups/Roumors and News@2x.jpg"
            heading={"Mobile GUI"}
            text= {
                <div >
                           
                    <p >
                        After the conceptual part of defining a solid information architecture and a restyling of the logo,
                        the next step was drafting a prototype. It started s a low-fi draft with the basic building
                        blocks and colour palette. Then,  after some experimentation and constant revaluation,
                        progressed into its final high-fidelity form.
                    
                    </p>

                
                    <p>
                        With a mobile first aproach in mind, the desktop web version was subsequently design.
                    </p>

        
                </div>

            }
        />

        <PresentationBox
            structure={"2-span"}
            id={"round--border"}
            imgSrc="/Projects/PPRuNe_App/Prototype Mockups/Desktop Mockup.jpg"
            heading={"Desktop GUI"}
        />


        
        <PresentationBox
                structure={"img-text"}
                imgSrc="/Projects/PPRuNe_App/Custom Icons.png"
                heading={"Custom Icons"}
                text={
                    <div>
                    <p> Part of the presentation was also designing custom icons.
                        They emerged from a minimalistic reinterpretation of the most
                        familiar and commonly used symbols in UI design.
                        There was one exception in terms of design convention though:
                        the settings menu is represented by an array of buttons inspired
                        by the cockpit panels.

                    </p>

                    
                    </div>
            }
        />

        <PresentationBox
            structure={"3-img"}
            id={"mobile--round--border"}
            imgSrc="/Projects/PPRuNe_App/Prototype Mockups/Amend 2.jpg"
            imgSrc2="/Projects/PPRuNe_App/Prototype Mockups/Reply@2x.jpg"
            imgSrc3="/Projects/PPRuNe_App/Prototype Mockups/Chat XXX@2x.jpg"
            heading={"Mobile GUI"}
        />

        





      </div>
    );
}