import React from "react";
import "./index.css";
import MainBody from "./pages/MainBody";
import Aboutme from "./pages/Aboutme";
import Contactme from "./pages/Contactme";
import { HashRouter, Route, Routes } from "react-router";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/contact" element={<Contactme />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
