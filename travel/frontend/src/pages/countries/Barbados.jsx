import React from "react";
import "./styles.css";

const BarbadosTravel = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Barbados</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="barbados.png" alt="Barbados" />
        <p>Barbados, a gem of the Caribbean, is known for its white sandy beaches, crystal-clear waters, and vibrant culture. Whether you're looking to relax on the shore, explore historic sites, or enjoy world-famous rum, Barbados has something for every traveler.</p>

        <p>At Travel Adventure, we are here to guide you through the island’s stunning landscapes, rich history, and exciting activities. From snorkeling in turquoise waters to discovering colonial architecture, Barbados is a dream destination.</p>
        <div className="quick-facts">
          <h3>Language</h3>
          <p>The official language of Barbados is English, with a local dialect known as Bajan spoken among locals.</p>
        </div>

        <div class="must-see-attractions">
        <h3>Must-see Attractions</h3>
            <p><strong>1. Harrison’s Cave</strong> – A magnificent limestone cave system with stunning stalactites and underground streams.</p>
            <p><strong>2. Carlisle Bay</strong> – A picturesque beach with clear waters, shipwrecks for snorkeling, and rich marine life.</p>
            <p><strong>3. Bridgetown</strong> – The capital city, rich in history and home to UNESCO-listed sites.</p>
            <p><strong>4. St. Nicholas Abbey</strong> – A historic plantation house and rum distillery offering a glimpse into Barbados’ colonial past.</p>
            <p><strong>5. Animal Flower Cave</strong> – A sea cave with natural rock pools and breathtaking ocean views.</p>
        </div>

        <div class="quick-facts">
            <h3>Visa Facts</h3>
            <p><strong>PASSPORT VALIDITY:</strong> Must be valid for the duration of your stay</p>
            <p><strong>BLANK PASSPORT PAGES:</strong> One page required</p>
            <p><strong>TOURIST VISA REQUIRED:</strong> No, for stays under 90 days</p>
            <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required if arriving from an infected area</p>
            <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None</p>
            <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None</p>
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

export default BarbadosTravel;
