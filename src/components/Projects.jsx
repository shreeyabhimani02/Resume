import React from "react";

const projects = [
  { 
    name: "UpSkillr",
    tech: "React.js, Node.js, Express.js, MongoDB Atlas",
    link: "https://upskillr-omega.vercel.app",
    desc: "- Built a full-stack online learning and skill development platform using the MERN stack, featuring JWT-based authentication, course management, progress tracking, certificate generation, and email notifications."
  },
  {
    name: "Event Registration App ",
    tech: "MongoDB, Express, React, Node.js",
    link: "https://event-0205.web.app/ )",
    desc: "Built a MERN-stack based event management app with user authentication and event listing. "
  },
  {
    name: "Todsy ",
    tech: "React.js, Node.js, Express, MongoDB Atlas",
    link: "https://todoreact-coral.vercel.app/",
    desc: "Built a full-stack To-Do Web Application using React.js, Node.js, Express, and MongoDB Atlas, featuring secure user authentication, task management, progress tracking, and an interactive calendar view."
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
