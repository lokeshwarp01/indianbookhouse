import React, { useState } from "react";
import "./CollapseSideBar.css";

// Collapsible Menu Component
const CollapsibleMenu = ({ title, items = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`menu-section ${isOpen ? "open" : ""}`}>
            <div className="menu-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <span>{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && items.length > 0 && (
                <ul className="submenu">
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// Sidebar Component
const Sidebar = ({ categories = [] }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-title">All Categories</div>
            {categories.map((cat, index) => (
                <CollapsibleMenu key={index} title={cat.title} items={cat.items} />
            ))}
        </div>
    );
};

export default Sidebar;
