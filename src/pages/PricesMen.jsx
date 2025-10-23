import React from "react";
import "./PricesMen.css";

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
    <header className="hero">
      <div className="heroBg" style={{ "--hero-image": `url(${HERO_IMAGE})` }} />
      <div className="heroContent">
        <h1 className="heroTitle">Preise Haarentfernung – Herren</h1>
      </div>
    </header>
  );
}

function SectionHeading({ title }) {
  return (
    <div className="sectionHeading">
      <h2 className="sectionTitle">{title}</h2>
      <span className="sectionRule" />
    </div>
  );
}

function PricingTable({ rows }) {
  return (
    <div className="card">
      <table className="table">
        <colgroup>
          <col style={{ width: "70%" }} />
          <col style={{ width: "30%" }} />
        </colgroup>
        <thead>
          <tr className="headerRow">
            <th className="th left">Körperteil</th>
            <th className="th right">Preis pro Behandlung</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="tr">
              <td className="td left">{r.part}</td>
              <td className="td right nowrap">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PricesMen() {
  return (
    <main className="page">
      <Hero />
      <div className="container">
        <div className="infoBox">
          <p className="infoP">Beim Kauf von 5 Behandlungen bekommen Sie 1 Behandlung kostenlos dazu.</p>
          <p className="infoP">
            Beim Kauf von 6 Behandlungen bekommen Sie 1 Behandlungen kostenlos dazu + 50€ Gutschein
            (für jede beliebige Behandlungen einlösbar)
          </p>
          <p className="infoP">Jedes Paket ist zudem in Gutscheinform erhältlich!</p>
          <p className="infoP">
            Wir danken für deine Weiterempfehlung! Bist du zufrieden mit unserer Leistung empfehle uns
            weiter! Für jede Empfehlung an Neukunden gibt es einen 50€ Gutschein als Dankeschön.
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

        <p className="footnote">*Einzelpreis ab 6 Behandlungen</p>
        <p className="footnote">Hinweis: Es besteht die Möglichkeit, in Raten zu zahlen.</p>

        <button
          className="contact-button"
          onClick={() => (window.location.href = "/beratung")}
          style={{ marginTop: 20 }}
        >
          Jetzt beraten lassen
        </button>
      </div>
    </main>
  );
}
