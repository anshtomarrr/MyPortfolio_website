import React from "react";
import {
  CodeBracketIcon,
  ServerIcon,
  TrophyIcon,
  FolderIcon,
  CpuChipIcon,
  WrenchIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";

const makeDancingText = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="dancing-char">
      {char}
    </span>
  ));
};

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">{makeDancingText("About Me")}</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A passionate problem solver and aspiring software developer
            currently pursuing my journey at Newton School of Technology.
          </p>
          <p className="section-subtitle">
            With a strong foundation in algorithms and data structures, I've
            solved 250+ problems on LeetCode and achieved a 950+ rating on
            Codeforces. My competitive programming experience has honed my
            logical thinking and optimization skills.
          </p>
          <p className="section-subtitle">
            I'm passionate about renewable technology and believe in using my
            coding skills to contribute to sustainable solutions. I'm always
            eager to learn new technologies and frameworks to expand my skill
            set.
          </p>
          <p className="section-subtitle">
            When I'm not coding, you can find me exploring new problem-solving
            techniques or contributing to open-source projects.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="stats-grid">
          {/* LeetCode Problems */}
          <div className="glass-card">
            <div className="stat-card">
              <div className="stat-icon-wrapper pink-glow">
                <img
                  src="/images/leetcode-icon.png"
                  alt="LeetCode"
                  className="tech-icon"
                />
              </div>
              <div>
                <h3 className="stat-text">250+</h3>
                <p className="stat-label">LeetCode Problems</p>
              </div>
            </div>
          </div>

          {/* Codeforces Rating */}
          <div className="glass-card">
            <div className="stat-card">
              <div className="stat-icon-wrapper blue-glow">
                <img
                  src="/images/codeforces-icon.png"
                  alt="Codeforces"
                  className="tech-icon"
                />
              </div>
              <div>
                <h3 className="stat-text">950+</h3>
                <p className="stat-label">Codeforces Rating</p>
              </div>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="glass-card">
            <div className="stat-card">
              <div className="stat-icon-wrapper yellow-glow">
                <FolderIcon className="tech-icon" />
              </div>
              <div>
                <h3 className="stat-text">5+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="glass-card">
            <div className="stat-card">
              <div className="stat-icon-wrapper red-glow">
                <TrophyIcon className="tech-icon" />
              </div>
              <div>
                <h3 className="stat-text">1+</h3>
                <p className="stat-label">Year of Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-stack">
          <div className="tech-grid">
            {/* Frontend */}
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <CodeBracketIcon className="tech-icon" />
              </div>
              <h3 className="tech-category">Frontend</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <img
                    src="/images/html-icon.png"
                    alt="HTML"
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">HTML</span>
                </div>
                <div className="tech-item">
                  <img
                    src="/images/css-icon.png"
                    alt="CSS"
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">CSS</span>
                </div>
                <div className="tech-item">
                  <img
                    src="/images/javascript-icon.png"
                    alt="JavaScript"
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">JavaScript</span>
                </div>
                <div className="tech-item">
                  <CodeBracketSquareIcon className="tech-item-icon" />
                  <span className="tech-item-label">React</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <ServerIcon className="tech-icon" />
              </div>
              <h3 className="tech-category">Backend</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <img
                    src="/images/python-icon.png"
                    alt="Python"
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">Python</span>
                </div>
                <div className="tech-item">
                  <CpuChipIcon className="tech-item-icon" />
                  <span className="tech-item-label">Java</span>
                </div>
                <div className="tech-item">
                  <CodeBracketIcon className="tech-item-icon" />
                  <span className="tech-item-label">C++</span>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="tech-card">
              <div className="tech-icon-wrapper">
                <WrenchIcon className="tech-icon" />
              </div>
              <h3 className="tech-category">Tools</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <ComputerDesktopIcon className="tech-item-icon" />
                  <span className="tech-item-label">VSCode</span>
                </div>
                <div className="tech-item">
                  <img
                    src="/images/git-icon.png"
                    alt="Git"
                    className="tech-item-icon"
                  />
                  <span className="tech-item-label">Git</span>
                </div>
                <div className="tech-item">
                  <CodeBracketIcon className="tech-item-icon" />
                  <span className="tech-item-label">GitHub</span>
                </div>
                <div className="tech-item">
                  <CommandLineIcon className="tech-item-icon" />
                  <span className="tech-item-label">CLI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
