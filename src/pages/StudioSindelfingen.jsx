import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";        // <— WICHTIG für Navigation
import "./StudioSindelfingen.css";

const BASE = process.env.PUBLIC_URL || "";

/** Bilder */
const GALLERY = [
  { src: `${BASE}/IMG_2831.jpeg`, alt: "Studio Sindelfingen – Bild 1" },
  { src: `${BASE}/IMG_2828.jpeg`, alt: "Studio Sindelfingen – Bild 2" },
  { src: `${BASE}/IMG_2830.jpeg`, alt: "Studio Sindelfingen – Bild 3" },
];

/** Adresse */
const ADDRESS_TEXT =
  "Wettbachstraße 15, 71063 Sindelfingen (bei Pieksfein Piercing & Tattoo)";

export default function StudioSindelfingen() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
      if (e.key === "ArrowRight")
        setIndex((i) => (i + 1) % GALLERY.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  // Immer Google Maps öffnen
  const href =
    "https://www.google.com/maps/place/Pieksfein+Sindelfingen+Piercing+%26+Tattoo/@48.707623,8.9989137,17z";

  return (
    <main className="studio-sifi-page">
      {/* ===== HERO ===== */}
      <section
        className="studio-sifi-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,15,28,0.55), rgba(12,15,28,0.55)), url(/Sindelfingen.png)",
        }}
      >
        <div className="studio-sifi-hero-inner">
          <h1 className="studio-sifi-title">Studio Sindelfingen</h1>
          <p className="studio-sifi-sub">
            Professionelle Laser-Haarentfernung in Sindelfingen
          </p>

          {/* Adresse */}
          <a
            className="studio-sifi-address-btn"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {ADDRESS_TEXT}
          </a>

          {/* CTA → FIX mit Link statt <a> */}
          <Link className="studio-sifi-cta" to="/beratung">
            Kostenfreie Beratung anfragen
          </Link>
        </div>

        <div className="studio-sifi-hero-line" aria-hidden="true" />
      </section>

      {/* ===== ÜBER UNSER STUDIO ===== */}
      <section className="studio-sifi-about">
        <h2 className="studio-sifi-about-title">Über unser Studio</h2>

        <p className="studio-sifi-about-text">
          Im Herzen Sindelfingens erwartet Sie ein modernes, angenehmes Ambiente,
          das Wohlbefinden und Professionalität vereint. Unser Standort ist
          perfekt angebunden und bietet Ihnen eine entspannte Atmosphäre für Ihre
          Laserbehandlungen.
        </p>

        <p className="studio-sifi-about-text">
          Wir setzen auf hochwertige Lasertechnologie und legen größten Wert auf
          Hygiene, Präzision und eine persönliche, ehrliche Beratung. Unser Ziel:
          sichtbare und nachhaltige Ergebnisse.
        </p>

        <p className="studio-sifi-about-text">
          Erleben Sie Haarentfernung auf höchstem Niveau – modern, sicher und
          effektiv.
        </p>
      </section>

      {/* ===== GALERIE ===== */}
      <section className="studio-sifi-wrap">
        <h2 className="studio-sifi-section-title">Unsere Räumlichkeiten vor Ort</h2>

        <div className="studio-sifi-grid">
          {GALLERY.map((img, i) => (
            <figure className="studio-sifi-figure" key={i}>
              <img
                src={img.src}
                alt={img.alt}
                className="studio-sifi-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `${BASE}/placeholder.png`;
                }}
                onClick={() => {
                  setIndex(i);
                  setLightboxOpen(true);
                }}
              />
            </figure>
          ))}
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {lightboxOpen && (
        <div
          className="studio-sifi-lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="studio-sifi-light-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
            }}
          >
            ‹
          </button>

          <img
            className="studio-sifi-light-img"
            src={GALLERY[index].src}
            alt={GALLERY[index].alt}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="studio-sifi-light-nav next"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % GALLERY.length);
            }}
          >
            ›
          </button>

          <button
            className="studio-sifi-light-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}