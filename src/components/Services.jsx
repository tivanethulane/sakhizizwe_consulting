import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCogs, FaLaptopCode, FaCheckCircle, FaNetworkWired, FaProjectDiagram, FaRobot } from "react-icons/fa";
import './Services.css';

const servicesData = [
  {
    icon: <FaCogs size={40} className="text-primary" />,
    title: "Engineering Automation",
    description: "Streamline your industrial and manufacturing processes with custom automation solutions."
  },
  {
    icon: <FaLaptopCode size={40} className="text-primary" />,
    title: "Software Development",
    description: "Tailored software systems designed for your business needs and growth."
  },
  {
    icon: <FaCheckCircle size={40} className="text-primary" />,
    title: "Quality Assurance",
    description: "Ensure flawless delivery with rigorous software and process testing."
  },
  {
    icon: <FaNetworkWired size={40} className="text-primary" />,
    title: "IT Infrastructure & Support",
    description: "Reliable IT services, from network setup to continuous maintenance."
  },
  {
    icon: <FaProjectDiagram size={40} className="text-primary" />,
    title: "System Architecture Design",
    description: "Blueprint and design scalable, secure, and efficient system architectures."
  },
  {
    icon: <FaRobot size={40} className="text-primary" />,
    title: "Digital Transformation",
    description: "Modernize your business processes using the latest IT and digital technologies."
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light section-offset">
      <Container>
        <div className="space">
          <br />
        </div>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {servicesData.map((service, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm hover-shadow border-0">
                <Card.Body className="text-center">
                  <div className="mb-3">{service.icon}</div>
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
