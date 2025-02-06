import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Award from "./components/Award";
import Navbar from "./components/navbar/Navbar";
import { HeroSection } from "./components/hero/Hero";
import Profile from "./components/profile/Profile";
import Detail from "./components/profile/Details";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Profile />
      <Detail />
      {/* <Award /> */}
      <Footer />
    </>
  );
}

export default App;
