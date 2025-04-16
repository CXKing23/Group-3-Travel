import React from 'react';
import './styles.css';
import SwedenImage from './images/23.png'; // Ensure the path is correct

const SwedenPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Sweden</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SwedenImage} alt="Sweden" />
        <p>
          Sweden, the land of breathtaking landscapes, innovative design, and a rich Viking heritage, is a dream destination for travelers. From
          its modern cities to its untouched wilderness, Sweden offers a unique blend of urban sophistication and natural beauty.
        </p>

        <p>
          At Travel Adventure, we invite you to explore Sweden’s iconic cities, picturesque archipelagos, and the magical Northern Lights. Whether
          you're strolling through Stockholm’s Old Town, hiking in Lapland, or enjoying Swedish Fika, Sweden is a country that offers unforgettable
          experiences.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Sweden is Swedish. However, English is widely spoken, especially in major cities and tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Stockholm</strong> – The capital city, home to the beautiful Gamla Stan (Old Town), the Vasa Museum, and the ABBA Museum.</p>
          <p><strong>2. Icehotel</strong> – A world-famous hotel in Jukkasjärvi, made entirely of ice and snow.</p>
          <p><strong>3. Swedish Lapland</strong> – The perfect place to witness the Northern Lights and experience Arctic adventures.</p>
          <p><strong>4. Gotland</strong> – A historic island with medieval ruins, stunning beaches, and Viking heritage.</p>
          <p><strong>5. Drottningholm Palace</strong> – A UNESCO-listed royal palace, often compared to Versailles.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least three months beyond the departure date.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least two blank pages required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to 90 days for many nationalities.</p>
          <p><strong>VACCINATIONS:</strong> No mandatory vaccinations required.</p>
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

export default SwedenPage;
