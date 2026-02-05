import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp, FaTelegram, FaTiktok } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-white text-black border-top py-3">
      <Container className="d-flex justify-content-between align-items-center flex-wrap">
        {/* Follow Us text + Icons */}
        <div className="d-flex align-items-center flex-wrap">
          <span className="me-3 fw-bold">Follow us on:</span>

          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mx-1">
            <FaFacebook size={24} color="#1877F2" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="mx-1">
            <FaLinkedin size={24} color="#0A66C2" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="mx-1">
            <FaTwitter size={24} color="#1DA1F2" />
          </a>
          <a href="https://wa.me/0674016519" target="_blank" rel="noreferrer" className="mx-1">
            <FaWhatsapp size={24} color="#25D366" />
          </a>
          <a href="https://t.me/yourtelegramusername" target="_blank" rel="noreferrer" className="mx-1">
            <FaTelegram size={24} color="#0088cc" />
          </a>
          <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noreferrer" className="mx-1">
            <FaTiktok size={24} color="#000000" />
          </a>
        </div>

        {/* Copyright text */}
        <small className="mt-2 mt-lg-0">
          © {new Date().getFullYear()} Twice Enterprise Solutions. All rights reserved.
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
