import React, { useState, useEffect, useRef } from "react";
import "../pages/Home.css";
import { useNavigate } from "react-router-dom";

const HomeVideo = "/HomeVideo.mp4";

const REVIEWS = [
  {
    text: `Super schönes Studio im Zentrum von Stuttgart. Einwandfreie Terminvereinbarung.
Behandlung ist sehr angenehm und qualitativ, Ergebnisse konnte ich schon nach der 2. Behandlung sehen.
Momentan befinde ich mich bei der 7. Behandlung von 10 (da kann man mit Aktionen auch gut sparen).
Viktoria ist sehr nett und professionell. Immer wieder gerne ❤️`, author: "Oxana"
  },
  {
    text: `Ich hatte schon mehrere Behandlungen und bin mehr als zufrieden! Viktoria ist
sehr kompetent und weiß wovon sie redet. Ich habe mich direkt wohl gefühlt.
Erfolge beim Lasern habe ich bereits nach der ersten Behandlung gesehen.
Definitiv weiter zu empfehlen!`, author: "Janine D."
  },
  {
    text: `Die dauerhafte Haarentfernung ist einfach erstaunlich! Ich war anfangs skeptisch,
aber nach nur ein paar Sitzungen bin ich absolut begeistert von den Ergebnissen.
Meine Haut fühlt sich so glatt und geschmeidig an und ich kann endlich auf
lästiges Rasieren oder Wachsen verzichten.`, author: "Simge A."
  },
  {
    text: `Die beiden Mädels Viktoria und Nika sind super lieb. Ich habe mich im Studio auf
Anhieb wohl gefühlt. Die Beratung war ausführlich und professionell. Nach der
vierten Behandlung sieht man schon einen wesentlichen Erfolg. Ich bin begeistert.
Vielen Dank ihr beiden. Macht weiter so.`, author: "Regina F."
  },
  {
    text: `Ich bin begeistert! Und absolut überzeugt. Die Behandlungen sind schmerzfrei,
schnell und angenehm. Das Studio ist sehr professionell und sauber. Die Mädels
sehr freundlich. Absolute Weiterempfehlung! Hätte ich schon viel früher machen lassen sollen. Haare adé!`, author: "Susana P."
  },
  {
    text: `Bereits seit einigen Monaten bin ich hier in Behandlung – und nach jedem Besuch
rundum zufrieden. Das Ergebnis der Haarentfernung ist sehr gut und auch das
Studio ist chic und immer hygienisch sauber.`, author: "Katharina R."
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const navigate = useNavigate();
  // Touch / swipe state
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const SWIPE_THRESHOLD = 50; // px

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  useEffect(() => {
    stopAuto();
    startAuto();
  }, [index]);

  function startAuto() {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 8000);
  }
  function stopAuto() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  const goPrev = () => {
    stopAuto();
    setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  };
  const goNext = () => {
    stopAuto();
    setIndex((i) => (i + 1) % REVIEWS.length);
  };

  const handleTouchStart = (e) => {
    stopAuto();
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    const x = e.touches[0].clientX;
    touchDeltaX.current = x - touchStartX.current;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current) return;
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    if (delta > SWIPE_THRESHOLD) goPrev();
    else if (delta < -SWIPE_THRESHOLD) goNext();
    else startAuto();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (

    <main className="page">
      <section className="hero">
        <div className="heroBg">
          <video
            className="heroVideo"
            src={HomeVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="heroOverlay" aria-hidden="true" />
        </div>
        <div className="heroContent">
          <h1 className="title">Medusa Beauty Lounge</h1>
          <p className="subtitle">Ihr Premium Schönheitssalon für Stuttgart</p>
        </div>
        <div className="heroFade" />
      </section>

      <section className="overlapSection">
        <div className="card">
          <h2>Willkommen in der Medusa Beauty Lounge</h2>
          <p>
            Entspannen Sie in luxuriöser Atmosphäre und erleben Sie modernste ästhetische Behandlungen
            auf höchstem Niveau. Unser Anspruch: Qualität, Vertrauen und Wohlbefinden.
          </p>
          <p>
            Wir kombinieren neueste Technologie mit fein abgestimmtem Design und persönlicher Beratung –
            für Ergebnisse, die man sieht und spürt.
          </p>
          <button className="button" onClick={() => navigate("/beratung")}>
            Kostenfreie Beratung anfragen
          </button>
        </div>
      </section>

      <section className="reviewsSection">
        <div
          className="reviewBox"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
        >
          <button aria-label="Vorherige Bewertung" onClick={goPrev} className="navButton prev">‹</button>

          <div className="reviewInner">
            <p className="reviewText">“{REVIEWS[index].text}”</p>
            <p className="reviewAuthor">– {REVIEWS[index].author}</p>
            <img src="/GoogleLogo.png" alt="Google Logo" className="googleLogo" />
          </div>

          <button aria-label="Nächste Bewertung" onClick={goNext} className="navButton next">›</button>
        </div>

        <div className="dots">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopAuto();
                setIndex(i);
              }}
              aria-label={`Gehe zu Bewertung ${i + 1}`}
              className={`dot ${i === index ? "active" : ""}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

