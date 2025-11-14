import React from "react";

export default function Header() {
  return (
    <header className="hero">
      <img className="avatar" src="/profile.jpg" alt="Profile" />
      <h1 className="hero-title animate-pop">Shreeya Bhimani</h1>
      <p className="hero-sub">Full Stack Developer • React • JavaScript</p>
      <div className="hero-actions">
        <a className="btn primary" href="/resume.pdf" download>Download Resume</a>
        <a className="btn" href="#contact" onClick={(e) => {
          e.preventDefault();
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}>Contact Me</a>
      </div>
    </header>
  );
}
