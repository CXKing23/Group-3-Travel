import React from "react";
import "./styles.css";

const SanMarinoTravel = () => {
  return (
    <div>
      <header id="main-header">
        <h1>San Marino</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img
          className="about-image"
          src="images/5.png"
          alt="San Marino"
        />
        <p>
          San Marino, one of the world's smallest and oldest republics, is an
          enchanting microstate surrounded by Italy. Perched atop Monte Titano,
          this picturesque destination is known for its medieval charm,
          stunning views, and fascinating history dating back to 301 AD.
        </p>

        <p>
          At Travel Adventure, we invite you to explore the magic of San Marino.
          From its ancient fortresses to charming cobblestone streets, this tiny
          country offers a unique travel experience filled with history, culture,
          and breathtaking landscapes.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of San Marino is Italian. English is also
            widely spoken in tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Guaita Tower</strong> – The oldest and most famous of San
            Marino’s three towers, offering stunning panoramic views.
          </p>
          <p>
            <strong>2. Palazzo Pubblico</strong> – San Marino’s town hall and the
            seat of government, showcasing beautiful medieval architecture.
          </p>
          <p>
            <strong>3. Mount Titano</strong> – A UNESCO World Heritage Site
            featuring breathtaking trails and medieval towers.
          </p>
          <p>
            <strong>4. Basilica di San Marino</strong> – A neoclassical church
            dedicated to the country’s founder, Saint Marinus.
          </p>
          <p>
            <strong>5. The Three Towers of San Marino</strong> – Iconic medieval
            towers that define the country’s skyline.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid for at least three
            months beyond departure.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> One blank page required for
            entry stamp.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to
            90 days for most nationalities.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> No mandatory vaccinations, but routine
            vaccines are recommended.
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
        </p>
      </footer>
    </div>
  );
};

export default SanMarinoTravel;
