import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projets from "./components/projets/Projets";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Analytics />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projets />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
