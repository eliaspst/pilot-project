import React, { useRef, useState, useEffect } from "react";

const ACCENT = "#0c0f1c";   // Rahmen & Akzente
const TEXT   = "#c5a762";   // Schriftfarbe
const BG     = "#ffffff";   // Hintergrund
const HERO_IMAGE = "/hero-start.jpeg"; // optional: Startseiten-Hero in /public

// Bilder unter dem Text:
const IMG1 = "/laserepilation-haarentfernungstherapie-1-1024x683.jpg";
const IMG2 = "/mann-auf-weissem-hintergrund.jpg";
const IMG3 = "/fitness-frau.jpg";

// Vorher/Nachher-Bilder (ins public/ legen)
const BA_IMAGES = [
  { before: "/vorher-1-1-295x300.jpg", after: "/nachher-1-1-283x300.jpg" },
  { before: "/vorher-2-1-289x300.jpg", after: "/nachher-2-1-289x300.jpg" },
  { before: "/vorher-3-1-280x300.jpg", after: "/nachher-3-1-280x300.jpg" },
  { before: "/vorher-4-282x300.jpg",   after: "/nachher-4-289x300.jpg" },
];

export default function Leistungen() {
  return (
    <main style={styles.page}>
      <Hero />

      {/* Haupt-Textkarte */}
      <section style={styles.section}>
        <div style={styles.card}>
          <h2 style={styles.h2}>Dauerhafte Haarentfernung</h2>
          <p style={styles.lead}>Ihr Experte für dauerhafte Haarentfernung in Stuttgart</p>

          <p style={styles.p}>
            Wer sich schon über Jahre oder Jahrzehnte mit dem Thema der Haarentfernung beschäftigt hat,
            der kennt die klassischen Methoden, die auch heute immer noch Anwendung finden, obwohl sie
            eigentlich längst überholt sind. Das einfache Rasieren bestimmter Körperregionen schafft nur
            für recht kurze Zeit ein einigermaßen ansehnliches Ergebnis, die Haut kann dabei allerdings
            gereizt werden. Epilieren und Waxen sind Methoden, bei denen ein haarfreies Ergebnis schon
            deutlich länger anhält. Allerdings sind beide Varianten zur Haarentfernung ausgesprochen
            unangenehm und bisweilen schmerzhaft. Die Ursache ist ganz klar: Die Körperhaare werden bei
            diesen beiden Behandlungsmethoden schlichtweg aus der Haut herausgerissen. Solch eine
            Behandlung kann daher auch Hautprobleme nach sich ziehen und mehr Frust als Freude
            verursachen. Und letztlich kommen auch nach diesen Behandlungen die Haare über kurz oder
            etwas länger wieder zurück.
          </p>

          <p style={styles.p}>
            Der schon angesprochene Diodenlaser <strong>MeDioStar Monolith</strong>, den wir zur
            dauerhaften Haarentfernung einsetzen, bietet nun als echte Revolution der Branche gleich zwei
            ganz entscheidenden Vorteile. Im Gegensatz zu klassischen Behandlungen ist die Anwendung des
            Diodenlasers praktisch schmerzfrei und reduziert eventuelle Hautreizungen auf ein nie
            gekanntes Minimum. Zum anderen werden hier die Haare nicht einfach nur „abgetragen“, sondern
            an ihrer Wurzel verödet. Ist die Wurzel einmal abgestorben, dann kann an dieser Stelle kein
            Haar mehr nachwachsen.
          </p>
        </div>
      </section>

      {/* Bild-Grid */}
      <section style={styles.section}>
        <div style={styles.imageGrid}>
          {[IMG1, IMG2, IMG3].map((src, i) => (
            <figure key={i} style={styles.figure}>
              <img src={src} alt={`Haarentfernung Bild ${i + 1}`} style={styles.img} />
            </figure>
          ))}
        </div>
      </section>

      {/* Nebenwirkungen-Card */}
      <section style={styles.section}>
        <div style={styles.card}>
          <h3 style={styles.h3}>Hat die Haarentfernung mit dem Diodenlaser Nebenwirkungen?</h3>

          <p style={styles.p}>
            Jede Behandlung der Welt, die sich mit Haut und Haaren beschäftigt, kann Nebenwirkungen mit
            sich bringen. Eine Behandlung mit dem Diodenlaser ist jedoch die Variante, die in Sachen
            Nebenwirkungen zu den schonendsten Methoden gehört. Der Diodenlaser MeDioStar Monolith ist
            durch seine gesamte Konzeption, durch seine besonders schnellen Lichtimpulse und durch sein
            einzigartiges Kühlsystem ein enorm sicheres Produkt zur Haarentfernung.
          </p>

          <p style={styles.p}>
            Nur bei sehr sensibler Haut kann es in ganz seltenen Fällen zu leichten Hautirritationen
            kommen, die sich etwa in leichten Rötungen oder hellen Flecken zeigen. Diese sind jedoch nie
            dauerhaft und verschwinden nach einigen Tagen wieder.
          </p>

          <p style={styles.p}>
            Wer schwanger ist oder Vorerkrankungen wie Diabetes oder Hautkrebs hat, sollte sich vor
            Antritt einer Haarentfernung mit dem Diodenlaser zusätzlich mit seinem behandelnden Arzt
            besprechen.
          </p>
        </div>
      </section>

      {/* Vorher/Nachher – 2x2 Grid */}
      <section style={styles.section}>
        <h3 style={styles.h3}>Vorher / Nachher Beispiele</h3>
        <div style={baStyles.squareGrid}>
          {BA_IMAGES.map((x, i) => (
            <BeforeAfter key={i} beforeSrc={x.before} afterSrc={x.after} />
          ))}
        </div>
      </section>

      {/* Neuer Abschnitt */}
      <section style={styles.section}>
        <div style={styles.card}>
          <h3 style={styles.h3}>Wann zeigen sich die Resultate der Haarentfernung?</h3>
          <p style={styles.p}>
            Bei der Behandlung mit dem Diodenlaser sind die Ergebnisse der dauerhaften Haarentfernung
            schon kurz nach der ersten Anwendung erkennbar. Eine Haarwurzel, die bei einer Behandlung
            erfolgreich zerstört wurde, hält das Haar nur noch kurze Zeit. Dann fällt es von selbst aus
            und kann nicht mehr nachwachsen.
          </p>
          <p style={styles.p}>
            Da für eine wirklich komplette Haarentfernung meist mehrere Anwendungen mit dem Diodenlaser
            nötig sind, bedarf es auch einiger Wochen, bis sich die Haut sichtbar von den Haaren absetzt.
            Diese Geduld lohnt sich aber, denn das Ergebnis ist überzeugender als jede andere Methode,
            die zwar sofort haarfreie Hautareale verspricht, dafür aber gerötete Haut und kleine
            Entzündungen zurücklassen kann.
          </p>
        </div>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <header style={styles.hero}>
      <div
        style={{
          ...styles.heroBg,
          backgroundImage: `linear-gradient(rgba(12, 15, 28, 0.45), rgba(12, 15, 28, 0.45)), url(${HERO_IMAGE})`,
        }}
      />
      <div style={styles.heroContent}>
        <h1 style={styles.h1}>Medusa Beauty Lounge</h1>
        <p style={styles.sub}>Professionelle & schmerzfreie Haarentfernung mit modernster Lasertechnologie</p>
      </div>
    </header>
  );
}

