import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { MENU_PREISE, MENU_FAQ, MENU_UEBER_UNS } from './MenuItems';


export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (key) => {
    if (window.innerWidth >= 960)
      setDropdown(key);
  };

  const onMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Logo</Link>

      <nav className="navbar">

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li><NavLink to="/leistungen" className="nav-links">LEISTUNGEN</NavLink></li>

          <li className="nav-item"
            onMouseEnter={() => onMouseEnter('preise')}
            onMouseLeave={onMouseLeave}>

            <NavLink to="/preise" className="nav-links" onClick={closeMobileMenu}>
              PREISE <i className="fas fa-caret-down" />
            </NavLink>
            {dropdown === 'preise' && <Dropdown items={MENU_PREISE} />}
          </li>

          <li className="nav-item"
            onMouseEnter={() => onMouseEnter('faq')}
            onMouseLeave={onMouseLeave}>

            <NavLink to="/faq" className="nav-links" onClick={closeMobileMenu} >
              FAQ & STUDIEN <i className="fas fa-caret-down" />
            </NavLink>
            {dropdown === 'faq' && <Dropdown items={MENU_FAQ} />}
          </li>

          <li><NavLink to="/beratung" className="nav-links">KOSTENFREIE BERATUNG</NavLink></li>


          <li className="nav-item"
            onMouseEnter={() => onMouseEnter('ueber')}
            onMouseLeave={onMouseLeave}>
            <NavLink to="/ueber-uns" className="nav-links" onClick={closeMobileMenu}>
              ÜBER UNS <i className="fas fa-caret-down" />
            </NavLink>
            {dropdown === 'ueber' && <Dropdown items={MENU_UEBER_UNS} />}
          </li>


          <li><NavLink to="/kontakt" className="nav-links">KONTAKT</NavLink></li>

        </ul>
      </nav>
    </header>
  );
}
