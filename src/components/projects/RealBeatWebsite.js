import React from "react";
import "./project-components/presentation-box.css";
import "./RealBeatWebsite.css"

export default function RealBeatWebsite() {
  return (
    <div className="presentation--wrap " id="presentation--wrap--realbeat">
      <iframe
      className="realbeat-frame"
        src="https://www.realbeatrecords.com//"
        title="iframe Example 1"
      ></iframe>

      <div
        className="text-paragraphs"
        style={{ fontSize: "20px", marginTop: "10%"}}
      >
        <h1 class="presentation--heading">
          Helping a young start-up launch its online identity
        </h1>
        <p className="text-p">
          RealBeat is an early stage start-up with a mission of creating a new
          commercial model in the music industry. Joscoyne curated the logo and
          brandig identity of Realbeat and this website is in a way a tangible
          continuation of the identity forming process of the brand, and a 
          highlight of a seamless interplay between design and front-end
          engineering.
        </p>

        <p className="text-p">
          The website was custom developed using <b>React.js</b>, with careful
          consideration of the brand's identity guidelines. It serves as a
          starting template for future content and feature development as the
          start-up grows. To enhance the user experience, the third-party tool
          <b> Three.js</b> was used to create a captivating particle wave effect on the
          background. Other components also feature CSS animations, providing an
          overall organic feel to the website.
        </p>


        <p className="text-p">The website intends to showcase RealBeat's commitment to innovation and
          creativity, both in the music industry and in their online presence.</p>

        <p className="text-p">
          Have a look at the{" "}
          <a href="https://www.realbeatrecords.com/" target="_blank">
            website
          </a>{" "}
          if you're not in big hurry!
        </p>
      </div>
    </div>
  );
}
