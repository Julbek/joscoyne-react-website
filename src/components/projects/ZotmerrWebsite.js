import React from "react"
import "./project-components/presentation-box.css"


export default function ZotmerrWebsite() {

    return (
      <div
        className="presentation--wrap " id="presentation--wrap--zotmerr"
        
      >
        <iframe
          src="https://zotmerr.art/"
          title="iframe Example 1"
          width="100%"
          height="800px"
          style={{ selfAlign: "center", borderRadius: "10px", border:"8px solid black" }}
        ></iframe>

        <div
          className="text-paragraphs"
          style={{ fontSize: "20px", marginTop: "10%" }}
        >
          <h1 class="presentation--heading">
            Zotmerr.art: Bare (digital) Art
          </h1>
          <p className="text-p">
            Zotmerr is a personal digital art project initiated in 2021 and which I
            stopped a few months later and which sooner or later I will kick
            start again (or not).
          </p>

          <p className="text-p">
            I developed the website from scratch on hard coded html, css and
            plain javascript . In terms of design, I wanted it to be as
            straightforward as possible, almost devoid of UI
            components, and let the art, structure and interactions with the art
            pieces themselves to make up the website.

          </p>

          <p className="text-p">
            Have a look at the <a href="https://zotmerr.art/" target="_blank">website</a> if you're not in big hurry!
            
          </p>
        </div>
      </div>
    );
}