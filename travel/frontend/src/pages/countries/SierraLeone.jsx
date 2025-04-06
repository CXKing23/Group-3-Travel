import React from 'react';
import "../../styles/styles.css"

const SierraLeonePage = () => {
  return (
    <div>
      <header>
        <a href="index.html">Travel Adventure</a>
      </header>

      <header id="main-header">
        <h1>Sierra Leone</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="sierra-leone.png" alt="Sierra Leone" />
        <p>
          Sierra Leone, a beautiful West African country, is known for its stunning beaches, lush rainforests, and rich cultural heritage. From its vibrant capital, Freetown, to the wildlife-rich reserves and historical sites, Sierra Leone offers an authentic and unique travel experience.
        </p>

        <p>
          At Travel Adventure, we aim to showcase the best of Sierra Leone, from its breathtaking coastline along the Atlantic Ocean to the welcoming hospitality of its people. Whether you're exploring Banana Island or the historical Bunce Island, Sierra Leone is a destination full of hidden treasures.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Sierra Leone is English. However, Krio (a Creole language) is widely spoken and serves as a lingua franca among the population.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Lumley Beach</strong> – A popular beach in Freetown known for its golden sand, vibrant nightlife, and stunning ocean views.</p>
          <p><strong>2. Tacugama Chimpanzee Sanctuary</strong> – A conservation center dedicated to protecting endangered chimpanzees in the lush forests outside Freetown.</p>
          <p><strong>3. Banana Island</strong> – A serene island offering history, beautiful beaches, and exciting snorkeling and diving experiences.</p>
          <p><strong>4. Bunce Island</strong> – A historic slave trade site that provides an insightful look into Sierra Leone’s past.</p>
          <p><strong>5. Tiwai Island Wildlife Sanctuary</strong> – A haven for nature lovers, home to rare primates, birds, and lush tropical rainforest.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, a visa is required for most travelers.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination is required for entry.</p>
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

export default SierraLeonePage;
