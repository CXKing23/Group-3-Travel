import React from 'react';
import './styles.css';
import SouthSudanImage from './images/18.png'; // Ensure this path is correct

const SouthSudanPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>South Sudan</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SouthSudanImage} alt="South Sudan" />
        <p>
          South Sudan, the world's youngest country, is rich in culture, history, and natural beauty. Gaining independence
          in 2011, the nation boasts diverse ethnic groups, wildlife reserves, and vast landscapes filled with savannas,
          rivers, and forests.
        </p>

        <p>
          At Travel Adventure, we aim to highlight the unexplored beauty of South Sudan, from the vibrant culture of the
          Dinka and Nuer people to the breathtaking biodiversity of Boma National Park. For travelers seeking adventure and
          discovery, South Sudan offers a unique and raw experience.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of South Sudan is English, but Arabic and local languages such as Dinka, Nuer, and Shilluk
            are widely spoken.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Juba</strong> – The capital city, offering a glimpse into South Sudan’s culture, markets, and history.</p>
          <p><strong>2. Boma National Park</strong> – One of Africa’s largest wildlife reserves, home to elephants, antelopes, and migratory herds.</p>
          <p><strong>3. Nimule National Park</strong> – A beautiful park on the Uganda border, known for hippos, elephants, and scenic river views.</p>
          <p><strong>4. Sudd Wetlands</strong> – One of the world’s largest wetland areas, rich in birdlife and a vital ecosystem for wildlife.</p>
          <p><strong>5. Kidepo Game Reserve</strong> – A remote and untouched park with incredible landscapes and rare wildlife species.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, a visa is required for most travelers.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination is required.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> No official limits, but large sums should be declared.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Same restrictions apply as entry.</p>
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

export default SouthSudanPage;
