import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PricesMen from "./pages/PricesMen";
import PricesWomen from "./pages/PricesWomen";

// Platzhalter-Seiten – du kannst sie später durch echte Seiten ersetzen
const FAQ = () => <div style={{ padding: "2rem" }}><h1>FAQ</h1></div>;
const Studien = () => <div style={{ padding: "2rem" }}><h1>Studien</h1></div>;
const Team = () => <div style={{ padding: "2rem" }}><h1>Unser Team</h1></div>;
const Galerie = () => <div style={{ padding: "2rem" }}><h1>Galerie</h1></div>;

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Preise */}
        <Route path="/preise/maenner" element={<PricesMen />} />
        <Route path="/preise/frauen" element={<PricesWomen />} />

        {/* FAQ & Studien */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq/studien" element={<Studien />} />

        {/* Über uns */}
        <Route path="/ueber-uns/team" element={<Team />} />
        <Route path="/ueber-uns/galerie" element={<Galerie />} />
      </Routes>
    </>
  );
}
