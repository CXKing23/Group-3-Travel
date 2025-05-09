import React from 'react';
import './styles.css';
import UAEImage from './images/38.png'; // Adjust the path if needed

const UAEPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>United Arab Emirates</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={UAEImage} alt="United Arab Emirates" />
        <p>
          The United Arab Emirates (UAE) is a country of modern marvels, rich traditions, and breathtaking landscapes. 
          Comprising seven emirates, including the world-famous Dubai and Abu Dhabi, the UAE offers a blend of futuristic architecture, vast deserts, luxurious shopping, and cultural heritage.
        </p>

        <p>
          At Travel Adventure, we aim to showcase the UAE’s stunning diversity, from the towering Burj Khalifa to the golden dunes of the Empty Quarter. 
          Whether you’re seeking luxury, adventure, or history, the UAE has something for every traveler.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of the UAE is Arabic. However, English is widely spoken, especially in business and tourism sectors.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Burj Khalifa</strong> – The tallest building in the world, offering breathtaking views of Dubai from its observation deck.</p>
          <p><strong>2. Sheikh Zayed Grand Mosque</strong> – A stunning architectural masterpiece in Abu Dhabi, blending Islamic tradition with modern design.</p>
          <p><strong>3. Palm Jumeirah</strong> – A man-made island in Dubai featuring luxurious resorts, fine dining, and beautiful beaches.</p>
          <p><strong>4. The Louvre Abu Dhabi</strong> – A world-class art museum showcasing masterpieces from around the globe.</p>
          <p><strong>5. Desert Safari</strong> – An unforgettable experience of dune bashing, camel riding, and traditional Bedouin hospitality.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Visa-free or visa-on-arrival for many nationalities; check specific country requirements.</p>
          <p><strong>VACCINATIONS:</strong> Routine vaccines recommended; COVID-19 requirements may apply.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Amounts exceeding AED 100,000 must be declared.</p>
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

export default UAEPage;
