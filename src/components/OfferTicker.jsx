import React from "react";
import "./OfferTicker.css";

const OFFERS = [
  "🔥 20% für Studenten und Schüler",
  "🎁 50€ Gutschein bei Weiterempfehlung eines Neukunden",
  "💎 Ganzkörper-Paket jetzt zum Vorteilspreis",
  "🎅🏼 Auf der Suche nach einem Weinachtsgeschenk? ",
];

export default function OfferTicker() {
  return (
    <div className="offerBlock">
      <div className="offerTicker" aria-label="Aktuelle Angebote">
        <div className="offerInner">
          <div className="offerTrack">
            {OFFERS.map((text, idx) => (
              <div className="offerItem" key={`a-${idx}`}>
                <span>{text}</span>
              </div>
            ))}
            {OFFERS.map((text, idx) => (
              <div className="offerItem" key={`b-${idx}`}>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
