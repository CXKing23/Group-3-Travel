import React from 'react';
import './styles.css';
import ZimbabweImage from './images/50.png'; // Adjust the path if needed

const ZimbabwePage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Zimbabwe</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={ZimbabweImage} alt="Zimbabwe" />
        <p>
          Zimbabwe, located in southern Africa, is a country of breathtaking landscapes, rich history, and abundant wildlife. Known for its stunning natural wonders and ancient ruins, Zimbabwe offers a mix of adventure, culture, and scenic beauty.
        </p>

        <p>
          At Travel Adventure, we highlight the best of Zimbabwe, from the awe-inspiring Victoria Falls to the historic ruins of Great Zimbabwe. Whether you're looking for thrilling safaris, rich cultural experiences, or stunning natural sights, Zimbabwe is a must-visit destination.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Zimbabwe include English, Shona, and Sindebele (Ndebele). English is widely used in business and education, while Shona and Ndebele are spoken by a majority of the population.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Victoria Falls</strong> – One of the Seven Natural Wonders of the World, offering breathtaking views and thrilling activities like bungee jumping and white-water rafting.</p>
          <p><strong>2. Great Zimbabwe Ruins</strong> – A UNESCO World Heritage Site, this ancient city provides insight into the rich history of the Shona civilization.</p>
          <p><strong>3. Hwange National Park</strong> – Home to one of the largest elephant populations in Africa, offering incredible safari experiences.</p>
          <p><strong>4. Matobo National Park</strong> – Known for its balancing rock formations and ancient San rock art, this park is a cultural and natural treasure.</p>
          <p><strong>5. Lake Kariba</strong> – One of the world’s largest man-made lakes, perfect for fishing, houseboat cruises, and wildlife viewing.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least two blank pages required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, but visas are available on arrival for many nationalities.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required if traveling from an affected area; malaria prophylaxis is recommended.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> No restrictions, but declaration is required for large amounts.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> No restrictions, but declaration is required for large amounts.</p>
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

export default ZimbabwePage;
