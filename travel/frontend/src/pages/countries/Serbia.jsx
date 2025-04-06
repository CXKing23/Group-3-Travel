import React from 'react';
import "../../styles/styles.css"

const SerbiaPage = () => {
  return (
    <div>
      <header>
        <a href="index.html">Travel Adventure</a>
      </header>

      <header id="main-header">
        <h1>Serbia</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="images/9.png" alt="Serbia" />
        <p>
          Serbia, located in the heart of the Balkans, is a country rich in history, vibrant culture, and breathtaking landscapes. Known for its medieval monasteries, lively capital, and stunning national parks, Serbia is an ideal destination for travelers seeking both adventure and history.
        </p>

        <p>
          At Travel Adventure, we aim to showcase Serbia’s hidden gems, from the vibrant nightlife of Belgrade to the serene beauty of Tara National Park. Whether you're exploring ancient fortresses or enjoying the country’s traditional cuisine, Serbia has something for every traveler.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>The official language of Serbia is Serbian. English is commonly spoken in urban areas, especially among younger generations.</p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Belgrade</strong> – The capital city is known for its vibrant nightlife, historic Kalemegdan Fortress, and charming Skadarlija district.</p>
          <p><strong>2. Novi Sad</strong> – Home to the famous Petrovaradin Fortress and the EXIT music festival.</p>
          <p><strong>3. Tara National Park</strong> – A stunning natural reserve, perfect for hiking, wildlife spotting, and scenic views of the Drina River canyon.</p>
          <p><strong>4. Studenica Monastery</strong> – A UNESCO World Heritage Site known for its medieval Serbian Orthodox architecture and frescoes.</p>
          <p><strong>5. Niš</strong> – One of Europe’s oldest cities, featuring the Niš Fortress, Skull Tower, and an exciting food scene.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for many nationalities for stays under 90 days.</p>
          <p><strong>VACCINATIONS:</strong> None required, but routine vaccinations are recommended.</p>
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

export default SerbiaPage;
