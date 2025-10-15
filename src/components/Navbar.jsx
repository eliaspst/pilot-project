import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="logo">Logo</Link>

      <nav className="navbar">
        <NavLink to="/leistungen" end>LEISTUNGEN</NavLink>
        <NavLink to="/preise">PREISE</NavLink>
        <NavLink to="/faq">FAQ & STUDIEN</NavLink>
        <NavLink to="/beratung">KOSTENFREIE BERATUNG</NavLink>
        <NavLink to="/ueber-uns">ÜBER UNS</NavLink>
        <NavLink to="/kontakt">KONTAKT</NavLink>
      </nav>
    </header>
  );
}
