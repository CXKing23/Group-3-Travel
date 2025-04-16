import React, { useState } from "react";

import "./styles.css";
import styles  from "../styles/PackingChecker.css"


const initialChecklist = [
  { id: "passport", label: "Passport", checked: false },
  { id: "tickets", label: "Travel Tickets", checked: false },
  { id: "id-card", label: "ID Card/Driver's License", checked: false },
  { id: "money", label: "Cash/Credit Cards", checked: false },
  { id: "clothes", label: "Clothes", checked: false },
  { id: "shoes", label: "Shoes", checked: false },
  { id: "toiletries", label: "Toiletries", checked: false },
  { id: "electronics", label: "Electronics (Phone, Charger, etc.)", checked: false },
  { id: "medications", label: "Medications", checked: false },
  { id: "sunglasses", label: "Sunglasses", checked: false },
  { id: "travel-guide", label: "Travel Guide/Map", checked: false },
  { id: "snacks", label: "Snacks", checked: false },
];

const PackingChecklist = () => {
  const [checklist, setChecklist] = useState(initialChecklist);

  const toggleItem = (id) => {
    setChecklist((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const resetChecklist = () => {
    setChecklist((prevList) =>
      prevList.map((item) => ({ ...item, checked: false }))
    );
  };

  return (
    <div className="checklist-container">
      <header>
        <a href="/">Travel Adventure</a>
      </header>

      <h2>Packing Checklist</h2>

      {checklist.map((item) => (
        <div className="checklist-item" key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            checked={item.checked}
            onChange={() => toggleItem(item.id)}
          ></input>
          <label htmlFor={item.id}>{item.label}</label>
        </div>
      ))}

      <button className="btn" onClick={resetChecklist}>
        Reset Checklist
      </button>
    </div>
  );
};

export default PackingChecklist;
