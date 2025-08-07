import React from "react";
import Header from "./component/Header";
import ImageBanner from "./component/ImageBanner";
import About from "./component/About";
import Qualification from "./component/Qualification";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Footer from "./component/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />

      <div className="main-layout">
        <ImageBanner />

        <div className="main-content">
          <About />
          <Qualification />
          <Skills />
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
