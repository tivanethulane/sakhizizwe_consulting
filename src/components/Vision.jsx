import React from "react";
import { Container } from "react-bootstrap";
import './Vision.css';

const Vision = () => {
  return (
    <section id="vision" className="py-6 bg-light section-offset">
      <Container>
          <div className="space">
          <br />
          <br />
          <br />
        </div>
        <h2 className="text-center mb-5">Our Vision</h2>
        <p className="lead text-center mx-auto" style={{ maxWidth: "700px" }}>
          To be the leading provider of innovative and reliable engineering automation and IT solutions that empower businesses
          to transform, grow, and excel in a rapidly evolving digital world.
        </p>
      </Container>
    </section>
  );
};

export default Vision;
