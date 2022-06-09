import React from "react";
import logo from "./assets/HeaderLogo.png";
import logoblack from "./assets/logo-black.png";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsDownload } from "react-icons/bs";

function Header() {
  function barClick() {
    document.querySelector(".outsider").classList.add("active");
  }

  function crossClick() {
    document.querySelector(".outsider").classList.remove("active");
  }

  return (
    <header>
      <div className="headerdata">
        <img src={logo} alt="Loading ..."></img>
        <nav className="fullnav">
          <ul className="list">
            <li>
              <a href="./">Download</a>
            </li>
            <li>
              <a href="./">Nitro</a>
            </li>
            <li>
              <a href="./">Safety</a>
            </li>
            <li>
              <a href="./">Support</a>
            </li>
            <li>
              <a href="./">Blog</a>
            </li>
            <li>
              <a href="./">Carrers</a>
            </li>
          </ul>
        </nav>
        <div className="topbuttons">
          <button className="login">Login</button>
          <button onClick={barClick} className="navbars">
            <FaBars />
          </button>
        </div>
      </div>
      <div className="outsider">
        <header>
          <img src={logoblack} alt="Loading ..."></img>
          <button className="cross" onClick={crossClick}>
            <ImCross />
          </button>
        </header>
        <nav className="altnav">
          <ul className="list">
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./">Download</a>
            </li>
            <li>
              <a href="./">Nitro</a>
            </li>
            <li>
              <a href="./">Safety</a>
            </li>
            <li>
              <a href="./">Mod Academy</a>
            </li>
            <li>
              <a href="./">Support</a>
            </li>
            <li>
              <a href="./">Blog</a>
            </li>
            <li>
              <a href="./">Carrers</a>
            </li>
          </ul>
        </nav>
        <button className="download2">
          <BsDownload />
          Download for Windows
        </button>
      </div>
    </header>
  );
}

export default Header;
