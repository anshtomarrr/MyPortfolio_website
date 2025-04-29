import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          Ansh Tomar
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a
            href="/Ansh_Tomar_CV.pdf"
            download
            className="nav-link download-cv"
          >
            <Download size={18} style={{ marginRight: "8px" }} />
            Download CV
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Ansh_Tomar_CV.pdf"
              download
              className="nav-mobile-link download-cv"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={18} style={{ marginRight: "8px" }} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
