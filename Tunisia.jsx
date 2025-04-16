import React from 'react';
import './styles.css';
import TunisiaImage from './images/33.png'; // Make sure the image path is correct

const TunisiaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Tunisia</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={TunisiaImage} alt="Tunisia" />
        <p>
          Tunisia, a North African gem, is known for its stunning Mediterranean coastline,
          ancient ruins, and vibrant culture. As the home of Carthage, a powerful ancient civilization,
          Tunisia offers a fascinating blend of history and modern charm.
        </p>
        <p>
          At Travel Adventure, we are excited to introduce you to Tunisia’s breathtaking Sahara dunes,
          bustling souks, and historic landmarks. Whether you're interested in exploring ancient Roman ruins,
          relaxing by turquoise waters, or indulging in flavorful North African cuisine,
          Tunisia has something to offer every traveler.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Tunisia is Arabic. French is widely spoken due to historical ties,
            and English is increasingly understood in tourist areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. The Ruins of Carthage</strong> – Explore the remnants of the once-great Carthaginian Empire near the capital, Tunis.</p>
          <p><strong>2. Medina of Tunis</strong> – A UNESCO-listed historic district filled with colorful markets, mosques, and traditional architecture.</p>
          <p><strong>3. Sidi Bou Said</strong> – A picturesque town known for its whitewashed buildings with blue doors overlooking the Mediterranean.</p>
          <p><strong>4. Sahara Desert</strong> – Experience camel treks and stunning sand dunes in the vast Tunisian Sahara.</p>
          <p><strong>5. El Djem Amphitheater</strong> – A remarkably preserved Roman colosseum that once hosted gladiator battles.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays under 90 days for most travelers</p>
          <p><strong>VACCINATIONS:</strong> Routine vaccines recommended; yellow fever vaccination required if arriving from an infected area</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Cannot export Tunisian dinars</p>
        </div>
      </section>

      <footer>
        <p>
          &copy; 2025 Travel Adventure. All rights reserved.<br />
          <a href="aboutus.html">About Us</a><br />
          <a href="contactus.html">Contact Us</a><br />
          <a href="index.html">Home</a><br />
        </p>
      </footer>
    </div>
  );
};

export default TunisiaPage;
