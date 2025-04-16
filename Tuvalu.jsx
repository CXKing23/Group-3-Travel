import React from 'react';
import './styles.css';
import TuvaluImage from './images/36.png'; // Adjust the path if needed

const TuvaluPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Tuvalu</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={TuvaluImage} alt="Tuvalu" />
        <p>
          Tuvalu, a remote island nation in the Pacific Ocean, is one of the world’s smallest and least-visited
          countries. Consisting of nine coral atolls, Tuvalu offers stunning turquoise waters, pristine beaches, and a unique Polynesian culture.
          As one of the lowest-lying nations on Earth, Tuvalu faces environmental challenges, making it a must-visit destination before it's too late.
        </p>

        <p>
          At Travel Adventure, we encourage travelers to experience Tuvalu’s peaceful charm, traditional way of life,
          and breathtaking landscapes. From exploring Funafuti Atoll to enjoying the friendly hospitality of the locals,
          Tuvalu is a hidden paradise waiting to be discovered.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Tuvalu are Tuvaluan and English. While Tuvaluan is spoken widely in daily life, English is used for official purposes and in tourism-related interactions.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Funafuti Atoll</strong> – The capital and main island, known for its beautiful lagoon and laid-back lifestyle.</p>
          <p><strong>2. Funafuti Conservation Area</strong> – A marine sanctuary with vibrant coral reefs, sea turtles, and an abundance of marine life.</p>
          <p><strong>3. Nanumea</strong> – One of Tuvalu’s outer islands, featuring stunning beaches and a rich World War II history.</p>
          <p><strong>4. Nanumanga Cave</strong> – An underwater cave with fascinating archeological significance.</p>
          <p><strong>5. Fongafale</strong> – The most populated part of Tuvalu, offering insights into local island life and culture.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Not required for stays up to 30 days.</p>
          <p><strong>VACCINATIONS:</strong> Routine vaccines recommended.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None.</p>
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

export default TuvaluPage;
