import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../components/Header.jsx"
import Home from "./Home.jsx";
import Planner from "./Planner.jsx";
import DestinationPicker from "./DestinationPicker.jsx";
import PackingChecker from "./PackingChecker.jsx";
import Itinerary from "./Itinerary.jsx";
import TravelAdvice from "./TravelAdvice.jsx";
import AboutUs from "./AboutUs.jsx";
import ContactUs from "./ContactUs.jsx";
import Countries from "./Countries.jsx";
import CountryRouter from "./CountryRouter.jsx";
import Footer from "../components/Footer.jsx";
import VisaPage from "./Visa.jsx";




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
        <Route path="/visa" element={<VisaPage />} />


      </Routes>


      <Footer></Footer>
    </Router>

  )
}

export default App;
