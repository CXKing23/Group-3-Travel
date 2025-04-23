import React from "react";
import "../../styles/styles.css";

const TogoPage = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Togo</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="togo.png" alt="Togo" />
        <p>
          Togo, a narrow strip of land on West Africa’s coast, is a hidden gem filled with vibrant culture, lush landscapes, and coastal charm. With its mix of French colonial heritage, traditional villages, and welcoming communities, Togo offers a unique and authentic travel experience.
        </p>

        <p>
          At Travel Adventure, we invite you to discover the heart of Togo—from the lively capital city of Lomé to the rolling hills of Kpalimé and the traditional ceremonies of the north. Whether you’re a nature lover or cultural explorer, Togo is full of surprises waiting to be uncovered.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language is French, with local languages like Ewe and Kabiyé widely spoken.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Lomé</strong> – The capital city with lively markets, beaches, and cultural sites.
          </p>
          <p>
            <strong>2. Koutammakou</strong> – A UNESCO World Heritage site with traditional mud tower-houses.
          </p>
          <p>
            <strong>3. Kpalimé</strong> – Known for its scenic beauty, waterfalls, and crafts.
          </p>
          <p>
            <strong>4. Fazao-Malfakassa National Park</strong> – A protected area rich in biodiversity.
          </p>
          <p>
            <strong>5. Togoville</strong> – A historical village on Lake Togo tied to Vodun traditions.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months from entry date.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> One or more pages required.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Yes, for most nationalities.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> Yellow fever vaccination is required.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Declare if carrying more than the equivalent of $5,000 USD.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Same as entry requirements.
          </p>
        </div>
      </section>

      <footer>
      </footer>
    </div>
  );
};

export default TogoPage;
