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
      {/* PARTNER */}
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

      {/* KONTAKT-BEREICH */}
      <div className="bottombar__contactRow" aria-label="Kontakt">
        {/* LINKE SPALTE: Kontakt-Grid */}
        <section className="bottombar__col" aria-labelledby="kontakt-title">
          <h4 id="kontakt-title">Kontakt</h4>

          {/* Studio Stuttgart */}
          <address className="bottombar__col--stuttgart">
            <span className="bottombar__addrTitle">Studio Stuttgart</span>
            <br />
            Immenhoferstraße 46
            <br />
            70180 Stuttgart
          </address>

          {/* Studio Sindelfingen */}
          <address className="bottombar__col--sindelfingen">
            <span className="bottombar__addrTitle">Studio Sindelfingen</span>
            <br />
            Wettbachstraße 15
            <br />
            71063 Sindelfingen
            <br />
            (bei Pieksfein Piercing &amp; Tattoo)
          </address>

          {/* Öffnungszeiten */}
          <div className="bottombar__col--hours">
            <h4>Öffnungszeiten</h4>
            <p>
              Mo–Fr
              <br />
              10:00–18:00
              <br />
              Sa
              <br />
              geschlossen
              <br />
              So/Feiertage
              <br />
              geschlossen
            </p>
          </div>

          {/* Schnelllinks */}
          <nav
            className="bottombar__col--links"
            aria-labelledby="quicklinks-title"
          >
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
        </section>

        {/* RECHTE SPALTE: Telefon / Mail / Instagram */}
        <section className="bottombar__col" aria-labelledby="kontakt-wege">
          <h4 id="kontakt-wege" className="sr-only">
            Kontaktwege
          </h4>
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
            <br />
            Instagram:{" "}
            <a
              href="https://www.instagram.com/medusa_beauty_lounge_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bottombar__socialLink"
            >
              @medusabeautylounge
            </a>
          </p>
        </section>
      </div>

      {/* UNTERE LEISTE */}
      <div className="bottombar__bottom">
        <span>© {new Date().getFullYear()} Medusa Beauty Lounge</span>
        <nav className="bottombar__nav" aria-label="Footer">
          <ul className="bottombar__menu">
            {/* optional weitere Links */}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
