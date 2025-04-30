import { Link } from "react-router-dom";
import Header from "../components/Header"; 

const Home = () => {
  return (
    <div>

      <section>
        <h2 id="headerExplore">Explore Destinations</h2>
        <p><Link to="/countries">Click Here</Link></p>
        <img className="about-image" src="https://worldinparis.com/wp-content/uploads/2018/06/paris-travel-planning.jpg" alt="Explore Destinations" />
        <p>
          Welcome to Travel Adventure, your guide to thrilling journeys around the world. Discover new cultures, breathtaking landscapes, 
          and unforgettable experiences. Embark on a journey to mesmerizing destinations. From bustling cities to serene beaches, our curated list has something for every traveler.
        </p>
      </section>

      <section>
        <h2>Planner</h2>
        <Link to="/planner">Click Here</Link>
        <p>Create a planner:
          <br /> A planner becomes your ally in this journey by helping you set clear goals, outline actionable steps, and stay accountable to your aspirations.
        </p>
        <img className="about-image" src="https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Travel Planner" />
      </section>

      <section>
        <h2>Pick a Destination</h2>
        <Link to="/destination-picker">Click Here</Link>
        <p>Fill out this short quiz to find out your destination</p>
        <img className="about-image" src="https://www.savingyoudinero.com/wp-content/uploads/2020/01/Printable-Travel-Planner.jpeg" alt="Pick a Destination" />
      </section>

      <section>
  <h2>Visas</h2>
  <Link to="/visa">Click Here</Link>
  <p>Learn more about Visas here</p>
  <img className="about-image" src="visa.jpeg" alt="Visa" />
</section>


      <section>
        <h2>Packing</h2>
        <Link to="/packing-checker">Click Here</Link>
        <p>Fill out this checklist of items to pack</p>
        <img className="about-image" src="https://cdn.packhacker.com/2022/06/d78f3bdf-vpl-flatlay.jpg?auto=compress&auto=format&w=1050&h=700&fit=crop" alt="Packing" />
      </section>

      <section>
        <h2>Travel Budget Estimator</h2>
        <Link to="/itinerary">Click Here</Link>
        <p>Calculate how much money you will spend on your adventure.</p>
        <img className="about-image" src="https://blog.arkieva.com/wp-content/uploads/2015/11/ROIcalc.jpg" alt="Travel Budget Estimator" />
      </section>

      <section>
        <h2>Best Time To Travel to Your Destination</h2>
        <Link to="/travel-advice">Click Here</Link>
        <p>Gain insightful guidance on the best season to visit your chosen destination.</p>
        <img className="about-image" src="https://images.saymedia-content.com/.image/ar_16:9,c_fill,cs_srgb,fl_progressive,q_auto:eco,w_1200/MTg3MzY3NTczNTUyMTEzMjEy/benefits-of-traveling-abroad.jpg" alt="Travel Advice" />
      </section>
    </div>
  );
}

export default Home;
