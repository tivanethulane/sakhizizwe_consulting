import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.css";

const servicesData = [
  {
    image: process.env.PUBLIC_URL + "/images/security5.png",
    title: "Armed & Unarmed Security Guards",
    description:
      "Professional, trained security personnel providing visible protection for businesses, residences, and facilities."
  },
  {
    image: process.env.PUBLIC_URL + "/images/security6.png",
    title: "Mobile Patrol Services",
    description:
      "Scheduled and random patrols to deter crime, respond to incidents, and maintain safety across your premises."
  },
  {
    image: process.env.PUBLIC_URL + "/images/security1.png",
    title: "CCTV Surveillance & Monitoring",
    description:
      "Installation and monitoring of advanced camera systems to ensure continuous surveillance and evidence recording."
  },
  {
    image: process.env.PUBLIC_URL + "/images/security2.png",
    title: "Access Control & Gate Security",
    description:
      "Controlled entry and exit management using trained personnel and secure access systems."
  },
  {
    image: process.env.PUBLIC_URL + "/images/security4.png",
    title: "Event Security Management",
    description:
      "Crowd control, risk management, and on-site security for events, functions, and special occasions."
  },
  {
    image: process.env.PUBLIC_URL + "/images/security7.png",
    title: "Security Risk Assessments & Consulting",
    description:
      "Professional evaluation of security risks with tailored strategies to protect people, assets, and operations."
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light section-offset">
      <Container>
        <br />
        <h2 className="text-center mb-5">Our Services</h2>

        <Row>
          {servicesData.map((service, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm hover-shadow border-0 service-card">
                
                {/* IMAGE */}
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />

                <Card.Body className="text-center">
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;