import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Vision from "./components/Vision";
import WhyUs from "./components/WhyUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent"; // now exists
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Vision />
      <WhyUs />
      <ContactForm />
      <Footer />
      <CookieConsent />
    </>
  );
}

export default App;
