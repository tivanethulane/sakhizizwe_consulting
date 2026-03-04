import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section text-white d-flex align-items-center section-offset"
      style={{
  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/hero.jpeg"})`,
  backgroundSize: "cover",
  backgroundPosition: "center 15%",
}}
    >
      <Container className="text-center">
        <h1 className="display-3 fw-bold animate__animated animate__fadeInDown">
          SAKHIZIZWE SECURITY SERVICES
        </h1>
        <p className="lead my-4 animate__animated animate__fadeInUp">
          Professional Security Consulting | Risk Assessment | Threat Prevention | Asset Protection
        </p>
        <Button
          href="#contact"
          size="lg"
          variant="primary"
          className="animate__animated animate__zoomIn"
        >
          Request a Consultation
        </Button>
      </Container>
    </section>
  );
};

export default Hero;