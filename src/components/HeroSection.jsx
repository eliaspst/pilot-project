import "./HeroSection.css";


export default function HeroSection() {
 
  const HomeVideoMp4 = "/HomeVideo.mp4";

  return (
    <section
      className="hero-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      
      <video
        autoPlay
        muted
        loop
        playsInline     
        preload="metadata"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",  
        }}
      >
        <source src={HomeVideoMp4} type="video/mp4" />
        Dein Browser unterstützt das Video-Tag nicht.
      </video>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,0) 60%)",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h2>Dauerhafte Haarentfernung</h2>
        <p>Jetzt kostenlos beraten lassen</p>
        <div className="hero-btns">
          <button className="darkgold-btn">Termin vereinbaren</button>
          <button className="darkgold-btn">Mehr erfahren</button>
        </div>
      </div>
    </section>
  );
}
