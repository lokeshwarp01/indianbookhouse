import React, { useState } from "react";

const CollapsibleMenu = ({ title, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`menu-section ${isOpen ? "open" : ""}`}>
      <div className="menu-header" onClick={toggleMenu}>
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && items.length > 0 && (
        <ul className="submenu">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollapsibleMenu;
