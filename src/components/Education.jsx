import React from "react";

export default function Education() {
  return (
    <section id="education" className="section reveal">
      <h2 className="section-title">Education</h2>
      <div className="grid two">
        <div className="card">
          <h3>B.TECH Information Engineering</h3>
          <p className="muted">Shah & Anchor Kutchhi Engineering College • 2023–2027</p>
          <p>CGPA: 8.6/10</p>
        </div>
        <div className="card">
          <h3>Certifications</h3>
          <ul className="bullets">
            <li>MERN STACK Development Awarded a Certificate of Completion for demonstrating proficiency in full-stack web development using MongoDB, Express.js, React, and Node.js.</li>
            <li>Java Programming From Success Classes of  Engineering</li>
            <li>Data Science Master Virtual Internship</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
