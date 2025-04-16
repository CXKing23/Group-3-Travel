import React from 'react';
import './styles.css';
import SudanImage from './images/21.png'; // Ensure the path is correct

const SudanPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Sudan</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SudanImage} alt="Sudan" />
        <p>
          Sudan, the third-largest country in Africa, is a land of rich history, vast deserts, and stunning archaeological sites.
          Home to more pyramids than Egypt, Sudan offers a fascinating glimpse into the ancient Kingdom of Kush and its influence
          on the Nile Valley.
        </p>

        <p>
          At Travel Adventure, we are excited to help travelers explore Sudan’s unique cultural heritage, from the ancient pyramids
          of Meroë to the vibrant city of Khartoum. Whether you’re interested in desert landscapes, historic ruins, or local
          traditions, Sudan provides an unforgettable travel experience.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Sudan are Arabic and English. While Arabic is widely spoken across the country, English is
            commonly used in business and education.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Meroë Pyramids</strong> – A UNESCO World Heritage Site featuring over 200 pyramids built by the ancient Kingdom of Kush.</p>
          <p><strong>2. Jebel Barkal</strong> – A sacred mountain with archaeological ruins that were once a religious center of the Kushite kingdom.</p>
          <p><strong>3. Khartoum</strong> – The capital city where the Blue and White Nile rivers meet, home to fascinating museums and markets.</p>
          <p><strong>4. Suakin</strong> – A historic Red Sea port with Ottoman-era ruins and a glimpse into Sudan’s maritime history.</p>
          <p><strong>5. Dinder National Park</strong> – A vast wildlife reserve offering a chance to see African elephants, lions, and a variety of bird species.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least two blank pages required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, a visa must be obtained in advance.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination is required if traveling from an infected area.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Must declare amounts exceeding $10,000.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Limited export of Sudanese Pounds.</p>
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

export default SudanPage;
