import React from 'react';
import './styles.css';
import TurkeyImage from './images/34.png'; // Adjust the image path if needed

const TurkeyPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Turkey</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={TurkeyImage} alt="Turkey" />
        <p>
          Turkey, where East meets West, is a country rich in history, culture, and breathtaking landscapes.
          From the ancient ruins of Ephesus to the bustling streets of Istanbul, Turkey offers a perfect mix
          of old and new, tradition and modernity.
        </p>

        <p>
          At Travel Adventure, we are passionate about showcasing Turkey’s wonders. Whether you dream of
          floating in a hot air balloon over Cappadocia, exploring the turquoise coast, or indulging in
          world-famous Turkish cuisine, we help you discover the magic of Turkey.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Turkey is Turkish. English is widely spoken in tourist areas, especially
            in major cities like Istanbul, Ankara, and Antalya.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Hagia Sophia</strong> – A stunning architectural masterpiece in Istanbul, once a church, then a mosque, and now a museum.</p>
          <p><strong>2. Cappadocia</strong> – Famous for its fairy-tale landscapes, cave dwellings, and sunrise hot air balloon rides.</p>
          <p><strong>3. Pamukkale</strong> – Known as the "Cotton Castle," Pamukkale features natural thermal pools cascading down white terraces.</p>
          <p><strong>4. Ephesus</strong> – An ancient Roman city with well-preserved ruins, including the Temple of Artemis, one of the Seven Wonders of the Ancient World.</p>
          <p><strong>5. Blue Mosque</strong> – A breathtaking mosque in Istanbul, known for its stunning blue tiles and impressive domes.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> Two pages required</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Required for some nationalities; e-Visa available for many</p>
          <p><strong>VACCINATIONS:</strong> Routine vaccines recommended</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Cannot export more than 5,000 USD or its equivalent</p>
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

export default TurkeyPage;
