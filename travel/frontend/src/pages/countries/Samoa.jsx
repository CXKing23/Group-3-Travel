import React from "react";
import "../../styles/styles.css"

const SamoaPage = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Samoa</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img
          className="about-image"
          src="images/4.png"
          alt="Samoa"
        />
        <p>
          Samoa, a beautiful Polynesian island nation in the South Pacific, is known for
          its stunning landscapes, pristine beaches, and rich cultural heritage. The
          islands of Upolu and Savai'i offer breathtaking waterfalls, lush rainforests,
          and vibrant coral reefs.
        </p>

        <p>
          At Travel Adventure, we invite you to explore the warmth of Samoan hospitality,
          traditional villages, and the natural wonders of this paradise. Whether you're
          looking for relaxation or adventure, Samoa has something for everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Samoa are Samoan and English. Samoan is widely
            spoken among locals, while English is commonly used in business and tourism.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. To Sua Ocean Trench</strong> – A stunning natural swimming hole
            surrounded by lush greenery.
          </p>
          <p>
            <strong>2. Lalomanu Beach</strong> – One of the most beautiful beaches in the
            world, offering crystal-clear waters and soft white sand.
          </p>
          <p>
            <strong>3. Papapapaitai Falls</strong> – A breathtaking waterfall located in
            the highlands of Upolu.
          </p>
          <p>
            <strong>4. Robert Louis Stevenson Museum</strong> – The former home of the
            famous author, now a museum showcasing his life and work.
          </p>
          <p>
            <strong>5. Savai'i Blowholes</strong> – Spectacular ocean blowholes that shoot
            water high into the air.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months
            beyond the date of entry.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> One blank page required for entry stamp.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to 60 days
            for most nationalities.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> No mandatory vaccinations, but routine vaccines
            are recommended.
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

export default Page;
