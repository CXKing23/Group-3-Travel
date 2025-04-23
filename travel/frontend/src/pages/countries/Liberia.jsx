import React from "react";
import "../../styles/styles.css";

const LiberiaPage = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Liberia</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="liberia.png" alt="Liberia" />
        <p>
          Liberia, located on the West African coast, is a vibrant country known
          for its rich cultural heritage, beautiful beaches, lush rainforests,
          and warm hospitality. From Monrovia’s bustling streets to the serene
          coastline of Robertsport, Liberia offers a unique and authentic travel
          experience.
        </p>

        <p>
          At Travel Adventure, we want to introduce you to the charm and
          resilience of Liberia—from hiking through Sapo National Park to
          exploring historical sites like Providence Island and Harper's colonial
          architecture. Whether you're an eco-traveler or a cultural explorer,
          Liberia promises unforgettable memories.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language is English, but over 20 indigenous languages are
            also spoken across the country.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Sapo National Park</strong> – Liberia’s largest protected
            area, home to endangered species and dense rainforest.
          </p>
          <p>
            <strong>2. Robertsport</strong> – A laid-back beach town known for
            surfing, fishing, and stunning Atlantic views.
          </p>
          <p>
            <strong>3. Providence Island</strong> – Historical landmark marking the
            arrival of freed African Americans in Liberia.
          </p>
          <p>
            <strong>4. Kpatawee Waterfalls</strong> – A scenic natural retreat near
            Gbarnga, perfect for picnics and hiking.
          </p>
          <p>
            <strong>5. Harper</strong> – Southern coastal city with colonial-era
            architecture and ocean views.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid for at least six
            months beyond the date of entry.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> At least two pages required.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Yes, for most nationalities.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> Yellow fever vaccination required.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Declare amounts over
            $10,000 USD.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Declare amounts over
            $10,000 USD.
          </p>
        </div>
      </section>

      <footer>
      </footer>
    </div>
  );
};

export default LiberiaPage;
