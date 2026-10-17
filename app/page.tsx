"use client";

import Header from "../src/Component/Header/Header";
import Nav from "../src/Component/Nav/Nav";
import About from "../src/Component/About/About";
import Experence from "../src/Component/Experence/Experence";
import Portfolio from "../src/Component/Portfolio/Portfolio";
import Contact from "../src/Component/Contact/Contact";
import Footer from "../src/Component/Footer/Footer";
import ChatWidget from "./chat/page";
import AudioAssistant from "../src/Component/AudioAssistant/AudioAssistant";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <About />
        <Experence />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <AudioAssistant />
      {/* <ChatWidget /> */}
    </>
  );
}
