import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      // You can replace 'YOUR_FORMSPREE_ID_HERE' with your real Formspree endpoint ID later!
      const response = await fetch("https://formspree.io/f/mlgklznr", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p>Have a question or want to work together? Drop a message below!</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="_replyto" required placeholder="your.email@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>

        {status === "SUCCESS" && <p className="success-msg">Thanks! Your message has been sent successfully.</p>}
        {status === "ERROR" && <p className="error-msg">Oops! There was a problem submitting your form.</p>}
      </form>
    </section>
  );
};

export default Contact;