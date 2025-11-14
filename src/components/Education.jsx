import React from "react";

export default function Education() {
  return (
    <section id="education" className="section reveal">
      <h2 className="section-title">Education</h2>
      <div className="grid two">
        <div className="card">
          <h3>B.TECH Information Engineering</h3>
          <p className="muted">Shah & Anchor Kutchhi Engineering College • 2023–2027</p>
          <p>CGPA: 8.4/10</p>
        </div>
        <div className="card">
          <h3>Certifications</h3>
          <ul className="bullets">
            <li>Java Programming From Success Classes of  Engineering</li>
            <li>NPTEL certification course in JAVA for time period of 5 weeks</li>
            <li>Data Science Master Virtual Internship</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
