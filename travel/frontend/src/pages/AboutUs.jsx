import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/AboutUs.css"; // Import external CSS

const AboutUs  = () => {
    return (
    <div>
        <Header></Header>
        <header id="main-header">
        
        <h1>About Us</h1>
        
        
    </header>
    
        <h2>Our Story</h2>
        <img class="about-image" src="https://www.travel-intel.com/wp-content/uploads/2022/07/Myanmar.jpg" alt="About Us"/>
        <p>Welcome to Travel Adventure, where every journey is a story waiting to be told. Our passion for exploration and discovery has led us to create a platform that inspires and guides fellow travelers on their adventures.</p>

        <h2>Our Mission</h2>
        <p>At Travel Adventure, we are dedicated to providing a seamless travel experience. Whether you're a seasoned globetrotter or a first-time explorer, our mission is to help you discover new destinations, cultures, and experiences that will leave you with lasting memories.</p>
    


    </div>)
}
export default AboutUs;