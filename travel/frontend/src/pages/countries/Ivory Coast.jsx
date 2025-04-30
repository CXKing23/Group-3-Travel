import React from "react";
import "../../styles/styles.css";

const IvoryCoastPage = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Ivory Coast (Côte d'Ivoire)</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="ivorycoast.png" alt="Ivory Coast" />
        <p>
          Ivory Coast, or Côte d'Ivoire, is a vibrant West African country known for its rich culture, lively cities, and lush rainforests. From bustling urban life in Abidjan to the historic town of Grand-Bassam, this country offers an unforgettable blend of tradition and modern charm.
        </p>

        <p>
          At Travel Adventure, we encourage travelers to immerse themselves in the diverse experiences of Ivory Coast—explore colorful markets, relax on golden beaches, and witness traditional dances and festivals that celebrate Ivorian heritage.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language is French, with more than 60 local languages spoken across the country.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Abidjan</strong> – The economic capital filled with art, culture, and nightlife.
          </p>
          <p>
            <strong>2. Grand-Bassam</strong> – A UNESCO World Heritage site with colonial architecture and beaches.
          </p>
          <p>
            <strong>3. Taï National Park</strong> – A lush rainforest with rare wildlife like chimpanzees.
          </p>
          <p>
            <strong>4. Basilica of Our Lady of Peace in Yamoussoukro</strong> – One of the largest churches in the world.
          </p>
          <p>
            <strong>5. Man</strong> – A mountainous region with waterfalls and traditional villages.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond your stay.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> At least one page required for entry.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Yes, for most travelers. E-visas are available.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> Yellow fever vaccination is required for entry.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Must declare amounts over 1,000,000 CFA francs.
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

export default IvoryCoastPage;
