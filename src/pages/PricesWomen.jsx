import React from "react";
import "./PricesWomen.css";
import { pub } from "../pub";

const HERO_IMAGE = pub("DamenPreise.jpeg"); // Bild im public-Ordner

const rowsHead = [
  { part: "Gesicht komplett", price: "100 €" },
  { part: "Oberlippe, Kinn", price: "80 €" },
  { part: "Oberlippe", price: "40 €" },
  { part: "Koteletten", price: "45 €" },
  { part: "Kinn", price: "45 €" },
  { part: "Hals", price: "45 €" },
  { part: "Nacken", price: "45 €" },
];

const rowsBody = [
  { part: "Achseln", price: "55 €" },
  { part: "Oberarme", price: "60 €" },
  { part: "Unterarme", price: "60 €" },
  { part: "Arme komplett", price: "105 €" },
  { part: "Hände", price: "35 €" },
  { part: "Dekolleté", price: "60 €" },
  { part: "Brust", price: "80 €" },
  { part: "Brustwarzen", price: "45 €" },
  { part: "Bauch", price: "70 €" },
  { part: "Bauchlinie", price: "40 €" },
  { part: "Rücken komplett", price: "80 €" },
  { part: "Steiß", price: "45 €" },
];

const rowsIntim = [
  { part: "Intim, Bikini, Pofalte", price: "150 €" },
  { part: "Intim", price: "75 €" },
  { part: "Bikini (Seiten)", price: "70 €" },
  { part: "Pofalte", price: "50 €" },
  { part: "Po komplett, Pofalte", price: "75 €" },
];

const rowsLegs = [
  { part: "Oberschenkel (mit Knie)", price: "120 €" },
  { part: "Unterschenkel (mit Knie)", price: "120 €" },
  { part: "Füße", price: "45 €" },
  { part: "Beine komplett", price: "210 €" },
];

const rowsPackages = [
  { part: "Intim, Bikini, Pofalte", price: "150 €" },
  { part: "Intim, Bikini, Pofalte, Achsel", price: "180 €" },
  { part: "Intim, Bikini, Pofalte, Achsel, Unterschenkel", price: "270 €" },
  { part: "Beine komplett, Intim komplett", price: "320 €" },
  { part: "Gesicht komplett", price: "100 €" },
  { part: "Arme komplett", price: "105 €" },
  { part: "Ganzkörper", price: "500 €" },
];

function Hero() {
  return (
    <header className="priceswomen-hero">
      <div
        className="priceswomen-heroBg"
        style={{ "--hero-image": `url(${HERO_IMAGE})` }}
      />
      <div className="priceswomen-heroContent">
        <h1 className="priceswomen-heroTitle">Leistungen – Damen</h1>
      </div>
    </header>
  );
}

function SectionHeading({ title }) {
  return (
    <div className="priceswomen-sectionHeading">
      <h2 className="priceswomen-sectionTitle">{title}</h2>
      <span className="priceswomen-sectionRule" />
    </div>
  );
}

function PricingTable({ rows }) {
  return (
    <div className="priceswomen-card">
      <table className="priceswomen-table">
        <colgroup>
          <col style={{ width: "70%" }} />
          <col style={{ width: "30%" }} />
        </colgroup>
        <thead>
          <tr className="priceswomen-headerRow">
            <th className="priceswomen-th priceswomen-left">Areal</th>
            <th className="priceswomen-th priceswomen-right">
              Preis pro Behandlung
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="priceswomen-tr">
              <td className="priceswomen-td priceswomen-left">{r.part}</td>
              <td className="priceswomen-td priceswomen-right priceswomen-nowrap">
                {r.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PricesWomen() {
  return (
    <main className="priceswomen-page">
      <Hero />

      <div className="priceswomen-container">

        <div className="priceswomen-infoBox">
          <p className="priceswomen-infoP">
            Beim Kauf von 5 Behandlungen bekommen Sie 1 Behandlung kostenlos dazu.
          </p>
          <p className="priceswomen-infoP">
            Beim Kauf von 6 Behandlungen bekommen Sie 1 Behandlung kostenlos dazu
            + 50€ Gutschein (für jede beliebige Behandlung einlösbar).
          </p>
          <p className="priceswomen-infoP">
            Jedes Paket ist zudem in Gutscheinform erhältlich!
          </p>
          <p className="priceswomen-infoP">
            Wir danken für deine Weiterempfehlung! Bist du zufrieden mit unserer
            Leistung, empfehle uns weiter! Für jede Empfehlung an Neukunden
            gibt es einen 50€ Gutschein als Dankeschön.
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
          className="priceswomen-cta-btn"
          onClick={() => (window.location.href = "/beratung")}
          style={{ margin: "26px auto 0", display: "block" }}
        >
          Kostenfreie Beratung anfragen
        </button>
      </div>
    </main>
  );
}