/** Vorher/Nachher – 4:3 Format, weißer Rahmen, dunkler Slider */
function BeforeAfter({ beforeSrc, afterSrc, initialPos = 50 }) {
  const [pos, setPos] = useState(initialPos);
  const wrapRef = useRef(null);
  const dragging = useRef(false);

  const start = () => (dragging.current = true);
  const stop  = () => (dragging.current = false);

  const move = (clientX) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - r.left, 0), r.width);
    setPos(Math.round((x / r.width) * 100));
  };

  useEffect(() => {
    const up = () => (dragging.current = false);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseleave", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseleave", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const onMouseMove = (e) => { if (dragging.current) move(e.clientX); };
  const onTouchMove = (e) => { if (e.touches?.[0]) move(e.touches[0].clientX); };

  const clipStyle = { clipPath: `inset(0% ${Math.max(0, 100 - pos)}% 0% 0%)` };

  return (
    <figure style={baStyles.tile}>
      <div
        ref={wrapRef}
        style={baStyles.wrap}
        onMouseDown={start}
        onMouseUp={stop}
        onMouseMove={onMouseMove}
        onTouchStart={start}
        onTouchMove={onTouchMove}
      >
        <img src={afterSrc} alt="Nachher" style={baStyles.img} />
        <div style={{ position: "absolute", inset: 0, ...clipStyle }}>
          <img src={beforeSrc} alt="Vorher" style={baStyles.img} />
        </div>
        <div style={{ ...baStyles.divider, left: `calc(${pos}% - 1px)` }} />
        <button
          type="button"
          aria-label="Vorher/Nachher verschieben"
          onMouseDown={start}
          onTouchStart={start}
          style={{ ...baStyles.handle, left: `calc(${pos}% - 20px)` }}
        />
      </div>
    </figure>
  );
}

const styles = {
  page: { background: BG, minHeight: "100svh" },
  hero: {
    position: "relative",
    width: "100%",
    height: 460,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `2px solid ${ACCENT}`,
    overflow: "hidden",
  },
  heroBg: {
    position: "absolute",
    inset: 0,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
  },
  heroContent: { position: "relative", zIndex: 1, textAlign: "center", padding: "40px 16px" },
  h1: { color: TEXT, fontSize: 46, fontWeight: 800, marginBottom: 10 },
  sub: { color: TEXT, fontSize: 18, letterSpacing: 0.4 },
  section: { maxWidth: 1000, margin: "40px auto", padding: "0 16px" },
  card: {
    border: `2px solid ${ACCENT}`,
    borderRadius: 14,
    background: BG,
    padding: "32px 28px",
    color: TEXT,
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
  },
  h2: { fontSize: 30, fontWeight: 800, color: TEXT, marginBottom: 8 },
  h3: { fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 12 },
  lead: { fontSize: 20, fontWeight: 600, color: TEXT, marginBottom: 18 },
  p: { color: TEXT, lineHeight: 1.6, fontSize: 16, marginBottom: 16 },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  figure: {
    margin: 0,
    border: `2px solid ${ACCENT}`,
    borderRadius: 12,
    overflow: "hidden",
    background: BG,
  },
  img: { display: "block", width: "100%", height: 240, objectFit: "cover" },
};

const baStyles = {
  squareGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(320px, 1fr))",
    gap: 24,
    maxWidth: 1040,
    margin: "0 auto",
    alignItems: "start",
    justifyItems: "center",
  },
  tile: {
    margin: 0,
    background: "#fff",
    border: `2px solid ${ACCENT}`,
    borderRadius: 12,
    padding: 14,
    boxShadow: "0 10px 24px rgba(12,15,28,0.10)",
    width: "100%",
    maxWidth: 480,
  },
  wrap: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 3",
    borderRadius: 10,
    overflow: "hidden",
    userSelect: "none",
    touchAction: "none",
    cursor: "ew-resize",
  },
  img: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  },
  divider: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 2,
    background: ACCENT,
    pointerEvents: "none",
  },
  handle: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: ACCENT,
    border: "3px solid #fff",
    boxShadow: "0 0 0 2px " + ACCENT + ", 0 0 0 6px rgba(12,15,28,0.25)",
    cursor: "grab",
  },
};
