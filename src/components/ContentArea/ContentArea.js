import React from "react";
import Scroll1 from "./assets/Scroll1.png";
import Scroll2 from "./assets/Scroll2.png";
import Scroll3 from "./assets/Scroll3.png";
import Scroll4 from "./assets/Scroll4.png";
import { BsDownload } from "react-icons/bs";
import "./ContentArea.css";

function ContentArea() {
  return (
    <div className="contentarea">
      <section className="sections">
        <img src={Scroll1}></img>
        <div className="sectiondata">
          <h1>Create an invite-only place where you belong</h1>
          <p>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </section>
      <section className="sections">
        <div className="sectiondata">
          <h1>Where hanging out is easy</h1>
          <p>
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
        <img src={Scroll2}></img>
      </section>
      <section className="sections">
        <img src={Scroll3}></img>
        <div className="sectiondata">
          <h1>From few to a fandom</h1>
          <p>
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
      </section>
      <section className="sectionslast">
        <div className="sectiondatalast">
          <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
          <p>
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <img src={Scroll4}></img>
        <div className="readydownload">
          <h2>Ready to start your journey?</h2>
          <button>
            <BsDownload />
            Download for Windows
          </button>
        </div>
      </section>
    </div>
  );
}

export default ContentArea;
