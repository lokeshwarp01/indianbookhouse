import React from 'react';
import "./Banner.css";
import banner from '../assets/image.png';

const Banner = () => {
  return (
    <div className="banner">
        <img id="banner-image" src={banner} alt=" banner" />
        <div className="banner-content">
          <h1>
            Indian Book House Best Choice for Competitative Exams
          </h1>
          <h5 id="offer">Get Flat 25% Discount on Your First Order</h5>
          <button id="shop-now">Shop Now</button>
        </div>
      </div>
  );
};

export default Banner;