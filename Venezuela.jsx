import React from 'react';
import './styles.css';
import VenezuelaImage from './images/46.png'; // Adjust the path if needed

const VenezuelaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Venezuela</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={VenezuelaImage} alt="Venezuela" />
        <p>
          Venezuela, a country of breathtaking natural beauty, is home to stunning landscapes, including the world-famous Angel Falls, the longest coastline along the Caribbean Sea, and the vast Amazon rainforest. It boasts a rich history and a vibrant culture shaped by indigenous, African, and European influences.
        </p>

        <p>
          At Travel Adventure, we bring you closer to Venezuela’s wonders, from the stunning beaches of Los Roques to the majestic Andes Mountains. Whether you're a nature lover, an adventurer, or a history buff, Venezuela offers an unforgettable experience.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Venezuela is Spanish. Indigenous languages are also spoken in some regions, and English is understood in tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Angel Falls</strong> – The tallest waterfall in the world, located in Canaima National Park.</p>
          <p><strong>2. Roraima Mountain</strong> – A stunning tabletop mountain offering breathtaking views and unique flora and fauna.</p>
          <p><strong>3. Los Roques Archipelago</strong> – A paradise of crystal-clear waters, coral reefs, and white-sand beaches.</p>
          <p><strong>4. Morrocoy National Park</strong> – Home to stunning islands, mangroves, and vibrant marine life.</p>
          <p><strong>5. Mérida Cable Car</strong> – The highest and longest cable car system in the world, providing spectacular views of the Andes.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one blank page required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Required for some nationalities; check before traveling.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination may be required if arriving from certain countries.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Declaration required for amounts exceeding $10,000 USD.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Declaration required for amounts exceeding $10,000 USD.</p>
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

export default VenezuelaPage;
