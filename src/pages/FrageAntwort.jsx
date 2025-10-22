import React, { useState, useRef, useEffect } from "react";
import "./FrageAntwort.css";

const QA = [
  { q: "Wie funktioniert die dauerhafte Haarentfernung?", a: "Unsere dauerhafte Haarentfernungsmethode basiert auf der Verwendung von hochmoderner Technologie, die Lichtenergie verwendet, um die Haarfollikel zu zerstören und so das Nachwachsen der Haare zu verhindern. Dies geschieht durch gezielte Energieimpulse, die das Haarwachstum unterbinden." },
  { q: "Ist die dauerhafte Haarentfernung schmerzhaft?", a: "Unsere Technologie minimiert Unannehmlichkeiten und sorgt für ein komfortables Erlebnis. Einige Kunden empfinden ein leichtes Kribbeln oder Wärmegefühl während der Behandlung, aber die meisten empfinden dies als gut verträglich." },
  { q: "Wie viele Sitzungen sind für die dauerhafte Haarentfernung erforderlich?", a: "Die Anzahl der Sitzungen kann je nach Hauttyp, Haarfarbe und -dicke variieren. In der Regel sind jedoch mehrere Sitzungen erforderlich, um die besten Ergebnisse zu erzielen. Unsere Experten beraten Sie gerne individuell zu Ihrem Behandlungsplan." },
  { q: "Welche Körperbereiche können mit der dauerhaften Haarentfernung behandelt werden?", a: "Unsere Technologie ermöglicht die Behandlung verschiedener Körperbereiche, einschließlich Gesicht, Beine, Arme, Bikinizone und mehr. Sprechen Sie mit unseren Fachleuten über Ihre spezifischen Bedürfnisse." },
  { q: "Sind die Ergebnisse der dauerhaften Haarentfernung dauerhaft?", a: "Ja, die Ergebnisse unserer dauerhaften Haarentfernung sind langfristig. Die meisten Kunden erleben eine signifikante Reduzierung des Haarwuchses, der oft dauerhaft ist. Gelegentliche Auffrischungsbehandlungen können jedoch erforderlich sein, um optimale Ergebnisse aufrechtzuerhalten." },
  { q: "Gibt es Einschränkungen oder Nachsorgemaßnahmen nach der Behandlung?", a: "Nach der Behandlung können leichte Rötungen oder Hautirritationen auftreten, die jedoch normalerweise innerhalb weniger Stunden nachlassen. Es wird empfohlen, Sonneneinstrahlung zu vermeiden und die Haut mit Feuchtigkeit zu versorgen. Unsere Fachleute geben Ihnen gerne individuelle Empfehlungen für die Nachsorge." },
  { q: "Ist die dauerhafte Haarentfernung für alle Hauttypen geeignet?", a: "Unsere Technologie ist für die meisten Hauttypen geeignet, jedoch können einige Ausnahmen vorliegen. Wir bieten eine individuelle Beratung an, um sicherzustellen, dass die Behandlung Ihren spezifischen Bedürfnissen entspricht." },
  { q: "Wie kann ich einen Termin für eine dauerhafte Haarentfernung vereinbaren?", a: "Sie können ganz einfach online einen Termin vereinbaren oder uns telefonisch kontaktieren, um einen Termin zu vereinbaren. Unsere Fachleute stehen Ihnen gerne zur Verfügung, um Ihre Fragen zu beantworten und Ihnen bei der Planung Ihrer Behandlung zu helfen." },
];

function Item({ i, q, a, open, onToggle }) {
  const panelRef = useRef(null);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (panelRef.current) setMax(open ? panelRef.current.scrollHeight : 0);
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
      {/* Hero mit Logo aus /public – Bild weiter unten positioniert */}
      <section
        className="faq-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,15,28,0.55), rgba(12,15,28,0.55)), url(/MedusaFace.png)",
          backgroundPosition: "center 80%",  // <<< Bild weiter nach unten
          backgroundSize: "contain",          // Bild vollständig sichtbar
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
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