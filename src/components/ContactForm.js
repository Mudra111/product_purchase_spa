import React, { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("forn submited successfully..");
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <div className="divContactForm">
        <label htmlFor="name">Name:</label>
        <input
          className="inputName"
          type="text"
          id="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="divContactForm">
        <label htmlFor="email">Email:</label>
        <input
          className="inputEmail"
          type="email"
          id="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="divContactForm">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          className="inputMessage"
          placeholder="Message"
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <button type="submit" className="submitBtnContactForm">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
