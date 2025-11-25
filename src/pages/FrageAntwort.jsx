import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FrageAntwort.css";

const MEDIOSTAR_URL = "https://asclepion.com/mediostar/";
const HERO_IMAGE = process.env.PUBLIC_URL + "/TippsHero.jpeg";

const ITEMS = [
  {
    title:
      "Wie funktioniert die dauerhafte Haarentfernung – und was unterscheidet uns von anderen Studios?",
    img: "/placeholder.png",
    content: (
      <>
        <p>
          Ich habe mich auf die dauerhafte Haarentfernung spezialisiert und
          arbeite bewusst mit dem{" "}
          <a href={MEDIOSTAR_URL} target="_blank" rel="noreferrer">
            Mediostar Monolith®
          </a>{" "}
          von Asclepion, dem aktuell weltweit schnellsten Diodenlaser. Das
          integrierte Carl Zeiss Lasersystem garantiert eine außergewöhnlich
          präzise und gleichmäßige Energieverteilung, was zu besonders
          effektiven, sicheren und hautschonenden Ergebnissen führt. Bereits
          nach der ersten Behandlung lassen sich bei vielen Kundinnen und Kunden
          sichtbare Veränderungen feststellen.
        </p>

        <p>
          <strong>Was uns von anderen Studios unterscheidet:</strong>
        </p>
        <ul>
          <li>
            <strong>Höchste Effizienz:</strong> Deutlich stärkere Leistung und
            Tiefenwirkung als herkömmliche IPL-Geräte oder ältere Diodenlaser.
          </li>
          <li>
            <strong>Präzision durch Carl Zeiss Optik:</strong> Exakte
            Energieabgabe für eine besonders sichere und gleichmäßige
            Behandlung.
          </li>
          <li>
            <strong>Behandlung aller Hauttypen:</strong> Auch dunkle oder sehr
            helle Haut kann sicher und effektiv behandelt werden.
          </li>
          <li>
            <strong>Breites Spektrum an Haarfarben:</strong> Während viele
            Geräte nur dunkle, kräftige Haare zuverlässig erfassen, arbeitet der{" "}
            <a href={MEDIOSTAR_URL} target="_blank" rel="noreferrer">
              Mediostar Monolith®
            </a>{" "}
            effektiver auch bei helleren Haaren.
          </li>
          <li>
            <strong>Kürzere Behandlungszeiten:</strong> Dank schnellerer
            Impulstechnik sind die Sitzungen angenehmer und effizienter.
          </li>
          <li>
            <strong>Maximaler Komfort:</strong> Die starke integrierte
            Hautkühlung minimiert Schmerzen und schont die Haut deutlich besser
            als viele veraltete Systeme.
          </li>
        </ul>

        <p>
          Durch diese Kombination aus modernster Technologie, medizinischer
          Qualität und spezialisierter Expertise erzielen wir besonders
          nachhaltige Ergebnisse in nur wenigen Sitzungen – und das bei höchster
          Sicherheit für die Haut.
        </p>
      </>
    ),
  },
  {
    title: "Ist die dauerhafte Haarentfernung schmerzhaft?",
    img: "/placeholder.png",
    content: (
      <>
        <p>
          Die Behandlung mit dem{" "}
          <a href={MEDIOSTAR_URL} target="_blank" rel="noreferrer">
            Mediostar Monolith®
          </a>{" "}
          ist durch die integrierte, leistungsstarke Hautkühlung besonders
          schonend.
        </p>
        <p>
          Während der Laserimpulse können ein leichtes Wärmegefühl oder ein
          sanftes Kribbeln wahrgenommen werden – die meisten Kundinnen und
          Kunden empfinden dies als gut verträglich.
        </p>
      </>
    ),
  },
  {
    title:
      "Wie viele Sitzungen sind für die dauerhafte Haarentfernung erforderlich?",
    img: "/placeholder.png",
    content: (
      <>
        <p>
          Die benötigte Anzahl an Sitzungen hängt von Hauttyp, Haarfarbe,
          Haarstärke und dem individuellen Wachstumszyklus ab.
        </p>
        <p>
          Typischerweise sind <strong>6–10 Sitzungen</strong> notwendig.
        </p>
      </>
    ),
  },
  {
    title:
      "Welche Körperbereiche können mit der dauerhaften Haarentfernung behandelt werden?",
    img: "/placeholder.png",
    content: (
      <>
        <p>
          Mit dem{" "}
          <a href={MEDIOSTAR_URL} target="_blank" rel="noreferrer">
            Mediostar Monolith®
          </a>{" "}
          können nahezu alle Körperbereiche effektiv behandelt werden:
        </p>
        <ul>
          <li>Gesicht</li>
          <li>Achseln</li>
          <li>Arme & Hände</li>
          <li>Brust & Rücken</li>
          <li>Bauch</li>
          <li>Intim & Bikinizone</li>
          <li>Beine & Füße</li>
        </ul>
      </>
    ),
  },
  {
    title:
      "Sind die Ergebnisse der dauerhaften Haarentfernung wirklich dauerhaft?",
    img: "/placeholder.png",
    content: (
      <>
        <p>
          Die Behandlung führt zu einer langfristigen und deutlichen Reduzierung
          des Haarwuchses. Einmal deaktivierte Haarfollikel wachsen in der Regel
          nicht mehr nach.
        </p>
        <p>
          Auffrischungsbehandlungen können langfristig sinnvoll sein.
        </p>
      </>
    ),
  },
  {
    title:
      "Gibt es Einschränkungen oder Nachsorgemaßnahmen nach der Behandlung?",
    img: "/placeholder.png",
    content: (
      <>
        <p>Nach der Behandlung können leichte Rötungen auftreten.</p>
        <ul>
          <li>Direkte Sonne vermeiden</li>
          <li>Bei Bedarf kühlen</li>
          <li>Sanfte Pflege (Aloe Vera)</li>
          <li>2 Tage kein Solarium, Sauna oder intensiver Sport</li>
        </ul>
      </>
    ),
  },
  {
    title: "Was sollte vor der Laserbehandlung beachtet werden?",
    img: "/placeholder.png",
    content: (
      <>
        <ul>
          <li>4 Wochen vorher: keine Sonne / Solarium</li>
          <li>Am Termin: keine Cremes, kein Deo, kein Make-up</li>
          <li>24h vorher rasieren (nicht epilieren!)</li>
          <li>1 Woche vorher: keine Peelings, Retinol, Fruchtsäuren</li>
        </ul>
      </>
    ),
  },
  {
    title:
      "Deine Nachsorge – worauf solltest du nach der Behandlung achten?",
    img: "/placeholder.png",
    content: (
      <>
        <ul>
          <li>Immer LSF 50 auf die behandelten Stellen</li>
          <li>Zwischen den Sessions darfst du rasieren (nur rasieren!)</li>
          <li>48h kein Sport, Sauna oder heiße Duschen</li>
          <li>Lauwarm duschen ist okay</li>
        </ul>
      </>
    ),
  },
];


