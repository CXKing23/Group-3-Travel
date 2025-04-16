import React from 'react';
import './styles.css';
import UzbekistanImage from './images/43.png'; // Adjust the path if needed

const UzbekistanPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Uzbekistan</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={UzbekistanImage} alt="Uzbekistan" />
        <p>
          Uzbekistan, a country rich in history and culture, is located in Central Asia and is home to some of the most stunning Silk Road cities. With its ancient mosques, vibrant bazaars, and impressive Islamic architecture, Uzbekistan offers travelers a glimpse into a fascinating past.
        </p>

        <p>
          At Travel Adventure, we are excited to guide you through Uzbekistan’s mesmerizing destinations, from the legendary cities of Samarkand and Bukhara to the bustling capital, Tashkent. Whether you’re an adventurer, history enthusiast, or food lover, Uzbekistan has something to offer everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Uzbekistan is Uzbek. Russian is widely spoken, and English is increasingly used in major cities and tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Samarkand</strong> – A historic city known for its breathtaking Registan Square, ancient madrassas, and stunning blue-tiled architecture.</p>
          <p><strong>2. Bukhara</strong> – A UNESCO World Heritage Site featuring well-preserved mosques, minarets, and an enchanting old town.</p>
          <p><strong>3. Khiva</strong> – An open-air museum with beautifully restored city walls, madrasahs, and palaces, making it a must-visit destination.</p>
          <p><strong>4. Tashkent</strong> – The modern capital city with a blend of Soviet-era buildings, green parks, and a vibrant food scene.</p>
          <p><strong>5. Fergana Valley</strong> – A lush region known for its scenic landscapes, traditional crafts, and rich cultural heritage.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least three months beyond the date of arrival.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> Two pages required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Visa-free entry for citizens of select countries; e-visas available for others.</p>
          <p><strong>VACCINATIONS:</strong> No mandatory vaccinations, but routine immunizations are recommended.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Amounts over $2,000 must be declared.</p>
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

export default UzbekistanPage;
