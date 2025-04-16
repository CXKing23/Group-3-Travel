import React from 'react';
import './styles.css';
import SouthAfricaImage from './images/17.png'; // Ensure this path is correct

const SouthAfricaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>South Africa</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SouthAfricaImage} alt="South Africa" />
        <p>
          South Africa, known as the "Rainbow Nation," is a country of incredible diversity, breathtaking landscapes,
          and a rich cultural heritage. From the bustling city life of Johannesburg and Cape Town to the stunning
          natural wonders of Kruger National Park and Table Mountain, South Africa is a dream destination for adventure
          seekers, history buffs, and nature lovers.
        </p>

        <p>
          At Travel Adventure, we are passionate about showcasing South Africa’s vibrant culture, wildlife, and history.
          Whether you want to explore the iconic Robben Island, embark on a thrilling safari, or enjoy the picturesque
          beaches along the Garden Route, South Africa offers an unforgettable travel experience.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            South Africa has 11 official languages, including English, Afrikaans, Zulu, and Xhosa. English is widely spoken
            and used in business, tourism, and government affairs.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Table Mountain</strong> – A breathtaking natural landmark in Cape Town offering stunning panoramic views.</p>
          <p><strong>2. Kruger National Park</strong> – One of Africa’s largest game reserves, home to the Big Five (lion, leopard, elephant, rhino, buffalo).</p>
          <p><strong>3. Robben Island</strong> – A UNESCO World Heritage Site known for its historical significance as the prison where Nelson Mandela was held.</p>
          <p><strong>4. Blyde River Canyon</strong> – A stunning natural wonder featuring lush landscapes, waterfalls, and scenic viewpoints.</p>
          <p><strong>5. The Garden Route</strong> – A picturesque coastal drive offering breathtaking scenery, charming towns, and outdoor adventures.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least 30 days beyond the departure date.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least two pages required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to 90 days for many nationalities.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required if arriving from an affected country.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Travelers can bring up to ZAR 25,000 without declaring.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Same limit applies when leaving the country.</p>
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

export default SouthAfricaPage;
