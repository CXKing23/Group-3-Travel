import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx";
import Planner from "./pages/Planner.jsx";
import DestinationPicker from "./pages/DestinationPicker.jsx";
import PackingChecker from "./pages/PackingChecker.jsx";
import Itinerary from "./pages/Itinerary.jsx";
import TravelAdvice from "./pages/TravelAdvice.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Countries from "./pages/Countries.jsx";
import CountryRouter from "./pages/CountryRouter.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    
    <Router>
      <Header></Header>
      <CountryRouter></CountryRouter>
      <Routes>
        <Route path="/planner" element={<Planner />} />
        <Route path="/destination-picker" element={<DestinationPicker />} />
        <Route path="/packing-checker" element={<PackingChecker />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/travel-advice" element={<TravelAdvice />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/*" element={<Home />} />
      </Routes>


      <Footer></Footer>
    </Router>

  )
}

export default App;
