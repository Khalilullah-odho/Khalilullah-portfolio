import React, { useEffect } from "react";
import Aos from "aos";
import Navbar from "./Components//Navbar/Navbar";

import "./App.css";
import "./dataAos.css";

import About from "./Components/About";
import Main from "./Components/Main";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Certification from "./Components/Certification";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      delay: 0,
      anchorPlacement: "top-bottom",
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
