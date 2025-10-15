import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section style={{ padding: 40, border: "2px dashed #999", marginTop: 100 }}>
      <h2>Dauerhafte Haarentfernung</h2>
      <p>Jetzt kostenlos beraten lassen</p>
      <div className="hero-btns">
        <button className="darkgold-btn">Termin vereinbaren</button>
        <button className="darkgold-btn">Mehr erfahren</button>
      </div>
    </section>
  );
}
