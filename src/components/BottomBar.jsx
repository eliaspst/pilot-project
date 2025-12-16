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
        {/* LINKE SPALTE */}
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

            <table className="bottombar__hoursTable" aria-label="Öffnungszeiten">
              <tbody>
                <tr>
                  <td>Montag – Freitag</td>
                  <td>10:00 – 18:00 Uhr</td>
                </tr>
                <tr>
                  <td>Samstag</td>
                  <td>geschlossen</td>
                </tr>
                <tr>
                  <td>Sonntag &amp; Feiertage</td>
                  <td>geschlossen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* RECHTE SPALTE: Termine + Telefon / Mail / Instagram */}
        <section className="bottombar__col" aria-labelledby="kontakt-wege">
          <h4 id="kontakt-wege" className="sr-only">
            Kontaktwege
          </h4>

          <div className="bottombar__appointmentNote" aria-label="Hinweis Termine">
            Termine nur nach Vereinbarung.
          </div>

          <p className="bottombar__contactWays">
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

      <div className="bottombar__bottom">
        <span>© {new Date().getFullYear()} Medusa Beauty Lounge</span>

        <nav className="bottombar__nav" aria-label="Footer-Navigation">
          <ul className="bottombar__menu">
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
      </div>
    </footer>
  );
}
