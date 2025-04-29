import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`project-image ${isLoading ? "loading" : ""} ${
        hasError ? "error" : ""
      }`}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

const makeDancingText = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="dancing-char">
      {char}
    </span>
  ));
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            {makeDancingText("My ")}
            <span className="gradient-text">{makeDancingText("Projects")}</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </div>

        <div className="projects-grid">
          {/* YouTube Clone Project */}
          <div className="project-card">
            <div className="project-image-container">
              <div className="project-image-overlay" />
              <ProjectImage
                src="/images/youtube_clone.jpg"
                alt="YouTube Clone Preview"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">YouTube Clone</h3>
              <p className="project-description">
                A modern YouTube clone featuring video playback, search
                functionality, and responsive design. Built with React and
                styled-components.
              </p>
              <div className="project-tags">
                <span className="project-tag blue">React</span>
                <span className="project-tag purple">Styled Components</span>
                <span className="project-tag orange">YouTube API</span>
                <span className="project-tag blue">React Router</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/anshtomarrr/youtubeclone.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
                <a
                  href="https://youtubeclone-eight-sigma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Figma Project */}
          <div className="project-card purple">
            <div className="project-image-container">
              <div className="project-image-overlay" />
              <ProjectImage
                src="/images/capstone.png"
                alt="Figma Project Preview"
              />
            </div>
            <div className="project-content">
              <div className="project-glow purple"></div>
              <div className="relative">
                <h3 className="project-title">Figma Design Implementation</h3>
                <p className="project-description">
                  A responsive website built from a Figma design, showcasing my
                  ability to convert designs into functional web applications.
                  Features include modern UI components and smooth animations.
                </p>
                <div className="project-tags">
                  <span className="project-tag purple">HTML</span>
                  <span className="project-tag purple">CSS</span>
                  <span className="project-tag purple">JavaScript</span>
                  <span className="project-tag purple">Figma</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/anshtomarrr/capstone_nst.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link purple"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                  <a
                    href="https://capstone-nst-liart.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link purple"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Project */}
          <div className="project-card">
            <div className="project-image-container">
              <div className="project-image-overlay" />
              <ProjectImage
                src="/images/Restaurant_site.png"
                alt="Restaurant Website Preview"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">Restaurant Website</h3>
              <p className="project-description">
                A modern restaurant website with menu management, online
                ordering, and reservation system. Built with React and Firebase.
              </p>
              <div className="project-tags">
                <span className="project-tag blue">React</span>
                <span className="project-tag blue">Firebase</span>
                <span className="project-tag purple">Tailwind CSS</span>
                <span className="project-tag orange">Stripe</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/anshtomarrr/Restaurant_burger_site.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
                <a
                  href="https://restaurant-burger-site.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tic Tac Toe Project */}
          <div className="project-card">
            <div className="project-image-container">
              <div className="project-image-overlay" />
              <ProjectImage
                src="/images/tic-tac-toe.png"
                alt="Tic Tac Toe Game Preview"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">Tic Tac Toe Game</h3>
              <p className="project-description">
                A fun and interactive Tic Tac Toe game with multiplayer support,
                built using React and Socket.io for real-time gameplay.
              </p>
              <div className="project-tags">
                <span className="project-tag blue">React</span>
                <span className="project-tag blue">Socket.io</span>
                <span className="project-tag purple">CSS</span>
                <span className="project-tag orange">Game Logic</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/anshtomarrr/Tic_tac-toe.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
                <a
                  href="https://tic-tac-toe-uukz.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/anshtomarrr"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more"
          >
            <Github size={18} style={{ marginRight: "8px" }} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
