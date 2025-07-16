import React from 'react';
import "./Heading_Button.css";

const Heading_Button = ({ headingText = "Default Heading", buttonText = "View All"}) => {
  return (
    <div className="popular-category-buttons">
        <h2 className="popular-category-button1">{headingText}</h2>
        <button className="popular-category-button2">
          {buttonText}
        </button>
    </div>
  );
};

export default Heading_Button;
