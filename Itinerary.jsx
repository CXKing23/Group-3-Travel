import React, { useState } from "react";
import "./styles.css";

const TravelBudgetEstimator = () => {
  const [accommodation, setAccommodation] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [meals, setMeals] = useState(0);
  const [miscellaneous, setMiscellaneous] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateTotal = () => {
    const total =
      parseFloat(accommodation) +
      parseFloat(transportation) +
      parseFloat(meals) +
      parseFloat(miscellaneous);
    setTotalCost(total.toFixed(2));
  };

  return (
    <div className="budget-estimator">
      <header>
        <a href="/">Travel Adventure</a>
      </header>

      <form id="budget-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="accommodation">Accommodation:</label>
        <input
          type="number"
          id="accommodation"
          value={accommodation}
          onChange={(e) => setAccommodation(e.target.value)}
          placeholder="Enter cost"
          required
        />

        <label htmlFor="transportation">Transportation:</label>
        <input
          type="number"
          id="transportation"
          value={transportation}
          onChange={(e) => setTransportation(e.target.value)}
          placeholder="Enter cost"
          required
        />

        <label htmlFor="meals">Meals:</label>
        <input
          type="number"
          id="meals"
          value={meals}
          onChange={(e) => setMeals(e.target.value)}
          placeholder="Enter cost"
          required
        />

        <label htmlFor="miscellaneous">Miscellaneous:</label>
        <input
          type="number"
          id="miscellaneous"
          value={miscellaneous}
          onChange={(e) => setMiscellaneous(e.target.value)}
          placeholder="Enter cost"
          required
        />

        <button type="button" onClick={calculateTotal}>
          Calculate Total
        </button>

        <h2>Total Estimated Cost: ${totalCost}</h2>
      </form>

      <footer>
      </footer>
    </div>
  );
};

export default TravelBudgetEstimator;
