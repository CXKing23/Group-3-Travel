import React from 'react';
import './styles.css';
import SlovakiaImage from './images/13.png'; // Make sure this image exists in the correct path

const SlovakiaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Slovakia</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SlovakiaImage} alt="Slovakia" />
        <p>
          Slovakia, a hidden gem in Central Europe, is known for its medieval castles, stunning mountain
          landscapes, and rich cultural heritage. Home to the breathtaking Tatra Mountains and picturesque
          historic towns, Slovakia offers a mix of adventure, history, and nature.
        </p>

        <p>
          At Travel Adventure, we invite you to explore Slovakia’s unique charm, from its charming capital,
          Bratislava, to its UNESCO-listed caves and medieval villages. Whether you seek hiking trails,
          historical landmarks, or vibrant city life, Slovakia has something for everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Slovakia is Slovak. While Slovak is the dominant language, many Slovaks
            also speak English, German, and Hungarian, especially in tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Bratislava Castle</strong> – A historic castle overlooking the Danube River, offering panoramic views of the capital city.</p>
          <p><strong>2. High Tatras</strong> – A majestic mountain range perfect for hiking, skiing, and exploring alpine lakes.</p>
          <p><strong>3. Spiš Castle</strong> – One of the largest castle ruins in Central Europe and a UNESCO World Heritage Site.</p>
          <p><strong>4. Banská Štiavnica</strong> – A charming medieval mining town with beautiful architecture and rich history.</p>
          <p><strong>5. Slovak Paradise National Park</strong> – A stunning park with waterfalls, gorges, and scenic hiking trails.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least three months beyond departure.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to 90 days within a 180-day period for most nationalities.</p>
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

export default SlovakiaPage;
