import React from "react";
import { ArrowDown, Github, Linkedin, Code2, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="mesh-background" />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="gradient-text">
              <span className="dancing-name">Ansh</span> <span>Tomar</span>
            </span>
          </h1>

          <h2 className="hero-subtitle">Aspiring Software Developer</h2>

          <p className="hero-description">
            A passionate problem solver with expertise in algorithms and data
            structures. Currently pursuing my journey at Newton School of
            Technology.
          </p>

          <div className="achievement-badges">
            <a
              href="https://leetcode.com/u/anshtomar/"
              target="_blank"
              rel="noopener noreferrer"
              className="badge"
            >
              <Code2 size={20} />
              <span>250+ LeetCode</span>
            </a>
            <a
              href="https://codeforces.com/profile/anshtomar"
              target="_blank"
              rel="noopener noreferrer"
              className="badge"
            >
              <Trophy size={20} />
              <span>950+ Codeforces</span>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/anshtomarrr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ansh-tomar-03a493302/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <a
            href="#about"
            className="scroll-arrow"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
