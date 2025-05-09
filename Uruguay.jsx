import React from 'react';
import './styles.css';
import UruguayImage from './images/42.png'; // Adjust the path if needed

const UruguayPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Uruguay</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={UruguayImage} alt="Uruguay" />
        <p>
          Uruguay, a small yet charming country in South America, is known for its stunning coastline, vibrant culture, and high quality of life. With a blend of colonial history, modern cities, and beautiful beaches, Uruguay offers a relaxed yet exciting travel experience.
        </p>

        <p>
          At Travel Adventure, we bring you the best of Uruguay, from its capital city Montevideo to the glamorous beaches of Punta del Este. Whether you're interested in cultural experiences, food, or nature, Uruguay has something for everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Uruguay is Spanish. English is commonly spoken in tourist areas, and Portuguese is also understood near the Brazilian border.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Montevideo</strong> – The capital city is a mix of historic architecture, modern attractions, and beautiful coastal views.</p>
          <p><strong>2. Punta del Este</strong> – A luxurious beach resort town known for its nightlife, upscale resorts, and beautiful beaches.</p>
          <p><strong>3. Colonia del Sacramento</strong> – A UNESCO World Heritage Site with charming cobblestone streets and colonial buildings.</p>
          <p><strong>4. Cabo Polonio</strong> – A secluded, off-the-grid beach village known for its stunning sand dunes and sea lion colonies.</p>
          <p><strong>5. Piriápolis</strong> – A picturesque coastal town with a mix of beaches, mountains, and historic landmarks.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid at the time of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays under 90 days for many nationalities.</p>
          <p><strong>VACCINATIONS:</strong> No mandatory vaccinations, but routine immunizations are recommended.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> No restrictions, but amounts over $10,000 must be declared.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Same as entry requirements.</p>
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

export default UruguayPage;
