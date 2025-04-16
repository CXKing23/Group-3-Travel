import React from 'react';
import './styles.css';
import SingaporeImage from './images/12.png'; // Adjust path as needed

const SingaporePage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Singapore</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SingaporeImage} alt="Singapore" />
        <p>
          Singapore, the dazzling island city-state in Southeast Asia, is known for its futuristic skyline,
          lush gardens, and cultural diversity. A global hub for business and tourism, Singapore blends modern
          innovation with rich heritage, offering travelers a unique mix of experiences.
        </p>

        <p>
          At Travel Adventure, we bring you the best of Singapore—from its breathtaking Marina Bay Sands to
          the enchanting Gardens by the Bay. Whether you're a foodie, nature lover, or adventure seeker,
          Singapore has something for everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            Singapore has four official languages: English, Mandarin, Malay, and Tamil. English is the most
            widely spoken and is used for business, education, and government communications.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Marina Bay Sands</strong> – An iconic luxury hotel with a rooftop infinity pool, offering stunning views of the Singapore skyline.</p>
          <p><strong>2. Gardens by the Bay</strong> – A futuristic nature park featuring the famous Supertree Grove and Flower Dome.</p>
          <p><strong>3. Sentosa Island</strong> – A resort island with theme parks, beaches, and adventure activities.</p>
          <p><strong>4. Chinatown</strong> – A cultural hotspot with historic temples, bustling markets, and authentic local cuisine.</p>
          <p><strong>5. Universal Studios Singapore</strong> – A thrilling theme park with rides and attractions for all ages.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for most nationalities for stays up to 30–90 days.</p>
          <p><strong>VACCINATIONS:</strong> No mandatory vaccinations, but recommended vaccinations include Hepatitis A & B.</p>
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

export default SingaporePage;
