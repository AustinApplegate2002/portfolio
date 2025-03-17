// Timeline.tsx
import React from "react";
import "../styles/styles.css";

const Timeline = ({ index, setIndex }: { index: number; setIndex: React.Dispatch<React.SetStateAction<number>> }) => {
  const years = ["Freshman Year", "Sophomore Year", "Junior Year", "Senior Year"];

  const nextYear = () => {
    setIndex((prevIndex) => (prevIndex + 1) % years.length);
  };

  const prevYear = () => {
    setIndex((prevIndex) => (prevIndex - 1 + years.length) % years.length);
  };

  return (
    
      <div className="timeline-container">
        <div className="timeline-title-container">
          <div className="timeline-controls">
            <button onClick={prevYear}>&larr;</button>
            <h2
              className={`timeline-title ${
                index === 0 ? "left" : index === years.length - 1 ? "right" : ""
              }`}
            >
              {years[index]}
            </h2>
            <button onClick={nextYear}>&rarr;</button>
          </div>
        </div>

        <div className="timeline-bar">
          <div className="tick-container">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="tick" />
            ))}
          </div>
        </div>

        <div className="timeline-wrapper">
          <div
            className="timeline"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {years.map((year, i) => (
              <div key={i} className="timeline-section">
                <div className="tick-marks" />
              </div>
            ))}
          </div>
        </div>
      </div>
   
  );
};

export default Timeline;
