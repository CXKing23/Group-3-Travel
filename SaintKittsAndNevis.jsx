import React from "react";
import "./styles.css";
import SaintImage1 from "./images/1.png";

const SaintKittsAndNevisTravel = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Saint Kitts and Nevis</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img
          className="about-image"
          src={SaintImage1}
          alt="Saint Kitts and Nevis"
        />
        <p>
          Saint Kitts and Nevis is a beautiful two-island nation in the Caribbean,
          known for its stunning beaches, lush rainforests, and rich colonial history.
          Whether you're looking for adventure, relaxation, or cultural experiences,
          this paradise offers something for every traveler.
        </p>

        <p>
          At Travel Adventure, we showcase the best of Saint Kitts and Nevis,
          from historic landmarks like Brimstone Hill Fortress to breathtaking
          beaches and vibrant local culture.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Saint Kitts and Nevis is English, making it easy
            for visitors to communicate with locals.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Brimstone Hill Fortress</strong> – A UNESCO World Heritage Site
            offering incredible views and a deep dive into the island's colonial history.
          </p>
          <p>
            <strong>2. Pinney’s Beach</strong> – One of the most famous beaches in the Caribbean,
            located on Nevis, perfect for relaxation and water activities.
          </p>
          <p>
            <strong>3. St. Kitts Scenic Railway</strong> – A unique train tour that takes
            visitors around the island while showcasing stunning landscapes.
          </p>
          <p>
            <strong>4. Mount Liamuiga</strong> – A dormant volcano offering adventurous
            hiking trails and rewarding panoramic views.
          </p>
          <p>
            <strong>5. Charlestown</strong> – The charming capital of Nevis, known for its
            colonial architecture, hot springs, and vibrant markets.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> At least one blank page required for entry stamp.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Not required for stays under 90 days for many nationalities.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> Yellow fever vaccination required if traveling from an affected area.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> No restrictions.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> No restrictions.
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

export default SaintKittsAndNevisTravel;
