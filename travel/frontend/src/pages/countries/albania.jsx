import React from "react";
import "./styles.css";

const AlbaniaTravel = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Albania</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="Albania.png" alt="Albania" />
        <p>
          Albania, located on the Balkan Peninsula, is a country with rich
          history, breathtaking landscapes, and a unique culture. Known for its
          pristine beaches along the Ionian and Adriatic seas, Albania offers a
          mix of beautiful mountains, ancient ruins, and vibrant cities. With a
          history that dates back to the Illyrians and influenced by ancient
          Greece and Rome, Albania's past is as captivating as its natural
          beauty.
        </p>

        <p>
          At Travel Adventure, we're excited to share Albania's hidden gems,
          from the UNESCO World Heritage Sites like Gjirokastër to the stunning
          beaches of Ksamil. Albania is an undiscovered jewel for many
          travelers, and we aim to help you experience its rich culture and
          unspoiled landscapes.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Albania is Albanian. It is spoken by the
            vast majority of the population. While Albanian is the dominant
            language, many Albanians also speak foreign languages such as
            English, Italian, and Greek, especially in tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Berat</strong> – Known as the "town of a thousand
            windows," Berat is famous for its well-preserved Ottoman
            architecture and is a UNESCO World Heritage Site.
          </p>
          <p>
            <strong>2. Gjirokastër</strong> – A historic city with Ottoman-era
            architecture and a UNESCO World Heritage Site. The Gjirokastër
            Castle offers panoramic views of the surrounding mountains.
          </p>
          <p>
            <strong>3. Ksamil</strong> – A beautiful coastal town with stunning
            beaches and crystal-clear waters, perfect for relaxation and water
            sports.
          </p>
          <p>
            <strong>4. Llogara Pass</strong> – A scenic mountain pass offering
            breathtaking views of the Ionian Sea, ideal for nature lovers and
            adventure seekers.
          </p>
          <p>
            <strong>5. Butrint National Park</strong> – A UNESCO World Heritage
            Site with ancient ruins dating back to the Greek, Roman, and
            Byzantine periods, set in a beautiful natural environment.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Valid at time of entry
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> One page required
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Not required for stays under
            180 days
          </p>
          <p>
            <strong>VACCINATIONS:</strong> None
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None
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

export default AlbaniaTravel;
