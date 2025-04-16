import React from "react";
import "./styles.css";

const ArgentinaTravel = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Argentina</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="norway.png" alt="Norway" />
        <p>Argentina is a land of passion, from the lively streets of Buenos Aires to the breathtaking landscapes of Patagonia. As the birthplace of tango, the country has a rich cultural heritage, blending European influences with Latin American traditions. Its diverse geography offers everything from Andean peaks to lush vineyards and vast pampas.</p>


        <p>At Travel Adventure, we are excited to guide you through Argentina’s stunning natural wonders, vibrant cities, and unique cultural experiences. Whether you're here for the food, music, or adventure, Argentina is a must-visit destination.</p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>The official language of Argentina is Spanish. However, English is widely understood in tourist areas, and Italian and Portuguese are also spoken by some locals.</p>
       
        </div>

        <div class="must-see-attractions">
            <h3>Must-see Attractions</h3>
            <p><strong>1. Buenos Aires</strong> – The vibrant capital city, famous for tango, historic architecture, and a lively nightlife.</p>
            <p><strong>2. Iguazú Falls</strong> – One of the world’s most spectacular waterfalls, located on the border with Brazil.</p>
            <p><strong>3. Patagonia</strong> – A vast region with glaciers, mountains, and incredible wildlife, perfect for adventure seekers.</p>
            <p><strong>4. Mendoza</strong> – Argentina’s wine country, known for its world-class Malbec wines.</p>
            <p><strong>5. Perito Moreno Glacier</strong> – A stunning, ever-moving glacier in Los Glaciares National Park.</p>
        </div>

        <div className="quick-facts">
        <h3>Visa Facts</h3>
            <p><strong>PASSPORT VALIDITY:</strong> Must be valid at time of entry</p>
            <p><strong>BLANK PASSPORT PAGES:</strong> One page required</p>
            <p><strong>TOURIST VISA REQUIRED:</strong> No, for stays under 90 days</p>
            <p><strong>VACCINATIONS:</strong> None required</p>
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

export default ArgentinaTravel;
