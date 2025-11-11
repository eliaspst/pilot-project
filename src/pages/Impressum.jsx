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
                    <p className="impressum-company">Medusa Beauty Lounge UG</p>

                    <address className="impressum-address">
                        Immenhoferstraße 46<br />
                        70180 Stuttgart
                    </address>

                    <p>
                        Tel.: <a href="tel:+4915773756720">+49&nbsp;1577&nbsp;37&nbsp;56&nbsp;720</a><br />
                        E-Mail: <a href="mailto:info@medusabeautylounge.de">info@medusabeautylounge.de</a>
                    </p>

                    <p>Geschäftsführerin: Viktoria Stoll</p>
                    <p>Inhaltlich verantwortlich nach §&nbsp;18 Abs.&nbsp;2 MStV: Viktoria Stoll</p>
                    <p>Handelsregister: Amtsgericht Stuttgart<br />Registernummer: HRB 791068</p>
                    <p>Umsatzsteuer-ID: DE363431135</p>
                </div>
            </section>

        </main>
    )
}
