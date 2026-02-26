import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section id="whyus" className="py-6 section-offset">
      <Container>
        
          <br />
          <br />
          <br />

        {/* CENTERED HEADING */}
        <h2 className="text-center mb-5">Why Choose Us?</h2>

        <Row className="align-items-center">

          {/* LEFT CONTENT */}
          <Col md={6}>
            <p className="mb-4">
              At <strong>SAKHIZIZWE TRADING ENTERPRISE</strong>, we combine professional expertise, integrity, 
              and a client-focused approach to provide reliable security consulting services. 
              Our team works closely with you to assess risks, implement effective strategies, 
              and ensure the protection of your business, assets, and people.
            </p>

            <ul className="whyus-list">
              <li>
                <FaCheckCircle className="text-success me-2" />
                Expert security risk analysis
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" />
                Tailored security solutions for your needs
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" />
                Proactive threat prevention strategies
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" />
                Ethical, reliable, and confidential service
              </li>
            </ul>
          </Col>

          {/* RIGHT IMAGE */}
          <Col md={6} className="text-center">
            <img
                src={process.env.PUBLIC_URL + "/images/security3.png"}  // keep or update to relevant security image
              alt="Why Choose Us"
              className="img-fluid whyus-image"
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;