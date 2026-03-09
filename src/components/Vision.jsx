// src/components/Vision.js
import React, { useState } from "react";
import { Container, Button, Modal, Row, Col, Card } from "react-bootstrap";
import './Vision.css';

const teamMembers = [
  {
    role: "Founder and Director",
    name: "Andrew Tyolo",
    cell: "+27781780048",
    image: process.env.PUBLIC_URL + "/images/Founder&director.jpeg",
    message: "Leading with integrity and vision to safeguard your operations.",
  },
  {
    role: "Operations Manager",
    name: "Douglas Sibanda",
    cell: "+27815782279",
    image: process.env.PUBLIC_URL + "/images/OperationManager.jpeg",
    message: "Ensuring seamless and effective security operations around the clock.",
  },
  {
    role: "Sales Manager Inland Region",
    name: "Japhet Jabulani Mthimkhulu",
    cell: "0713496497",
    image: process.env.PUBLIC_URL + "/images/japhet.png",
    message: "Focused on building strong client relationships and expanding our inland market presence.",
  },
  {
    role: "Sales Manager Coastal Region",
    name: "Edith Matome",
    cell: "0713496497",
    image: process.env.PUBLIC_URL + "/images/edit.jpeg",
    message: "Dedicated to delivering security solutions and growing partnerships in the coastal region.",
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
          SAKHIZIZWE SECURITY SERVICES aims to be the trusted leader in security consulting, 
          delivering innovative, reliable, and proactive solutions to safeguard businesses, 
          protect people, and mitigate risks in an ever-changing environment.
        </p>

        <div className="text-center mt-4">
          
          <Button
                        href="#contact"
                        size="lg"
                        variant="primary"
                        className="ms-3 animate__animated animate__zoomIn"
                        onClick={handleShow} // <-- closes menu
                      >
                        View Our Team
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
                      style={{ height: "550px", objectFit: "cover" }}
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