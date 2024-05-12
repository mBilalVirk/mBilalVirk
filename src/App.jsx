import { useState } from "react";

import logo from "./assets/logo.png";
import profile from "./assets/PSX_20190530_194951.jpg";
import mobile from "./assets/moble_ui.png";
import webImg from "./assets/Web ui.png";
import portfolioImg from "./assets/Portfolio.png";

import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar logo={logo} />
      <About profile={profile} />
      <Service />
      <Portfolio mobile={mobile} webImg={webImg} portfolioImg={portfolioImg} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
