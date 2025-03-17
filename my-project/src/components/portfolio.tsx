// Portfolio.tsx
import React, { useState } from "react";
import "../styles/styles.css";
import Headshot from "../assets/Headshot.jpg";
import Timeline from "../components/timeline";
import Projects from "../components/projects";
import Specialties from "../components/specialties";

const Portfolio: React.FC = () => {
  const [index, setIndex] = useState(0); // Lifted state
  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  return (
    <div className="container">
      <header className="header">
        <div className="title">
          <h1>Web Developer Portfolio</h1>
        </div>
        <div className="profile-container">
          <img
            src={Headshot}
            alt="Profile"
            className={`profile-pic ${isHovered ? "hover-active" : ""}`} // Conditionally apply class
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
          />
        </div>
        <div className="personal_title">
          <h1>Austin Applegate</h1>
          <p>Web Developer | Software Developer | AI Trainer</p>
          <a href="https://www.instagram.com" className="icon-link">
            <i className="fab fa-instagram" title="Instagram"></i>
          </a>
          <a href="https://www.facebook.com" className="icon-link">
            <i className="fab fa-facebook" title="Facebook"></i>
          </a>
          <a href="https://www.github.com" className="icon-link">
            <i className="fab fa-github" title="GitHub"></i>
          </a>
        </div>
      </header>
      
      <Timeline index={index} setIndex={setIndex} />{" "}
      {/* Pass the state and setter to Timeline */}
      <Projects index={index} /> {/* Pass the state to Projects */}
      <Specialties /> {/* No props needed */}
    </div>
  );
};

export default Portfolio;
