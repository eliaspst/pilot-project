import React from "react";
import "./Galerie.css";

const pub = (p) => `${process.env.PUBLIC_URL || ""}${p}`;

// Deine Videos
const VIDEOS = [
  {
    src: pub("/video1.mp4"),
    title: "Behandlung - Bein",
  },
  {
    src: pub("/video2.mp4"),
    title: "Behandlung – Axel",
  },
  {
    src: pub("/video3.mp4"),
    title: "Behandlung - Bein",
  }
];

export default function Galerie() {
  return (
    <main className="galerie-page">
      {/* Hero mit DEINEM Bild */}
      <section
        className="galerie-hero"
        style={{
          backgroundImage:
            `linear-gradient(rgba(12,15,28,0.55), rgba(12,15,28,0.55)), url(${pub("/GalerieHero.jpeg")})`,
        }}
      >
        <h1>Behandlungen</h1>
        <p>Einblicke in Behandlungen bei uns</p>
      </section>

      {/* Video-Galerie */}
      <section className="galerie-wrap">
        <div className="galerie-grid">
          {VIDEOS.map((vid, i) => (
            <figure key={i} className="galerie-figure">
              <video
                className="galerie-video"
                src={vid.src}
                playsInline

                /* 🔒 Ton komplett blockiert */
                muted
                volume="0"
                onVolumeChange={(e) => { e.target.volume = 0; }}

                /* 🔒 Ton-Icon ausblenden */
                controls
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                disablePictureInPicture
              />

              {vid.title && (
                <figcaption className="galerie-caption">
                  {vid.title}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}