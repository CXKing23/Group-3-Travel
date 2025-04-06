import React from 'react';
import "../../styles/styles.css"

const SaudiArabiaPage = () => {
  return (
    <div>
      <header>
        <a href="index.html">Travel Adventure</a>
      </header>

      <header id="main-header">
        <h1>Saudi Arabia</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="images/7.png" alt="Saudi Arabia" />
        <p>
          Saudi Arabia, a land of deep history and modern transformation, is home to stunning deserts, ancient archaeological sites, and bustling cities. Known as the birthplace of Islam, it hosts the holy cities of Mecca and Medina, drawing millions of pilgrims every year.
        </p>

        <p>
          At Travel Adventure, we aim to showcase the diverse beauty of Saudi Arabia, from the breathtaking Red Sea coastline to the historic Nabatean ruins in AlUla. Whether you're an adventurer, history buff, or cultural explorer, Saudi Arabia offers unforgettable experiences.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Saudi Arabia is Arabic. English is widely spoken, especially in business and tourism sectors.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. AlUla & Madain Saleh</strong> – An ancient Nabatean city similar to Petra, with stunning rock-cut tombs and breathtaking landscapes.</p>
          <p><strong>2. Mecca & Medina</strong> – The two holiest cities in Islam, visited by millions of pilgrims annually.</p>
          <p><strong>3. Riyadh</strong> – The capital city, blending modern skyscrapers with cultural sites like Diriyah, a UNESCO World Heritage Site.</p>
          <p><strong>4. Jeddah</strong> – A vibrant coastal city known for its Red Sea waterfront, historic Al-Balad district, and stunning coral reefs.</p>
          <p><strong>5. The Empty Quarter (Rub' al Khali)</strong> – One of the largest sand deserts in the world, perfect for adventure seekers and desert camping.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least two pages required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, but e-visas are available for eligible countries.</p>
          <p><strong>VACCINATIONS:</strong> Proof of COVID-19 vaccination and other health requirements may apply.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> No restrictions, but large amounts must be declared.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> No restrictions, but large amounts must be declared.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Travel Adventure. All rights reserved.<br />
          <a href="aboutus.html">About Us</a><br />
          <a href="contactus.html">Contact Us</a><br />
          <a href="index.html">Home</a><br />
        </p>
      </footer>
    </div>
  );
};

export default SaudiArabiaPage;
