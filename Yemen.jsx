import React from 'react';
import './styles.css';
import YemenImage from './images/48.png'; // Adjust the path if needed

const YemenPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Yemen</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={YemenImage} alt="Yemen" />
        <p>
          Yemen, located on the southern tip of the Arabian Peninsula, is a country rich in history, culture, and breathtaking landscapes. Home to ancient cities, stunning mountain villages, and the pristine island of Socotra, Yemen offers a unique blend of natural beauty and historical significance.
        </p>

        <p>
          At Travel Adventure, we aim to highlight Yemen’s incredible heritage, from the towering mud-brick skyscrapers of Shibam to the UNESCO-listed Old City of Sana'a. Despite its challenges, Yemen remains a fascinating destination with a deep cultural legacy and stunning geography.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Yemen is Arabic. Some locals also speak English, especially in major cities and tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Old City of Sana'a</strong> – A UNESCO World Heritage Site with stunning ancient architecture and unique Yemeni culture.</p>
          <p><strong>2. Socotra Island</strong> – Known for its surreal landscapes, unique flora and fauna, and pristine beaches.</p>
          <p><strong>3. Shibam</strong> – Nicknamed the "Manhattan of the Desert," this city is famous for its centuries-old mudbrick skyscrapers.</p>
          <p><strong>4. Al Saleh Mosque</strong> – One of the largest mosques in Yemen, known for its stunning architecture.</p>
          <p><strong>5. Al Hudaydah</strong> – A coastal city with beautiful beaches and a rich fishing culture.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least two blank pages required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, travelers must obtain a visa before arrival.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required if traveling from an affected area; other recommended vaccines include hepatitis A and typhoid.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None officially, but large amounts must be declared.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None officially, but large amounts must be declared.</p>
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

export default YemenPage;
