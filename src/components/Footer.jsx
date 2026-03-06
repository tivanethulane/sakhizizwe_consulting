import React from "react";
import { Container } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-white text-black border-top py-3">
      <Container className="d-flex justify-content-between align-items-center flex-wrap">

        {/* Contact Section */}
        <div className="d-flex align-items-center flex-wrap">
          <span className="me-3 fw-bold">Contact us on:</span>

          <a href="https://wa.me/+27815782279" target="_blank" rel="noreferrer" className="mx-1">
            <FaWhatsapp size={24} color="#25D366" />
          </a>
        </div>

        {/* Navigation Tabs (from Navbar) */}
        <div className="footer-nav d-flex gap-3 my-2">
          <a href="#services" className="text-decoration-none text-black">Services</a>
          <a href="#about" className="text-decoration-none text-black">About Us</a>
          <a href="#vision" className="text-decoration-none text-black">Vision</a>
          <a href="#whyus" className="text-decoration-none text-black">Why Us</a>
          <a href="#contact" className="text-decoration-none text-black">Contact</a>
        </div>

        {/* Copyright */}
        <small className="mt-2 mt-lg-0">
          © {new Date().getFullYear()} SAKHIZIZWE SECURITY SERVICES. All rights reserved.
        </small>

      </Container>
    </footer>
  );
};

export default Footer;