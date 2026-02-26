import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contacts.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_USER_ID"
    )
    .then(() => {
      alert("Message sent!");
      form.current.reset();
    })
    .catch((err) => {
      alert("Error: " + err.text);
    });
  };

  return (
    <section id="contact" className="py-6 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>

        <div className="row g-4">
          {/* Left Column: Contact Info */}
          <div className="col-md-5">
            <div className="p-4 bg-white shadow rounded">
              <h4 className="mb-4">Our Contact Details</h4>
              <p><strong>Address:</strong> 123 Security Lane, Johannesburg, South Africa</p>
              <p><FaPhone /> <strong>Call:</strong> +27 78 178 0048</p>
              <p><FaWhatsapp /> <strong>WhatsApp:</strong> +27 78 178 0048</p>
              <p><FaEnvelope /> <strong>Email:</strong> info@sakhizizwe.co.za</p>

              <div className="social-icons mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaFacebookF size={25} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaLinkedinIn size={25} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={25} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-md-7">
            <div className="p-4 bg-white shadow rounded">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label>Name</label>
                  <input type="text" name="user_name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" name="user_email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label>Message</label>
                  <textarea name="message" className="form-control" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;