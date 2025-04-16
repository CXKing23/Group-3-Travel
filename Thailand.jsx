import React from 'react';
import './styles.css';
import ThailandImage from './images/29.png'; // Make sure this path matches your project setup

const ThailandPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Thailand</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={ThailandImage} alt="Thailand" />
        <p>
          Thailand, known as the "Land of Smiles," is a captivating country filled with rich history, stunning landscapes, and vibrant culture.
          From the bustling streets of Bangkok to the tranquil beaches of Phuket and the lush jungles of Chiang Mai, Thailand offers a perfect blend
          of adventure, relaxation, and cultural exploration. Whether you’re exploring ancient temples, indulging in delicious street food, or
          island hopping in the Andaman Sea, Thailand is a must-visit destination.
        </p>

        <p>
          At Travel Adventure, we bring you the best of Thailand, from its hidden gems to its world-renowned landmarks. Whether you're looking to
          experience the floating markets, witness the grandeur of the Grand Palace, or dive into the vibrant nightlife of Bangkok, Thailand has
          something for everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Thailand is Thai. While Thai is the dominant language, English is widely spoken in tourist areas, hotels,
            and restaurants, making it easier for travelers to navigate.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Bangkok</strong> – The capital city, famous for its vibrant street life, the Grand Palace, floating markets, and incredible food.</p>
          <p><strong>2. Chiang Mai</strong> – A cultural hub in northern Thailand, known for its ancient temples, night markets, and lush mountainous scenery.</p>
          <p><strong>3. Phuket</strong> – Thailand’s largest island, offering pristine beaches, clear waters, and an exciting nightlife scene.</p>
          <p><strong>4. Ayutthaya</strong> – A UNESCO World Heritage Site filled with stunning ruins of an ancient Siamese kingdom.</p>
          <p><strong>5. Krabi</strong> – A tropical paradise with limestone cliffs, crystal-clear waters, and beautiful islands like Railay Beach and Phi Phi Islands.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to 30 days (for most nationalities)</p>
          <p><strong>VACCINATIONS:</strong> None required, but recommended vaccines include hepatitis A and typhoid</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Declare amounts over 50,000 Thai Baht</p>
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

export default ThailandPage;
