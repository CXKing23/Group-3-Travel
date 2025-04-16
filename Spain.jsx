import React from 'react';
import './styles.css';
import SpainImage from './images/19.png'; // Ensure the path is correct

const SpainPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Spain</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SpainImage} alt="Spain" />
        <p>
          Spain, a country rich in history, culture, and breathtaking landscapes, is one of the top travel destinations in
          Europe. From its vibrant cities like Madrid and Barcelona to the stunning beaches of Costa del Sol and the Balearic
          Islands, Spain offers something for every traveler.
        </p>

        <p>
          At Travel Adventure, we want to share Spain’s captivating heritage, world-famous cuisine, and stunning architecture.
          Whether you’re exploring the works of Gaudí in Barcelona, experiencing the passion of flamenco in Seville, or
          indulging in tapas in Madrid, Spain promises an unforgettable journey.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Spain is Spanish (Castilian). However, regional languages such as Catalan, Galician, and
            Basque are also spoken in different parts of the country.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. La Sagrada Familia</strong> – A stunning basilica in Barcelona, designed by Antoni Gaudí and still under construction.</p>
          <p><strong>2. Alhambra</strong> – A breathtaking palace and fortress in Granada, showcasing Moorish architecture and history.</p>
          <p><strong>3. Park Güell</strong> – A colorful and whimsical park in Barcelona, another masterpiece by Gaudí.</p>
          <p><strong>4. Prado Museum</strong> – Spain’s national art museum in Madrid, home to works by Velázquez, Goya, and more.</p>
          <p><strong>5. Seville’s Alcázar</strong> – A magnificent royal palace with stunning Mudejar architecture and beautiful gardens.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least three months beyond stay.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays under 90 days for many nationalities.</p>
          <p><strong>VACCINATIONS:</strong> No mandatory vaccinations required.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Amounts over €10,000 must be declared.</p>
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

export default SpainPage;
