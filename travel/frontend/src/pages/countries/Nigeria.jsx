import React from "react";
import "../../styles/styles.css";

const NigeriaPage = () => {
  return (
    <div>
      <header id="main-header">
        <h1>Nigeria</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src="nigeria.png" alt="Nigeria" />
        <p>
          Nigeria, often called the "Giant of Africa," is a dynamic country rich in culture, music, and history. From bustling cities to lush landscapes and ancient kingdoms, Nigeria offers an exciting and diverse travel experience.
        </p>

        <p>
          At Travel Adventure, we want to take you beyond the headlines and into the heart of Nigeria—exploring the vibrant city life of Lagos, the cultural heritage of Benin City, and the natural beauty of destinations like Obudu Mountain Resort. Nigeria is where tradition meets innovation.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            English is the official language, though over 500 local languages such as Yoruba, Hausa, and Igbo are widely spoken.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p>
            <strong>1. Lagos</strong> – Nigeria’s largest city, known for its beaches, nightlife, and markets.
          </p>
          <p>
            <strong>2. Zuma Rock</strong> – A giant monolith and iconic natural landmark near Abuja.
          </p>
          <p>
            <strong>3. Yankari National Park</strong> – A wildlife reserve featuring elephants, baboons, and natural springs.
          </p>
          <p>
            <strong>4. Nike Art Gallery</strong> – One of the largest art galleries in West Africa, located in Lagos.
          </p>
          <p>
            <strong>5. Olumo Rock</strong> – A historic site offering panoramic views and insight into Yoruba culture.
          </p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p>
            <strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of arrival.
          </p>
          <p>
            <strong>BLANK PASSPORT PAGES:</strong> At least two pages required.
          </p>
          <p>
            <strong>TOURIST VISA REQUIRED:</strong> Yes, for most travelers.
          </p>
          <p>
            <strong>VACCINATIONS:</strong> Yellow fever vaccination is required.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> Declare amounts over $10,000 USD.
          </p>
          <p>
            <strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> Declare amounts over $10,000 USD.
          </p>
        </div>
      </section>

      <footer>
      </footer>
    </div>
  );
};

export default NigeriaPage;
