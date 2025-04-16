import React from "react";
import "./styles.css";

const CanadaTravel = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Canada</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="canada.png" alt="Canada" />
        <p>Canada is a vast and diverse country, known for its breathtaking natural landscapes, multicultural cities, and welcoming people. From the rugged Rocky Mountains to the vibrant streets of Toronto and Montreal, Canada offers an unforgettable adventure for every traveler.</p>

       <p>At Travel Adventure, we are here to help you explore Canada’s natural wonders, urban attractions, and rich cultural heritage. Whether you’re seeking outdoor thrills or historical exploration, Canada has something for you.</p>
       
          <div className="quick-facts">
          <h3>Language</h3>
          <p>The official languages of Canada are English and French. English is widely spoken across the country, while French is primarily spoken in Quebec.</p>
        </div>

        <div class="must-see-attractions">
        <h3>Must-see Attractions</h3>
            <p><strong>1. Banff National Park</strong> – A stunning mountain paradise with crystal-clear lakes, glaciers, and scenic hiking trails.</p>
            <p><strong>2. Niagara Falls</strong> – One of the most famous waterfalls in the world, offering breathtaking views and boat tours.</p>
            <p><strong>3. Toronto</strong> – Canada’s largest city, home to the iconic CN Tower, diverse food scenes, and vibrant neighborhoods.</p>
            <p><strong>4. Quebec City</strong> – A charming European-style city with cobblestone streets and rich French heritage.</p>
            <p><strong>5. Vancouver</strong> – A coastal gem with stunning mountains, beaches, and a thriving cultural scene.</p>
        </div>

        <div class="quick-facts">
        <h3>Visa Facts</h3>
            <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the planned departure date</p>
            <p><strong>BLANK PASSPORT PAGES:</strong> One page required</p>
            <p><strong>TOURIST VISA REQUIRED:</strong> Yes, unless eligible for an Electronic Travel Authorization (eTA) or visa-exempt</p> <a href="Visa.html" style="color: #6EC6D9; text-decoration: none;">More Visa Info Here.</a>
            <p><strong>VACCINATIONS:</strong> None required, but recommended vaccines include routine immunizations</p>
            <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> CAD 10,000 or more must be declared</p>
            <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> CAD 10,000 or more must be declared</p>
            <a href="currency-conversion.html" style="color: #6EC6D9; text-decoration: none;">Currency Exchange Calculator</a>
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

export default CanadaTravel;
