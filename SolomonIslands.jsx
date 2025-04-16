import React from 'react';
import './styles.css';
import SolomonImage from './images/15.png'; // Make sure this path is correct

const SolomonIslandsPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Solomon Islands</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SolomonImage} alt="Solomon Islands" />
        <p>
          The Solomon Islands, a stunning archipelago in the South Pacific, offers pristine beaches, vibrant coral
          reefs, and rich WWII history. Known for its unspoiled natural beauty and welcoming locals, this tropical
          paradise is perfect for adventurers and history buffs alike.
        </p>

        <p>
          At Travel Adventure, we take you on a journey through the Solomon Islands’ turquoise waters, lush jungles,
          and fascinating cultural heritage. Whether you're diving among WWII wrecks, exploring traditional villages,
          or relaxing on untouched beaches, the Solomon Islands provide an unforgettable experience.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language is English, but most locals speak Pijin, a widely spoken creole. Many indigenous
            languages are also used throughout the islands.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Honiara</strong> – The capital city, home to WWII relics, bustling markets, and cultural museums.</p>
          <p><strong>2. Marovo Lagoon</strong> – A stunning, world-famous marine sanctuary perfect for diving and snorkeling.</p>
          <p><strong>3. Skull Island</strong> – A sacred site featuring ancient shrines with skulls of past warriors.</p>
          <p><strong>4. Munda</strong> – A top destination for WWII history and breathtaking coral reefs.</p>
          <p><strong>5. Rennell Island</strong> – A UNESCO-listed island with the largest raised coral atoll in the world.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to 90 days for most nationalities.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required if traveling from an infected area.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> No restrictions.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> No restrictions.</p>
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

export default SolomonIslandsPage;
