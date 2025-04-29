import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Send,
  ArrowRight,
} from "lucide-react";

const makeDancingText = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="dancing-char">
      {char}
    </span>
  ));
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isHovered, setIsHovered] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            {makeDancingText("Let's ")}
            <span className="gradient-text">{makeDancingText("Connect")}</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities?
            <br />
            I'm always excited to hear about new ideas and collaborations.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="What's your name?"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your email address"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input form-textarea"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              {submitMessage && (
                <div className="submit-message">{submitMessage}</div>
              )}

              <button
                type="submit"
                className="submit-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>Send Message</span>
                {isHovered ? <ArrowRight size={18} /> : <Send size={18} />}
              </button>
            </form>
          </div>

          <div className="contact-card info-card">
            <div className="contact-info-section">
              <div className="contact-info-content">
                <div className="icon-wrapper">
                  <Mail size={24} />
                </div>
                <a href="mailto:anshtomarrr@gmail.com" className="contact-link">
                  anshtomarrr@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-section">
              <div className="contact-info-content">
                <div className="icon-wrapper">
                  <MapPin size={24} />
                </div>
                <span className="based-in-india">Based in India</span>
              </div>
            </div>

            <div className="contact-info-section">
              <h3 className="social-title">
                <span>L</span>
                <span>e</span>
                <span>t</span>
                <span>'</span>
                <span>s</span>
                <span> </span>
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>n</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
              </h3>
              <div className="social-links-container">
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
                <a
                  href="https://leetcode.com/u/anshtomar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LeetCode Profile"
                >
                  <Code2 size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
