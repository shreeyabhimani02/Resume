import React from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active }) {
  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="brand">Shreeya Bhimani</div>
      <div className="nav-links">
        {links.map((l) => (
          <button
            key={l.id}
            className={`nav-link ${active === l.id ? "active" : ""}`}
            onClick={() => handleClick(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
