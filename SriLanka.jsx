import React from 'react';
import './styles.css';
import SriLankaImage from './images/20.png'; // Ensure the path is correct

const SriLankaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Sri Lanka</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={SriLankaImage} alt="Sri Lanka" />
        <p>
          Sri Lanka, the "Pearl of the Indian Ocean," is a stunning island nation known for its diverse landscapes, rich history,
          and warm hospitality. From golden beaches to lush tea plantations and ancient ruins, Sri Lanka is a paradise for travelers
          seeking adventure and culture.
        </p>

        <p>
          At Travel Adventure, we aim to help you explore Sri Lanka’s hidden gems, from the vibrant city life of Colombo to the
          ancient city of Anuradhapura and the breathtaking views of Ella’s tea fields. Whether you're looking for wildlife safaris,
          historical sites, or tropical beaches, Sri Lanka has something for everyone.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official languages of Sri Lanka are Sinhala and Tamil. English is widely spoken, especially in tourist areas, making
            it easy for travelers to communicate.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Sigiriya</strong> – An ancient rock fortress with breathtaking views and fascinating history.</p>
          <p><strong>2. Temple of the Tooth</strong> – A sacred Buddhist temple in Kandy that houses a relic of the Buddha.</p>
          <p><strong>3. Ella</strong> – A picturesque town surrounded by tea plantations and famous for its scenic train rides.</p>
          <p><strong>4. Yala National Park</strong> – A wildlife sanctuary home to leopards, elephants, and diverse bird species.</p>
          <p><strong>5. Galle Fort</strong> – A UNESCO World Heritage Site featuring colonial architecture and stunning coastal views.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of arrival.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least one page required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, an Electronic Travel Authorization (ETA) is required.</p>
          <p><strong>VACCINATIONS:</strong> Recommended vaccines include Hepatitis A, Typhoid, and routine vaccinations.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Amounts exceeding $15,000 must be declared.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Maximum of 5,000 Sri Lankan Rupees can be taken out of the country.</p>
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

export default SriLankaPage;
