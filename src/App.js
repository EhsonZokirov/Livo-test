import React from "react";
import "./App.css";
import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <div className="">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
export default App;
