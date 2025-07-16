import React from 'react';
import "./PopularCat.css";

const Header = () => {
  return (
    <div className="popular-category">
      <div className="popular-category-item1">
        <h3 className="title">EXAM WISE BOOKS</h3>
      </div>
      <div className="popular-category-item2">
        <h3 className="title">PUBLICATION WISE BOOKS</h3>
      </div>
      <div className="popular-category-item3">
        <h3 className="title">SUBJECT WISE BOOKS(TM)</h3>
      </div>
      <div className="popular-category-item4">
        <h3 className="title">SUBJECT WISE BOOKS(EM)</h3>
      </div>
    </div >
  );
};

export default Header;