import React, { useEffect, useState } from "react";
import "./StudioSindelfingen.css";

/** Bilder in der richtigen Reihenfolge */
const BASE = process.env.PUBLIC_URL || "";
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

  // Dynamisch Maps-Link je nach Gerät wählen
  const isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent);
  const href = isIOS
    ? "https://maps.apple.com/place?address=Wettbachstra%C3%9Fe%2015,%20Mitte,%2071063%20Sindelfingen,%20Deutschland&coordinate=48.707647,8.998846&name=Pieksfein%20Tattoo%20%26%20Piercing&place-id=I556141FDFFCD158&map=h"
    : "https://www.google.com/maps/place/Pieksfein+Sindelfingen+Piercing+%26+Tattoo/@48.707623,8.9989137,17z/data=!4m15!1m8!3m7!1s0x4799dfc99c3708a3:0x7ed1563e3f3daaea!2sWettbachstra%C3%9Fe+15,+71063+Sindelfingen!3b1!8m2!3d48.707623!4d8.9989137!16s%2Fg%2F11b8v4vm3j!3m5!1s0x4799dfc99c36aaab:0x2b11918d2fd5068b!8m2!3d48.7076086!4d8.9989587!16s%2Fg%2F11scr5j4_f?entry=ttu";

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

          {/* Adresse ist jetzt der smarte Button */}
          <a
            className="studio-sifi-address-btn"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {ADDRESS_TEXT}
          </a>

          {/* CTA */}
          <a className="studio-sifi-cta" href="/beratung">
            Kostenfreie Beratung anfragen
          </a>
        </div>

        <div className="studio-sifi-hero-line" aria-hidden="true" />
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
              <figcaption className="studio-sifi-sr">{img.alt}</figcaption>
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
            aria-label="Vorheriges Bild"
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
            aria-label="Nächstes Bild"
          >
            ›
          </button>

          <button
            className="studio-sifi-light-close"
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