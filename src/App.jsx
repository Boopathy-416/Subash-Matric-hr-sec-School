import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Award from "./components/Award";
import Navbar from "./components/navbar/Navbar";
import { HeroSection } from "./components/hero/Hero";
import Profile from "./components/profile/Profile";
import Detail from "./components/profile/Details";
import ProfileRank from "./components/ranklist/ProfileRank";
import Showcase from "./components/classrooms/Showcase";
import StaffSlider from "./components/staffslider/StaffSlider";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Profile />
      <Detail />
      <ProfileRank />
      <Showcase />
      <StaffSlider />
      {/* <Award /> */}
      <Footer />
    </>
  );
}

export default App;