function Tile({ item, isOpen, onToggle, index }) {
  const panelRef = useRef(null);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (panelRef.current) {
      setMax(isOpen ? panelRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

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

      <button
        id={btnId}
        className="qa-button"
        aria-controls={panelId}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <svg className="qa-chev" viewBox="0 0 24 24">
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        ref={panelRef}
        className="qa-panel"
        style={{ maxHeight: `${max}px` }}
      >
        <div className="qa-panel-body">{item.content}</div>
      </div>
    </article>
  );
}

// ---------------- PAGE ----------------

export default function FrageAntwort() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <main className="faq-page">
      {/* HERO */}
      <section
        className="faq-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(12,15,28,0.55), rgba(12,15,28,0.55)), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>Tipps</h1>
        <p>Häufige Fragen – kompakt beantwortet</p>
      </section>

      {/* GRID */}
      <section className="qa-grid">
        {ITEMS.map((item, i) => (
          <Tile
            key={i}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() =>
              setOpenIndex(openIndex === i ? null : i)
            }
          />
        ))}
      </section>

      {/* CTA */}
      <div className="qa-bottom-btn-wrap">
        <button
          className="qa-bottom-btn"
          onClick={() => navigate("/beratung")}
        >
          Kostenfreie Beratung anfragen
        </button>
      </div>
    </main>
  );
}