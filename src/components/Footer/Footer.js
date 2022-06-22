import React from "react";
import logo from "./assets/HeaderLogo.png";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="footertop">
        <div className="footerinfo">
          <h4>Imagine a place</h4>
          <div className="icons">
            <BsTwitter />
            <FaInstagram />
            <AiFillFacebook />
            <AiFillYoutube />
          </div>
        </div>
        <div className="footerlist">
          <div className="list">
            <h5>Product</h5>
            <a href="">
              <span>Download</span>
            </a>
            <a>
              <span>Nitro</span>
            </a>
            <a href="">
              <span>Status</span>
            </a>
          </div>
          <div className="list">
            <h5>Company</h5>
            <a href="">
              <span>About</span>
            </a>
            <a>
              <span>Jobs</span>
            </a>
            <a href="">
              <span>Branding</span>
            </a>
            <a href="">
              <span>Newsroom</span>
            </a>
          </div>
          <div className="list">
            <h5>Resources</h5>
            <a href="">
              <span>College</span>
            </a>
            <a href="">
              <span>Support</span>
            </a>
            <a href="">
              <span>Safety</span>
            </a>
            <a href="">
              <span>Blog</span>
            </a>
            <a href="">
              <span>Feedback</span>
            </a>
            <a href="">
              <span>Developers</span>
            </a>
            <a href="">
              <span>Streamkit</span>
            </a>
          </div>
          <div className="list">
            <h5>Policies</h5>
            <a href="">
              <span>Terms</span>
            </a>
            <a>
              <span>Privacy</span>
            </a>
            <a href="">
              <span>Cookie Settings</span>
            </a>
            <a href="">
              <span>Guidelines</span>
            </a>
            <a href="">
              <span>Acknowledgements</span>
            </a>
            <a href="">
              <span>Licenses</span>
            </a>
            <a href="">
              <span>Moderation</span>
            </a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footerbase">
        <img src={logo} alt="Loading ..."></img>
        <button className="signup">Sign Up</button>
      </div>
    </footer>
  );
}

export default Footer;
