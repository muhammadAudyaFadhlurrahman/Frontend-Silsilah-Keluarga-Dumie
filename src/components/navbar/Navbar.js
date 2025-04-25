import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; // Cegah scroll saat menu aktif
  };

  return (
    <header>
      <nav className="custom-navbar">
        <div className="nav-container">
          <Link className="brand" to="/home">
            DUMIE
          </Link>

          {/* Toggle Button */}
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>

          {/* Dropdown Menu */}
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <Link className="nav-link" to="/home" onClick={toggleMenu}>
              Home
            </Link>
            <Link className="nav-link" to="/silsilah" onClick={toggleMenu}>
              Silsilah
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
