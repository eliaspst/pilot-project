import React from "react";
import "./PricesWomen.css";
import { pub } from "../pub";

const HERO_IMAGE = pub("/DamenPreise.jpeg"); // Bild im public-Ordner

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
    <header className="priceswomen-hero">
      <div className="priceswomen-heroBg" style={{ "--hero-image": `url(${HERO_IMAGE})` }} />
      <div className="priceswomen-heroContent">
        <h1 className="priceswomen-heroTitle">Preise Haarentfernung – Damen</h1>
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
            <th className="priceswomen-th priceswomen-left">Körperteil</th>
            <th className="priceswomen-th priceswomen-right">Preis pro Behandlung</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="priceswomen-tr">
              <td className="priceswomen-td priceswomen-left">{r.part}</td>
              <td className="priceswomen-td priceswomen-right priceswomen-nowrap">{r.price}</td>
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
            Beim Kauf von 6 Behandlungen bekommen Sie 1 Behandlungen kostenlos dazu + 50€ Gutschein
            (für jede beliebige Behandlungen einlösbar)
          </p>
          <p className="priceswomen-infoP">Jedes Paket ist zudem in Gutscheinform erhältlich!</p>
          <p className="priceswomen-infoP">
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

        <p className="priceswomen-footnote">*Einzelpreis ab 6 Behandlungen</p>
        <p className="priceswomen-footnote">Hinweis: Es besteht die Möglichkeit, in Raten zu zahlen.</p>

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
