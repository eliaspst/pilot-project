import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomBar.css";

const PARTNERS = [
  { name: "Breuninger", href: "https://www.breuninger.com/de" },
  { name: "Pieksfein", href: "https://pieksfein.de/" },
  { name: "Big Mama`s", href: "https://www.big-mamas.de/" }
];

export default function BottomBar() {
  return (
    <footer className="bottombar" role="contentinfo">
      <div className="bottombar__partners" aria-label="Partner">
        <span className="bottombar__partnersLabel">Unsere Partner:</span>
        {PARTNERS.map(p => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bottombar__partner"
            title={p.name}
          >
            <span className="bottombar__partnerName">{p.name}</span>
          </a>
        ))}
      </div>


      <div className="bottombar__grid">
        <section className="bottombar__col">
          <h4>Kontakt</h4>
          <address>
            <span className="bottombar__addrTitle">Studio Stuttgart</span><br />
            Immenhoferstraße 46<br />
            70180 Stuttgart
          </address>

          <address>
            <span className="bottombar__addrTitle">Studio Sindelfingen</span><br />
            Wettbachstraße 15<br />
            71063 Sindelfingen<br />
            (bei Pieksfein Piercing & Tattoo)
          </address>
          <p>
            Tel.: <a href="tel: 015773756720">+49&nbsp;1577&nbsp;37&nbsp;56&nbsp;720</a><br />
            E-Mail: <a href="mailto:info@medusabeautylounge.de">info@medusabeautylounge.de</a>
          </p>
        </section>

        <section className="bottombar__col">
          <h4>Öffnungszeiten</h4>
          <ul className="bottombar__list">
            <li>Mo–Fr: 10:00–18:00</li>
            <li>Sa: geschlossen</li>
            <li>So/Feiertage: geschlossen</li>
          </ul>
        </section>

        <section className="bottombar__col">
          <h4>Schnelllinks</h4>
          <ul className="bottombar__list">
            <li><NavLink to="/kontakt" className="bottombar__link">Kontakt</NavLink></li>
            <li><NavLink to="/impressum" className="bottombar__link">Impressum</NavLink></li>
            <li><NavLink to="/datenschutz" className="bottombar__link">Datenschutzerklärungen</NavLink></li>
          </ul>
        </section>
      </div>

      {/* Untere Leiste */}
      <div className="bottombar__bottom">
        <span>© {new Date().getFullYear()} a Nils und Elias Production</span>
        <nav className="bottombar__nav" aria-label="Footer">
          <ul className="bottombar__menu">
          </ul>
        </nav>
      </div>
    </footer>
  );
}
