import React from "react";

const projects = [
  { 
    name: "Weather App",
    tech: "React, CSS, OpenWeather API",
    link: "https://weather-omega-mauve.vercel.app/ ",
    desc: "Shows real-time weather info for searched locations."
  },
  {
    name: "Expense Tracker",
    tech: "React, CSS",
    link: "https://expense-tracker-delta-beryl.vercel.app/",
    desc: "Tracks daily expenses with add, delete, and summary features."
  },
  {
    name: "Operating Theater (OT) Scheduling System",
    tech: "React, Firebase, CSS",
    link: "https://operation-scheduler-one.vercel.app/",
    desc: "Manages surgery schedules efficiently, allowing hospitals to track, add, and update OT bookings in real-time."
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section reveal">
      <h2 className="section-title">Projects</h2>
      <div className="grid three">
        {projects.map((p) => (
          <a key={p.name} className="card hover-raise" href={p.link}>
            <h3>{p.name}</h3>
            <p className="muted">{p.tech}</p>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
