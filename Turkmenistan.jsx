import React from 'react';
import './styles.css';
import TurkmenistanImage from './images/35.png'; // Adjust if your path differs

const TurkmenistanPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Turkmenistan</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={TurkmenistanImage} alt="Turkmenistan" />
        <p>
          Turkmenistan, a Central Asian nation known for its vast deserts, ancient cities, and unique culture,
          is one of the least explored travel destinations in the world. Home to the Karakum Desert and the
          famous "Door to Hell," this country offers an unforgettable journey for adventurous travelers.
        </p>

        <p>
          At Travel Adventure, we aim to introduce you to the beauty of Turkmenistan, from the ancient ruins
          of Merv to the futuristic city of Ashgabat. Experience the rich traditions, stunning landscapes, and
          warm hospitality of this hidden gem in Central Asia.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Turkmenistan is Turkmen. Russian is also widely spoken, especially among
            the older generation and in business settings.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Darvaza Gas Crater ("Door to Hell")</strong> – A massive, fiery crater in the middle of the Karakum Desert, burning continuously for decades.</p>
          <p><strong>2. Ashgabat</strong> – The capital city, known for its extravagant architecture, marble-clad buildings, and unique monuments.</p>
          <p><strong>3. Merv</strong> – A UNESCO World Heritage Site with ancient ruins dating back to the Silk Road era.</p>
          <p><strong>4. Yangykala Canyon</strong> – Often called the "Grand Canyon of Central Asia," featuring stunning red and pink rock formations.</p>
          <p><strong>5. Köw Ata Underground Lake</strong> – A naturally warm, mineral-rich lake hidden inside a cave, perfect for a relaxing swim.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least two pages required</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, a visa is required for most travelers</p>
          <p><strong>VACCINATIONS:</strong> Routine vaccines recommended</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Must declare amounts exceeding $10,000 USD</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Cannot take more than declared upon entry</p>
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

export default TurkmenistanPage;
