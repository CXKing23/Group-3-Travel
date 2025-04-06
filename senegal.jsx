import React from 'react';
import './styles.css';

const SenegalPage = () => {
  return (
    <div>
      <header>
        <a href="index.html">Travel Adventure</a>
      </header>

      <header id="main-header">
        <h1>Senegal</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="images/8.png" alt="Senegal" />
        <p>
          Senegal, located on the westernmost tip of Africa, is a vibrant country known for its rich history, diverse landscapes, and welcoming culture. From the lively streets of Dakar to the tranquil beaches of Saly, Senegal offers a blend of adventure, history, and natural beauty.
        </p>

        <p>
          At Travel Adventure, we’re passionate about introducing travelers to Senegal’s unique charm, whether it’s exploring the historical Gorée Island, discovering the stunning pink waters of Lake Retba, or experiencing the traditional rhythms of mbalax music.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>The official language of Senegal is French, but Wolof is widely spoken across the country along with other local languages.</p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Dakar</strong> – The capital city is a hub of culture, history, and entertainment, with attractions like the African Renaissance Monument and lively markets.</p>
          <p><strong>2. Gorée Island</strong> – A UNESCO World Heritage Site, known for its role in the transatlantic slave trade and the moving House of Slaves museum.</p>
          <p><strong>3. Lake Retba (Pink Lake)</strong> – Famous for its unique pink waters due to high salt content and algae.</p>
          <p><strong>4. Saly</strong> – A popular beach resort town with golden sands, water activities, and a vibrant nightlife.</p>
          <p><strong>5. Djoudj National Bird Sanctuary</strong> – A paradise for bird watchers, home to thousands of migratory birds, including flamingos and pelicans.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for many nationalities for stays under 90 days.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination may be required for travelers from certain countries.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None.</p>
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

export default SenegalPage;
