import React from 'react';
import './styles.css';
import ZambiaImage from './images/49.png'; // Adjust the path if needed

const ZambiaPage = () => {
  return (
    <div>
      <header>
      </header>

      <header id="main-header">
        <h1>Zambia</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <img className="about-image" src={ZambiaImage} alt="Zambia" />
        <p>
          Zambia, located in southern Africa, is a country renowned for its stunning natural landscapes, diverse wildlife, and rich cultural heritage. With vast national parks, majestic waterfalls, and welcoming locals, Zambia is a top destination for adventure seekers and nature lovers.
        </p>

        <p>
          At Travel Adventure, we want to showcase Zambia’s incredible attractions, from the world-famous Victoria Falls to the wildlife-rich South Luangwa National Park. Whether you're looking for an exhilarating safari or a peaceful escape in nature, Zambia offers an unforgettable experience.
        </p>

        <div className="quick-facts">
          <h3>Language</h3>
          <p>
            The official language of Zambia is English. However, the country is home to over 70 indigenous languages, including Bemba, Nyanja, and Tonga, which are widely spoken across different regions.
          </p>
        </div>

        <div className="must-see-attractions">
          <h3>Must-see Attractions</h3>
          <p><strong>1. Victoria Falls</strong> – One of the largest and most breathtaking waterfalls in the world, located on the Zambia-Zimbabwe border.</p>
          <p><strong>2. South Luangwa National Park</strong> – A premier safari destination known for its abundant wildlife and walking safaris.</p>
          <p><strong>3. Lower Zambezi National Park</strong> – Offers thrilling canoe safaris and incredible views of the Zambezi River.</p>
          <p><strong>4. Kafue National Park</strong> – Zambia’s largest national park, home to diverse wildlife and scenic landscapes.</p>
          <p><strong>5. Lake Kariba</strong> – A massive man-made lake with opportunities for fishing, boating, and stunning sunset views.</p>
        </div>

        <div className="quick-facts">
          <h3>Visa Facts</h3>
          <p><strong>PASSPORT VALIDITY:</strong> Must be valid for at least six months beyond the date of entry.</p>
          <p><strong>BLANK PASSPORT PAGES:</strong> At least two blank pages required for entry stamp.</p>
          <p><strong>TOURIST VISA REQUIRED:</strong> Yes, but visas are available on arrival for most nationalities.</p>
          <p><strong>VACCINATIONS:</strong> Yellow fever vaccination required if traveling from an affected area; malaria prophylaxis is recommended.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR ENTRY:</strong> None officially, but large amounts must be declared.</p>
          <p><strong>CURRENCY RESTRICTIONS FOR EXIT:</strong> None officially, but large amounts must be declared.</p>
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

export default ZambiaPage;
