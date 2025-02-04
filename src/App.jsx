import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Award from "./components/Award";
import Navbar from "./components/navbar/Navbar";
import { HeroSection } from "./components/hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <Award /> */}
      <Footer />
    </>
  );
}

export default App;
