import React from "react";
import "./Team.css";

const HERO_IMAGE = "/TeamHero.png";
const PROFILE_IMAGE = "/ViktoriaStollTeam.jpg";

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

      {/* TEAM MEMBER SECTION */}
      <section className="team-wrap">
        <div className="team-card">
          <div className="team-cardHeader">
            <span className="team-badge">Inhaberin</span>
            <h2 className="team-name">Viktoria Stoll</h2>
            <p className="team-lead">„Ihre Haut in besten Händen.“</p>
          </div>

          <div className="team-grid">
            <figure className="team-figure">
              <img
                src={PROFILE_IMAGE}
                alt="Viktoria Stoll – Medusa Beauty Lounge"
                className="team-img"
              />
            </figure>

            <article className="team-article">
              <p>
                Mit langjähriger Erfahrung in Beauty, Kosmetik, Ernährung und
                Meditation finde ich für jede Person eine individuelle,
                stimmige Lösung – für das innere wie das äußere „Ich“. In der
                Medusa Beauty Lounge setzen wir auf hochwertige Geräte „Made in
                Germany“ und echte Beratung auf Augenhöhe.
              </p>

              <p>
                Für die dauerhafte Haarentfernung arbeiten wir bewusst mit dem{" "}
                <a
                  href="https://asclepion.com/mediostar/"
                  target="_blank"
                  rel="noreferrer"
                  className="team-link"
                  aria-label="Mehr über den Mediostar Monolith von Asclepion (öffnet in neuem Tab)"
                >
                  Mediostar Monolith®
                </a>{" "}
                – einem der schnellsten Diodenlaser weltweit.
                Sichtbare Ergebnisse sind oft schon nach der ersten Behandlung
                erkennbar, für alle Körperbereiche, Hauttypen und diverse
                Haarfarben.
              </p>

              <div className="team-badges">
                <span className="team-badgePill">10+ Jahre Erfahrung</span>
                <span className="team-badgePill">High-End Diodenlaser</span>
                <span className="team-badgePill">Alle Hauttypen</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}