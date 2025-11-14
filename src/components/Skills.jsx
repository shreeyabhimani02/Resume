import React, { useState } from "react";

const skills = [
  { name: "React", level: 90, note: "Hooks, Router, Context" },
  { name: "JavaScript", level: 100, note: "ES6+, async, DOM" },
  { name: "CSS", level: 80, note: "Flexbox, Grid, Animations" },
  { name: "Machine Learning", level: 50, note: "Implemented regression and classification models with Python & scikit-learn" },
];

export default function Skills() {
  const [tooltip, setTooltip] = useState(null);

  return (
    <section id="skills" className="section reveal">
      <h2 className="section-title">Skills</h2>

      <div className="skills">
        {skills.map((s) => (
          <div
            key={s.name}
            className="skill"
            onMouseEnter={(e) => setTooltip({ x: e.clientX, y: e.clientY, text: s.note })}
            onMouseLeave={() => setTooltip(null)}
            onClick={(e) => setTooltip({ x: e.clientX, y: e.clientY, text: s.note })}
          >
            <div className="skill-head">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="progress">
              <div className="bar" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>

      {tooltip && (
        <div
          className="tooltip"
          style={{ left: tooltip.x + 8, top: tooltip.y + 8 }}
          role="tooltip"
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}
