import React from "react"
import PresentationBox from "./project-components/presentation-box.js"
import "./project-components/presentation-box.css"
import "./InSearchofDarkMatter.css"



export default function InSearchofDarkMatter() {


  let Composition=()=> {
    
    return( <div className="composition--wrap">

        <div class="composition--step--wrap">
          <img
            class="composition--img"
            src="/Projects/In_Search_Of_Dark_Matter/Process/Universe.jpg"
          ></img>
          <p class="description"> Deep Field Background</p>
        </div>


        <div className="symbol--wrap">
          <img
            class="symbol" id="arrow"
            src="/Projects/In_Search_Of_Dark_Matter/right_arrow.png"
          ></img>
        </div>


        <div class="composition--step--wrap">
          <img
            class="composition--img"
            src="/Projects/In_Search_Of_Dark_Matter/Process/Liquify plus Radial Bluur.jpg"
          ></img>
          <p class="description"> Gravitational Lensing</p>
        </div>


        <div className="symbol--wrap">
          <img
            class="symbol"
            src="/Projects/In_Search_Of_Dark_Matter/plus.png"
          ></img>
        </div>


        <div class="composition--step--wrap">
          <img
            class="composition--img"
            src="/Projects/In_Search_Of_Dark_Matter/Process/Galaxy conceptual render.jpg"
          ></img>
          <p class="description"> Galaxy Conceptual 3D Render</p>
        </div>


        <div className="symbol--wrap">
          <img
            class="symbol"
            src="/Projects/In_Search_Of_Dark_Matter/equals.png"
          ></img>
        </div>


        <div class="composition--step--wrap">
          <img
            class="composition--img"
            src="/Projects/In_Search_Of_Dark_Matter/Process/Result.jpg"
          ></img>
          <p class="description"> Final Illustration</p>
        </div>
      </div>
    )
  }




    return (
      <div className="presentation--wrap">
        <PresentationBox
          structure={"2-img-text"}
          id={"dark--matter--intro"}
          imgSrc="/Projects/In_Search_Of_Dark_Matter/Dark_Matter_Front_Final_V1.png"
          imgSrc2="/Projects/In_Search_Of_Dark_Matter/Dark_Matter_Back_Final.png"
          heading={"In Search of Dark Matter: A Hybrid Design Approach"}
          text={
            <div>
              <p>
                I remember reading this book in my early teen years and being
                filled with a deep sense of wonder and irresistible curiosity to
                know more about the natural world. I am always of the idea to read
                the book, whenever possible, before designing its cover.
              </p>

              <p>
                The concept is based on what I know about dark matter and its
                gravitational influence on big structures like galaxies and
                clusters. The approach was hybrid as I combined both 3D and 2D
                digital techniques to obtain the final result, as well as
                integrating some good old typography.
              </p>
            </div>
          }
        />

        <PresentationBox
          structure={"2-span-empty-template"}
          id={"dark--matter--composition"}
          heading={"Composition"}
          content = {<Composition/>}
         
        />

        <PresentationBox
          structure={"2-img"}
          id={"dark--matter"}
          heading={"3D Render of the hardcover"}
          imgSrc={"/Projects/In_Search_Of_Dark_Matter/Dark_Matter_Front_And_Back_Final_V1_01.jpg"}
          imgSrc2 = {"/Projects/In_Search_Of_Dark_Matter/Dark_Matter_Front_And_Back_Final_V1_02.jpg"}
         
        />



      </div>

      




    );
}















