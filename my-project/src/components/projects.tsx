import React, { useEffect, useState } from "react";
import "../styles/styles.css";
// import Headshot from "../assets/Headshot.jpg";
import professional from "../assets/professional.jpeg";

import platonicShapes from "../assets/platonic_shapes.jpg";
import volume from "../assets/volume.jpg";
import dice from "../assets/dice.jpg";
import God from "../assets/God.jpg";
// import background5 from "../assets/background5.jpg";

const backgroundImages = [
    platonicShapes,
    volume,
    dice,
    God
];

const Projects = ({ index }: { index: number }) => {
  const [titlePart, setTitlePart] = useState({
    firstPart: "Ab",
    secondPart: "out Me",
    
  });
  
  const projects = [
    [
      {
        title: "Terminal Volume Calculator",
        description: "A terminal based calculator for volume calculations.",
        technologies: ["python"],
        link: "https://github.com/FHU/volume-calculator-Foxyminer2",
      },
      {
        title: "Terminal Platonic Solid Calculator",
        description: "A terminal based calculator for platonic solid calculations.",
        technologies: ["python"],
        link: "https://github.com/FHU/platonic-solid-calculator-Foxyminer2",
      },
      {
        title: "Terminal Dice Histogram",
        description:
          "A terminal based dice histogram generator for dice rolls.",
        technologies: ["Python"],
        link: "https://github.com/FHU/dice-histogram-Foxyminer2",
      },
      
    ],
    [
      {
        title: "Glimpses of God",
        description:
          "A basic website with a nav bar, and background image.",
        technologies: ["CSS","JavaScript"],
        link: "https://github.com/AustinApplegate2002/CIS311-FA22-glimpsesOfGod",
      },
      {
        title: "Pandas Data Summary Dashboard",
        description: "A data summary dashboard using pandas",
        technologies: ["pandas", "Python"],
        link: "https://github.com/AustinApplegate2002/cis277-fa22-Lab2",
      },
      {
        title: "Pandas Data Visualization",
        description: "A data visualization of NFL data using pandas",
        technologies: ["pandas", "Python"],
        link: "https://github.com/AustinApplegate2002/CIS277-FA22-Lab6",
      },
      {
        title: "Remaking Yale's Homepage",
        description: "A remake of Yale's homepage using HTML and CSS",
        technologies: ["CSS"],
        link: "https://github.com/AustinApplegate2002/Kale.edu",
      },
    ],
    [
      {
        title: "Faculty Pokemon Deck",
        description: "A faculty pokemon deck using HTML and CSS",
        technologies: ["Javascript", "CSS", "Node.js", "tailwindcss"],
        link: "https://github.com/AustinApplegate2002/CIS367-FA23-Lab5",
      },
      {
        title: "Pandoras Boxx Website",
        description: "A website full of mischeif and fun",
        technologies: ["javascript", "CSS"],
        link: "https://github.com/WeslBaker/pandoras-box/tree/austins-branch",
      },
      {
        title: "Priorities",
        description:
          "A remake of the game Priorities",
        technologies: ["C#"],
        link: "https://github.com/FHU/Priorities",
      },
      
    ],
    [
      {
        title: "Kindness Website Collaboration",
        description:
          "A corporate collaberation website that connects people",
        technologies: ["Node.js", "typescript", "CSS", "Javascript", "Docker"],
         link: "Visit the project to learn more about this impactful collaboration."
      },
      
    ],
  ];

  useEffect(() => {
    const handleResize = () => {
      // Adjust title based on window width
      if (window.innerWidth < 2000) {
        setTitlePart({
          firstPart: "",
          secondPart: "About Me",
        });
      } else if (window.innerWidth < 2170){
        setTitlePart({
          firstPart: "About",
          secondPart: " Me",
        });
      } else if (window.innerWidth < 2190) {
        setTitlePart({
          firstPart: "Abou",
          secondPart: "t Me",
        });
      } else if (window.innerWidth < 2500){
        setTitlePart({
          firstPart: "Abo",
          secondPart: "ut Me",
        });
      }
      else {
        setTitlePart({
          firstPart: "Ab",
          secondPart: "out Me",
        });
      }
    };

    // Set initial title based on window size
    handleResize();
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const title = document.getElementById("about-me-title");
      if (title) {
        const titleRect = title.getBoundingClientRect();
        if (titleRect.top <= window.innerHeight && titleRect.bottom >= 0) {
          title.style.color = "white"; // Change text color to white
        } else {
          title.style.color = "black"; // Revert to original color
        }
      }
    };

    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="experience">
      <section className="projects">
        <div className="about-me-container">
          <h2 id="about-me-title" className="about-me-title">
            <span className="first-part" style={{ color: "#f0efef" }}>{titlePart.firstPart}</span>
            <span className="second-part" style={{ color: "black" }}>{titlePart.secondPart}</span>
            
          </h2>
          <h2 className="hello-text">
            I am a passionate software developer currently studying Computer
            Science at Freed-Hardeman University, with hands-on experience in
            Python, C#, JavaScript, Agile development, and database management.
            With six years of experience in IT support, leadership, and project
            management, I have provided technical support to over 500 students
            and staff while developing web applications and collaborating on
            software projects. My role as a Youth Minister Intern has honed my
            communication and leadership skills, and I am also a country
            singer-songwriter and Overwatch collegiate esports athlete. I am
            eager to combine my technical expertise and creative mindset to
            innovate and deliver impactful software solutions.
          </h2>
          <img src={professional} alt="Profile" className="about-me-pic" />
        </div>
      </section>
      <section className="projects">
        
        <h2 className="projects-title">Projects</h2>
        <div className="project-list">
          {projects[index].map((project, i) => (
            <div key={i} 
            className="project-card"
            style={{
                backgroundImage: `url(${backgroundImages[i % backgroundImages.length]})`, // Dynamically set the background for each project card
                backgroundSize: "cover", // Adjust background size for better fit
                backgroundPosition: "center", // Ensure background is centered
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Lighten the background with a semi-transparent white overlay
                backgroundBlendMode: "lighten", // Apply lighten effect to blend the image with the background color
              
              }}>
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies used:</strong>{" "}
                {project.technologies.join(", ")}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Github Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
