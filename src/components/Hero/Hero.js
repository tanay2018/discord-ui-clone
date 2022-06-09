import React from "react";
import "./Hero.css";
import heroleft from "./Assets/heroleft.png";
import heroright from "./Assets/heroright.png";
import heroclouds from "./Assets/heroclouds.png";
import { BsDownload } from "react-icons/bs";

// <div className="heroimages">
//         <img className="heroclouds" src={heroclouds} />
//         <img className="heroleft" src={heroleft} />
//         <img className="heroright" src={heroright} />
//       </div>

function Hero() {
  return (
    <div className="hero-container">
      <div className="herodata">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="buttons">
          <button className="download">
            <BsDownload />
            Download for Windows
          </button>
          <button className="browser">Open Discord in your browser</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
