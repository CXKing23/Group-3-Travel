import React from 'react';
import './styles.css';
import SomaliaImage from './images/16.png'; // Ensure this path is correct

const SomaliaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Somalia</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SomaliaImage} alt="Somalia" />
        <p>
          Somalia, located in the Horn of Africa, is a country with a rich history, stunning landscapes, and a
          deep-rooted cultural heritage. With its long coastline along the Indian Ocean, Somalia has beautiful
          beaches, vibrant markets, and a resilient, welcoming people. The country's historical sites, such as the
          ancient city of Zeila, tell a story of trade and civilization that dates back centuries.
        </p>

        <p>
          At Travel Adventure, we aim to highlight Somalia’s rich traditions, breathtaking coastal scenery, and its
          fascinating history. From the bustling capital of Mogadishu to the scenic beaches of Berbera, Somalia offers
          unique experiences for travelers seeking an off-the-beaten-path adventure.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Somalia are Somali and Arabic. English and Italian are also spoken in some areas,
            particularly in business and government settings.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Mogadishu</strong> – The capital city, featuring historic sites, beautiful beaches, and vibrant markets.</p>
          <p><strong>2. Laas Geel</strong> – An ancient rock art site with some of Africa’s best-preserved cave paintings.</p>
          <p><strong>3. Zeila</strong> – A historic port city with ruins from the medieval Sultanate of Adal.</p>
          <p><strong>4. Lido Beach</strong> – A picturesque beach in Mogadishu with golden sands and clear waters.</p>
          <p><strong>5. Berbera</strong> – A coastal city known for its stunning beaches and rich maritime history.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, a visa is required for most travelers.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination is required if traveling from an affected area.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> No major restrictions, but travelers should check for updates.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> No major restrictions.</p>
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

export default SomaliaPage;
