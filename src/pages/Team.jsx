import React from "react";

// Farben / Stil wie bei den Preis-Seiten
const ACCENT = "#0c0f1c";   // Rahmen, Linien, Header-Hintergrund
const TEXT = "#c5a762";     // Schriftfarbe
const BG = "#fff";       // Seitenhintergrund

// Pfade zu deinen Bildern im public-Ordner
// → Lege die Dateien unter /public/ ab und passe die Namen hier an
const HERO_IMAGE = "/team-hero.jpeg";      // großes Headerbild für die Hero-Section
const PROFILE_IMAGE = "/ViktoriaStollTeam.jpg";     // Bild, das neben dem Text stehen soll

const NAVBAR_OFFSET = 96; // Falls deine Navbar fixed ist; bei Bedarf anpassen

export default function Team() {
  return (
    <main style={styles.page}>
      <Hero />

      {/* Center-Card mit Bild + Text nebeneinander (responsive) */}
      <section style={styles.sectionOuter}>
        <div style={styles.card}> 
          <div style={styles.cardInner}>
            <figure style={styles.figure}>
              <img src={PROFILE_IMAGE} alt="Viktoria Stoll" style={styles.img} />
            </figure>

            <article style={styles.article}>
              <h2 style={styles.h2}>Viktoria Stoll</h2>
              <p style={styles.lead}>Unsere oberste Priorität ist Ihr Wohlbefinden.</p>

              <p style={styles.p}>
                Dank unserer langjährigen Erfahrung in den Bereichen Beauty, Kosmetik, Ernährung und Meditation bin ich zuversichtlich, für jeden individuell die passende Lösung zu finden, um sowohl das innere als auch das äußere „ICH“ zu verändern und wiederzufinden. Ich stelle unsere Geräte vor, beginnend mit unseren zwei Höhepunkten: zwei hochmodernen Geräten, hergestellt in Deutschland.
              </p>

              <p style={styles.p}>
                Ich habe mich auf dauerhafte Haarentfernung spezialisiert. Dabei habe ich bewusst den Mediostar Monolith® von Asclepion gewählt, den weltweit schnellsten Diodenlaser. Der eingebaute Carl Zeiss Laser erzielt einzigartige Ergebnisse. Ich behandle alle Körperbereiche, Hauttypen und Haarfarben. Sichtbare Ergebnisse schon nach der ersten Behandlung.
              </p>

              <p style={styles.p}>
                Meine Reise mit Medusa Beauty Lounge beginnt, und ich lade Sie ein, von Anfang an dabei zu sein.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <header style={{ ...styles.hero, marginTop: NAVBAR_OFFSET }}>
      <div
        style={{
          ...styles.heroBg,
          backgroundImage: `linear-gradient(rgba(12, 15, 28, 0.45), rgba(12, 15, 28, 0.45)), url(${HERO_IMAGE})`,
        }}
      />
      <div style={styles.heroContent}>
        <h1 style={styles.h1}>Unser Team</h1>
      </div>
    </header>
  );
}

const styles = {
  page: {
    background: BG,
    minHeight: "100svh",
  },
  hero: {
    position: "relative",
    width: "100%",
    height: 420,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `2px solid ${ACCENT}`,
    overflow: "hidden",
  },
  heroBg: {
    position: "absolute",
    inset: 0,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    padding: "40px 16px",
  },
  h1: {
    margin: 0,
    color: TEXT,
    fontSize: 42,
    fontWeight: 800,
    letterSpacing: 0.3,
  },
  sectionOuter: {
    maxWidth: 1100,
    margin: "28px auto 48px",
    padding: "0 16px",
  },
  card: {
    border: `2px solid ${ACCENT}`,
    borderRadius: 14,
    background: BG,
    overflow: "hidden",
  },
  cardInner: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: 24,
    padding: 24,
  },
  figure: {
    margin: 0,
    border: `2px solid ${ACCENT}`,
    borderRadius: 12,
    overflow: "hidden",
    alignSelf: "center",
  },
  img: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  article: {
    color: TEXT,
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  },
  h2: {
    margin: "0 0 6px 0",
    color: TEXT,
    fontSize: 28,
    fontWeight: 800,
  },
  lead: {
    margin: "0 0 14px 0",
    color: TEXT,
    fontSize: 18,
    fontWeight: 600,
  },
  p: {
    margin: "0 0 12px 0",
    color: TEXT,
    lineHeight: 1.55,
    fontSize: 16,
  },

  // Responsive Breakpoint
  "@media (max-width: 900px)": {
    cardInner: {
      gridTemplateColumns: "1fr",
      gap: 16,
      padding: 16,
    },
    h1: { fontSize: 34 },
    h2: { fontSize: 24 },
  },
};
