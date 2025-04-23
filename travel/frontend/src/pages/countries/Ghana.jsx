import React from "react";
import "../../styles/styles.css";

const GhanaPage = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Ghana</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="ghana.png" alt="Ghana" />
        <p>
          Ghana, the gateway to West Africa, is a country rich in history,
          tradition, and natural beauty. From its golden beaches to its vibrant
          cities and welcoming people, Ghana offers an immersive experience that
          blends ancient culture with modern life.
        </p>

        <p>
          At Travel Adventure, we invite you to explore Ghana’s diverse
          landscapes and deep-rooted heritage—from the historical Cape Coast
          Castle to the colorful streets of Accra and the wildlife of Mole
          National Park. Whether you're interested in history, adventure, or
          relaxation, Ghana welcomes you with open arms.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            English is the official language, but over 80 local languages are
            spoken, including Twi, Ga, and Ewe.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Cape Coast Castle</strong> – A powerful historical site tied
            to the transatlantic slave trade.
          </p>
          <p>
            <strong>2. Mole National Park</strong> – Ghana’s largest wildlife
            reserve, home to elephants, antelope, and more.
          </p>
          <p>
            <strong>3. Accra</strong> – The capital city known for its art,
            culture, markets, and nightlife.
          </p>
          <p>
            <strong>4. Kakum National Park</strong> – Famous for its canopy
            walkway above the rainforest.
          </p>
          <p>
            <strong>5. Lake Volta</strong> – One of the world’s largest man-made
            lakes, great for boating and scenic views.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid for at least six
            months beyond the date of entry.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> At least one page required.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Yes, for most travelers.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> Yellow fever vaccination is required.
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

export default GhanaPage;
