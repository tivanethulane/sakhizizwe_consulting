import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section text-white d-flex align-items-center section-offset"
      style={{
        backgroundImage: "url(/images/gero-robotic.png)",
      }}
    >
      <Container className="text-center" >
        <h1 className="display-3 fw-bold animate__animated animate__fadeInDown" >
          Twice Enterprise Solutions
        </h1>
        <p className="lead my-4 animate__animated animate__fadeInUp">
          Engineering Automation | Software Development | Quality Assurance | IT Consulting
        </p>
        <Button
          href="#contact"
          size="lg"
          variant="primary"
          className="animate__animated animate__zoomIn"
        >
          Contact Us Today
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
