import React, { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";

import Notification from "@/components/ui/Notification/Notification";

async function sendContactData(contactDetails) {
  const response = await fetch(`/api/contact`, {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const changeValue = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setRequestStatus("pending");

    try {
      await sendContactData(contactInfo);
      setRequestStatus("success");
      setContactInfo({ email: "", name: "", message: "" });
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "메시지를 전송중입니다.",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!!",
      message: "메시지가 전송되었습니다.",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: requestError,
    };
  }

  return (
    <>
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

      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </>
  );
}
