import "./about.css";
import BigLogo from "./big-logo";
import { Link } from "react-router-dom";


export default function About({ darkModeOn, ViewProject }) {
  
  
  
    function Tooltip({ content }) {
    if (content === "AboutJulianBektashi") {
      return (
        <div className="tooltip-julian-wrap">
          <img
            id="jb-img-small"
            src="./Projects/Julian_Bektashi/Julian_Bektashi_Photo_01.jpg"
          ></img>
          <div className="tooltip-text">
            <p id="tooltip-p">
              Julian has a strong background in all things design, all things
              Imagery, and all things sound. That said, if you called him a
              “visual person” or, heaven forbid, "left-brained", he would
              promptly let you know that he’s also a “scientific
              method-evidence-based guy”...  <Link to="/julian-bektashi"><a id="link">
                read more
              </a></Link>
            </p>
           
          </div>
        </div>
      );
    }

    else if ((content === "Joscoyne")) {
      return (
        <div>
          <p id="tooltip-p"> After a long time of coming up with corny names, I was struck by the brillant idea of using the name of my flat!
          </p>
        </div>
      );
    }
    
    else if ((content === "CityOfLondon")) {
      return (
        <div>
          <p id="tooltip-p">
            Where the Thames doth run red with the blood of machine and man,
            where the roar of engines doth muffle the cries of the fallen.
          </p>
        </div>
      );
    } else if ((content === "Curiosity")) {
      return (
        <div>
          <p id="tooltip-p">
            The healthy kind.
          </p>
        </div>
      );
    }
    
    else if (content==="SolvingProblems") {
        return (
            <p id="tooltip-p">And possibly clear out unexisting problems</p>
        )
    }  else if ((content === "DesignThinking")) {
        return (
          <div>
            <p id="tooltip-p">
              Research, empathy, experimentation, iteration, the usual stuff.
              And without forgeting the often overlooked concept of{" "}
              <em>common sense</em>.
            </p>
          </div>
        );
    } else if ((content === "ideas")) {
        return (
          <div>
            <p id="tooltip-p">
                Well, with the right checks of balances, of course. 
            </p>
          </div>
        );
    } else if ((content === "CulturalContext")) {
      return (
        <div>
          <p id="tooltip-p">
              Like understanding the values, beliefs, attitudes, behaviors, and symbols of the target audience.. 
          </p>
        </div>
      );
  } else if ((content === "LatestTechnologies")) {
    return (
      <div>
        <p id="tooltip-p">
            It currently uses CSS, HTML, Javascript, React.js and Python.
        </p>
      </div>
    );
} else if ((content === "EndResult")) {
  return (
    <div>
      <p id="tooltip-p">
          While keeping the ego under strict control.
      </p>
    </div>
  );
}  else if ((content === "HolisticProcess")) {
  return (
    <div>
      <p id="tooltip-p">
          And with a bit of improvisation sometimes. It can save the day, and money...
      </p>
    </div>
  );
} else if ((content === "3D")) {
  return (
    <div>
      <p id="tooltip-p">
          Have a look at this <a id="link" onClick={() => ViewProject("InSearchofDarkMatter")}>book cover</a>.
      </p>
    </div>
  );
} else if ((content === "GraphicDesign")) {
  return (
    <div>
      <p id="tooltip-p">
        <em>"Ladies and Gentlemen, let me introduce you to my dear cousin Paul, bless his soul,  the
        self-proclaimed 'Master of many Typefaces.' He's a graphic designer,
        you see, and he's determined to change the world one pixel at a time. He
        tells me that in the future, all designs will be created by Ais (or on demand intelligence  as some people call it),   and
        that human creativity will be a thing of the past. But my cousin, he's
        not one to be outdone by some data-vorous neural network . He's a true believer in the power of
        human imagination, and he's on a mission to save it.</em> — <b>Some Ai</b>
      </p>
    </div>
  );
} else if ((content === "HandMadeStuff")) {
  return (
    <div>
      <p id="tooltip-p"> On digital devices, of course.
      </p>
    </div>
  );
} else if ((content === "AiStuff")) {
  return (
    <div>
      <p id="tooltip-p"> Well, let's call it <em>just another tool</em> for now.
      </p>
    </div>
  );
}else if ((content === "Semiotics")) {
  return (
    <div>
      <p id="tooltip-p"> The study of signs and symbols and their use or interpretation.
      </p>
    </div>
  );
}  else if ((content === "DigitalProducts")) {
  return (
    <div>
      <p id="tooltip-p"> Like this React.js based website.
      </p>
    </div>
  );
} else if ((content === "Unicorn")) {
  return (
    <div>
      <p id="tooltip-p">
        {" "}
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
} else if ((content === "Honesty")) {
  return (
    <div>
      <p id="tooltip-p"> You won't be criminally overcharged, promise!
      </p>
    </div>
  );
}  else if ((content === "HighestStandards")) {
  return (
    <div>
      <p id="tooltip-p"> If we accept a brief it means we will nail it, period. 
      </p>
    </div>
  );
} else if ((content === "LongTerm")) {
  return (
    <div>
      <p id="tooltip-p"> Good communication, mutual trust and respect are key.
      </p>
    </div>
  );
}



}





  return (
    <div className="about--wrap" id="about">
      <BigLogo darkModeOn={darkModeOn} />

      <div className="about--text--wrap" id={darkModeOn ? "about--dark" : ""}>
        <p className="about--text">
          <ev>Joscoyne</ev> is the brainchild of the one man show
          <jb>
            <Link to="/julian-bektashi" style={{ textDecoration: 'none', color: 'inherit' }}>Julian Bektashi</Link>
            <span className="tooltip">
              <Tooltip content={"AboutJulianBektashi"} />
            </span>
          </jb>.
        </p>

        <p className="about--text">
          Based in the bustling <ev>city of London</ev>, it is driven by{" "}
          <ev>never-ending curiosity</ev>, passion for{" "}
          <ev>solving real-world problems</ev> and, ultimately, creating
          products and experiences that <ev>make a difference</ev>. 
        </p>
        
      

        {/*<p className="about--text">
          It approaches <ev>design thinking <span className="tooltip">
              <Tooltip content={"DesignThinking"} />
            </span></ev>
          with an open mind and by
          <ev>cross-pollinating ideas <span className="tooltip">
              <Tooltip content={"ideas"} />
            </span></ev> and concepts while always taking into
          consideration the broader <ev>cultural context <span className="tooltip">
              <Tooltip content={"CulturalContext"} />
            </span></ev> and the limits and
          opportunities offered by the <ev>latest technologies <span className="tooltip">
              <Tooltip content={"LatestTechnologies"} />
            </span></ev>.
  </p>*/}

        {/*<p className="about--text">
          Different crafts and tools are often blended to{" "}
          <ev>serve the end result <span className="tooltip">
              <Tooltip content={"EndResult"} />
            </span></ev>, as part of a seamless, —brace yourself
          for another buzzword— <ev>holistic process! <span className="tooltip">
              <Tooltip content={"HolisticProcess"} />
            </span></ev> Based on the
          requirements of each project, <ev>3D imagery <span className="tooltip">
              <Tooltip content={"3D"} />
            </span></ev> and effects often
          meet <ev>graphic design <span className="tooltip">
              <Tooltip content={"GraphicDesign"} />
            </span></ev>, Ai stuff meets <ev>hand-made stuff <span className="tooltip">
              <Tooltip content={"HandMadeStuff"} />
            </span></ev>, typography meets
          <ev>Ai stuff <span className="tooltip">
              <Tooltip content={"AiStuff"} />
            </span></ev>, and <ev>semiotics <span className="tooltip">
              <Tooltip content={"Semiotics"} />
            </span></ev> meet 3D imagery again. On the other hand, when
          it comes to <ev>digital products <span className="tooltip">
              <Tooltip content={"DigitalProducts"} />
            </span></ev>, based on well established taxonomic conventions,  Julian Bektashi falls under the category of a
          <ev>unicorn <span className="tooltip">
              <Tooltip content={"Unicorn"} />
            </span></ev>.
  </p>*/}

        {/*<p className="about--text">
          Joscoyne prides itself
          for its <ev>honesty<span className="tooltip">
              <Tooltip content={"Honesty"} />
            </span></ev>, and strives for nothing less than the
          <ev>highest standards <span className="tooltip">
              <Tooltip content={"HighestStandards"} />
            </span></ev> the industry can offer. Come on then! Give it a
          chance! “We” are always on the look to form fruitful and possibly
          <ev>long term relationships <span className="tooltip">
              <Tooltip content={"LongTerm"} />
            </span></ev> with new clients!
</p>*/}
      </div>
    </div>
  );
}
