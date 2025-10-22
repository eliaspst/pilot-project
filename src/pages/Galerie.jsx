import React, { useState, useEffect } from "react";
import "./Galerie.css";

const IMAGES = [
  { src: "/Bilder/Galerie/Studio2.png", alt: "Behandlungsraum – Ansicht 2" },
  { src: "/Bilder/Galerie/Studio3.png", alt: "Behandlungsraum – Ansicht 3" },
];

export default function Galerie() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const show = (i) => { setIdx(i); setOpen(true); };
  const close = () => setOpen(false);
  const prev = () => setIdx((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setIdx((i) => (i + 1) % IMAGES.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <main className="galerie-page">
      {/* Hero mit Studio1 als Hintergrund */}
      <section
        className="galerie-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,15,28,0.55), rgba(12,15,28,0.55)), url(/Bilder/Galerie/Studio1.png)",
        }}
      >
        <h1>Galerie</h1>
        <p>Einblicke in unser Studio</p>
      </section>

      {/* Galerie-Grid mit Studio2 + Studio3 */}
      <section className="galerie-wrap">
        <div className="galerie-grid">
          {IMAGES.map((img, i) => (
            <figure key={i} className="galerie-figure">
              <img
                src={img.src}
                alt={img.alt}
                className="galerie-img"
                loading="lazy"
                onClick={() => show(i)}
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