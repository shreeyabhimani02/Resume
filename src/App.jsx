import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  // Active link highlight on scroll
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          setActive(sec.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal-on-scroll animation
  useEffect(() => {
    const revealables = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        }),
      { threshold: 0.15 }
    );
    revealables.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar active={active} />
      <main>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Shreeya Bhimani</footer>
    </>
  );
}
