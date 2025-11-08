import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { MENU_LEISTUNGEN, MENU_TIPPS, MENU_UEBER_UNS, MENU_UNSER_STUDIO } from "./MenuItems";
import { pub } from "../pub";




export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const location = useLocation();

  useEffect(() => {
    setClick(false);
    setDropdown(null);
  }, [location.pathname]);

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
          src={pub("/Logo.png")}
          alt="Medusa Beauty Lounge Logo"
          className="logo-img"
        />
      </Link>

      <nav className="navbar">
        <div className={`menu-icon ${click ? "is-open" : ""}`} onClick={handleClick}>
          <span></span><span></span><span></span>
        </div>


        <ul className={click ? "nav-menu active" : "nav-menu"}>
          
          {/* LEISTUNGEN */}
          <li
            className="nav-item"
            onMouseEnter={() => onMouseEnter("leistungen")}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="#"
              className="nav-links"
              role="button"
              aria-haspopup="menu"
              aria-expanded={dropdown === "leistungen"}
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth < 960) {
                  setDropdown(d => (d === "leistungen" ? null : "leistungen"));
                }
              }}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && window.innerWidth < 960) {
                  e.preventDefault();
                  setDropdown(d => (d === "leistungen" ? null : "leistungen"));
                }
              }}
            >
              LEISTUNGEN <i className="fas fa-caret-down" />
            </NavLink>

            {dropdown === "leistungen" && <Dropdown items={MENU_LEISTUNGEN} />}
          </li>

          {/* TIPPS & STUDIEN */}
          <li
            className="nav-item"
            onMouseEnter={() => onMouseEnter("tipps")}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="#"
              className="nav-links"
              role="button"
              aria-haspopup="menu"
              aria-expanded={dropdown === "tipps"}
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth < 960) {
                  setDropdown(d => (d === "tipps" ? null : "tipps"));
                }
              }}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && window.innerWidth < 960) {
                  e.preventDefault();
                  setDropdown(d => (d === "tipps" ? null : "tipps"));
                }
              }}
            >
              TIPPS & STUDIEN <i className="fas fa-caret-down" />
            </NavLink>

            {dropdown === "tipps" && <Dropdown items={MENU_TIPPS} />}
          </li>

          <li><NavLink to="/beratung" className="nav-links" onClick = {closeMobileMenu}>KOSTENFREIE BERATUNG</NavLink></li>

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

          <li
            className="nav-item"
            onMouseEnter={() => onMouseEnter("studio")}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="#"
              className="nav-links"
              role="button"
              aria-haspopup="menu"
              aria-expanded={dropdown === "studio"}
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth < 960) {
                  setDropdown(d => (d === "studio" ? null : "studio"));
                }
              }}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && window.innerWidth < 960) {
                  e.preventDefault();
                  setDropdown(d => (d === "studio" ? null : "studio"));
                }
              }}
            >
              UNSERE STUDIOS <i className="fas fa-caret-down" />
            </NavLink>

            {dropdown === "studio" && <Dropdown items={MENU_UNSER_STUDIO} />}
          </li>
        </ul>
      </nav>
      {click && <div className="nav-overlay" onClick={closeMobileMenu} aria-hidden="true" />}
    </header>
  );
}
