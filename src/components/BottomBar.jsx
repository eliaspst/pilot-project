import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./BottomBar.css";

export default function BottomBar() {
  return (
    <footer className="bottombar" role="contentinfo">
      
      <nav className="bottombar__nav" aria-label="Footer">
        <ul className="bottombar__menu">
          <li><NavLink to="/impressum" className="bottombar__link">Impressum</NavLink></li>
          <li><NavLink to="/datenschutz" className="bottombar__link">Datenschutz</NavLink></li>
          <li><NavLink to="/agb" className="bottombar__link">AGB</NavLink></li>
        </ul>
      </nav>
    </footer>
  );
}