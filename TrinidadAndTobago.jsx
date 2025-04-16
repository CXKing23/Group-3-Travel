import React from 'react';
import './styles.css';
import TrinidadTobagoImage from './images/32.png'; // Adjust path based on your project

const TrinidadTobagoPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Trinidad & Tobago</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={TrinidadTobagoImage} alt="Trinidad & Tobago" />
        <p>
          Trinidad & Tobago, a twin-island nation in the Caribbean, is famous for its vibrant culture,
          stunning beaches, and rich biodiversity. While Trinidad is known for its lively festivals, diverse wildlife,
          and bustling capital, Tobago offers a more relaxed atmosphere with its pristine beaches and coral reefs.
        </p>
        <p>
          At Travel Adventure, we are excited to showcase the best of Trinidad & Tobago, from the pulsating beats of Carnival
          to the tranquil waters of Pigeon Point. Whether you're an adventurer, a foodie, or a culture enthusiast,
          this beautiful nation has something for everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Trinidad & Tobago is English. However, locals also speak Trinidadian and Tobagonian Creole,
            which blends African, French, and Spanish influences.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Maracas Beach</strong> – One of the most famous beaches in Trinidad, known for its golden sands and famous "Bake and Shark" sandwiches.</p>
          <p><strong>2. Caroni Bird Sanctuary</strong> – A lush mangrove wetland home to the stunning Scarlet Ibis, the national bird of Trinidad & Tobago.</p>
          <p><strong>3. Pigeon Point Beach</strong> – A breathtaking beach in Tobago, ideal for snorkeling and relaxation.</p>
          <p><strong>4. Asa Wright Nature Centre</strong> – A paradise for birdwatchers and nature lovers in the heart of Trinidad’s rainforest.</p>
          <p><strong>5. Queen’s Park Savannah</strong> – The center of Trinidad’s Carnival celebrations and home to historic colonial mansions.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays under 90 days for most travelers</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required if traveling from an infected area</p>
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

export default TrinidadTobagoPage;
