import React, { useEffect, useState } from "react";
import "./StudioStuttgart.css";

const BASE = process.env.PUBLIC_URL || "";

/** Drei Platzhalter-Bilder */
const GALLERY = [
  { src: `${BASE}/placeholder.png`, alt: "Studio Stuttgart – Bild 1" },
  { src: `${BASE}/placeholder.png`, alt: "Studio Stuttgart – Bild 2" },
  { src: `${BASE}/placeholder.png`, alt: "Studio Stuttgart – Bild 3" },
];

const ADDRESS_TEXT = "Immenhoferstraße 46, 70180 Stuttgart";

export default function StudioStuttgart() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Lightbox Keyboard-Navigation
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

  // Smart-Link: iOS -> Apple Maps, sonst Google Maps
  const isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent);
  const href = isIOS
    ? "https://maps.apple.com/place?address=Immenhofer%20Stra%C3%9Fe%2046,%20S%C3%BCd,%2070180%20Stuttgart,%20Germany&coordinate=48.763281,9.176591&name=Medusa%20Beauty%20Lounge&place-id=I8CE1AD4F67C3335D&map=h"
    : "https://maps.app.goo.gl/SM7NzrKYApnJ2A2b7";

  return (
    <main className="studio-stg-page">
      {/* HERO mit Stadthintergrund */}
      <section
        className="studio-stg-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,15,28,0.55), rgba(12,15,28,0.55)), url(/Stuttgart.jpg)",
        }}
      >
        <div className="studio-stg-hero-inner">
          <h1 className="studio-stg-title">Studio Stuttgart</h1>
          <p className="studio-stg-sub">
            Professionelle Laser-Haarentfernung in Stuttgart
          </p>

          <a
            className="studio-stg-address-btn"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {ADDRESS_TEXT}
          </a>

          <a className="studio-stg-cta" href="/beratung">
            Kostenfreie Beratung anfragen
          </a>
        </div>
        <div className="studio-stg-hero-line" aria-hidden="true" />
      </section>

      {/* Über unser Studio */}
      <section className="studio-stg-about">
        <h2 className="studio-stg-about-title">Über unser Studio</h2>
        <p className="studio-stg-about-text">
          Im Herzen Stuttgarts erwartet Sie ein modernes, stilvolles Ambiente, das
          Wohlbefinden und Professionalität vereint. Unser Studio ist mit neuester
          Lasertechnologie ausgestattet und wurde so gestaltet, dass Sie sich von
          der ersten Minute an entspannen können. Wir legen großen Wert auf
          Hygiene, Präzision und eine persönliche Beratung – für sichtbare
          Ergebnisse und ein angenehmes Erlebnis. Hier trifft Innovation auf
          Ästhetik – erleben Sie Haarentfernung auf höchstem Niveau.
        </p>
      </section>

      {/* Galerie */}
      <section className="studio-stg-wrap">
        <h2 className="studio-stg-section-title">Unsere Räumlichkeiten</h2>

        <div className="studio-stg-grid">
          {GALLERY.map((img, i) => (
            <figure className="studio-stg-figure" key={i}>
              <img
                src={img.src}
                alt={img.alt}
                className="studio-stg-img"
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
              <figcaption className="studio-stg-sr">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="studio-stg-lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="studio-stg-light-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
            }}
            aria-label="Vorheriges Bild"
          >
            ‹
          </button>

          <img
            className="studio-stg-light-img"
            src={GALLERY[index].src}
            alt={GALLERY[index].alt}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="studio-stg-light-nav next"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % GALLERY.length);
            }}
            aria-label="Nächstes Bild"
          >
            ›
          </button>

          <button
            className="studio-stg-light-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            aria-label="Schließen"
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}