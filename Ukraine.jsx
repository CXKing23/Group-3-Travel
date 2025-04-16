import React from 'react';
import './styles.css';
import UkraineImage from './images/40.png'; // Adjust the path if needed

const UkrainePage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Ukraine</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={UkraineImage} alt="Ukraine" />
        <p>
          Ukraine, the largest country in Europe, is a land of stunning landscapes, rich history, and deep cultural heritage. 
          From the golden-domed churches of Kyiv to the breathtaking Carpathian Mountains, Ukraine offers a mix of ancient traditions and modern city life.
        </p>

        <p>
          At Travel Adventure, we are passionate about bringing Ukraine’s beauty and history to travelers. Whether you're looking to explore medieval castles, enjoy the Black Sea coastline, or experience vibrant Ukrainian culture, Ukraine has something for everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Ukraine is Ukrainian. Russian is also widely spoken, particularly in the east and south of the country.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Kyiv</strong> – The capital city, home to stunning landmarks like St. Sophia's Cathedral, Independence Square, and the historic Kyiv Pechersk Lavra.</p>
          <p><strong>2. Lviv</strong> – A UNESCO-listed city with charming cobblestone streets, beautiful architecture, and a thriving coffee culture.</p>
          <p><strong>3. Chernobyl Exclusion Zone</strong> – A haunting yet fascinating place to explore the site of the 1986 nuclear disaster.</p>
          <p><strong>4. Odesa</strong> – A beautiful Black Sea port city known for its beaches, historic architecture, and the famous Potemkin Stairs.</p>
          <p><strong>5. Carpathian Mountains</strong> – A paradise for nature lovers and hikers, offering breathtaking scenery and traditional Ukrainian villages.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the planned departure date.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one blank page required for entry stamps.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays under 90 days for many nationalities.</p>
          <p><strong>VACCINATIONS:</strong> No mandatory vaccinations, but routine vaccines are recommended.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Amounts exceeding €10,000 must be declared.</p>
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

export default UkrainePage;
