import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./OfferTicker.css";

const OFFERS = [
  {
    text: "🔥 20% für Studenten und Schüler",
    title: "Unser 20% Studentenrabatt",
    body:
      "Wenn du uns einen gültigen Studenten oder Schüler Ausweis zeigst, bekommst du auf Pakete oder Einzelbehandlungen 20% ",
    ctaText: "Kostenfreie Beratung anfragen",
    ctaHref: "/beratung",
  },
  {
    text: "🎁 50€ Gutschein bei Weiterempfehlung eines Neukunden",
    title: "50€ Gutschein sichern",
    body:
      "Wenn du mit uns zufrieden bist, dann erhältst du und der Weiterempfohlene auch 50€ Nachlass für deine nächste Behandlung.",
    ctaText: "Kostenfreie Beratung anfragen",
    ctaHref: "/beratung",
  },
  {
    text: "💎 Ganzkörper-Paket jetzt zum Vorteilspreis",
    title: "Ganzkörper-Paket zum Vorteilspreis",
    body:
      "Bis zum 31.01, Ganzkörper Pakete erhalten alle die mindestens 6 Behandlungen machen, 50% *Auch in Raten bezahlen ",
    ctaText: "Kostenfreie Beratung anfragen",
    ctaHref: "/beratung",
  },
  {
    text: "🎅🏼 Auf der Suche nach einem Weinachtsgeschenk? ",
    title: "Gutschein als Geschenk",
    body:
      "Wenn du ein Weihnachtsgeschenk suchst, sind alle Aktionen auch in Gutschein Form erhältlich! ",
    ctaText: "Kostenfreie Beratung anfragen",
    ctaHref: "/beratung",
  },
];

function PromoModal({ isOpen, onClose, offer }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = setTimeout(() => {
      modalRef.current?.querySelector(".offerModal__close")?.focus();
    }, 0);

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !offer) return null;

  return createPortal(
    <div className="offerModalOverlay" onMouseDown={onClose} role="presentation">
      <div
        className="offerModal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={offer.title}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="offerModal__close" onClick={onClose} aria-label="Schließen">
          ×
        </button>

        <div className="offerModal__content">
          <h2 className="offerModal__title">{offer.title}</h2>
          <p className="offerModal__text">{offer.body}</p>

          {offer.ctaHref && (
            <Link
              className="offerModal__link"
              to={offer.ctaHref}
              onClick={onClose}   // <-- wichtig: Modal zu, damit man die Seite sieht
            >
              {offer.ctaText || "Mehr erfahren"}
            </Link>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function OfferTicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOffer, setActiveOffer] = useState(null);

  const openOffer = (offer) => {
    setActiveOffer(offer);
    setIsOpen(true);
  };

  const closeOffer = () => {
    setIsOpen(false);
    setActiveOffer(null);
  };

  return (
    <div className="offerBlock">
      <div className="offerTicker" aria-label="Aktuelle Angebote">
        <div className="offerInner">
          <div className="offerTrack">
            {OFFERS.map((offer, idx) => (
              <div className="offerItem" key={`a-${idx}`}>
                <span className="offerItem__text">{offer.text}</span>

                <button
                  type="button"
                  className="offerItem__details"
                  onClick={(e) => {
                    e.stopPropagation();
                    openOffer(offer);
                  }}
                  aria-label={`Details zu: ${offer.title}`}
                >
                  Details
                </button>
              </div>
            ))}

            {OFFERS.map((offer, idx) => (
              <div className="offerItem" key={`b-${idx}`}>
                <span className="offerItem__text">{offer.text}</span>

                <button
                  type="button"
                  className="offerItem__details"
                  onClick={(e) => {
                    e.stopPropagation();
                    openOffer(offer);
                  }}
                  aria-label={`Details zu: ${offer.title}`}
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PromoModal isOpen={isOpen} onClose={closeOffer} offer={activeOffer} />
    </div>
  );
}
