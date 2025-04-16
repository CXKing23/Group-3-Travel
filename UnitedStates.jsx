import React from 'react';
import './styles.css';
import UnitedStatesImage from './images/51.png'; // Adjust the path if needed

const UnitedStatesPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>United States</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={UnitedStatesImage} alt="United States" />
        <p>
          The United States, a vast and diverse country, offers something for every traveler. From the bustling streets of New York City to the natural beauty of the Grand Canyon, the U.S. is known for its iconic landmarks, vibrant cities, and breathtaking landscapes.
        </p>

        <p>
          At Travel Adventure, we celebrate the variety of experiences the United States has to offer, whether you're exploring the cultural richness of Washington D.C., hiking through the National Parks, or enjoying the sunshine on the beaches of California.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of the United States is English. Spanish is also widely spoken, particularly in certain regions.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Grand Canyon National Park</strong> – A natural wonder offering awe-inspiring views and endless opportunities for hiking and exploration.</p>
          <p><strong>2. Statue of Liberty</strong> – A symbol of freedom, standing proudly in New York Harbor.</p>
          <p><strong>3. Yellowstone National Park</strong> – Known for its geothermal features, wildlife, and picturesque landscapes.</p>
          <p><strong>4. White House</strong> – The residence and office of the U.S. president, located in Washington D.C.</p>
          <p><strong>5. Miami Beach</strong> – Famous for its beautiful beaches, vibrant nightlife, and Art Deco architecture.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least two blank pages required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, most travelers need a visa, or they can enter under the Visa Waiver Program (VWP) if eligible.</p>
          <p><strong>VACCINATIONS:</strong> No specific vaccinations are required, but it’s recommended to be up-to-date with routine vaccines.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> No restrictions, but declaration is required for large amounts of currency.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> No restrictions, but declaration is required for large amounts of currency.</p>
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

export default UnitedStatesPage;
