import "../pages/KostenfreieBeratung.css";
import React from "react";

const HeroImage = "/Beratung-Frau.jpg";

const KostenfreieBeratung = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };


  return (
    <>
      <header className="hero-section">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${HeroImage})` }}  
        />
        <div className="hero-content">
          <h1>Kostenfreie Beratung</h1>
        </div>
      </header>

      <section className="contact">
        <form onSubmit={onSubmit} >
          <h2>Ihre Kontaktdaten</h2>
          <div className="input-Box">
            <label>Name</label>
            <input type="text" className="field" placeholder="Ihr Name..." required />
          </div>
          <div className="input-Box">
            <label>Email Addresse</label>
            <input type="email" className="field" placeholder="Ihre Email..." required />
          </div>
          <div className="input-Box">
            <label>Deine Nachricht</label>
            <textarea name="" id="" className="field mess" placeholder="Type your Message..." required></textarea>
          </div>
          <button type="submit" className="submitBtn">Absenden</button>
        </form>
      </section>
    </>
  )
}

export default KostenfreieBeratung;