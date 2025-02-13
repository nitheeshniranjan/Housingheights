import React from "react";
import { contactData } from "../../data/Data";
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>{contactData.description}</p>
        <ul>
          <li>📧 <a href={`mailto:${contactData.email}`}>{contactData.email}</a></li>
          <li>📞 {contactData.phone}</li>
          <li>📍 {contactData.address}</li>
        </ul>
      </div>

      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;



