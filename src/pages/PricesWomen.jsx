import React from "react";

const ACCENT = "#0c0f1c";   // Akzentfarbe (Rahmen, Header, Linien)
const TEXT = "#c5a762";     // Schriftfarbe
const TABLE_BG = "#ffffff"; // Tabellenhintergrund
const HERO_IMAGE = "/DamenPreise.jpeg"; // Hero-Bild im public-Ordner

const rowsHead = [
  { part: "Gesicht komplett", price: "70 €" },
  { part: "Gesicht, Hals", price: "80 €" },
  { part: "Oberlippe", price: "35 €" },
  { part: "Koteletten", price: "40 €" },
  { part: "Kinn", price: "35 €" },
  { part: "Hals", price: "40 €" },
  { part: "Nacken", price: "40 €" },
];

const rowsBody = [
  { part: "Achseln", price: "45 €" },
  { part: "Oberarme", price: "55 €" },
  { part: "Unterarme", price: "55 €" },
  { part: "Arme komplett, Hände", price: "100 €" },
  { part: "Hände", price: "35 €" },
  { part: "Dekolleté", price: "40 €" },
  { part: "Brust", price: "60 €" },
  { part: "Brustwarzen", price: "40 €" },
  { part: "Bauch", price: "60 €" },
  { part: "Bauchlinie", price: "35 €" },
  { part: "Rücken komplett", price: "70 €" },
  { part: "Steiß", price: "50 €" },
];

const rowsIntim = [
  { part: "Intim, Bikini, Pofalte", price: "120 €" },
  { part: "Intim & Bikini", price: "85 €" },
  { part: "Intim", price: "55 €" },
  { part: "Bikini (Seiten)", price: "55 €" },
  { part: "Pofalte", price: "45 €" },
  { part: "Po", price: "55 €" },
];

const rowsLegs = [
  { part: "Oberschenkel (mit Knie)", price: "90 €" },
  { part: "Unterschenkel (mit Knie)", price: "85 €" },
  { part: "Füße", price: "35 €" },
  { part: "Beine komplett", price: "145 €" },
];

const rowsPackages = [
  { part: "Intim, Bikini, Pofalte", price: "120 €" },
  { part: "Intim, Bikini, Pofalte, Achsel", price: "140 €" },
  { part: "Intim, Bikini, Pofalte, Unterschenkel", price: "175 €" },
  { part: "Intim, Bikini, Pofalte, Achsel, Unterschenkel", price: "200 €" },
  { part: "Beine komplett, Intim komplett", price: "285 €" },
  { part: "Ganzkörper", price: "400 €" },
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
        <h1 style={styles.heroTitle}>Preise Haarentfernung – Damen</h1>
      </div>
    </header>
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

export default function PricesWomen() {
  return (
    <main style={styles.page}>
      <Hero />

      <div style={{ width: "100%", maxWidth: 1000, margin: "0 auto", padding: "0 16px 40px" }}>
        <div style={styles.infoBox}>
          <p style={styles.infoP}>
            Beim Kauf von 5 Behandlungen bekommen Sie 1 Behandlung kostenlos dazu.
          </p>
          <p style={styles.infoP}>
            Beim Kauf von 6 Behandlungen bekommen Sie 1 Behandlungen kostenlos dazu + 50€ Gutschein
            (für jede beliebige Behandlungen einlösbar)
          </p>
          <p style={styles.infoP}>Jedes Paket ist zudem in Gutscheinform erhältlich!</p>
          <p style={styles.infoP}>
            Wir danken für deine Weiterempfehlung! Bist du zufrieden mit unserer Leistung empfehle
            uns weiter! Für jede Empfehlung an Neukunden gibt es einen 50€ Gutschein als Dankeschön.
          </p>
        </div>

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

        <p style={styles.footnote}>*Einzelpreis ab 6 Behandlungen</p>
        <p style={styles.footnote}>Hinweis: Es besteht die Möglichkeit, in Raten zu zahlen.</p>
         <button className ="contact-button" onClick={() => window.location.href = '/beratung'}
         style={{ marginTop: 20 }}>Jetzt beraten lassen
         </button>
      </div>
    </main>
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
