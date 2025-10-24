import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import PricesMen from "./pages/PricesMen";
import PricesWomen from "./pages/PricesWomen";
import Team from "./pages/Team";
import KostenfreieBeratung from "./pages/KostenfreieBeratung";
import Studie from "./pages/Studie";
import FrageAntwort from "./pages/FrageAntwort";
import Galerie from "./pages/Galerie"; 
import StudioStuttgart from "./pages/StudioStuttgart";
import StudioSindelfingen from "./pages/StudioSindelfingen";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Startseite */}
        <Route path="/" element={<Home />} />

        {/* Leistungen */}
        <Route path="/leistungen" element={<Navigate to="/leistungen/damen" replace />} />
        <Route path="/leistungen/damen" element={<PricesWomen />} />
        <Route path="/leistungen/herren" element={<PricesMen />} />

        {/* FAQ & Studien */}
        <Route path="/tipps" element={<FrageAntwort />} />
        <Route path="/tipps/studien" element={<Studie />} />

        {/* Kostenfreie Beratung */}
        <Route path="/beratung" element={<KostenfreieBeratung />} />

        {/* Über uns */}
        <Route path="/ueber-uns/team" element={<Team />} />
        <Route path="/ueber-uns/behandlungen" element={<Galerie />} /> 

        {/* Bequeme Weiterleitungen */}
        <Route path="/galerie" element={<Navigate to="/ueber-uns/galerie" replace />} />
        <Route path="/team" element={<Navigate to="/ueber-uns/team" replace />} />

        {/* Unsere Studios */}
        <Route path = "unser-studio/stuttgart" element = {<StudioStuttgart/>} />
        <Route path = "unser-studio/sindelfingen" element = {<StudioSindelfingen/>}/>

        
      </Routes>

      <BottomBar />
    </>
  );
}