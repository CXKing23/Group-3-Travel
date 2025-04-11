// src/pages/ContactUs.jsx
import React, { useState } from "react";
import { db } from "./firebase";  // Firebase from traveladventure
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      setFormData({ name: "", email: "", message: "" });
      setSuccess(true);

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      alert("Message failed to send.");
      console.error(error);
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} id="contact-form">
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>

      {success && <p style={{ color: "green" }}>Your message has been sent successfully!</p>}

      <p>Have questions or need assistance? Reach out to us and start planning your next adventure!</p>
    </div>
  );
};

export default ContactUs;
