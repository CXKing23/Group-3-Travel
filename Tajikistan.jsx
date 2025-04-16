import React from 'react';
import './styles.css';
import TajikistanImage from './images/27.png'; // Adjust the path if needed

const TajikistanPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Tajikistan</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={TajikistanImage} alt="Tajikistan" />
        <p>
          Tajikistan, a land of towering mountains, ancient Silk Road history, and warm hospitality, is a hidden gem in Central Asia.
          With more than 90% of its land covered by mountains, Tajikistan is a paradise for adventure seekers, trekkers, and cultural explorers.
          From the breathtaking Pamir Highway to the historical cities of Khujand and Penjikent, this country offers a unique experience for travelers looking for an off-the-beaten-path destination.
        </p>

        <p>
          At Travel Adventure, we guide you through Tajikistan’s wonders, from the glacial lakes of the Fann Mountains to the lively bazaars of Dushanbe.
          Whether you're exploring the ruins of ancient civilizations or enjoying a homestay in a traditional Pamiri house, Tajikistan promises an unforgettable journey.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Tajikistan is Tajik, a variety of Persian. Russian is also widely spoken, especially in business and government.
            English is becoming more common among younger generations and in tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Pamir Highway</strong> – One of the world’s most stunning road trips, offering breathtaking landscapes and remote villages.</p>
          <p><strong>2. Iskanderkul Lake</strong> – A turquoise alpine lake named after Alexander the Great, surrounded by the stunning Fann Mountains.</p>
          <p><strong>3. Dushanbe</strong> – The capital city, home to the impressive Rudaki Park, National Museum, and the world’s second-tallest flagpole.</p>
          <p><strong>4. Penjikent</strong> – An ancient Silk Road city with archaeological ruins and a vibrant local market.</p>
          <p><strong>5. Wakhan Valley</strong> – A remote valley along the Afghanistan border, filled with hot springs, ancient fortresses, and breathtaking mountain views.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> E-visa available for most nationalities</p>
          <p><strong>VACCINATIONS:</strong> Recommended: Hepatitis A, Typhoid</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Declare amounts over $10,000</p>
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

export default TajikistanPage;
