import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    name: "",
    message: "",
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const sendMessage = (e) => {
    e.preventDefault();

    fetch(`/api/contact`, {
      method: "POST",
      body: JSON.stringify(contactInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section className={styles.contact}>
      <h2>How can I help you?</h2>

      <form className={styles.form} onSubmit={sendMessage}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              name='email'
              autoComplete='off'
              value={contactInfo.email}
              onChange={changeValue}
              required
            />
          </div>

          <div className={styles.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              name='name'
              autoComplete='off'
              value={contactInfo.name}
              onChange={changeValue}
              required
            />
          </div>

          <div className={styles.control}>
            <label htmlFor='message'>Your Message</label>
            <textarea
              id='message'
              name='message'
              rows='5'
              value={contactInfo.message}
              onChange={changeValue}
              required
            />
          </div>

          <div className={styles.actions}>
            <button type='submit'>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
}
