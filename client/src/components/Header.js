import React from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/icons/menu.svg";

export default function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <span className="header__logo">PIKUP</span>
      </Link>
      <Link className="header__link" to="/">
        <div className="header__link-container homepage">
          <span>HOME</span>
        </div>
      </Link>
      <Link className="header__link" to="/about">
        <div className="header__link-container">
          <span className="header__link-text">ABOUT US</span>
        </div>
      </Link>
      <Link className="header__link" to="/browse">
        <div className="header__link-container">
          <span className="header__link-text">VOLUNTEERS</span>
        </div>
      </Link>
      <Link className="header__link" to="/">
        <div className="header__link-container">
          <span className="header__link-text">CONTACT</span>
        </div>
      </Link>
    </nav>
  );
}
