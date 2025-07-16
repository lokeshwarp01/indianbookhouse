import React from "react";
import categories from "../assets/DATA.js";
import "./CategoryDropdown.css";
const CategoryDropdown = () => {
    return (
        <div >
            <select id="category-dropdown" >
                <option value="" disabled selected>Select a category</option>
                {categories.map((category, i) => (
                    <optgroup key={i} label={category.title}>
                        {category.items.map((item, j) => (
                            <option key={j} value={item}>{item}</option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div >
    );
};

export default CategoryDropdown;
