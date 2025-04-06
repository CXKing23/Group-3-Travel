import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import DestinationPicker from "./pages/DestinationPicker.jsx";
import PackingChecker from "./pages/PackingChecker";
import Itinerary from "./pages/Itinerary";
import TravelAdvice from "./pages/TravelAdvice";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Countries from "./pages/Countries.jsx";
import CountryRouter from "./pages/CountryRouter.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/destination-picker" element={<DestinationPicker />} />
        <Route path="/packing-checker" element={<PackingChecker />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/travel-advice" element={<TravelAdvice />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
      <CountryRouter></CountryRouter>
      <Footer></Footer>
    </Router>

  )
}

export default App;
