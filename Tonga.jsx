import React from 'react';
import './styles.css';
import TongaImage from './images/31.png'; // Make sure this path matches your file structure

const TongaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Tonga</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={TongaImage} alt="Tonga" />
        <p>
          Tonga, known as the "Friendly Islands," is a stunning Polynesian kingdom in the South Pacific. Comprising over 170 islands,
          Tonga is renowned for its pristine beaches, crystal-clear waters, and rich cultural heritage. Whether you’re exploring the
          main island of Tongatapu or venturing to the remote Vava’u islands, Tonga offers breathtaking landscapes and unforgettable experiences.
        </p>

        <p>
          At Travel Adventure, we bring you the magic of Tonga, from its vibrant traditional culture to its untouched natural beauty.
          Whether you’re swimming with humpback whales, enjoying a beachside feast, or exploring ancient archaeological sites,
          Tonga is a paradise waiting to be discovered.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Tonga are Tongan and English. Tongan is widely spoken throughout the islands, while English is commonly used in business and tourism.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Haʻamonga ʻa Maui</strong> – A mysterious stone trilithon, often called the "Stonehenge of the Pacific."</p>
          <p><strong>2. Vavaʻu Islands</strong> – A paradise for whale watching, snorkeling, and sailing.</p>
          <p><strong>3. Mapu'a 'a Vaea Blowholes</strong> – A stunning natural wonder where waves create dramatic water spouts.</p>
          <p><strong>4. Pangaimotu Island</strong> – A small island near Nukuʻalofa, perfect for relaxation and snorkeling.</p>
          <p><strong>5. Talamahu Market</strong> – A bustling local market in Nukuʻalofa offering fresh produce, handicrafts, and traditional Tongan goods.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays under 30 days for most travelers</p>
          <p><strong>VACCINATIONS:</strong> Routine vaccinations recommended</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None</p>
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

export default TongaPage;
