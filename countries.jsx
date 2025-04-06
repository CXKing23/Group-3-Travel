// Countries.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export const CountriesList = [
  { name: "Afghanistan", link: "afghanistan" },
  { name: "Albania", link: "albania" },
  { name: "Norway", link: "norway" },
  { name: "Saint Kitts and Nevis", link: "saint-kitts-and-nevis" },
  { name: "Saint Lucia", link: "saint-lucia" },
  { name: "Saint Vincent and the Grenadines", link: "saint-vincent" },
  { name: "Samoa", link: "samoa" },
  { name: "San Marino", link: "san-marino" },
  { name: "Sao Tome and Principe", link: "sao-tome" },
  { name: "Saudi Arabia", link: "saudi-arabia" },
  { name: "Senegal", link: "senegal" },
  { name: "Serbia", link: "serbia" },
  { name: "Seychelles", link: "seychelles" },
  { name: "Sierra Leone", link: "sierra-leone" },
  { name: "Singapore", link: "singapore" },
  { name: "Slovakia", link: "slovakia" },
  { name: "Slovenia", link: "slovenia" },
  { name: "Solomon Islands", link: "solomon-islands" },
  { name: "Somalia", link: "somalia" },
  { name: "South Africa", link: "south-africa" },
  { name: "South Sudan", link: "south-sudan" },
  { name: "Spain", link: "spain" },
  { name: "Sri Lanka", link: "sri-lanka" },
  { name: "Sudan", link: "sudan" },
  { name: "Suriname", link: "suriname" },
  { name: "Sweden", link: "sweden" },
  { name: "Switzerland", link: "switzerland" },
  { name: "Syria", link: "syria" },
  { name: "Taiwan", link: "taiwan" },
  { name: "Tajikistan", link: "tajikistan" },
  { name: "Tanzania", link: "tanzania" },
  { name: "Thailand", link: "thailand" },
  { name: "Togo", link: "togo" },
  { name: "Tonga", link: "tonga" },
  { name: "Trinidad and Tobago", link: "trinidad" },
  { name: "Tunisia", link: "tunisia" },
  { name: "Turkey", link: "turkey" },
  { name: "Turkmenistan", link: "turkmenistan" },
  { name: "Tuvalu", link: "tuvalu" },
  { name: "Uganda", link: "uganda" },
  { name: "Ukraine", link: "ukraine" },
  { name: "United Arab Emirates", link: "uae" },
  { name: "United Kingdom", link: "united_kingdom" },
  { name: "United States", link: "u-s" },
  { name: "Uruguay", link: "uruguay" },
  { name: "Uzbekistan", link: "uzbekistan" },
  { name: "Vanuatu", link: "vanatu" },
  { name: "Vatican City (Holy See)", link: "vatican" },
  { name: "Venezuela", link: "venezuela" },
  { name: "Vietnam", link: "vietnam" },
  { name: "Yemen", link: "yemen" },
  { name: "Zambia", link: "zambia" },
  { name: "Zimbabwe", link: "zimbabwe" }
];

const countries = () => {
  return (
    <div>
      <header>
        <a href="index.html">Travel Adventure</a>
      </header>
      <h1>Countries</h1>
      <div className="countries-list">
        {CountriesList.map((country, index) => (
          <div key={index}>
<               Link to={`/country/${country.link}`}>{country.name}</Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default countries;
