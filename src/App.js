import React from "react";
import "./App.css";
import FirstSection from "./components/FirstSection";
import FivethSection from "./components/FivethSection";
import FourthSection from "./components/FourthSection";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import SixthSection from "./components/SixthSection";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FivethSection />
      <SixthSection />
    </div>
  );
}
export default App;
