import React, { useState, useEffect, useMemo } from "react";
import "./Galerie.css";

const pub = (p) => `${process.env.PUBLIC_URL || ""}${p}`;

const RAW_IMAGES = [
  { src: "/Bilder/Galerie/Studio2.png", alt: "Behandlungsraum – Ansicht 2" },
  { src: "/Bilder/Galerie/Studio3.png", alt: "Behandlungsraum – Ansicht 3" },
];

export default function Galerie() {
  // Pfade erst zur Laufzeit mit PUBLIC_URL zusammensetzen
  const IMAGES = useMemo(
    () => RAW_IMAGES.map((x) => ({ ...x, src: pub(x.src) })),
    []
  );

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const show  = (i) => { setIdx(i); setOpen(true); };
  const close = () => setOpen(false);
  const prev  = () => setIdx((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next  = () => setIdx((i) => (i + 1) % IMAGES.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, IMAGES.length]);

  return (
    <main className="galerie-page">
      {/* Hero mit Studio1 als Hintergrund */}
      <section
        className="galerie-hero"
        style={{
          backgroundImage:
            `linear-gradient(rgba(12,15,28,0.55), rgba(12,15,28,0.55)), url(${pub("/Bilder/Galerie/Studio1.png")})`,
        }}
      >
        <h1>Galerie</h1>
        <p>Einblicke in unser Studio</p>
      </section>

      {/* Galerie-Grid mit Studio2 + Studio3 */}
      <section className="galerie-wrap">
        <div className="galerie-grid">
          {IMAGES.map((img, i) => (
            <figure key={img.src} className="galerie-figure">
              <img
                src={img.src}
                alt={img.alt}
                className="galerie-img"
                loading="lazy"
                onClick={() => show(i)}
                onError={(e) => {
                  // Fallback, falls ein Pfad doch nicht gefunden wird
                  e.currentTarget.style.display = "none";
                  console.warn("Bild nicht gefunden:", img.src);
                }}
              />
              <figcaption className="sr-only">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button
            className="lightbox-btn prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Vorheriges Bild"
          >
            ‹
          </button>

          <img
            src={IMAGES[idx].src}
            alt={IMAGES[idx].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-btn next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Nächstes Bild"
          >
            ›
          </button>

          <button
            className="lightbox-close"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Schließen"
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}