import React from 'react';
import './styles.css';
import SyriaImage from './images/25.png'; // Ensure the path is correct

const SyriaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Syria</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SyriaImage} alt="Syria" />
        <p>
          Syria, located in the heart of the Middle East, is a country rich in history, culture, and ancient landmarks. Home to some of the world's oldest continuously inhabited cities, such as Damascus and Aleppo, Syria offers a deep connection to the past through its architecture, bazaars, and traditions.
        </p>

        <p>
          At Travel Adventure, we aim to showcase Syria’s historical significance, from its breathtaking ancient ruins to its vibrant cultural heritage. Despite recent challenges, Syria remains an important destination with a storied past that continues to captivate visitors.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Syria is Arabic. While English and French are also spoken in some areas, Arabic is the primary language used in daily life.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Damascus</strong> – One of the oldest continuously inhabited cities in the world, known for its ancient souks, mosques, and historical sites.</p>
          <p><strong>2. Aleppo</strong> – A city with a rich history, famous for the Aleppo Citadel and its traditional markets.</p>
          <p><strong>3. Palmyra</strong> – An ancient city with stunning Roman ruins, including the Temple of Bel and the grand colonnade.</p>
          <p><strong>4. Krak des Chevaliers</strong> – A well-preserved medieval castle that offers breathtaking views of the surrounding landscape.</p>
          <p><strong>5. Bosra</strong> – A historic city featuring a remarkably well-preserved Roman theater.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one blank page required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, a visa is required for most nationalities.</p>
          <p><strong>VACCINATIONS:</strong> Some vaccinations may be recommended; check with your health provider.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Restrictions may apply; check with local authorities.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Restrictions may apply; check with local authorities.</p>
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

export default SyriaPage;
