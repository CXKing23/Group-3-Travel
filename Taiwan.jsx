import React from 'react';
import './styles.css';
import TaiwanImage from './images/26.png'; // Make sure the image path is correct

const TaiwanPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Taiwan</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={TaiwanImage} alt="Taiwan" />
        <p>
          Taiwan is a beautiful island nation known for its stunning landscapes, rich history, and vibrant culture.
          From the bustling streets of Taipei to the serene beauty of Sun Moon Lake, Taiwan offers a diverse travel experience.
          The island is famous for its delicious street food, night markets, and advanced technology, making it a must-visit destination for travelers.
        </p>

        <p>
          At Travel Adventure, we bring you the best of Taiwan—whether it's exploring the breathtaking Taroko Gorge,
          visiting the historic temples of Tainan, or enjoying the lively atmosphere of Taipei 101. Taiwan seamlessly
          blends modern innovation with deep-rooted traditions, creating an unforgettable journey for every visitor.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Taiwan is Mandarin Chinese. However, many locals also speak Taiwanese Hokkien and Hakka.
            English is widely spoken in major tourist areas and by younger generations.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Taipei 101</strong> – Once the world's tallest building, this iconic skyscraper offers breathtaking views of Taipei.</p>
          <p><strong>2. Taroko Gorge</strong> – A stunning national park with marble cliffs, scenic trails, and rushing rivers.</p>
          <p><strong>3. Sun Moon Lake</strong> – A picturesque lake surrounded by mountains, perfect for cycling and boat tours.</p>
          <p><strong>4. Jiufen Old Street</strong> – A charming town with narrow alleyways, tea houses, and stunning ocean views.</p>
          <p><strong>5. Kenting National Park</strong> – A tropical paradise with beautiful beaches and vibrant coral reefs.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to 90 days for many nationalities</p>
          <p><strong>VACCINATIONS:</strong> None required</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None</p>
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

export default TaiwanPage;
