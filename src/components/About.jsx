import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './About.css';



const About = () => {
  return (
    
    <section id="about" className="py-6 section-padding fixed-navbar-offset">
      <Container>
         <div className="space">
          <br />
          <br />
          <br />
        </div>
        <h2 className="text-center mb-5">About Us</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Engineering and IT"
              fluid
              rounded
              style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
            />
          </Col>
          <Col md={6}>
            <p>
              At <strong>Twice Enterprise Solutions</strong>, we specialize in delivering innovative engineering automation,
              software development, quality assurance, and comprehensive IT services tailored to your business goals.
            </p>
            <p>
              Our team of experienced engineers and developers collaborates closely with clients to design system architectures
              that optimize performance, enhance productivity, and future-proof operations. We are passionate about digital
              transformation, helping businesses embrace technology to stay competitive and efficient.
            </p>
            <p>
              Whether you're looking to automate manufacturing lines, develop custom software, or overhaul your IT infrastructure,
              Twice Enterprise Solutions is your trusted partner for success.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
   
  );
};

export default About;
