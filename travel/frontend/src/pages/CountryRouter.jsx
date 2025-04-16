// CountryRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { CountriesList } from "./Countries";
import NorwayPage from "./countries/Norway.jsx";
import PakistanPage from "./countries/Pakistan.jsx";
import SaintKittsAndNevisPage from "./countries/SaintKittsAndNevis.jsx";
import SaintLuciaPage from "./countries/SaintLucia.jsx";
import SaintVincentPage from "./countries/SaintVincent.jsx";
import SanMarinoPage from "./countries/SanMarino.jsx";
import SaoTomePage from "./countries/SaoTome.jsx";
import SaudiArabiaPage from "./countries/SaudiArabia.jsx";
import SenegalPage from "./countries/Senegal.jsx";
import SerbiaPage from "./countries/Serbia.jsx";
import SeychellesPage from "./countries/Seychelles.jsx";
import SierraLeonePage from "./countries/SierraLeone.jsx";


const countryComponents = {
  norway: NorwayPage,
  pakistan: PakistanPage,
  "saint-kitts-and-nevis": SaintKittsAndNevisPage,
  "saint-lucia": SaintLuciaPage,
  "saint-vincent": SaintVincentPage,
  "san-marino": SanMarinoPage,
  "sao-tome": SaoTomePage,
  "saudi-arabia": SaudiArabiaPage,
  senegal: SenegalPage,
  serbia: SerbiaPage,
  seychelles: SeychellesPage,
  "sierra-leone": SierraLeonePage,
};
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
      {CountriesList.map((country, index) => {
        const PageComponent = countryComponents[country.link] || (() => <CountryPage name={country.name} />);
        return (
          <Route
            key={index}
            path={`/country/${country.link}`}
            element={<PageComponent />}
          />
        );
      })}
    </Routes>
  );
};

export default CountryRouter;