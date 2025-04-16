import { Link } from "react-router-dom";

const Footer  = () => {
    return (
        <footer>
          <p>© 2025 Travel Adventure. All rights reserved.</p>
          <p><Link to="/about-us">About Us</Link></p>
          <p><Link to="/contact-us">Customer Service</Link></p>
        </footer>)
}
export default Footer;