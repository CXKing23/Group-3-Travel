import React from 'react';
import './styles.css';
import UKImage from './images/41.png'; // Adjust the path if needed

const UKPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>United Kingdom</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={UKImage} alt="United Kingdom" />
        <p>
          The United Kingdom (UK) is a country rich in history, culture, and iconic landmarks. Made up of England, Scotland, Wales, and Northern Ireland, 
          the UK offers travelers a diverse experience, from bustling cities to picturesque countryside.
        </p>

        <p>
          At Travel Adventure, we strive to help you explore the UK’s charm—whether it’s the historic streets of London, the castles of Scotland, the scenic beauty of Wales, or the cultural vibrance of Belfast.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of the United Kingdom is English. However, Welsh is spoken in Wales, and Gaelic languages are spoken in parts of Scotland and Northern Ireland.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. London</strong> – Visit world-famous landmarks like Buckingham Palace, the Tower of London, Big Ben, and the British Museum.</p>
          <p><strong>2. Edinburgh</strong> – Scotland’s capital, known for its medieval Old Town, the annual Edinburgh Festival, and Edinburgh Castle.</p>
          <p><strong>3. Stonehenge</strong> – A prehistoric wonder located in Wiltshire, offering a glimpse into ancient civilization.</p>
          <p><strong>4. Lake District</strong> – A stunning national park in England, perfect for hiking, nature, and breathtaking landscapes.</p>
          <p><strong>5. Giant’s Causeway</strong> – A natural wonder in Northern Ireland, famous for its unique hexagonal rock formations.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for the duration of your stay.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays under six months for many nationalities.</p>
          <p><strong>VACCINATIONS:</strong> No mandatory vaccinations, but routine vaccinations are recommended.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Amounts over £10,000 must be declared.</p>
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

export default UKPage;
