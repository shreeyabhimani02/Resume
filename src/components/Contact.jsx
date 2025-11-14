import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    const response = await fetch("http://localhost:5000/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setSent(true);
      e.target.reset();
    }
  };

  return (
    <section id="contact" className="section reveal">
      <h2 className="section-title">Contact</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="row">
          <input required placeholder="Your Name" />
          <input type="email" required placeholder="Your Email" />
        </div>
        <textarea required rows="5" placeholder="Your Message"></textarea>
        <button className="btn primary" type="submit">Send Message</button>
        {sent && <p className="success">Thanks! Your message has been sent.</p>}
      </form>
      <div className="muted" style={{ marginTop: "12px" }}>
        Or email: <a href="mailto:bhimanishreeya5@gmail.com">bhimanishreeya5@gmail.com</a>
      </div>
    </section>
  );
}
