import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onSelectCategory(category)} // Handle click events
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
