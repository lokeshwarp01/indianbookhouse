import React from 'react';
import "./ActionBar.css";

const ActionBar = () => {
  return (
    <div className="content">
        <button className="content-button">HOME</button>
        <button className="content-button">ABOUT US</button>
        <button className="content-button">CONTACT US</button>
        <button className="content-button">OUR BLOG</button>
        <button className="content-button">TRACK YOUR ORDER</button>
        <button className="content-button">FAQ's</button>
      </div>
  );
};

export default ActionBar;