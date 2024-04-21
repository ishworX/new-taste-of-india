import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testomonial from "./components/Testomonial/Testomonial";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Testomonial/>
    <Banner/>
  
    </>
  )
};

export default App;
