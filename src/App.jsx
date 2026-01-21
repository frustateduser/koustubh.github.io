import React from "react";
import "./index.css";
import MainBody from "./pages/MainBody";
import Aboutme from "./pages/Aboutme";
import Contactme from "./pages/Contactme";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/contact" element={<Contactme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
