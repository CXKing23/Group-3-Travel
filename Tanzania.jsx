import React from 'react';
import './styles.css';
import TanzaniaImage from './images/28.png'; // Make sure the image path is correct

const TanzaniaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Tanzania</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={TanzaniaImage} alt="Tanzania" />
        <p>
          Tanzania, home to vast savannas, breathtaking wildlife, and stunning coastlines, is one of Africa’s most exciting travel destinations.
          From the iconic Serengeti National Park to the towering peak of Mount Kilimanjaro, Tanzania offers an unmatched adventure for nature lovers,
          safari enthusiasts, and cultural explorers. Whether you're witnessing the Great Migration or relaxing on the white sandy beaches of Zanzibar,
          Tanzania is a dream destination for all kinds of travelers.
        </p>

        <p>
          At Travel Adventure, we aim to showcase Tanzania’s beauty, from the rich Swahili culture in Stone Town to the unforgettable wildlife experiences
          in Ngorongoro Crater. Whether you’re on a thrilling safari or exploring the vibrant city of Dar es Salaam, Tanzania will leave you in awe.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Tanzania are Swahili and English. Swahili is widely spoken across the country and is the primary language in daily interactions.
            English is commonly used in business, government, and tourism-related activities.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Serengeti National Park</strong> – Famous for the Great Migration, home to lions, elephants, and countless other wildlife species.</p>
          <p><strong>2. Mount Kilimanjaro</strong> – The highest mountain in Africa, attracting trekkers and climbers from around the world.</p>
          <p><strong>3. Zanzibar</strong> – A paradise island with pristine beaches, rich history, and vibrant markets in Stone Town.</p>
          <p><strong>4. Ngorongoro Crater</strong> – A stunning natural wonder filled with diverse wildlife and breathtaking landscapes.</p>
          <p><strong>5. Lake Victoria</strong> – The largest lake in Africa, offering beautiful scenery, fishing, and cultural experiences.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, visas available on arrival and online (e-Visa)</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required if traveling from an endemic country</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Declare amounts over $10,000</p>
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

export default TanzaniaPage;
