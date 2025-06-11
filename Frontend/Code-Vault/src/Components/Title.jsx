import React from "react";
import "./Styles/Title.css";

function Title({ onSearch }) {
  return (
    <div className="title-container">
      <h1 className="title-heading"># Title</h1>

      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>

      <h2 className="label difficulty">Difficulty</h2>
      <h2 className="label date">Date</h2>
    </div>
  );
}

export default Title;
