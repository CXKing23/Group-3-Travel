import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar"; // Import NavBar component

const Header = () => {
    const location = useLocation();
  return (
    <header id="main-header">
      <h1><Link to="/" className={location.pathname === "/" ? "active" : ""}>Travel Adventure</Link></h1>
      <div className="logo-container">
        <Link to="/">
          <img src="/logo/logoNoTitle.png" alt="Logo" className="logo" />        
        </Link>
      </div>
      <NavBar /> 
    </header>
  );
};

export default Header;