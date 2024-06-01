import React from "react";
import "../styles/ContactsPage.css";

function ContactsPage() {
  return (
    <div className="contacts">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="info-item">
          <h3>Address:</h3>
          <p>[Address]</p>
        </div>
        <div className="info-item">
          <h3>Email:</h3>
          <p>[Email address]</p>
        </div>
        <div className="info-item">
          <h3>Phone:</h3>
          <p>[Phone number]</p>
        </div>
        <div className="info-item">
          <h3>Opening Hours:</h3>
          <p>Monday - Friday: [hours]</p>
          <p>Saturday - Sunday: [hours]</p>
        </div>
        <div className="info-item">
          <h3>Social Media:</h3>
          <p>[Links to your social media profiles]</p>
        </div>
      </div>
      <p className="contact-message">
        If you have any questions, suggestions, or just want to share your
        feedback about our products, please feel free to contact us. We are
        always happy to assist you!
      </p>
    </div>
  );
}

export default ContactsPage;
