import React from 'react';
import './styles.css';
import UgandaImage from './images/39.png'; // Adjust the path if needed

const UgandaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Uganda</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={UgandaImage} alt="Uganda" />
        <p>
          Uganda, known as the "Pearl of Africa," is a land of breathtaking natural beauty, diverse wildlife, and rich cultural heritage. 
          Located in East Africa, Uganda is home to the source of the Nile River, lush green landscapes, and incredible wildlife, including the endangered mountain gorillas.
        </p>

        <p>
          At Travel Adventure, we are excited to introduce you to Uganda’s incredible landscapes, from the misty mountains of Bwindi Impenetrable Forest 
          to the vibrant city life of Kampala. Whether you're seeking adventure, wildlife safaris, or cultural experiences, Uganda has something for every traveler.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Uganda are English and Swahili. Luganda and other regional languages are widely spoken by the local population.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Bwindi Impenetrable National Park</strong> – Home to nearly half of the world’s mountain gorillas, offering unforgettable trekking experiences.</p>
          <p><strong>2. Queen Elizabeth National Park</strong> – A famous safari destination known for its tree-climbing lions, hippos, and diverse wildlife.</p>
          <p><strong>3. Murchison Falls National Park</strong> – Witness the powerful waterfalls on the Nile and spot elephants, giraffes, and crocodiles.</p>
          <p><strong>4. Lake Victoria</strong> – The largest lake in Africa, offering fishing, boat tours, and beautiful scenery.</p>
          <p><strong>5. Jinja - The Source of the Nile</strong> – A paradise for adventure lovers with white-water rafting, kayaking, and bungee jumping.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months from the date of arrival.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one blank page required.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, a visa is required for most travelers; can be obtained online or on arrival.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination is required for entry.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Amounts exceeding $10,000 must be declared.</p>
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

export default UgandaPage;
