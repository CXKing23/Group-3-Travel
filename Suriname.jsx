import React from 'react';
import './styles.css';
import SurinameImage from './images/22.png'; // Ensure the path is correct

const SurinamePage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Suriname</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SurinameImage} alt="Suriname" />
        <p>
          Suriname, the smallest country in South America, is a hidden gem with its rich cultural diversity, tropical rainforests, and
          colonial history. As one of the most ethnically diverse countries in the world, Suriname offers a unique blend of cultures, languages,
          and traditions.
        </p>

        <p>
          At Travel Adventure, we’re excited to guide you through Suriname’s breathtaking landscapes, from the bustling capital of Paramaribo to
          the untouched beauty of the Amazon rainforest. Whether you’re an adventurer, history enthusiast, or nature lover, Suriname has something
          to offer.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Suriname is Dutch, but many people also speak Sranan Tongo, English, Hindi, and Javanese.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Paramaribo</strong> – The capital city, known for its Dutch colonial architecture and vibrant markets.</p>
          <p><strong>2. Brownsberg Nature Park</strong> – A lush rainforest reserve offering stunning views and diverse wildlife.</p>
          <p><strong>3. Central Suriname Nature Reserve</strong> – A UNESCO World Heritage Site home to pristine rainforest and unique species.</p>
          <p><strong>4. Galibi Nature Reserve</strong> – A famous nesting site for leatherback sea turtles.</p>
          <p><strong>5. Fort Zeelandia</strong> – A historical fortress that offers insights into Suriname’s colonial past.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one blank page required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, or an e-visa depending on nationality.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination is recommended.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Limited export of Surinamese dollars.</p>
        </div>
      </section>

      <footer>
        <p>
          &copy; 2025 Travel Adventure. All rights reserved.<br />
          <a href="aboutus.html">About Us</a><br />
          <a href="contactus.html">Contact Us</a><br />
          <a href="index.html">Home</a><br />
        </p>
      </footer>
    </div>
  );
};

export default SurinamePage;
