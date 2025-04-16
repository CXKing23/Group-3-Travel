import React from 'react';
import './styles.css';
import VaticanCityImage from './images/45.png'; // Adjust the path if needed

const VaticanCityPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Vatican City</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={VaticanCityImage} alt="Vatican City" />
        <p>
          Vatican City, the world's smallest independent state, is the spiritual and administrative center of the Roman Catholic Church. Home to the Pope and some of the most famous religious and cultural treasures, Vatican City is a must-visit for travelers interested in history, art, and religion.
        </p>

        <p>
          At Travel Adventure, we guide you through the wonders of Vatican City, from the awe-inspiring St. Peter’s Basilica to the breathtaking Sistine Chapel. Whether you're an art lover, history enthusiast, or spiritual seeker, Vatican City offers a once-in-a-lifetime experience.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Vatican City is Latin, but Italian is the most commonly spoken language. Many people in the Vatican also speak English and other major languages.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. St. Peter’s Basilica</strong> – One of the largest churches in the world, known for its stunning architecture and Michelangelo's famous dome.</p>
          <p><strong>2. Sistine Chapel</strong> – Famous for Michelangelo’s ceiling frescoes, including "The Creation of Adam."</p>
          <p><strong>3. Vatican Museums</strong> – Home to an extensive collection of art, sculptures, and historical artifacts.</p>
          <p><strong>4. St. Peter’s Square</strong> – A magnificent open space where thousands gather for papal addresses.</p>
          <p><strong>5. Apostolic Palace</strong> – The Pope’s residence and the heart of the Vatican’s governance.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least three months beyond your planned departure from the Schengen area.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> No separate visa is needed; visitors enter through Italy under the Schengen visa.</p>
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

export default VaticanCityPage;
