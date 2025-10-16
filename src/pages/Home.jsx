import React, { useState, useEffect, useRef } from "react";

const ACCENT = "#0c0f1c";
const TEXT = "#c5a762";
const BG = "#ffffff";
const HERO_IMAGE = "/Logo.png"; // Logo im public-Ordner

const REVIEWS = [
  { text: `Super schönes Studio im Zentrum von Stuttgart. Einwandfreie Terminvereinbarung.
Behandlung ist sehr angenehm und qualitativ, Ergebnisse konnte ich schon nach der 2. Behandlung sehen.
Momentan befinde ich mich bei der 7. Behandlung von 10 (da kann man mit Aktionen auch gut sparen).
Viktoria ist sehr nett und professionell. Immer wieder gerne ❤️`, author: "Oxana" },
  { text: `Ich hatte schon mehrere Behandlungen und bin mehr als zufrieden! Viktoria ist
sehr kompetent und weiß wovon sie redet. Ich habe mich direkt wohl gefühlt.
Erfolge beim Lasern habe ich bereits nach der ersten Behandlung gesehen.
Definitiv weiter zu empfehlen!`, author: "Janine D." },
  { text: `Die dauerhafte Haarentfernung ist einfach erstaunlich! Ich war anfangs skeptisch,
aber nach nur ein paar Sitzungen bin ich absolut begeistert von den Ergebnissen.
Meine Haut fühlt sich so glatt und geschmeidig an und ich kann endlich auf
lästiges Rasieren oder Wachsen verzichten.`, author: "Simge A." },
  { text: `Die beiden Mädels Viktoria und Nika sind super lieb. Ich habe mich im Studio auf
Anhieb wohl gefühlt. Die Beratung war ausführlich und professionell. Nach der
vierten Behandlung sieht man schon einen wesentlichen Erfolg. Ich bin begeistert.
Vielen Dank ihr beiden. Macht weiter so.`, author: "Regina F." },
  { text: `Ich bin begeistert! Und absolut überzeugt. Die Behandlungen sind schmerzfrei,
schnell und angenehm. Das Studio ist sehr professionell und sauber. Die Mädels
sehr freundlich. Absolute Weiterempfehlung! Hätte ich schon viel früher machen lassen sollen. Haare adé!`, author: "Susana P." },
  { text: `Bereits seit einigen Monaten bin ich hier in Behandlung – und nach jedem Besuch
rundum zufrieden. Das Ergebnis der Haarentfernung ist sehr gut und auch das
Studio ist chic und immer hygienisch sauber.`, author: "Katharina R." },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

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
    <main style={styles.page}>
      {/* HERO mit Sticky-Logo (scrollt danach mit) */}
      <section style={styles.hero}>
        <div
          style={{
            ...styles.heroBg,
            backgroundImage: `linear-gradient(rgba(12,15,28,0.62), rgba(12,15,28,0.62)), url(${HERO_IMAGE})`,
          }}
        />
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Medusa Beauty Lounge</h1>
          <p style={styles.subtitle}>Ihr Premium Schönheitssalon für Stuttgart</p>
        </div>
        {/* sanfter Fade am unteren Rand für schöneren Übergang */}
        <div style={styles.heroFade} />
      </section>

      {/* ÜBERLAPPENDER KASTEN – schiebt sich visuell über das Logo */}
      <section style={styles.overlapSection}>
        <div style={styles.card}>
          <h2 style={styles.h2}>Willkommen in der Medusa Beauty Lounge</h2>
          <p style={styles.p}>
            Entspannen Sie in luxuriöser Atmosphäre und erleben Sie modernste ästhetische Behandlungen
            auf höchstem Niveau. Unser Anspruch: Qualität, Vertrauen und Wohlbefinden.
          </p>
          <p style={styles.p}>
            Wir kombinieren neueste Technologie mit fein abgestimmtem Design und persönlicher Beratung –
            für Ergebnisse, die man sieht und spürt.
          </p>
          <button style={styles.button}>Jetzt Termin vereinbaren</button>
        </div>
      </section>

      {/* Reviews mit Swipe/Buttons */}
      <section style={styles.reviewsSection}>
        <div
          style={styles.reviewBox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
        >
          <button aria-label="Vorherige Bewertung" onClick={goPrev} style={{ ...styles.navButton, left: 12 }}>
            ‹
          </button>

          <div style={styles.reviewInner}>
            <p style={styles.reviewText}>“{REVIEWS[index].text}”</p>
            <p style={styles.reviewAuthor}>– {REVIEWS[index].author}</p>
            <img src="/GoogleLogo.png" alt="Google Logo" style={styles.googleLogo} />
          </div>

          <button aria-label="Nächste Bewertung" onClick={goNext} style={{ ...styles.navButton, right: 12 }}>
            ›
          </button>
        </div>

        <div style={styles.dots}>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopAuto();
                setIndex(i);
              }}
              aria-label={`Gehe zu Bewertung ${i + 1}`}
              style={{ ...styles.dot, backgroundColor: i === index ? TEXT : "rgba(255,255,255,0.25)" }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    backgroundColor: BG,
    color: TEXT,
    fontFamily: "'Lora', serif",
    overflowX: "hidden",
  },

  /* ========== HERO (Sticky + Fade unten) ========== */
  hero: {
    position: "relative",
    height: "78vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderBottom: `2px solid ${ACCENT}`,
    overflow: "visible", // wichtig: damit die Overlap-Card „über“ den Hero kann
  },
  heroBg: {
    position: "sticky",   // klebt im Viewport nur solange der Hero sichtbar ist
    top: 0,
    height: "78vh",
    width: "100%",
    backgroundPosition: "center 35%", // Fokus höher
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    // kein backgroundAttachment mehr -> scrollt nach dem Hero mit
    filter: "brightness(0.9) blur(1.2px)",
    zIndex: 0,
  },
  heroContent: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    zIndex: 1,
    color: TEXT,
    padding: "20px",
  },
  heroFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -1,
    height: 120,
    background:
      "linear-gradient(to bottom, rgba(12,15,28,0) 0%, rgba(12,15,28,0.25) 40%, rgba(12,15,28,0.6) 100%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  title: {
    fontSize: "52px",
    fontWeight: "800",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    letterSpacing: "0.05em",
  },

  /* ========== ÜBERLAPPENDER KARTEN-ABSCHNITT ========== */
  overlapSection: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "0 20px",
    position: "relative",
    zIndex: 2,          // über dem Hero-Hintergrund
    marginTop: "-90px", // zieht die Card nach oben, liegt über dem Logo
    marginBottom: "80px",
  },
  card: {
    background: "#fff",
    borderRadius: "18px",
    border: `2px solid ${ACCENT}`,
    boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
    padding: "48px 40px",
    textAlign: "center",
  },
  h2: { color: TEXT, fontSize: 28, fontWeight: 800, marginBottom: 20 },
  p: { color: ACCENT, fontSize: 17, lineHeight: 1.6, marginBottom: 20 },
  button: {
    backgroundColor: TEXT,
    color: ACCENT,
    border: "none",
    padding: "12px 28px",
    fontWeight: 700,
    borderRadius: 10,
    cursor: "pointer",
    transition: "transform .15s ease",
  },

  /* ========== REVIEWS ========== */
  reviewsSection: {
    backgroundColor: ACCENT,
    color: TEXT,
    textAlign: "center",
    padding: "80px 20px 120px",
  },
  reviewBox: {
    maxWidth: 900,
    margin: "0 auto",
    minHeight: 220,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  reviewInner: { maxWidth: 760, padding: "20px 36px" },
  reviewText: {
    fontSize: 20,
    fontStyle: "italic",
    lineHeight: 1.6,
    marginBottom: 16,
    whiteSpace: "pre-line",
  },
  reviewAuthor: { fontWeight: 700, fontSize: 18, marginBottom: 10 },
  googleLogo: { height: 28, width: "auto", opacity: 0.9 },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.9)",
    background: "rgba(12,15,28,0.85)",
    color: "#fff",
    fontSize: 22,
    lineHeight: "40px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
  dots: { display: "flex", gap: 8, justifyContent: "center", marginTop: 20 },
  dot: { width: 12, height: 12, borderRadius: 12, border: "none", cursor: "pointer" },
};
