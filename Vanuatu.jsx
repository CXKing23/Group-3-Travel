import React from 'react';
import './styles.css';
import VanuatuImage from './images/44.png'; // Adjust the path if needed

const VanuatuPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Vanuatu</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={VanuatuImage} alt="Vanuatu" />
        <p>
          Vanuatu, a stunning island nation in the South Pacific, is known for its tropical beaches, vibrant coral reefs, and active volcanoes. With a mix of rich cultural heritage and breathtaking landscapes, Vanuatu offers an unforgettable adventure for travelers seeking both relaxation and excitement.
        </p>

        <p>
          At Travel Adventure, we aim to showcase Vanuatu's unique beauty, from the turquoise waters of Champagne Beach to the mesmerizing fire dances of the Ni-Vanuatu people. Whether you're exploring underwater shipwrecks or hiking through lush rainforests, Vanuatu is a paradise waiting to be discovered.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Vanuatu are Bislama, English, and French. Bislama, a creole language, is widely spoken among locals.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Mount Yasur</strong> – One of the world's most accessible active volcanoes, offering a spectacular lava show.</p>
          <p><strong>2. Champagne Beach</strong> – A pristine beach with crystal-clear waters and soft white sand, perfect for relaxation.</p>
          <p><strong>3. Blue Holes</strong> – Naturally occurring deep freshwater pools with stunning blue hues, ideal for swimming and diving.</p>
          <p><strong>4. Millennium Cave</strong> – A thrilling trek through dense jungle leading to an enormous cave with underground rivers.</p>
          <p><strong>5. SS President Coolidge</strong> – A famous dive site featuring a sunken World War II shipwreck, attracting divers from around the world.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to 30 days for many nationalities.</p>
          <p><strong>VACCINATIONS:</strong> No mandatory vaccinations, but routine immunizations are recommended.</p>
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

export default VanuatuPage;
