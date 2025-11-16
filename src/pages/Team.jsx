import React from "react";
import "./Team.css";
import { pub } from "../pub";

const HERO_IMAGE = pub("/TeamHero.png");
const PROFILE_IMAGE = pub("/ViktoriaStollTeam.jpg");

export default function Team() {
  return (
    <main className="team-page">
      {/* HERO */}
      <header className="team-hero">
        <div
          className="team-heroBg"
          style={{
            backgroundImage: `linear-gradient(rgba(12,15,28,.55), rgba(12,15,28,.55)), url(${HERO_IMAGE})`,
          }}
        />
        <div className="team-heroInner">
          <h1 className="team-title">Unser Team</h1>
          <p className="team-sub">
            Lernen Sie die Gesichter hinter der Medusa Beauty Lounge kennen.
          </p>
        </div>
      </header>

      {/* TEAM SECTION */}
      <section className="team-wrap">
        <div className="team-card">
          <div className="team-grid">
            {/* Bild */}
            <figure className="team-figure">
              <img
                src={PROFILE_IMAGE}
                alt="Viktoria Stoll"
                className="team-img"
              />
            </figure>

            {/* Text */}
            <article className="team-article">
              <div className="team-detailsHeader">
                <span className="team-badge">Geschäftsführerin</span>
                <h2 className="team-name">Viktoria Stoll</h2>
                <p className="team-lead">„Weil Ihre Haut nur das Beste verdient“</p>
              </div>

              <p>
                🌿 <strong>Medusa Beauty Lounge – Dauerhafte Haarentfernung in Stuttgart &amp; Sindelfingen</strong>
              </p>

              <p>
                Willkommen in der Medusa Beauty Lounge – deinem Spezialisten für
                dauerhafte Haarentfernung mit modernster Diodenlaser-Technologie.
                Hier verbinden sich jahrelange Erfahrung, zertifizierte Expertise
                und echte Leidenschaft für Schönheit zu einem einzigartigen
                Ergebnis – sichtbar, spürbar und nachhaltig.
              </p>

              <p>
                💎 <strong>High-End-Technologie trifft auf individuelle Betreuung</strong>
              </p>

              <p>
                Für unsere Laserbehandlungen setzen wir den{" "}
                <a
                  href="https://asclepion.com/mediostar/"
                  className="team-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mediostar Monolith®
                </a>{" "}
                ein – einen der schnellsten und effektivsten Diodenlaser weltweit.
                Er sorgt für schnelle, schmerzfreie und präzise Ergebnisse – für alle
                Hauttypen und nahezu alle Haarfarben.
              </p>

              <p>
                Dank unserer über 10-jährigen Erfahrung findest du bei uns die
                perfekte Kombination aus modernster Technik und persönlicher
                Beratung auf Augenhöhe.
              </p>

              <div className="team-badges">
                <span className="team-badgePill">10+ Jahre Erfahrung</span>
                <span className="team-badgePill">NISV geschult</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}