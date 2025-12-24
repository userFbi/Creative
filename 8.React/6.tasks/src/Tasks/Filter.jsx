import React, { useState } from "react";

const itemsData = [
  { id: 1, name: "Rose", category: "flower" },
  { id: 2, name: "Lotus", category: "flower" },
  { id: 3, name: "BMW", category: "car" },
  { id: 4, name: "Audi", category: "car" },
  { id: 5, name: "Yamaha", category: "bike" },
  { id: 6, name: "KTM", category: "bike" },
];

const FilterButtons = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? itemsData
      : itemsData.filter(
        (item) => item.category === activeCategory
      );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Category Filter</h2>

      {/* FILTER BUTTONS */}
      <div style={{ marginBottom: "20px" }}>
        <button className="btn" onClick={() => setActiveCategory("all")}>All</button>
        <button className="btn" onClick={() => setActiveCategory("flower")}>Flowers</button>
        <button className="btn" onClick={() => setActiveCategory("car")}>Cars</button>
        <button className="btn" onClick={() => setActiveCategory("bike")}>Bikes</button>
      </div>

      {/* FILTERED LIST */}
      <ul className="list">
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterButtons;
