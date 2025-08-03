import React from 'react';
import "./Header.css";
import logo from '../assets/Layer_x0020_1.png';
import cart from '../assets/Vector.png';
import CategoryDropdown from './CategoryDropdown';

const Header = () => {
  return (
    <>
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="filter-search">
        <CategoryDropdown />
        <input type="text" id="search" placeholder="Search for books" />
        <button id="search-button">Search &#x1F50D;</button>
      </div>
      <div className="user-actions">
        <button id="Login">Login</button>
        <button id="Signup">Signup</button>
        <img id="cart" src={cart} alt="cart" />
      </div>
    </div>
    </>
  );
};

export default Header;