import React from "react";
import "./styles.css";
import SaintLuciaImage1 from "./images/2.png";


const SaintLuciaTravel = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Saint Lucia</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img
          className="about-image"
          src={SaintLuciaImage1}
          alt="Saint Lucia"
        />
        <p>
          Saint Lucia is a stunning island nation in the Caribbean, known for its iconic twin Pitons,
          lush rainforests, and pristine beaches. With a mix of adventure, culture, and relaxation,
          this tropical paradise is a dream destination for travelers.
        </p>

        <p>
          At Travel Adventure, we bring you the best of Saint Lucia, from its vibrant local markets
          to its breathtaking natural wonders, ensuring you have an unforgettable experience.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Saint Lucia is English, but many locals also speak
            Saint Lucian Creole, a French-based dialect.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. The Pitons</strong> – The most famous natural landmark in Saint Lucia,
            these twin volcanic peaks offer incredible hiking and scenic views.
          </p>
          <p>
            <strong>2. Sulphur Springs</strong> – The world's only drive-in volcano, where
            visitors can see bubbling hot springs and even take a natural mud bath.
          </p>
          <p>
            <strong>3. Pigeon Island National Park</strong> – A historic site with stunning
            coastal views, military ruins, and excellent hiking trails.
          </p>
          <p>
            <strong>4. Marigot Bay</strong> – A picturesque bay known for its breathtaking
            scenery, luxury resorts, and beautiful yachts.
          </p>
          <p>
            <strong>5. Anse Chastanet Beach</strong> – A beautiful beach with crystal-clear
            waters, ideal for snorkeling and diving.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid at time of entry.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> At least one blank page required for entry stamp.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Not required for stays under 42 days for many nationalities.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> Yellow fever vaccination required if arriving from an affected area.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None.
          </p>
        </div>
      </section>

      <footer>
        <p>
          &copy; 2025 Travel Adventure. All rights reserved.
          <br />
          <a href="aboutus.html">About Us</a>
          <br />
          <a href="contactus.html">Contact Us</a>
          <br />
          <a href="index.html">Home</a>
          <br />
        </p>
      </footer>
    </div>
  );
};

export default SaintLuciaTravel;
