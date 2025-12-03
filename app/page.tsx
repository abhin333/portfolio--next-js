"use client";

import Header from "../src/Component/Header/Header";
import Nav from "../src/Component/Nav/Nav";
import About from "../src/Component/About/About";
import Experence from "../src/Component/Experence/Experence";
import Portfolio from "../src/Component/Portfolio/Portfolio";
import Contact from "../src/Component/Contact/Contact";
import Footer from "../src/Component/Footer/Footer";

export default function HomePage() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experence />
    <Portfolio />
    <Contact />
    <Footer /> 
    </>
  );
}
