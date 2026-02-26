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
                  src={process.env.PUBLIC_URL + "/images/security10.png"}
              alt="Engineering and IT"
              fluid
              rounded
              style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
            />
          </Col>
          <Col md={6}>
            <p>
    At <strong>SAKHIZIZWE TRADING ENTERPRISE</strong>, we specialize in providing professional security consulting services 
    designed to protect businesses, assets, and people. Our solutions include risk assessments, strategic planning, 
    and the implementation of effective security measures tailored to your unique needs.
  </p>
  <p>
    Our team of experienced security consultants works closely with clients to identify vulnerabilities, 
    develop customized strategies, and ensure compliance with industry standards and regulations. 
    We are committed to proactive protection, helping organizations prevent threats before they occur.
  </p>
  <p>
    Whether you require risk analysis, event security management, access control, or CCTV monitoring, 
    <strong>SAKHIZIZWE TRADING ENTERPRISE</strong> is your trusted partner for reliable, professional, and ethical security solutions.
  </p>

          </Col>
        </Row>
      </Container>
    </section>
   
  );
};

export default About;
