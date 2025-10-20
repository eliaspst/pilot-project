import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { MENU_PREISE, MENU_FAQ, MENU_UEBER_UNS } from "./MenuItems";


export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = click ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev || ""; };
  }, [click]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setClick(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 960) setClick(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onMouseEnter = (key) => {
    if (window.innerWidth >= 960) setDropdown(key);
  };

  const onMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={closeMobileMenu}>
        <img
          src="/logo.png"
          alt="Medusa Beauty Lounge Logo"
          className="logo-img"
        />
      </Link>

      <nav className="navbar">
        <div className={`menu-icon ${click ? "is-open" : ""}`} onClick={handleClick}>
          <span></span><span></span><span></span>
        </div>


        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li><NavLink to="/leistungen" className="nav-links">LEISTUNGEN</NavLink></li>

          {/* PREISE */}
          <li
            className="nav-item"
            onMouseEnter={() => onMouseEnter("preise")}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="#"
              className="nav-links"
              role="button"
              aria-haspopup="menu"
              aria-expanded={dropdown === "preise"}
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth < 960) {
                  setDropdown(d => (d === "preise" ? null : "preise"));
                }
              }}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && window.innerWidth < 960) {
                  e.preventDefault();
                  setDropdown(d => (d === "preise" ? null : "preise"));
                }
              }}
            >
              PREISE <i className="fas fa-caret-down" />
            </NavLink>

            {dropdown === "preise" && <Dropdown items={MENU_PREISE} />}
          </li>

          {/* FAQ & STUDIEN */}
          <li
            className="nav-item"
            onMouseEnter={() => onMouseEnter("faq")}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="#"
              className="nav-links"
              role="button"
              aria-haspopup="menu"
              aria-expanded={dropdown === "faq"}
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth < 960) {
                  setDropdown(d => (d === "faq" ? null : "faq"));
                }
              }}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && window.innerWidth < 960) {
                  e.preventDefault();
                  setDropdown(d => (d === "faq" ? null : "faq"));
                }
              }}
            >
              FAQ & STUDIEN <i className="fas fa-caret-down" />
            </NavLink>

            {dropdown === "faq" && <Dropdown items={MENU_FAQ} />}
          </li>

          <li><NavLink to="/beratung" className="nav-links">KOSTENFREIE BERATUNG</NavLink></li>

          {/* ÜBER UNS */}
          <li
            className="nav-item"
            onMouseEnter={() => onMouseEnter("ueber")}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="#"
              className="nav-links"
              role="button"
              aria-haspopup="menu"
              aria-expanded={dropdown === "ueber"}
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth < 960) {
                  setDropdown(d => (d === "ueber" ? null : "ueber"));
                }
              }}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && window.innerWidth < 960) {
                  e.preventDefault();
                  setDropdown(d => (d === "ueber" ? null : "ueber"));
                }
              }}
            >
              ÜBER UNS <i className="fas fa-caret-down" />
            </NavLink>

            {dropdown === "ueber" && <Dropdown items={MENU_UEBER_UNS} />}
          </li>

          <li><NavLink to="/kontakt" className="nav-links">KONTAKT</NavLink></li>
        </ul>
      </nav>
      {click && <div className="nav-overlay" onClick={closeMobileMenu} aria-hidden="true" />}
    </header>
  );
}
