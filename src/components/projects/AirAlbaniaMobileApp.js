import React from "react"
import PresentationBox from "./project-components/presentation-box.js"
import "./project-components/presentation-box.css"



export default function AirAlbaniaMobileApp() {

    return (
      <div className="presentation--wrap">
        <PresentationBox
          structure={"presentation--intro"}
          imgSrc="/Projects/Air_Albania_App/Assets/1280px-Air_Albania black.png"
          title={"A MOBILE APP FOR A YOUNG AIRLINE"}
          text={
            <div>
              <p>
                Founded in 2018, Air Albania is the new national flag carrier of
                Albania. Currently, its fleet consists of only two aircraft and
                its operations are limited to Italy, Turkey and the UK.
              </p>

              <p>
                The objective of this presentation was to design an intuitive and
                accessible mobile app capable of being an integral part of the
                airlines expansion. Besides the common things every airline app
                it is supposed to do, it should also facilitate the fidelisation
                of costumers. This was possible by research the cultural, social
                and economic context of the target groups.
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
          structure={"text-img"}
          imgSrc="/Projects/Air_Albania_App/Assets/Map.png"
          heading={"Socio-economic background"}
          text={
            <div>
              <p>
                Albania is not an EU member state (yet). It is a developing
                country and has long history of emigration. Way more albanians
                live outside Albania than within its borders. Most of the
                albanian diaspora has close ties with their homeland, and with
                air travel becoming more and more accessible, now they are
                flying in and out more frequently.
              </p>

              <p>
                On the other hand, the Albanians still living in Albania even
                though are allowed for visa free travel in the Schengen Area,
                they fly way less than the average EU citizen. They fly mostly
                for visiting family members abroad and more rarely, simply for
                vacations.
              </p>

              <p>
                It should also be considered that Albania, with its history,
                fantastic nature and relatively low costs, is increasingly
                becoming an major touristic destination in Europe.
              </p>
            </div>
          }
        />

        <PresentationBox
          structure={"img-text"}
          imgSrc="/Projects/Air_Albania_App/Process_Assets/Personas.png"
          heading={"User dualism"}
          text={
            <div>
              <p>
                The Non-local Customer is eather a customer of Albanian origin
                who has lives abroad and or non-Albanian tourist, generally from
                the developed world.
              </p>

              <p>
                Both Albanian and non-albanian on locals share similar
                characteristics, and they expect an app that is fairly familiar
                to them, like those from other major european airlines. This
                lead to a comparative analysis with other apps from Ryanair,
                EasyJet, British Airways, Lufthansa and Turkish Airlines.
              </p>

              <p>
                The first step was then to create the basic building blocks of
                my design by integrating some of the most common and tested
                elements from other Airline Apps.
              </p>

              <p>
                The second step was to fine tune this first version tthe local
                customers, especially the older generations. Much effort went to
                make the app truly simple and unambiguous in conveying important
                information. Clarity was prioritized over design subtleties, at
                the same keeping in consideration the visuals elements of the
                brand.
              </p>
            </div>
          }
        />

        <PresentationBox
          structure={"2-span"}
          imgSrc="/Projects/Air_Albania_App/Process_Assets/First Cycle.png"
          heading={"Customer journeys"}
        />

        <PresentationBox
          structure={"2-span"}
          imgSrc="/Projects/Air_Albania_App/Process_Assets/n-cycle.png"
        />

        <PresentationBox
          structure={"text-img"}
          imgSrc=".//Projects/Air_Albania_App/Process_Assets/IA.png"
          heading={"Information architecture"}
          text={
            <div>
              <p>
                The structure of the app is simple yet very fluid: Everything
                revolves around a home screen comprised of the below actions
                marked in black, including a sandwich menu for additional
                options.
              </p>

              <p>
                The sandwich menu contains the secondary navigation. Check-in
                can be done without registration by simply using the reference
                number. Suggested flights can be a series of recommended routes
                or/and offers as seen below.
              </p>
            </div>
          }
        />

        <PresentationBox
          structure={"2-img-text"}
          id={"round--border"}
          imgSrc="/Projects/Air_Albania_App/Mockups/Home (No Active booking)@2x.jpg"
          imgSrc2="/Projects/Air_Albania_App/Mockups/Find Flights - Return@2x.jpg"
          heading={"Design"}
          text={
            <div>
              <p>
                One very important aspect of the app it's the state of the home
                screen changing depending if there is an active booking or not.
                If the company does not need to aggressively market specific
                routes, the home screen should contain only "your flights" .
                This would make much easier to monitor or amend flights, which
                is the main priority. There is still a "book a flight" option,
                and once every flight is concluded, the home screen returns to
                its original state.
              </p>

            </div>
          }
        />

       

        <PresentationBox
          structure={"3-img"}
          id={"mobile--round--border"}
          imgSrc="/Projects/Air_Albania_App/Mockups/Fares 1@2x.jpg"
          imgSrc2="/Projects/Air_Albania_App/Mockups/Passenger Data 1@2x.jpg"
          imgSrc3="/Projects/Air_Albania_App/Mockups/Extra Services 1@2x.jpg"
        />

        <PresentationBox
          structure={"3-img"}
          id={"mobile--round--border"}
          imgSrc="/Projects/Air_Albania_App/Mockups/Payment 1@2x.jpg"
          imgSrc2="/Projects/Air_Albania_App/Mockups/Home (Active Booking)@2x.jpg"
          imgSrc3="/Projects/Air_Albania_App/Mockups/Boarding Passes@2x.jpg"
        />
      </div>
    );
}