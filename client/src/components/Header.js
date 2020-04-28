import React from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/icons/menu.svg";

export default function Header() {
  return (
    <nav className="header">
      <Link className="header__menu" to="/menu">
        <img className="header__menu-icon" src={Menu} alt="menu icon" />
      </Link>
      <Link to="/">
        <span className="header__text">Pikup Logo</span>
      </Link>
    </nav>
  );
}
