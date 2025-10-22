import React, { useState, useRef, useEffect } from "react";
import "./FrageAntwort.css";

const QA = [
  { q: "Wie lange dauert eine Behandlung? (Platzhalter)", a: "Antwort 1: Kurze, prägnante Platzhalterantwort über Dauer und Ablauf." },
  { q: "Ist die Behandlung schmerzfrei? (Platzhalter)", a: "Antwort 2: Platzhaltertext zur Schmerzempfindung und Technologie." },
  { q: "Für wen ist die Behandlung geeignet? (Platzhalter)", a: "Antwort 3: Geeignete Haut-/Haartypen sowie Ausschlusskriterien (Platzhalter)." },
  { q: "Wie viele Sitzungen sind nötig? (Platzhalter)", a: "Antwort 4: Durchschnittliche Sitzungsanzahl und Abstände (Platzhalter)." },
  { q: "Was kostet die Behandlung? (Platzhalter)", a: "Antwort 5: Preishinweise / Link zur Preisseite (Platzhalter)." },
  { q: "Gibt es Nebenwirkungen? (Platzhalter)", a: "Antwort 6: Mögliche kurzzeitige Reaktionen & Pflegehinweise (Platzhalter)." },
  { q: "Wie bereite ich mich vor? (Platzhalter)", a: "Antwort 7: Rasur, Sonne meiden, kein Waxing/Epilieren vorab (Platzhalter)." },
  { q: "Wie sieht die Nachpflege aus? (Platzhalter)", a: "Antwort 8: Kühlung, Sonnenschutz, milde Pflege (Platzhalter)." },
];

function Item({ i, q, a, open, onToggle }) {
  const panelRef = useRef(null);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (panelRef.current) {
      setMax(open ? panelRef.current.scrollHeight : 0);
    }
  }, [open, q, a]);

  const id = `faq-panel-${i}`;
  const btnId = `faq-btn-${i}`;

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button
        id={btnId}
        className="faq-q"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <span className="faq-q-text">{q}</span>
        <span className="faq-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="chev">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      </button>

      <div
        id={id}
        role="region"
        aria-labelledby={btnId}
        ref={panelRef}
        className="faq-a"
        style={{ maxHeight: `${max}px` }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FrageAntwort() {
  const [open, setOpen] = useState(null);

  return (
    <main className="faq-page">
      {/* Hero mit Logo aus /public */}
      <section
        className="faq-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,15,28,0.55), rgba(12,15,28,0.55)), url(/MedusaFace.png)",
        }}
      >
        <h1>FAQ</h1>
        <p>Häufige Fragen – kompakt beantwortet</p>
      </section>

      {/* Akkordeon */}
      <section className="faq-wrap">
        {QA.map((x, i) => (
          <Item
            key={i}
            i={i}
            q={x.q}
            a={x.a}
            open={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </section>
    </main>
  );
}