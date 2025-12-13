import React from "react";
import "./PricesMen.css";
import { pub } from "../pub";

const HERO_IMAGE = pub("HerrenPreise.jpeg");

const rowsHead = [
  { part: "Bart Korrektur (Wange)", price: "70 €" },
  { part: "Hals", price: "80 €" },
  { part: "Nacken", price: "80 €" },
  { part: "Bart Korrektur (Wange), Hals", price: "130 €" },
];

const rowsBody = [
  { part: "Achseln", price: "70 €" },
  { part: "Oberarme", price: "90 €" },
  { part: "Unterarme", price: "90 €" },
  { part: "Hände", price: "40 €" },
  { part: "Arme komplett", price: "165 €" },
  { part: "Schultern", price: "85 €" },
  { part: "Brust", price: "120 €" },
  { part: "Bauch", price: "130 €" },
  { part: "Rücken komplett", price: "170 €" },
  { part: "Rücken Seiten", price: "100 €" },
  { part: "Steiß", price: "100 €" },
];

const rowsIntim = [
  { part: "Intimbereich", price: "100 €" },
  { part: "Pofalte", price: "70 €" },
  { part: "Gesäß (komplett)", price: "95 €" },
  { part: "Intim, Pofalte ", price: "170 €" },

];

const rowsLegs = [
  { part: "Oberschenkel", price: "140 €" },
  { part: "Unterschenkel", price: "140 €" },
  { part: "Füße", price: "50 €" },
  { part: "Beine komplett", price: "250 €" },
];

const rowsPackages = [
  { part: "Rücken, Schulter, Nacken", price: "300 €" },
  {
    part: "Rücken, Schulter, Nacken, Oberarme",
    price: "350 €",
  },
  { part: "Bauch, Brust", price: "220 €" },
  { part: "Intim komplett, Pofalte", price: "170 €" },
  { part: "Bart, Hals", price: "130 €" },
  { part: "Oberkörper komplett", price: "480 €" },
  { part: "Ganzkörper", price: "700 €" },
];

function Hero() {
  return (
    <header className="pricesmen-hero">
      <div
        className="pricesmen-heroBg"
        style={{ "--hero-image": `url(${HERO_IMAGE})` }}
      />
      <div className="pricesmen-heroContent">
        <h1 className="pricesmen-heroTitle">Leistungen – Herren</h1>
      </div>
    </header>
  );
}

function SectionHeading({ title }) {
  return (
    <div className="pricesmen-sectionHeading">
      <h2 className="pricesmen-sectionTitle">{title}</h2>
      <span className="pricesmen-sectionRule" />
    </div>
  );
}

function PricingTable({ rows }) {
  return (
    <div className="pricesmen-card">
      <table className="pricesmen-table">
        <colgroup>
          <col style={{ width: "70%" }} />
          <col style={{ width: "30%" }} />
        </colgroup>
        <thead>
          <tr className="pricesmen-headerRow">
            <th className="pricesmen-th pricesmen-left">Areal</th>
            <th className="pricesmen-th pricesmen-right">Preis pro Behandlung</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="pricesmen-tr">
              <td className="pricesmen-td pricesmen-left">{r.part}</td>
              <td className="pricesmen-td pricesmen-right pricesmen-nowrap">
                {r.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default function PricesMen() {
  return (
    <main className="pricesmen-page">
      <Hero />

      <div className="pricesmen-container">

         <div className="pricesmen-infoBox">
          <p className="pricesmen-infoP">
            Beim Kauf von 5 Behandlungen bekommen Sie 1 Behandlung kostenlos dazu.
          </p>
          <p className="pricesmen-infoP">
            Beim Kauf von 6 Behandlungen bekommen Sie 1 Behandlung kostenlos dazu + 50€ Gutschein
            (für jede beliebige Behandlung einlösbar).
          </p>
          <p className="pricesmen-infoP">
            Jedes Paket ist zudem in Gutscheinform erhältlich!
          </p>
          <p className="pricesmen-infoP">
            Wir danken für deine Weiterempfehlung! Bist du zufrieden mit unserer Leistung, empfehle
            uns weiter! Für jede Empfehlung an Neukunden gibt es einen 50€ Gutschein als
            Dankeschön.
          </p>
        </div>
        
        <SectionHeading title="Pakete" />
        <PricingTable rows={rowsPackages} />

        <SectionHeading title="Kopf" />
        <PricingTable rows={rowsHead} />

        <SectionHeading title="Oberkörper" />
        <PricingTable rows={rowsBody} />

        <SectionHeading title="Intimzone" />
        <PricingTable rows={rowsIntim} />

        <SectionHeading title="Beine" />
        <PricingTable rows={rowsLegs} />

      
        <button
          className="pricesmen-cta-btn"
          onClick={() => (window.location.href = "/beratung")}
          style={{ margin: "26px auto 0", display: "block" }}
        >
          Kostenfreie Beratung anfragen
        </button>
      </div>
    </main>
  );
}