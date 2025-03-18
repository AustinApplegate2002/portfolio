import React, { useState, useEffect } from "react";
import "../styles/specialties.css";

const Specialties = () => {
    const [ismediumScreen, setIsmediumScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsmediumScreen(window.innerWidth < 2500);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Check the initial window size

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [issmallerScreen, setIssmallerScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIssmallerScreen(window.innerWidth < 2500);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Check the initial window size

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [issmallScreen, setIssmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIssmallScreen(window.innerWidth < 2500);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Check the initial window size

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div className="specialties-container">
            <section className="Skills">
                <h3 className="skills-title" style={{ color: issmallerScreen ? "black" : "white" }}>Skills</h3>
                <div className="skills-container">
                    <div className="skill-item">Adaptive UI/UX design</div>
                    <div className="skill-item" style={{ color: issmallerScreen ? "black" : "white" }}>
                        Adobe Illustrator, 1 year
                    </div>
                    <div className="skill-item">Agile, 2 years</div>
                    <div className="skill-item">Analysis skills, 3 years</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>Analytics</div>
                    <div className="skill-item">Android development, 1 year</div>
                    <div className="skill-item">APIs, 3 years</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>
                        Application development, 2 years
                    </div>
                    <div className="skill-item">AWS</div>
                    <div className="skill-item">Big data</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>Bootstrap, 1 year</div>
                    <div className="skill-item">C#, 2 years</div>
                    <div className="skill-item">Communication skills</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>Computer Science, 5 years</div>
                    <div className="skill-item">Conflict management, 5 years</div>
                    <div className="skill-item">CSS, 4 years</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>Data modeling</div>
                    <div className="skill-item">Data structures</div>
                    <div className="skill-item">Database design</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>Databases, 2 years</div>
                    <div className="skill-item">Debugging</div>
                    <div className="skill-item">DevOps</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>Docker</div>
                    <div className="skill-item">Figma, 2 years</div>
                    <div className="skill-item">Front-end component design</div>
                    <div className="skill-item" style={{ color: ismediumScreen ? "black" : "white" }}>Front-end development, 2 years</div>
                    <div className="skill-item">Git, 5 years</div>
                    <div className="skill-item">Help desk</div>
                    <div className="skill-item" style={{ color: ismediumScreen ? "black" : "white" }}>HTML, 4 years</div>
                    <div className="skill-item">iOS, 1 year</div>
                    <div className="skill-item">iOS application development, 1 year</div>
                    <div className="skill-item">IT, 5 years</div>
                    <div className="skill-item">JavaScript, 2 years</div>
                    <div className="skill-item">Leadership, 6 years</div>
                    <div className="skill-item">Mac OS, 2 years</div>
                    <div className="skill-item">MacOS Server, 2 years</div>
                    <div className="skill-item">Microsoft Office, 3 years</div>
                    <div className="skill-item">Mobile applications, 1 year</div>
                    <div className="skill-item">MySQL</div>
                    <div className="skill-item">Node.js</div>
                    <div className="skill-item">Phone etiquette</div>
                    <div className="skill-item" style={{ color: ismediumScreen ? "black" : "white" }}>PostgreSQL</div>
                    <div className="skill-item">Python, 2 years</div>
                    <div className="skill-item">React, 2 years</div>
                    <div className="skill-item"style={{ color: ismediumScreen ? "black" : "white" }}>Responsive web design, 3 years</div>
                    <div className="skill-item">REST</div>
                    <div className="skill-item">SDKs</div>
                    <div className="skill-item" style={{ color: ismediumScreen ? "black" : "white" }}>Software deployment</div>
                    <div className="skill-item">Software development, 2 years</div>
                    <div className="skill-item">SQL, 1 year</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>Swift, 1 year</div>
                    <div className="skill-item">Teaching web design, 1 year</div>
                    <div className="skill-item">Time management</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>TypeScript, 2 years</div>
                    <div className="skill-item">Typing</div>
                    <div className="skill-item">UI/UX design, 3 years</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>UX, 2 years</div>
                    <div className="skill-item">Web accessibility, 1 year</div>
                    <div className="skill-item">Web design</div>
                    <div className="skill-item" style={{ color: issmallScreen ? "black" : "white" }}>Web development, 3 years</div>
                    <div className="skill-item">Windows</div>
                    <div className="skill-item">Wireframing</div>
                </div>
            </section>
        </div>
    );
};

export default Specialties;
