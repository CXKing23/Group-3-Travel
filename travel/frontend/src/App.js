import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import DestinationPicker from "./pages/DestinationPicker.jsx";
import PackingChecker from "./pages/PackingChecker";
import Itinerary from "./pages/Itinerary";
import TravelAdvice from "./pages/TravelAdvice";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div>Test
    <Router>
      <header id="main-header">
        <h1>Travel Adventure</h1>
        <div className="logo-container">
          <Link to="/">
            <img src="/logo/logoNoTitle.png" alt="Logo" className="logo" />        
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/planner">Planner</Link></li>
            <li><Link to="/destination-picker">Destination Picker</Link></li>
            <li><Link to="/packing-checker">Packing Checker</Link></li>
            <li><Link to="/itinerary">Itinerary</Link></li>
            <li><Link to="/travel-advice">Travel Advice</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/destination-picker" element={<DestinationPicker />} />
        <Route path="/packing-checker" element={<PackingChecker />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/travel-advice" element={<TravelAdvice />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <footer>
        <p>&copy; 2025 Study Buddy. All rights reserved.</p>
        <p><Link to="/about-us">About Us</Link></p>
        <p><Link to="/contact-us">Customer Service</Link></p>
      </footer>
    </Router>
    </div>
  )
}

export default App;
