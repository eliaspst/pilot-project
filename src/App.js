import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import Leistungen from "./pages/Leistungen";
import PricesMen from "./pages/PricesMen";
import PricesWomen from "./pages/PricesWomen";
import Team from "./pages/Team"; // <- echte Team-Seite (Hero + Card)

// Platzhalter (optional)
const FAQ = () => (
  <div style={{ padding: "2rem" }}>
    <h1>FAQ</h1>
  </div>
);
const Studien = () => (
  <div style={{ padding: "2rem" }}>
    <h1>Studien</h1>
  </div>
);
const Galerie = () => (
  <div style={{ padding: "2rem" }}>
    <h1>Galerie</h1>
  </div>
);

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Startseite */}
        <Route path="/" element={<Home />} />

        {/* Leistungen */}
        <Route path="/leistungen" element={<Leistungen />} />

        <Route path="preise">
          <Route path="frauen" element={<PricesWomen />} />
          <Route path="maenner" element={<PricesMen />} />
        </Route>

        {/* FAQ & Studien */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq/studien" element={<Studien />} />

        {/* Über uns */}
        <Route path="/ueber-uns/team" element={<Team />} />
        <Route path="/ueber-uns/galerie" element={<Galerie />} />

        {/* Weiterleitung (falls alte Links existieren) */}
        <Route path="/team" element={<Navigate to="/ueber-uns/team" replace />} />
      </Routes>
      <BottomBar />
    </>
  );
}
