import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import styles from "./contact.module.css";
import emailjs from "@emailjs/browser"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const serviceID = "service_xramxph";
    const templateID = "template_qc16d8d";
    const publicKey = "tMY5miqtbHt7UU8y_"; 

    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); 
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Failed to send message. Try again.");
      });
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p><FaEnvelope className={styles.icon} /> vuppalareshmitha25@gmail.com</p>
        <p><FaMapMarkerAlt className={styles.icon} />  Andhra Pradesh, INDIA</p>
      </div>

      <div className={styles.contactFormBox}>
        <h2>CONTACT ME</h2><br></br>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textarea}
          />

          <button type="submit" className={styles.sendButton}>
            <FaPaperPlane className={styles.buttonIcon} /> Send Message
          </button>
          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;