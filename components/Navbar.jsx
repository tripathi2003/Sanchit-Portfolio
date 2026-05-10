"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isBlinking, setIsBlinking] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="home-icon">
        <a href="/">&gt; MotaMistri / <span id="myBlinkingText" style={{ opacity: isBlinking ? 1 : 0 }}></span></a>
      </div>

      <ul className="menu" id="icon" style={{ display: isMenuOpen ? "flex" : "", flexDirection: isMenuOpen ? "column" : "" }}>
        <li>
          <a href="/resume">
            <i className="material-symbols-outlined">resume</i> Resume
          </a>
        </li>
        <li>
          <a href="/blog">
            <i className="material-symbols-outlined">bookmarks</i> Blog
          </a>
        </li>
        <li>
          <a href="/whoami">
            <i className="material-symbols-outlined">search</i> Whoami
          </a>
        </li>
        <li>
          <a href="/resource">
            <i className="material-symbols-outlined">database</i> Resource
          </a>
        </li>
      </ul>
      
      <div id="iconn" onClick={toggleMenu}>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </nav>
  );
}
