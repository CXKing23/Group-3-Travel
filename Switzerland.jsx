import React from 'react';
import './styles.css';
import SwitzerlandImage from './images/24.png'; // Ensure the path is correct

const SwitzerlandPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Switzerland</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SwitzerlandImage} alt="Switzerland" />
        <p>
          Switzerland, known for its breathtaking Alpine scenery, precision engineering, and world-class chocolate, is a dream destination for travelers. Whether you’re exploring charming medieval towns, skiing in the Swiss Alps, or enjoying a scenic train ride, Switzerland offers an unforgettable experience.
        </p>

        <p>
          At Travel Adventure, we want to help you discover the magic of Switzerland. From the picturesque streets of Zurich to the serene beauty of Lake Geneva, there is something for every traveler in this stunning European country.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            Switzerland has four official languages: German, French, Italian, and Romansh. The language spoken depends on the region, but English is widely understood in tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Matterhorn</strong> – One of the most iconic peaks in the world, perfect for mountaineering and skiing.</p>
          <p><strong>2. Jungfraujoch</strong> – The "Top of Europe," offering breathtaking views and an unforgettable train journey.</p>
          <p><strong>3. Lake Geneva</strong> – A stunning lake surrounded by vineyards and picturesque towns like Montreux.</p>
          <p><strong>4. Lucerne</strong> – A charming city with a historic old town, the Kapellbrücke (Chapel Bridge), and scenic lake views.</p>
          <p><strong>5. Interlaken</strong> – A paradise for adventure seekers, offering paragliding, hiking, and water sports.</p>
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

export default SwitzerlandPage;
