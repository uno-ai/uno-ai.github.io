import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <section className="relative flex flex-col flex-grow w-full h-full font-noto-sans">
      <Routes>
        <Route path="/" element={<Navigate replace to="/work" />} />

        <Route path="/work" element={<Work />} />

        <Route path="/projects">
          <Route path="audiophile" element={<Projects />} />
          <Route path="designo" element={<Projects />} />
          <Route path="trello" element={<Projects />} />
        </Route>

        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </section>
  );
}

export default App;
