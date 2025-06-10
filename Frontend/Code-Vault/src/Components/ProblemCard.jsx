import React from "react";
import "./Styles/ProblemCard.css";

const ProblemCard = ({ index, title, difficulty, date }) => {
  return (
    <div className="problem-card">
      <div className="problem-info">
        <span className="index">{index}.</span>
        <span className="title">{title}</span>
        <span className="difficulty">{difficulty}</span>
        <span className="date">{date}</span>
      </div>
      <hr />
    </div>
  );
};

export default ProblemCard;