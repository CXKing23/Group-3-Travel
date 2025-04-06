import React from "react";
import "../../styles/styles.css"

const SaintVincentPage = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Saint Vincent and the Grenadines</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img
          className="about-image"
          src="images/3.png"
          alt="Saint Vincent and the Grenadines"
        />
        <p>
          Saint Vincent and the Grenadines is a breathtaking Caribbean destination known
          for its unspoiled beaches, crystal-clear waters, and lush green mountains.
          With 32 stunning islands and cays, this tropical paradise offers a mix of
          relaxation and adventure.
        </p>

        <p>
          At Travel Adventure, we bring you the best of Saint Vincent and the Grenadines,
          from its vibrant culture to its pristine nature, ensuring you experience the
          island’s beauty to the fullest.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language is English, but Vincentian Creole is widely spoken among locals.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Tobago Cays</strong> – A group of small uninhabited islands offering
            world-class snorkeling and marine life exploration.
          </p>
          <p>
            <strong>2. La Soufrière Volcano</strong> – A majestic volcano with hiking trails
            that lead to breathtaking views of the island.
          </p>
          <p>
            <strong>3. Bequia</strong> – A charming island known for its beautiful beaches,
            friendly locals, and laid-back vibe.
          </p>
          <p>
            <strong>4. Dark View Falls</strong> – A stunning double waterfall surrounded by
            lush rainforest.
          </p>
          <p>
            <strong>5. Kingstown</strong> – The capital city filled with colonial-era architecture,
            colorful markets, and a lively Caribbean atmosphere.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid at the time of entry.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> At least one blank page required for the entry stamp.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Not required for stays under 30 days for most nationalities.
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

export default SaintVincentPage;
