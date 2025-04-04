// CountryRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { CountriesList } from "./countries";

// Placeholder for each country page
const CountryPage = ({ name }) => (
  <div>
    <h1>Welcome to {name}!</h1>
    <p>This is the page for {name}.</p>
  </div>
);

const CountryRouter = () => {
    return (
      <Routes>
        {CountriesList.map((country, index) => (
          <Route
            key={index}
            path={`/country/${country.link}`}
            element={<CountryPage name={country.name} />}
          />
        ))}
      </Routes>
    );
  };

export default CountryRouter;
