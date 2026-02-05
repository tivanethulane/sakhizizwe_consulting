import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";
import './WhyUs.css';

const reasons = [
  {
    icon: <FaCheckCircle size={40} className="text-success" />,
    title: "Proven Expertise",
    description: "Years of experience delivering quality solutions in engineering and IT."
  },
  {
    icon: <FaHandshake size={40} className="text-success" />,
    title: "Client-Centered",
    description: "We collaborate closely to tailor solutions that meet your exact needs."
  },
  {
    icon: <FaLightbulb size={40} className="text-success" />,
    title: "Innovative Solutions",
    description: "We apply the latest technology trends to solve complex business challenges."
  },
  {
    icon: <FaUsers size={40} className="text-success" />,
    title: "Dedicated Support",
    description: "Our team provides ongoing support to ensure your success long-term."
  },
];

const WhyUs = () => {
  return (
    <section id="whyus" className="py-6 section-offset">
      <Container>
       <div className="space">
          <br />
          <br />
          <br />
        </div>
        <h2 className="text-center mb-5">Why Choose Us?</h2>
        <Row>
          {reasons.map((reason, idx) => (
            <Col md={3} key={idx} className="text-center mb-4">
              <div className="mb-3">{reason.icon}</div>
              <h5>{reason.title}</h5>
              <p>{reason.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;
