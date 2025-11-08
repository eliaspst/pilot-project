import React from "react";
import "./Impressum.css";

export default function Impressum() {
    return (
        <main className="impressum-page">
            <header className="impressum-hero">
                <div className="impressum-hero-content">
                    <h1 className="impressum-title">Impressum</h1>
                </div>
            </header>
            <section className="impressum-section">
                <div className="impressum-textblock">
                    Medusa Beauty Lounge UG

                    Immenhoferstraße 46
                    70180 Stuttgart

                    <p>
                        Tel.: <a href="tel: 015773756720">+49&nbsp;1577&nbsp;37&nbsp;56&nbsp;720</a><br />
                        E-Mail: <a href="mailto:info@medusabeautylounge.de">info@medusabeautylounge.de</a>
                    </p>
                    Geschäftsführerin: Viktoria Stoll

                    Inhaltlich verantwortlich nach § 18 Abs. 2 MStV: Viktoria Stoll

                    Handelsregister: Amtsgericht Stuttgart
                    Registernummer: HRB 791068

                    Umsatzsteuer-ID: DE363431135
                </div>
            </section>
        </main>
    )
}
