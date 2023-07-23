import React from "react"
import PresentationBox from "./project-components/presentation-box.js"
import "./project-components/presentation-box.css"




export default function SpotifyAppRedesign() {

    return (
      <div className="presentation--wrap">
        <PresentationBox
          structure={"presentation--intro"}
          imgSrc="/Projects/Spotify_App/Assets/Spotify_Logo_CMYK_Black22.png"
          title={"BIG LEAGUE APP REDESIGN"}
          text={
            <div>
              <p>
                The biggest challenge of this presentation was to understand the
                complex and dynamic relationship between Business and Customer
                interests and figure out design improvements from which both
                sides can derive more value from the product.
              </p>

              <p>
                Extensive research was performed in order to individuate the
                truly relevant insights and define a consistent set of
                "surgical" solutions for the existing architecture.
              </p>

              <p>
                Particular attention was paid to staying impartial in the
                decision-making; adapting to and coordinating a wide range of
                responsibilities and tasks; and keeping a clear and intelligible
                vision throughout the whole process.
              </p>

              <p>
                <b>Activities involved:</b> User Research, Product Design.
              </p>
            </div>
          }
        />

        <PresentationBox
          structure={"2-span"}
          imgSrc="/Projects/Spotify_App/Process Assets/Process3.png"
          heading={"The Process"}
        />

        <PresentationBox
          structure={"text-img"}
          id={"round--border"}
          imgSrc="/Projects/Spotify_App/First Hand Analysis Screens/Survey Grabs/Music Library Experience.jpg"
          heading={"User Research"}
          text={
            <div>
              <p>
                ‍Spotify’s user base it is dominated by Millennials, with 29
                percent of its users aged 25 to 34 and 26 percent aged between
                18 and 24 years old. It also reaches almost half of 16 to 24
                year olds in the United States each week.
              </p>

              <p>
                After initially studying the current product and finding
                possible flaws, a series of online surveys were performed in
                order to test them. Based on the results there seems to be a
                correlation between age and information overload. The average
                age of the 32.5% of users who declared having issues with the
                home page, for example, is 24.5 years old while the users who
                included in their answer“ is too busy and confusing” is around
                30 years old.
              </p>
            </div>
          }
        />

        <PresentationBox
          structure={"img-text"}
          imgSrc="/Projects/Spotify_App/Process Assets/Protopersonas2.png"
          heading={"Proto-Personas"}
          text={
            <div>
              <p>
                In order to better synthesize the representation of the goals
                and behaviours of prospective users, a dualistic approach was
                applied in creating the proto-personas: Only two personas from
                two opposite ends of the spectrum in two opposite situations.
              </p>

              <p>
                The first step was to find similarities between these two
                proto-personas and, not surprisingly, many of their differences
                and similarities complement each other as different scenarios
                are considered. Some goals remain the same indoors and outdoors
                with the addition of new conditions and some completely
                disappear. Some pains become even harder when outdoors.
              </p>
            </div>
          }
        />

        <PresentationBox
          structure={"2-span"}
          imgSrc="/Projects/Spotify_App/Process Assets/Revised IA-2.png"
          heading={"Revised Information Architecture"}
        />

        <PresentationBox
          structure={"text-img"}
          imgSrc="./Projects/PPRuNe_App/Forums PNG.png"
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
          structure={"2-img-text"}
          id={"round--border"}
          imgSrc="/Projects/Spotify_App/New Design - Before Test/Chronology 2@2x.jpg"
          imgSrc2="/Projects/Spotify_App/New Design - Before Test/browse all.jpg"
          heading={"Design"}
          text={
            <div>
              <p>
                In the new architecture, quick access and discoverability are
                well defined and separated. The Home screen becomes the user's
                stuff overview while there is a comeback of the old browse
                screen. As the name indicates, the browse screen is exclusively
                dedicated to searching and exploring music. There is also the
                possibility now to switch to offline mode directly and
                everywhere in the app. The settings menu is also accessible on
                all the 3 main screens.
              </p>

              <p>
                All these changes were applied based on the interpretation of
                research insight
              </p>
            </div>
          }
        />

        <PresentationBox
          structure={"text-text"}
          imgSrc="./Projects/PPRuNe_App/Forums PNG.png"
          heading={"Validation"}
    
          text={
            <div>
              <p>
                In this final phase, a "Thinking Aloud" method was performed to
                test the prototype. This method has many advantages and lets you
                discover what users really think about your design. In
                particular, you hear their misconceptions, which usually turn
                into actionable redesign recommendations: when users
                misinterpret design elements, you need to reconsider. Period.
              </p>
            </div>
          }
          heading2={"Findings"}
          text2={
            <div>
              <p>
                Despite the very limited sample, the users showed a surprisingly
                diverse range of behaviours and at the same time, they confirmed
                and reinforced the difference between casual and dedicated music
                consumption. As a result, there was no major rethinking of the
                new architecture and a few minor details were amended. That
                said, it must be kept in mind that for such a huge platform, a
                much bigger sample of users, better tools and resources would
                have probably provided more significant insights.
              </p>
            </div>
          }
        />

        <PresentationBox
          structure={"2-span"}
          imgSrc="/Projects/Spotify_App/Process Assets/Test Tasks.png"
        />

        <PresentationBox
            structure={"3-img"}
            id={"mobile--round--border"}
            imgSrc="/Projects/Spotify_App/New Design - Before Test/Search@2x.jpg"
            imgSrc2="/Projects/Spotify_App/New Design - Before Test/Library - Albums  Downloaded Offline@2x.jpg"
            imgSrc3="/Projects/Spotify_App/New Design - Before Test/Artists Page@2x.jpg"
            heading={"Mobile GUI"}
        />


        
      </div>
    );
}