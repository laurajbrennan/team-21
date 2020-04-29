import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/V1.svg";

export default function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img src={Logo} className="header__logo" />
      </Link>
      <Link className="header__link" to="/">
        <div className="header__link-container homepage">
          <span>HOME</span>
        </div>
      </Link>
      <a href="/#about" className="header__link">
        <div className="header__link-container">
          <span className="header__link-text">ABOUT US</span>
        </div>
      </a>
      <Link className="header__link" to="/browse">
        <div className="header__link-container">
          <span className="header__link-text">VOLUNTEERS</span>
        </div>
      </Link>
      <Link className="header__link" to="/new">
        <div className="header__link-container">
          <span className="header__link-text">GET PIKUP</span>
        </div>
      </Link>
    </nav>
  );
}
