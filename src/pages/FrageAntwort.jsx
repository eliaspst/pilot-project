import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FrageAntwort.css";

const ITEMS = [
  {
    title: "Beratung",
    img: "/placeholder.png",
    text:
      "Platzhalter: Kostenfreie Erstberatung – Inhalte, Ablauf, Ziele. Wir klären alle Fragen persönlich.",
  },
  {
    title: "Ablauf",
    img: "/placeholder.png",
    text:
      "Platzhalter: So läuft eine Behandlung ab – Ankunft, Vorbereitung, Behandlung, Nachpflege.",
  },
  {
    title: "Schmerzempfinden",
    img: "/placeholder.png",
    text:
      "Platzhalter: Sanfte Technologie & Kühlung. Empfindung meist als Wärme/Prickeln beschrieben.",
  },
  {
    title: "Sitzungen",
    img: "/placeholder.png",
    text:
      "Platzhalter: Übliche Anzahl & Intervalle – hängt von Haut-/Haartyp und Areal ab.",
  },
  {
    title: "Eignung",
    img: "/placeholder.png",
    text:
      "Platzhalter: Für die meisten Hauttypen geeignet. Vorab beraten wir individuell & sicher.",
  },
  {
    title: "Nachpflege",
    img: "/placeholder.png",
    text:
      "Platzhalter: Kühlen, Sonnenschutz, milde Pflege. Keine Reizung/Peeling direkt nach der Sitzung.",
  },
];

function Tile({ item, isOpen, onToggle, index }) {
  const panelRef = useRef(null);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (panelRef.current) setMax(isOpen ? panelRef.current.scrollHeight : 0);
  }, [isOpen, item.text]);

  const btnId = `qa-btn-${index}`;
  const panelId = `qa-panel-${index}`;

  return (
    <article className={`qa-tile ${isOpen ? "open" : ""}`}>
      <div className="qa-avatar-wrap" aria-hidden="true">
        <div className="qa-avatar-ring">
          <img className="qa-avatar" src={item.img} alt="" />
        </div>
      </div>

      <h3 className="qa-title">{item.title}</h3>

      {/* Nur der Pfeil als Button */}
      <button
        id={btnId}
        className="qa-button"
        aria-controls={panelId}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <svg className="qa-chev" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>

      {/* Ausklapptext */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        ref={panelRef}
        className="qa-panel"
        style={{ maxHeight: `${max}px` }}
      >
        <p>{item.text}</p>
      </div>
    </article>
  );
}

export default function FrageAntwort() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <main className="faq-page">
      {/* Hero */}
      <section
        className="faq-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,15,28,0.55), rgba(12,15,28,0.55)), url(/MedusaFace.png)",
          backgroundPosition: "center center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>FAQ</h1>
        <p>Häufige Fragen – kompakt beantwortet</p>
      </section>

      {/* Grid mit Kreisen */}
      <section className="qa-grid">
        {ITEMS.map((item, i) => (
          <Tile
            key={i}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </section>

      {/* Goldener Button unter der letzten Reihe */}
      <div className="qa-bottom-btn-wrap">
        <button
          className="qa-bottom-btn"
          onClick={() => navigate("/beratung")}
        >
          Jetzt beraten lassen
        </button>
      </div>
    </main>
  );
}
