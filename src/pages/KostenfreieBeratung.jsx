import "../pages/KostenfreieBeratung.css";
import React from "react";



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
    <section className="contact">
      <form onSubmit={onSubmit} >
        <h2>Kostenfreie Beratung</h2>
        <div className="input-Box">
          <label>Full Name</label>
          <input type="text" className = "field" placeholder = "Enter your Name" required />
        </div>
        <div className="input-Box">
          <label>Email Address</label>
          <input type="email" className = "field" placeholder = "Enter your Email" required />
        </div>
        <div className="input-Box">
          <label>Deine Nachricht</label>
          <textarea name = "" id = "" className = "field mess" placeholder = "Type your Message..." required></textarea>
          </div>
        <button type="submit" className="submitBtn">Absenden</button>
      </form>
    </section>
  )

}

export default KostenfreieBeratung;