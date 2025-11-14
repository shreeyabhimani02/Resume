import React from "react";

const jobs = [
  {
    role: "No Experience",
    company: "",
    period: "",
    points: [
      ""
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section reveal">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {jobs.map((j, idx) => (
          <details key={idx} className="card">
            <summary>
              <div className="job-head">
                <span className="job-role">{j.role}</span>
                <span className="job-meta">{j.company} • {j.period}</span>
              </div>
            </summary>
            <ul className="bullets">
              {j.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
