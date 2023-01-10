import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
