import React, { useEffect, useState } from 'react';
import styles from './sidebar.module.css';

export default function Sidebar({ison}) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div 
    className={styles.sidebar}
    style={{
        display: ison ? 'block' : 'none',
        transform: ison ? "translateX(0)" : "translateX(-100%)",
      }}
    >
       <nav className={styles.Navbar}>
        <a href="#hero" className={activeSection === "hero" ? styles.on : styles.sidelink}>.</a>
        <a href="#about" className={activeSection === "about" ? styles.on : styles.sidelink}>.</a>
        <a href="#values" className={activeSection === "values" ? styles.on : styles.sidelink}>.</a>
        <a href="#footer" className={activeSection === "footer" ? styles.on : styles.sidelink}>.</a>
      </nav>
    </div>
  );
}
