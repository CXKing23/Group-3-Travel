import React from 'react';
import './styles.css';
import SloveniaImage from './images/14.png'; // Make sure this image is placed in the correct path

const SloveniaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Slovenia</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SloveniaImage} alt="Slovenia" />
        <p>
          Slovenia, a hidden gem of Central Europe, is known for its stunning natural beauty, from the majestic
          Julian Alps to the turquoise waters of Lake Bled. A perfect blend of medieval charm and modern vibrancy,
          Slovenia is an ideal destination for nature lovers and culture enthusiasts alike.
        </p>

        <p>
          At Travel Adventure, we bring you the best of Slovenia, from its breathtaking landscapes to its rich
          cultural heritage. Whether you're exploring Ljubljana’s picturesque streets or hiking through Triglav
          National Park, Slovenia promises unforgettable experiences.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Slovenia is Slovene. English is widely spoken, especially in tourist areas,
            along with Italian and German.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Lake Bled</strong> – A fairy-tale lake with an iconic island church and a medieval cliffside castle.</p>
          <p><strong>2. Ljubljana</strong> – The charming capital city, known for its vibrant cultural scene and scenic riverfront.</p>
          <p><strong>3. Postojna Cave</strong> – One of the most stunning cave systems in Europe, featuring incredible limestone formations.</p>
          <p><strong>4. Triglav National Park</strong> – A paradise for hikers and nature lovers, home to Slovenia’s highest peak, Mount Triglav.</p>
          <p><strong>5. Piran</strong> – A coastal town on the Adriatic Sea, offering beautiful Venetian-style architecture and seafood delicacies.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least three months beyond the stay.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to 90 days for many nationalities.</p>
          <p><strong>VACCINATIONS:</strong> No mandatory vaccinations, but routine vaccines are recommended.</p>
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

export default SloveniaPage;
