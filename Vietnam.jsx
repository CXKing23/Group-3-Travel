import React from 'react';
import './styles.css';
import VietnamImage from './images/47.png'; // Adjust the path if needed

const VietnamPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Vietnam</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={VietnamImage} alt="Vietnam" />
        <p>
          Vietnam, a Southeast Asian country known for its breathtaking landscapes, rich history, and delicious cuisine, offers travelers a unique blend of cultural heritage and natural beauty. From the bustling streets of Hanoi and Ho Chi Minh City to the serene rice terraces of Sapa, Vietnam is a destination that captivates visitors with its charm and diversity.
        </p>

        <p>
          At Travel Adventure, we strive to bring you the best of Vietnam, from its world-renowned street food to its stunning natural wonders like Ha Long Bay. Whether you're looking for adventure, history, or relaxation, Vietnam has something to offer everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Vietnam is Vietnamese. English is commonly spoken in major cities and tourist areas, while some locals also speak French and Chinese.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Ha Long Bay</strong> – A UNESCO World Heritage Site famous for its emerald waters and towering limestone islands.</p>
          <p><strong>2. Hoi An Ancient Town</strong> – A well-preserved trading port with stunning architecture and vibrant lantern-lit streets.</p>
          <p><strong>3. Ho Chi Minh City</strong> – A dynamic metropolis rich in history, featuring landmarks like the War Remnants Museum and Notre-Dame Cathedral Basilica.</p>
          <p><strong>4. Sapa</strong> – A picturesque region known for its terraced rice fields, ethnic minority villages, and breathtaking mountain views.</p>
          <p><strong>5. Mekong Delta</strong> – A lush region filled with floating markets, rice paddies, and winding rivers, perfect for an authentic Vietnamese experience.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one blank page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Required for most nationalities; e-Visa available for eligible travelers.</p>
          <p><strong>VACCINATIONS:</strong> Recommended vaccinations include hepatitis A, typhoid, and routine vaccinations.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None, but amounts over $5,000 USD must be declared.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None, but amounts over $5,000 USD must be declared.</p>
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

export default VietnamPage;
