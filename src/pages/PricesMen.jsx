import React from "react";

const ACCENT = "#0c0f1c";   // Akzentfarbe (Rahmen, Header, Linien)
const TEXT = "#c5a762";     // Schriftfarbe
const TABLE_BG = "#ffffff"; // Tabellenhintergrund
const HERO_IMAGE = "/HerrenPreise.jpeg"; // Bild im public-Ordner ablegen

const rowsHead = [
  { part: "Bart Korrektur (Wange)", price: "50 €" },
  { part: "Hals", price: "55 €" },
  { part: "Ohren", price: "30 €" },
  { part: "Nacken", price: "55 €" },
  { part: "Bart Korrektur (Wange), Hals", price: "85 €" },
];

const rowsBody = [
  { part: "Achseln", price: "55 €" },
  { part: "Oberarme", price: "75 €" },       
  { part: "Unterarme", price: "75 €" },
  { part: "Hände", price: "30 €" },
  { part: "Schultern", price: "75 €" },
  { part: "Brust", price: "95 €" },
  { part: "Bauch", price: "110 €" },
  { part: "Rücken", price: "130 €" },
  { part: "Rücken Seiten", price: "75 €" },
  { part: "Steiß", price: "55 €" },
];

const rowsIntim = [
  { part: "Intimbereich", price: "70 €" },
  { part: "Pofalte", price: "50 €" },
  { part: "Gesäß (komplett)", price: "85 €" },
];

const rowsLegs = [
  { part: "Oberschenkel", price: "110 €" },
  { part: "Unterschenkel", price: "110 €" },
  { part: "Füße", price: "40 €" },
  { part: "Beine komplett", price: "200 €" },
];

const rowsPackages = [
  { part: "Rücken, Schulter, Nacken", price: "240 €" },
  { part: "Rücken, Schulter, Nacken, Bauch, Brust, Oberarme + Achsel gratis dazu", price: "450 €" },
  { part: "Bauch, Brust", price: "190 €" },
  { part: "Intim komplett, Gesäß", price: "145 €" },
  { part: "Intim, Gesäß, Achsel", price: "180 €" },
  { part: "Ganzkörper", price: "600 €" },
];

function Hero() {
  return (
    <header style={styles.hero}>
      <div
        style={{
          ...styles.heroBg,
          backgroundImage: `linear-gradient(rgba(12, 15, 28, 0.5), rgba(12, 15, 28, 0.5)), url(${HERO_IMAGE})`,
        }}
      />
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Preise Haarentfernung – Herren</h1>
      </div>
    </header>
  );
}

function SectionHeading({ title }) {
  return (
    <div style={{ margin: "28px 0 12px", display: "flex", alignItems: "center", gap: 12 }}>
      <h2 style={{ color: TEXT, margin: 0, fontSize: 22 }}>{title}</h2>
      <span style={{ flex: 1, height: 2, background: ACCENT, display: "block", borderRadius: 2 }} />
    </div>
  );
}

function PricingTable({ rows }) {
  return (
    <div style={styles.card}>
      <table style={styles.table}>
        <colgroup>
          <col style={{ width: "70%" }} />
          <col style={{ width: "30%" }} />
        </colgroup>
        <thead>
          <tr style={styles.headerRow}>
            <th style={{ ...styles.th, textAlign: "left" }}>Körperteil</th>
            <th style={{ ...styles.th, textAlign: "right" }}>Preis pro Behandlung</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={styles.tr}>
              <td style={{ ...styles.td, textAlign: "left" }}>{r.part}</td>
              <td style={{ ...styles.td, textAlign: "right", whiteSpace: "nowrap" }}>{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PricesMen() {
  return (
    <main style={styles.page}>
      <Hero />

      <div style={{ width: "100%", maxWidth: 1000, margin: "0 auto", padding: "0 16px 40px" }}>
        {/* Intro-Text */}
        <p style={{ color: TEXT, margin: "24px 0 0" }}>Unsere Preisliste für Haarentfernung</p>
        <div style={styles.infoBox}>
          <p style={styles.infoP}>Beim Kauf von 5 Behandlungen bekommen Sie 1 Behandlung kostenlos dazu.</p>
          <p style={styles.infoP}>
            Beim Kauf von 6 Behandlungen bekommen Sie 1 Behandlungen kostenlos dazu + 50€ Gutschein
            (für jede beliebige Behandlungen einlösbar)
          </p>
          <p style={styles.infoP}>Jedes Paket ist zudem in Gutscheinform erhältlich!</p>
          <p style={styles.infoP}>
            Wir danken für deine Weiterempfehlung! Bist du zufrieden mit unserer Leistung empfehle uns
            weiter! Für jede Empfehlung an Neukunden gibt es einen 50€ Gutschein als Dankeschön.
          </p>
        </div>

        {/* Tabellen */}
        <SectionHeading title="Kopf" />
        <PricingTable rows={rowsHead} />

        <SectionHeading title="Oberkörper" />
        <PricingTable rows={rowsBody} />

        <SectionHeading title="Intimzone" />
        <PricingTable rows={rowsIntim} />

        <SectionHeading title="Beine" />
        <PricingTable rows={rowsLegs} />

        <SectionHeading title="Pakete" />
        <PricingTable rows={rowsPackages} />

        {/* Fußnoten */}
        <p style={styles.footnote}>*Einzelpreis ab 6 Behandlungen</p>
        <p style={styles.footnote}>Hinweis: Es besteht die Möglichkeit, in Raten zu zahlen.</p>
      </div>
    </main>
  );
}

const styles = {
  page: { background: TABLE_BG },
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
    zIndex: 0,
  },
  heroContent: { position: "relative", zIndex: 1, textAlign: "center" },
  heroTitle: { color: TEXT, fontSize: 42, fontWeight: 800, letterSpacing: 0.3 },

  card: {
    width: "100%",
    border: `2px solid ${ACCENT}`,
    borderRadius: 12,
    overflow: "hidden",
    background: TABLE_BG,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    tableLayout: "fixed",
    background: TABLE_BG,
    color: TEXT,
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontSize: 16,
  },
  headerRow: { background: ACCENT },
  th: {
    padding: "16px 20px",
    color: TEXT,
    fontWeight: 700,
    letterSpacing: 0.3,
    borderBottom: `2px solid ${ACCENT}`,
  },
  tr: { borderBottom: `1px solid ${ACCENT}` },
  td: { padding: "14px 20px", color: TEXT },

  infoBox: {
    margin: "12px 0 20px 0",
    border: `1px solid ${ACCENT}`,
    borderRadius: 10,
    padding: 16,
    background: "#ffffff",
  },
  infoP: { margin: "0 0 8px 0", color: TEXT, lineHeight: 1.5 },

  footnote: { color: TEXT, fontSize: 14, fontStyle: "italic", marginTop: 8 },
};
