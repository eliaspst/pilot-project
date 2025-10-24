import React from "react";
import "./Studie.css";

const BASE = "/"; 

const Img = ({ src, alt }) => (
  <div className="studie-image-wrap">
    <img className="studie-image" src={src} alt={alt} />
  </div>
);

const TextBlock = ({ children }) => (
  <section className="studie-section">
    <div className="studie-textblock">{children}</div>
  </section>
);

export default function Studie() {
  return (
    <main className="studie-page">
      {/* HERO */}
      <header
        className="studie-hero"
        style={{ "--hero-image": `url('/Logo.png')` }}
      >
        <div className="studie-hero-content">
          <h1 className="studie-title">Studien</h1>
          <p className="studie-subtitle">
            Medusa Beauty Lounge Stuttgart – Vergleichsstudie zu verschiedenen
            Diodenlasern
          </p>
        </div>
      </header>

      {/* Einleitung */}
      <TextBlock>
        <h2 className="studie-h2">
          Studie von Proderma – Hautzentrum in Bad Homburg
        </h2>
        <p>
          <strong>Comparison Study</strong> – Between the diode lasers:
          <br />
          <br />• <strong>MeDioStar</strong> with a single wavelength of 808 nm
          <br />• <strong>MeDioStar miXT</strong> with two wavelengths (808 nm + 938 nm)
        </p>
        <p>
          The aim of the study is to compare the effectiveness and side effects
          of both lasers in half-side treatments as a basis for the FDA-Approval
          for hair removal (miXT).
        </p>

        <h3 className="studie-h3">Requirements:</h3>
        <ul>
          <li>Different skin types</li>
          <li>Different body regions</li>
        </ul>

        <h3 className="studie-h3">Exclusion criteria:</h3>
        <ul>
          <li>The use of medication that increases light sensitivity</li>
          <li>Cancer, precancerous or tattoos in the treated areas</li>
          <li>Pregnancy</li>
          <li>Suntanned or strongly pigmented skin</li>
          <li>Tendency to melasma or hyperpigmentation</li>
          <li>Active infections in the treated areas</li>
          <li>Unrealistic expectancy</li>
        </ul>

        <h3 className="studie-h3">Procedures:</h3>
        <ul>
          <li>Photo documentation (pre/post) of the treated areas</li>
          <li>Shaving prior to treatment</li>
          <li>Test treatment to establish parameters and comfort</li>
          <li>Comparison photo documentation following treatment</li>
          <li>
            Protocol per patient/treatment including date, laser type/settings,
            treated area, level of pain, and relevant observations
          </li>
          <li>Pain scale 0–10 (0 = no pain)</li>
        </ul>

        <h3 className="studie-h3">Post treatment:</h3>
        <ul>
          <li>Cool-packs (~8 °C) for a minimum of 5 minutes</li>
          <li>Sun avoidance or use of sun-blockers for ≥ 5 weeks</li>
        </ul>
      </TextBlock>

      {/* Bilder 1–5 */}
      <Img src={`${BASE}1.png`} alt="Figure 1" />
      <Img src={`${BASE}2.png`} alt="Figure 2" />
      <Img src={`${BASE}3.png`} alt="Figure 3" />
      <Img src={`${BASE}4.png`} alt="Figure 4" />
      <Img src={`${BASE}5.png`} alt="Figure 5" />

      {/* Text + Bilder 6–11 */}
      <TextBlock>
        Hypertrichosis since age 14 shaved daily. Hormone status in normal
        range. An acceptable result after three treatments but more are
        required. No significant difference between areas treated with either
        laser.
      </TextBlock>
      {[6, 7, 8, 9, 10, 11].map((n) => (
        <Img key={n} src={`${BASE}${n}.png`} alt={`Figure ${n}`} />
      ))}

      {/* Text + Bilder 12–17 */}
      <TextBlock>
        This transsexual patient has been in treatment for hair removal for
        several years. Last previous treatment was 16 months ago. Hormone
        treatment is usual for a patient of this type. This patient is
        exceptionally pain sensitive. Basic treatment mode was used for all
        treatments; increased impulse times tend to increase the level of pain.
        No significant difference between areas treated with either laser after
        two treatments.
      </TextBlock>
      {[12, 13, 14, 15, 16, 17].map((n) => (
        <Img key={n} src={`${BASE}${n}.png`} alt={`Figure ${n}`} />
      ))}

      {/* Text + Bilder 18–19 */}
      <TextBlock>
        <em>
          This patient has hypertrichosis for over 10 years, since the start of
          her menopause. Patient suffers from severe scarring due to folliculitis
          as a result of plucking the hairs. Not only is there a significant
          reduction of hair but also a softer definition of the scarring.
          Folliculitis is considerably reduced due to lack of plucking.
        </em>
        <br />
        <br />
        Although in the initial picture the patient left side appears to have
        more hair than the right side, this is primarily due to the patient’s
        habit of plucking one area at a time. Over four months and reduced
        plucking, both sides appear equally balanced.
      </TextBlock>
      <Img src={`${BASE}18.png`} alt="Figure 18" />
      <Img src={`${BASE}19.png`} alt="Figure 19" />

      {/* Text + Bilder 20–24 */}
      <TextBlock>
        Initial condition – Treatment – Diode miXT (808 + 938) patient right
        side – Diode (808) patient left side
      </TextBlock>
      {[20, 21, 22, 23, 24].map((n) => (
        <Img key={n} src={`${BASE}${n}.png`} alt={`Figure ${n}`} />
      ))}

      {/* Schluss/Quelle */}
      <TextBlock>
        <h2 className="studie-h2">Conclusions</h2>
        <p>
          Despite the slightly reduced absorption at 938 nm in melanin, there
          were no notable differences between areas treated with either laser
          regarding efficacy or patient comfort. Qualitative and quantitative
          differences are minimal and statistically insignificant.
        </p>

        <h3 className="studie-h3">Side effects:</h3>
        <p>
          Mild erythema and slight oedema are normal. No cases of hyper- or
          hypopigmentation, scabbing or scarring. No relevant discomfort post
          treatment, except a light warmth. One patient was exceptionally pain
          sensitive.
        </p>

        <p>
          <strong>Treatments, observations and documentation by:</strong>
          <br />
          Dr. Paul Wood &nbsp;|&nbsp; Dr. Ulrike Elvers
          <br />
          Proderma – Hautzentrum in Bad Homburg
          <br />
          Schwedenpfad 2, D-61348 Bad Homburg
        </p>

        <p>
          Quelle:&nbsp;
          <a
            href="https://www.esthelogue.de/2018/03/02/klinische-studien/vergleichsstudie-zu-verschiedenen-diodenlasern/"
            target="_blank"
            rel="noreferrer"
          >
            www.esthelogue.de/…/vergleichsstudie-zu-verschiedenen-diodenlasern/
          </a>
        </p>
      </TextBlock>
    </main>
  );
}
