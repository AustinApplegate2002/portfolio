import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Headshot from "../assets/Headshot.jpg";
import Timeline from "../components/timeline";
import Projects from "../components/projects";
import Specialties from "../components/specialties";

const Portfolio: React.FC = () => {
  const [index, setIndex] = useState(0); // Lifted state
  const [isHovered, setIsHovered] = useState(false); // State to manage hover
  const [isMobile, setIsMobile] = useState(false); // State to track mobile screen width

  // Hook to detect window width changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 2001); // Set breakpoint at 768px (adjust as needed)
    };

    handleResize(); // Check the width on initial load
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
    };
  }, []);

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
          <a href="https://www.instagram.com/austin_applegate_music?igsh=MXF4ZmI1YmRkOGw1aQ%3D%3D&utm_source=qr" className="icon-link">
            <i className="fab fa-instagram" title="Instagram"></i>
          </a>
          <a href="https://www.facebook.com/austin.applegate.96?mibextid=wwXIfr&rdid=QoAUM8lWK5bxllh7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15vxUHhkMv%2F%3Fmibextid%3DwwXIfr#" className="icon-link">
            <i className="fab fa-facebook" title="Facebook"></i>
          </a>
          <a href="https://github.com/AustinApplegate2002" className="icon-link">
            <i className="fab fa-github" title="GitHub"></i>
          </a>
        </div>
      </header>

      {/* Conditionally render components based on screen width */}
      {!isMobile ? (
        <>
          <Timeline index={index} setIndex={setIndex} />{" "}
          {/* Pass the state and setter to Timeline */}
          <Projects index={index} /> {/* Pass the state to Projects */}
        </>
      ) : (
        <>
          <Projects index={index} /> {/* Pass the state to Projects */}
          <Timeline index={index} setIndex={setIndex} />{" "}
          {/* Pass the state and setter to Timeline */}
        </>
      )}

      <Specialties />
    </div>
  );
};

export default Portfolio;
