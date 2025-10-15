import React, {useEffect, useRef, useState} from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ddRef = useRef(null);

 useEffect(() => {
    const onDocClick = (e) => {
      if (!ddRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []); 

      return (
        <header className="header">
          <Link to="/" className="logo">Logo</Link>

          <nav className="navbar">
            {}
            <div className="nav-item has-dropdown" ref={ddRef}>
              <button 
              className="nav-trigger" 
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              >
                LEISTUNGEN
                <span className ={`chevron ${open ? "up" : ""}`} aria-hidden>▾</span>
              </button>
              {open && (
                <div id ="leistungen-menu" role="menu" className="dropdown">
                  <NavLink
                to="/leistungen/haarentfernung"
                role="menuitem"
                className="dropdown-link"
                onClick={() => setOpen(false)}
              >
                DAUERHAFTE HAARENTFERNUNG
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/preise">PREISE</NavLink>
        <NavLink to="/faq">FAQ & STUDIEN</NavLink>
        <NavLink to="/beratung">KOSTENFREIE BERATUNG</NavLink>
        <NavLink to="/ueber-uns">ÜBER UNS</NavLink>
        <NavLink to="/kontakt">KONTAKT</NavLink>
      </nav>
    </header>
  );
}
