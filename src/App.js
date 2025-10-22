import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import Leistungen from "./pages/Leistungen";
import PricesMen from "./pages/PricesMen";
import PricesWomen from "./pages/PricesWomen";
import Team from "./pages/Team";
import KostenfreieBeratung from "./pages/KostenfreieBeratung";
import Studie from "./pages/Studie";
import FrageAntwort from "./pages/FrageAntwort"; 

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

        {/* Preise */}
        <Route path="/preise" element={<Navigate to="/preise/damen" replace />} />
        <Route path="/preise/damen" element={<PricesWomen />} />
        <Route path="/preise/herren" element={<PricesMen />} />

        {/* FAQ & Studien */}
        <Route path="/faq" element={<FrageAntwort />} />
        <Route path="/faq/studien" element={<Studie />} />

        {/* Kostenfreie Beratung */}
        <Route path="/beratung" element={<KostenfreieBeratung />} />

        {/* Über uns */}
        <Route path="/ueber-uns/team" element={<Team />} />
        <Route path="/ueber-uns/galerie" element={<Galerie />} />

        {/* Weiterleitungen */}
        <Route path="/team" element={<Navigate to="/ueber-uns/team" replace />} />
      </Routes>

      <BottomBar />
    </>
  );
}