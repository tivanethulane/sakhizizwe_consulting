// src/components/Vision.js
import React, { useState } from "react";
import { Container, Button, Modal, Row, Col, Card } from "react-bootstrap";
import './Vision.css';

const teamMembers = [
  {
    role: "Director",
    name: "Andrew Tyolo",
    cell: "0781780048",
    image: process.env.PUBLIC_URL + "https://randomuser.me/api/portraits/men/1.jpg",
    message: "Leading with integrity and vision to safeguard your operations.",
  },
  {
    role: "Operations Manager",
    name: "Douglas Sibanda",
    cell: "0815782279",
    image: process.env.PUBLIC_URL + "https://randomuser.me/api/portraits/men/2.jpg",
    message: "Ensuring seamless and effective security operations around the clock.",
  },
  {
    role: "Gauteng Region Sales Manager",
    name: "Jabulani Japhet Mthimkhulu",
    cell: "0732353034",
    image: process.env.PUBLIC_URL + "https://randomuser.me/api/portraits/men/3.jpg",
    message: "Customer-focused solutions to meet your security demands in Gauteng.",
  },
  {
    role: "Durban Region Sales Manager",
    name: "Edith Takalani Matome",
    cell: "0727349145",
    image: process.env.PUBLIC_URL + "https://randomuser.me/api/portraits/women/1.jpg",
    message: "Dedicated to protecting your business and assets in Durban.",
  },
];

const Vision = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          SAKHIZIZWE TRADING ENTERPRISE aims to be the trusted leader in security consulting, 
          delivering innovative, reliable, and proactive solutions to safeguard businesses, 
          protect people, and mitigate risks in an ever-changing environment.
        </p>

        <div className="text-center mt-4">
          <Button variant="primary" onClick={handleShow}>
            See Our Team
          </Button>
        </div>

        {/* TEAM MODAL */}
        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Our Team</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              {teamMembers.map((member, idx) => (
                <Col md={6} className="mb-4" key={idx}>
                  <Card className="h-100 shadow-sm text-center border-0">
                    <Card.Img
                      variant="top"
                      src={member.image}
                      alt={member.name}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                      <p className="mb-2">📞 {member.cell}</p>
                      <Card.Text>{member.message}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Vision;