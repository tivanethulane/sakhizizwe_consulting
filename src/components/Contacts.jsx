import React, { useRef } from "react";
import emailjs from "emailjs-com";
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
    <section id="contact" className="py-6 bg-light section-offset">
      <div className="container">
        <h2>Contact Us</h2>
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
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
