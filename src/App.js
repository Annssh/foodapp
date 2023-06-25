import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Link from "./components/Link";
import Contact from "./components/Contact";
import Oura from "./components/Oura";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link" element={<Link />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/oura" element={<Oura />} />
      </Routes>
    </div>
  );
}

export default App;
