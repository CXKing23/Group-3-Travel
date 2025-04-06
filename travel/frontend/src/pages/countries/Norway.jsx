import React from "react";
import "../../styles/styles.css"

const NorwayPage = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Norway</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="norway.png" alt="Norway" />
        <p>
          Norway, the land of fjords and the midnight sun, is known for its
          breathtaking natural landscapes, including dramatic mountains, deep
          coastal fjords, and the mesmerizing Northern Lights. This Scandinavian
          country is a dream destination for outdoor enthusiasts and culture
          seekers alike.
        </p>

        <p>
          At Travel Adventure, we want to bring you closer to Norway’s wonders,
          from exploring the charming streets of Bergen to cruising through the
          majestic Geirangerfjord. Whether you're hiking in the Lofoten Islands
          or admiring the Arctic beauty of Tromsø, Norway offers an
          unforgettable experience.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Norway is Norwegian, but English is widely
            spoken, especially in tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Geirangerfjord</strong> – A UNESCO World Heritage Site and
            one of Norway’s most scenic fjords.
          </p>
          <p>
            <strong>2. Northern Lights in Tromsø</strong> – One of the best places
            to witness the spectacular Aurora Borealis.
          </p>
          <p>
            <strong>3. Oslo</strong> – The capital city, home to the Viking Ship
            Museum and modern architecture like the Oslo Opera House.
          </p>
          <p>
            <strong>4. Lofoten Islands</strong> – Stunning landscapes, fishing
            villages, and hiking trails in the Arctic Circle.
          </p>
          <p>
            <strong>5. Preikestolen (Pulpit Rock)</strong> – A breathtaking cliff
            towering 604 meters above the Lysefjord.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid for at least three
            months beyond the date of departure.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> One page required.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Not required for stays under 90
            days for many nationalities.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> None required.
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
      </footer>
    </div>
  );
};

export default NorwayPage;
