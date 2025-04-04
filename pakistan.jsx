import React from "react";
import "./styles.css";

const PakistanTravel = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Pakistan</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="pakistan.png" alt="Pakistan" />
        <p>
          Pakistan, a land of breathtaking landscapes and rich cultural heritage,
          offers travelers a mix of majestic mountains, historical landmarks, and
          vibrant city life. From the stunning peaks of the Karakoram range to the
          bustling streets of Lahore, Pakistan is a hidden gem for adventurers and
          history lovers alike.
        </p>

        <p>
          At Travel Adventure, we aim to introduce you to Pakistan’s diverse beauty,
          from the ancient ruins of Mohenjo-Daro to the serene valleys of Hunza and
          Skardu. Whether you’re exploring the Badshahi Mosque or trekking to Fairy
          Meadows, Pakistan is a destination filled with wonder and adventure.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Pakistan is Urdu, while English is widely spoken,
            especially in urban areas and among the educated population.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Hunza Valley</strong> – A breathtaking valley known for its stunning
            mountains, lush greenery, and welcoming locals.
          </p>
          <p>
            <strong>2. Lahore</strong> – A city of history and culture, home to the Badshahi
            Mosque, Lahore Fort, and vibrant food streets.
          </p>
          <p>
            <strong>3. Skardu</strong> – A paradise for trekkers, offering incredible landscapes
            and access to K2, the second-highest mountain in the world.
          </p>
          <p>
            <strong>4. Mohenjo-Daro</strong> – One of the world's oldest civilizations,
            dating back to 2500 BCE.
          </p>
          <p>
            <strong>5. Fairy Meadows</strong> – A stunning alpine meadow with breathtaking views
            of Nanga Parbat, Pakistan’s second-highest peak.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months from the date of entry.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> At least two blank pages required.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Yes, most travelers require a visa.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> Polio vaccination certificate required for travelers from certain countries.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Must declare amounts over $10,000 USD.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Must declare amounts over $10,000 USD.
          </p>
        </div>
      </section>

      <footer>
      </footer>
    </div>
  );
};

export default PakistanTravel;
