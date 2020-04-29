import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/LOGO.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <Link to="/">
          <img src={Logo} className="footer__logo" />
        </Link>
        <a href="#about" className="footer__link">
          <span className="footer__link-text">About us</span>
        </a>
        <span className="footer__link-text">Contact us</span>
        <span className="footer__link-text">
          &copy; Team 21, Brainstation Remote Hackathon
        </span>
      </div>
      <div className="footer__container footer__container--right">
        <button className="footer__button">Volunteer with us</button>
      </div>
    </div>
  );
}
