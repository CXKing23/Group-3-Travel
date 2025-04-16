import React from 'react';
import './styles.css';
import TogoImage from './images/30.png'; // Make sure the image path is correct for your setup

const TogoPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Togo</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={TogoImage} alt="Togo" />
        <p>
          Togo, a small but culturally rich country in West Africa, is known for its diverse landscapes, from palm-lined beaches to rolling savannas and lush mountains.
          The country offers a unique blend of traditional African culture and French colonial influence, making it a fascinating travel destination.
        </p>

        <p>
          At Travel Adventure, we aim to bring you the best of Togo, from its vibrant capital city, Lomé, to the remote villages where ancient traditions are still practiced.
          Whether you’re looking to explore bustling markets, trek through the Togo Mountains, or relax by the Atlantic Ocean, Togo has something for every traveler.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Togo is French. However, many indigenous languages, such as Ewe and Kabiyé, are widely spoken, especially in rural areas.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Lomé</strong> – The capital city, known for its lively markets, including the famous Grand Marché and the fascinating Voodoo Market.</p>
          <p><strong>2. Koutammakou</strong> – A UNESCO World Heritage Site home to the Batammariba people, known for their unique mud-brick houses called "Takienta."</p>
          <p><strong>3. Lake Togo</strong> – A scenic lagoon perfect for boat trips and cultural excursions to Togoville, an important historical town.</p>
          <p><strong>4. Fazao-Malfakassa National Park</strong> – Togo’s largest national park, offering diverse wildlife, hiking trails, and beautiful waterfalls.</p>
          <p><strong>5. Togoville</strong> – A historical town with deep cultural and spiritual significance, known for its connection to voodoo traditions.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond entry</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> One page required</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Required for most travelers, available on arrival or through an embassy</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Declare amounts over a certain limit</p>
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

export default TogoPage;
