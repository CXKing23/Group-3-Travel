import React from 'react';
import './styles.css';
import SeychellesImage from './images/10.png';

const SeychellesPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Seychelles</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SeychellesImage} alt="Seychelles" />
        <p>
          Seychelles, an archipelago of 115 islands in the Indian Ocean, is a paradise known for its pristine beaches, crystal-clear waters, and lush tropical forests. Home to rare wildlife, coral reefs, and unique granite rock formations, Seychelles offers breathtaking landscapes that captivate travelers from around the world.
        </p>

        <p>
          At Travel Adventure, we want to help you explore Seychelles' hidden gems, from the white sandy beaches of La Digue to the vibrant marine life of Sainte Anne Marine Park. Whether you're seeking relaxation or adventure, Seychelles has something for every traveler.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Seychelles are Seychellois Creole, English, and French. Most locals are multilingual and can communicate well with tourists.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Anse Lazio</strong> – A stunning beach on Praslin Island, famous for its turquoise waters and soft white sand.</p>
          <p><strong>2. La Digue Island</strong> – A serene island with picturesque beaches like Anse Source d'Argent, known for its giant granite boulders.</p>
          <p><strong>3. Vallée de Mai</strong> – A UNESCO World Heritage Site, home to the rare coco de mer palm trees.</p>
          <p><strong>4. Mahé Island</strong> – The largest island, featuring the capital city Victoria, Morne Seychellois National Park, and beautiful beaches.</p>
          <p><strong>5. Aldabra Atoll</strong> – One of the world’s largest coral atolls, home to thousands of giant tortoises.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for the duration of stay.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> No visa required, but visitors must have a valid passport, proof of accommodation, and sufficient funds.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required if arriving from an affected area.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None.</p>
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

export default SeychellesPage;
