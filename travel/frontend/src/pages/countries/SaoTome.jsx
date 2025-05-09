import React from 'react';
import "../../styles/styles.css"

const SaoTomePage = () => {
  return (
    <div>
      <header>
        <a href="index.html">Travel Adventure</a>
      </header>

      <header id="main-header">
        <h1>São Tomé and Príncipe</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="images/6.png" alt="São Tomé and Príncipe" />
        <p>
          São Tomé and Príncipe, a small island nation in the Gulf of Guinea, is a hidden paradise
          known for its lush rainforests, volcanic landscapes, and pristine beaches. This former
          Portuguese colony is one of Africa's most peaceful and least-explored destinations,
          offering an authentic and tranquil travel experience.
        </p>

        <p>
          At Travel Adventure, we bring you the best of São Tomé and Príncipe, from its cocoa
          plantations to its breathtaking waterfalls and crystal-clear waters. Whether you're
          looking for adventure or relaxation, this tropical gem has something for everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of São Tomé and Príncipe is Portuguese. Foró, a local Creole
            language, is also widely spoken.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Pico Cão Grande</strong> – A dramatic volcanic peak that rises sharply from the rainforest, a must-see for hikers and nature lovers.</p>
          <p><strong>2. Obo National Park</strong> – A haven of biodiversity featuring exotic wildlife, lush forests, and scenic trails.</p>
          <p><strong>3. Praia Banana</strong> – A beautiful, crescent-shaped beach with golden sand and crystal-clear waters, perfect for relaxation.</p>
          <p><strong>4. Roça Sundy</strong> – A historic cocoa plantation that played a role in Einstein’s Theory of Relativity experiment.</p>
          <p><strong>5. São Tomé City</strong> – The charming capital city with colonial architecture, bustling markets, and vibrant culture.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least two pages required for entry and exit stamps.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Required for most travelers, but visa-free for some nationalities.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required if arriving from an infected area.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Travel Adventure. All rights reserved.<br />
          <a href="aboutus.html">About Us</a><br />
          <a href="contactus.html">Contact Us</a><br />
          <a href="index.html">Home</a><br />
        </p>
      </footer>
    </div>
  );
};

export default SaoTomePage;
