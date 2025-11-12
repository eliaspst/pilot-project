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
        {PARTNERS.map((p) => (
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

      <div className="bottombar__contactRow" aria-label="Kontakt">
        <section className="bottombar__col" aria-labelledby="kontakt-title">
          <h4 id="kontakt-title">Kontakt</h4>

          <address>
            <span className="bottombar__addrTitle">Studio Stuttgart</span><br />
            Immenhoferstraße 46<br />
            70180 Stuttgart
          </address>

          <address>
            <span className="bottombar__addrTitle">Studio Sindelfingen</span><br />
            Wettbachstraße 15<br />
            71063 Sindelfingen<br />
            (bei Pieksfein Piercing &amp; Tattoo)
          </address>
        </section>

        <section className="bottombar__col" aria-labelledby="kontakt-wege">
          <h4 id="kontakt-wege" className="sr-only">Kontaktwege</h4>
          <p>
            Tel.:{" "}
            <a href="tel:+4915773756720">
              +49&nbsp;1577&nbsp;37&nbsp;56&nbsp;720
            </a>
            <br />
            E-Mail:{" "}
            <a href="mailto:info@medusabeautylounge.de">
              info@medusabeautylounge.de
            </a>
          </p>
        </section>
      </div>

      <section className="bottombar__hours" aria-labelledby="hours-title">
        <h4 id="hours-title">Öffnungszeiten</h4>
        <dl>
          <dt>Mo–Fr</dt><dd>10:00–18:00</dd>
          <dt>Sa</dt><dd>geschlossen</dd>
          <dt>So/Feiertage</dt><dd>geschlossen</dd>
        </dl>
      </section>

      <nav className="bottombar__quicklinks" aria-labelledby="quicklinks-title">
        <h4 id="quicklinks-title">Schnelllinks</h4>
        <ul className="bottombar__list">
          <li>
            <NavLink to="/impressum" className="bottombar__link">
              Impressum
            </NavLink>
          </li>
          <li>
            <NavLink to="/datenschutz" className="bottombar__link">
              Datenschutzerklärung
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="bottombar__bottom">
        <span>© {new Date().getFullYear()} Medusa Beauty Lounge</span>
        <nav className="bottombar__nav" aria-label="Footer">
          <ul className="bottombar__menu">{/* optional */}</ul>
        </nav>
      </div>
    </footer>
  );
}
