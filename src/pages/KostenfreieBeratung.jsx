import "../pages/KostenfreieBeratung.css";
import React from "react";

const HeroImage = "/Beratung-Frau.JPG";

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

      <section className="contact-wrap">
        <div className="intro">
          <p>
            Kostenfreie Erstberatung: Wir prüfen Ihr Anliegen, erklären den Ablauf
            und beantworten alle Fragen.
          </p>
        </div>

        <section className="contact">
          <form onSubmit={onSubmit} >
            <h2>Ihre Kontaktdaten</h2>
            <div className="row-two">
              <div className="input-Box">
                <label>Vorname*</label>
                <input type="text" className="field" name="firstName" placeholder="Ihr Vorname..." required />
              </div>

              <div className="input-Box">
                <label>Nachname*</label>
                <input type="text" className="field" name="lastName" placeholder="Ihr Nachname..." required />
              </div>
            </div>
            <div className="input-Box">
              <label>Telefonnummer*</label>
              <input type="tel" className="field" placeholder="Ihre Telefonnummer..." required
                inputMode="numeric" pattern="^\s*\+?\s*(?=(?:\D*\d){6,15}\D*$)[\d\s()-]+$" title="Bitte geben Sie eine gültige Telefonnummer ein."
              />
            </div>
            <div className="input-Box">
              <label>Email Addresse*</label>
              <input type="email" className="field" placeholder="Ihre Email..." required />
            </div>
            <div className="option-Box">
              <label>Standort des Studios*</label>
              <select className="field" required>
                <option value="" disabled selected>Bitte wählen...</option>
                <option value="Stuttgart">Stuttgart</option>
                <option value="Sindelfingen">Sindelfingen</option>
              </select>
            </div>
            <div className="input-Box">
              <label>Deine Nachricht</label>
              <textarea name="" id="" className="field mess" placeholder="Ihre Nachricht..."></textarea>
            </div>
            <button type="submit" className="submitBtn">Absenden</button>
          </form>
        </section>
      </section>
    </>
  )
}

export default KostenfreieBeratung;